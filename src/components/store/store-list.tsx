'use client'

import React, { useState, useEffect } from 'react';
import { 
  Typography, 
  Container, 
  MenuItem, 
  FormControl,
  Box,
  Dialog,
  DialogContent,
  useMediaQuery,
  Link
} from '@mui/material';
import { Wrapper } from "@googlemaps/react-wrapper";
import axios from 'axios';
import { prefectures } from 'src/data/prefectures';
import { prefsWithCities } from 'src/data/prefs-with-cities';
import { City } from '@/types/city';
import { Store } from '@/types/store';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Image from 'next/image';
import Header from 'src/components/header';
import Footer from 'src/components/footer';
import StoreCard from './store-card';
import { LoadScript } from '@react-google-maps/api';
import { getDeliveryServiceDataById } from '@/utils/theme/delivery-service-utils';
import HoverButton from 'src/components/svg/button/trigger/hover-button';
import { formatPhoneNumber } from '@/utils/format-utils';
import { CustomSelect } from 'src/components/styled/styled-component';
import { MulipleMarkersMap } from 'src/components/map/multiple-markers-map';
import { MarkerConfig } from '@/types/map-marker';
import { chunkArray } from '@/utils/array-utils';
import MobileOrderIcon from '@/components/svg/icon/delivery/mobile-order';
import BulkOrderIcon from '@/components/svg/icon/delivery/bulk-order';
import CoinLaundryIcon from '@/components/svg/icon/delivery/coin-laundry';
import UberEatsIcon from '@/components/svg/icon/delivery/uber-eats';
import DemaeKanIcon from '@/components/svg/icon/delivery/demae-kan';
import WoltIcon from '@/components/svg/icon/delivery/wolt';
import { Service } from '@/types/delivery-service';
import DownArrowIcon from 'src/components/svg/logo/main/down-arrow-icon';
import SmallStoreCard from './small-store-card';
import TopLabel from 'src/components/menu/top-label-container';
import LoadingScreen from 'src/components/map/loading-screen';

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_CLOUD_API_KEY;

const theme = createTheme({
  palette: {
    background: {
      default: '#F7F0E8',
    },
    primary: {
      main: '#ff0000',
    },
    secondary: {
      main: '#008000',
    },
  },
})

const logoComponents = {
  MobileOrderIcon,
  BulkOrderIcon,
  CoinLaundryIcon,
  UberEatsIcon,
  DemaeKanIcon,
  WoltIcon,
};

export default function StoreList() {
  const [selectedPrefCode, setSelectedPrefCode] = useState<number>(0);
  const [selectedCityCode, setSelectedCityCode] = useState<number>(0);
  const [stores, setStores] = useState<Array<Store>>([]);
  const [citiesList, setCitiesList] = useState<(Array<City> | undefined)>([]);
  const [markers, setMarkers] = useState<Array<MarkerConfig>>([]);
  const [mapCenter, setMapCenter] = useState<any>(undefined);
  const [searched, setSearched] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const isSubMdUp = useMediaQuery('(min-width:768px)');
  const isMobile = useMediaQuery('(max-width:393px)');


  const handleSearchLocation = async () => {
    try {
      if (navigator.geolocation) {
        setLoading(true);
        setIsOpen(true);
        await navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            setMapCenter({ lat: lat, lng: lng })
          },
          (error) => {
            console.error("Error: " + error.message);
            alert("位置情報を取得できませんでした。");
          }
        );
      } else {
        alert("お使いのブラウザは位置情報をサポートしていません。");
      }
    } catch (error) {
      console.log('位置情報の取得に失敗しました', error);
    } finally {
      setIsOpen(false);
    }
  };

  const fetchStores = async (prefCode: number, cityCode: number) => {
    try {
      const res = await axios.get('/api/store', {
        params: cityCode === 0 ? { prefCode: prefCode } : { cityCode: cityCode }
      });
      const storeData = res.data;

      setStores(storeData);

      const markersData = storeData.map((store: Store) => ({
        zoom: cityCode === 0 ? 8 : 10,
        position: store.location,
        title: store.name
      })) as MarkerConfig[];

      setMarkers(markersData);

      return storeData;
    } catch (error) {
      console.error('店舗のフェッチに失敗しました:', error);
    }
  }

  const fetchChayamachi = async () => {
    try {
      const res = await axios.get('/api/store', { params: { id: 'FJvyuBDyCPdzPozkGfg8' } });
      const storeData = res.data;

      await setStores([storeData]);

      const cityCenter = { lat: 34.7080901, lng: 135.4982747 };
      const markersData = [{
        zoom: 10,
        position: cityCenter,
        title: '茶屋町店'
      }] as MarkerConfig[];

      await setMapCenter(cityCenter);
      await setMarkers(markersData);

      const prefWithCities = prefsWithCities.find((pref) => pref.code === 27);
      const cities = prefWithCities?.cities;

      await setSelectedPrefCode(27);
      await setCitiesList(cities!);
      await setSelectedCityCode(27100);
    } catch (error) {
      console.error('店舗のフェッチに失敗しました:', error);
    }
  }

  const getQueryParam = (param: string) : string|null => {
    const windowLocation = typeof window !== 'undefined' ? window.location.search : null;
    const urlParams = windowLocation ? new URLSearchParams(windowLocation) : null;
    const result = urlParams ? urlParams.get(param) : null;

    return result;
  }

  // ソースパラメータを確認
  const source = getQueryParam('source');

  useEffect(() => {
    if (source === 'qr') {
      handleSearchLocation();
      // ここでトラッキングや分析のためのコードを追加（例: Google Analytics にイベントを送信
      // ga('send', 'event', 'User Source', 'QR Code');
    } else {
      fetchChayamachi();
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      {loading && <LoadingScreen />}
      <Box sx={{ minHeight: '100%', bgcolor: 'background.default' }}>
        <Header/>
        <TopLabel/>
        <Container
          sx={{
            width: '100%',
            marginTop: {xs: '50px', md: '100px'},
            marginBottom: '200px',
            minWidth: '90%'
          }}
        >
          <Box
            className="title-wrapper flex justify-center items-center"
            sx={{marginBottom: '50px'}}
          >
            <Image
              src={'/images/store-title.png'}
              alt={'Menu Title'}
              width={isMdUp ? 274.95 : 207}
              height={isMdUp ? 72.98 : 55}
            />
          </Box>
          <Box
            className="flex justify-center"
            sx={{
              '@media (min-width: 1400px)': {
                width: '1280px',
              },
              '@media (max-width: 1400px)': {
                width: 'unset',
              },
              paddingRight: {lg: 0},
              margin: '0 auto 27px auto',
            }}
          >
            <Box
              className="flex justify-center"
              sx={{width: '100%'}}
            >
              <Box
                sx={{
                  width: {md: '480px', lg: '766px'},
                  marginRight: {md: '30px', lg: '60px'}
                }}
              />
              <Box sx={{ margin: {lg: '0 auto'} }}>
                <HoverButton
                  className="shrink-0 w-full md:w-auto"
                  onClick={async () => {
                    await handleSearchLocation();
                    await setSelectedPrefCode(0);
                    await setSelectedCityCode(0);
                    await setStores([]);
                    await setMarkers([]);
                    setLoading(false);
                  }}
                  text="現在地から探す"
                />
              </Box>
            </Box>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} maxWidth="md" fullWidth>
              <DialogContent>
                {mapCenter && (<LoadScript googleMapsApiKey={apiKey!}/>)}
              </DialogContent>
            </Dialog>
          </Box>
          <Box
            className="map-wrapper"
            sx={{
              width: {xs: '100%', md: '746px', lg: '100%'},
              maxWidth:  {sm: '600px', md: '1280px'},
              margin: '0 auto 100px auto',
              '& > div': {  // Wrapper に直接渡す
                minHeight: {xs: '353px !important', lg: '600px !important'},
              }
            }}
          >
            <Wrapper apiKey={apiKey!} version="beta" libraries={["marker"]}>
              {mapCenter && mapCenter.lat !== undefined && mapCenter.lng !== undefined &&
                <MulipleMarkersMap markers={markers} mapCenter={mapCenter} />
              }
            </Wrapper>
          </Box>
          <Box
            className="search-by-area-box"
            sx={{
              display: 'flex',
              '@media (max-width: 1480px)': {
                justifyContent: { xs: 'center', lg: 'start' },
              },
              '@media (min-width: 1480px)': {
                justifyContent: 'center',
              },
            }}
          >
            <Box
              className="flex-col"
              sx={{
                width: isMobile ? '100%' : 'unset',
                '@media (min-width: 1400px)': {
                  minWidth: '1280px'
                },
              }}
            >
              <Box
                className="retrieval-title-wrapper"
                sx={{marginBottom: {xs: '20px', md: 'unset'}}}
              >
                <Typography
                  className="text-black"
                  variant="h5"
                  component="h2"
                  gutterBottom
                  sx={{ textAlign: {sm: 'center', md: 'unset'} }}
                >
                  エリアから探す
                </Typography>
              </Box>
              <Box
                className="retrieval-funtions-wrapper"
                sx={{margin: {md: '0 10px', lg: 'unset'}}}
              >
                <Box
                  className="flex justify-between items-center"
                  sx={{
                    marginBottom: '40px',
                    flexDirection: {xs: 'column', md: 'unset'},
                    alignItems: {xs: 'center'}
                  }}
                >
                  <Box
                    sx={{
                      width: isMobile ? '100%' : 'unset',
                      marginBottom: {xs: '20px', md: 0},
                      flexDirection: {xs: 'column', md: 'unset'}
                    }}
                    className="flex justify-between"
                  >
                    <Box
                      sx={{
                        marginBottom: {xs: '10px', sm: '20px', md: 0},
                        marginRight: {xs: 0, md: '20px', lg: '60px'}
                      }}
                    >
                      <FormControl fullWidth>
                        <CustomSelect
                          sx={{
                            width: isMobile ? '100%' : // スマホサイズでは100%
                              isMdUp ? (isLgUp ? '353px' : '230px') : '353px', // md-lgであれば230px, それ以外353px
                            height: '40px',
                            borderRadius: '10px'
                          }}
                          className="bg-white"
                          value={selectedPrefCode}
                          onChange={(e: any) => {
                            setSelectedPrefCode(e.target.value);
                            setSelectedCityCode(0);
                            setSearched(false);

                            const prefWithCities = prefsWithCities.find((pref) => pref.code === e.target.value);
                            const cities = prefWithCities?.cities;
                            setCitiesList(cities!);

                            if (e.target.value !== 0) {
                              const prefLocation = prefectures?.find((pref) => pref.code === e.target.value)?.location;
                              setMapCenter(prefLocation);
                            }
                          }}
                          IconComponent={() => <DownArrowIcon className="mr-4"/>}
                        >
                          <MenuItem key='pref_00' value={0}>
                            <span className="text-[#C4C4C6]">都道府県を選択</span>
                          </MenuItem>
                          {prefectures.map(pref => (
                            <MenuItem
                              key={`pref_${String(pref.code).padStart(2,'0')}`}
                              value={pref.code}
                            >
                              {pref.name}
                            </MenuItem>
                          ))}
                        </CustomSelect>
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl fullWidth>
                        <CustomSelect
                          sx={{
                            width: isMobile ? '100%' : // スマホサイズでは100%
                              isMdUp ? (isLgUp ? '353px' : '230px') : '353px', // md-lgであれば300px, それ以外353px
                            height: '40px',
                            borderRadius: '10px'
                          }}
                          className="bg-white"
                          value={selectedCityCode}
                          onChange={(e) => {
                            setSelectedCityCode(e.target.value as number);
                            setSearched(false);

                            if (e.target.value !== 0) {
                              const selectedCityCenter = citiesList?.find((city) => city.code === String(e.target.value))?.location;
                              setMapCenter(selectedCityCenter);
                            }
                          }}
                          IconComponent={() => <DownArrowIcon className="mr-4"/>}
                        >
                          <MenuItem key='pref_00' value={0}>
                            <span className="text-[#C4C4C6]">市区町村を選択</span>
                          </MenuItem>
                          {citiesList && citiesList.length > 0 &&
                            citiesList.map((city: {code: string, name: string}) => (
                              <MenuItem
                                key={`city_${city.code}`}
                                value={city.code}
                              >
                                {city.name}
                              </MenuItem>
                          ))}
                        </CustomSelect>
                      </FormControl>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: {xs: 'center'},
                      marginLeft: {xs : '0px', md: '30px', lg: '60px'},
                    }}
                  >
                    <HoverButton
                      className="shrink-0 w-full md:w-auto"
                      onClick={() => {
                        fetchStores(selectedPrefCode, selectedCityCode);
                        setSearched(true); // selectedCityCode === 0 の場合は、selectedPrefCode で検索できるようにする
                      }}
                      text="検索"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: {xs: 'center', md: 'start'},
              width: {md: '746px', lg: '100%'},
              '@media (min-width: 1480px)': {
                width: '1280px',
              },
              margin: '0 auto',
            }}
          >
            <Box
              className="store-list-container"
              sx={{
                margin: isMobile ? '0 auto' : 'unset',
                display: 'flex',
                '@media (max-width: 1480px)': {
                  justifyContent: { xs: 'center', lg: 'start' },
                },
                '@media (min-width: 1480px)': {
                  justifyContent: 'center',
                },
              }}
            >
              <Box
                className="flex-col"
                sx={{
                  width: isMobile ? '100%' : 'unset',
                  maxWidth: '1280px'
                }}
              >
                <Box className="title-wrapper">
                  {stores && stores.length > 0 && (
                    <Typography
                      sx={{
                        margin: {xs: '0 10px 20px 10px', sm: '0 auto 20px auto'},
                        textAlign: {sm: 'center', md: 'unset'},
                      }}
                      className="text-black items-center align-center"
                      variant="h5"
                      gutterBottom
                    >
                      店舗一覧
                    </Typography>
                  )}
                </Box>
                <Box
                  className="max-w-full store-list-card-wrapper justify-center"
                  sx={{
                    width: '100%', // (630px * 2) + (20px) = 1280px
                    margin: '0 auto',
                  }}
                >
                  <Box className="flex-col">
                    {stores && stores.length > 0 &&
                      chunkArray(stores, isSubMdUp ? 2 : 1).map((chunk, rowIndex) => (
                        <Box
                          key={`chunk_wrapper_0${rowIndex}`}
                          sx={{
                            display: 'flex',
                            '@media (max-width: 393px)': {
                              justifyContent: 'center'
                            },
                            '@media (min-width: 1200px) and (max-width: 1400px)': {
                              flexWrap: 'wrap', // 1200px-1280pxの範囲でwrapする
                              justifyContent: 'start'
                            },
                            maxWidth: '100%',
                            position: 'relative',
                          }}
                        >
                          {
                            chunk.map((store, index) => (
                              <Link
                                key={`card_link_0${index}`}
                                className="text-decoration-none"
                                sx={{
                                  marginRight: {xs: 0, lg: '20px'},
                                  mx: {xs: '10px', lg: 0},
                                  textDecoration: 'none',
                                  '&:hover': {
                                    textDecoration: 'none',
                                  },
                                  marginBottom: {xs: '10px', lg: '24px'},
                                }}
                                href={`/store/${store.id}`}
                              >
                                {
                                  isLgUp ? (
                                    <StoreCard
                                      width={630} // 1440/1512 x 630 = 600
                                      height={138} // 131.4
                                    >
                                      <Box className="text-black flex" sx={{ flexDirection: 'column' }}>
                                        <Typography sx={{fontWeight: 'bold', fontSize: {xs: '14px', sm: '20px'}}} gutterBottom>
                                          {store.name}
                                        </Typography>
                                        <Box className="mx-auto flex flex-wrap justify-between w-full">
                                          <Box>
                                            {/* 左側のコンテンツ（変更なし） */}
                                            <Box display="flex" alignItems="flex-start" mb={1}>
                                              <Typography sx={{ fontSize: '14px' }}>{store.address}</Typography>
                                            </Box>
                                            <Box className="flex items-center align-center justify-between">
                                              <Box>
                                                <Box display="flex" alignItems="flex-start">
                                                  <Typography sx={{ fontSize: '14px' }}>
                                                    <span className="font-bold">営業時間：</span>
                                                    {store.businessHours}
                                                  </Typography>
                                                </Box>
                                                <Box display="flex" alignItems="flex-start">
                                                  <Typography sx={{ fontSize: '14px' }}>
                                                    <span className="font-bold">電話番号：</span>
                                                    {formatPhoneNumber(store.phone)}
                                                  </Typography>
                                                </Box>
                                              </Box>
                                              {isLgUp &&
                                                <Box>
                                                  <Typography sx={{ mt: -2.25, pl: 4, fontSize: '14px' }}>
                                                    <span className="font-bold">昼の宅配：</span>
                                                    {store.deliveryHours}
                                                  </Typography>
                                                </Box>
                                              }
                                            </Box>
                                          </Box>
                                          <Box  
                                            sx={{
                                              position: 'absolute',
                                              top: 18,
                                              right: -40,
                                              flexShrink: 0
                                            }}
                                          >
                                            <Box sx={{gap: 1}}>
                                              {store?.deliveryServices && store.deliveryServices.length > 0 &&
                                                chunkArray( // アイコンの存在するデリバリーサービスのみに絞る
                                                  store.deliveryServices
                                                    .filter((deliveryServiceId: number) => [3,4,5,6].includes(deliveryServiceId)),
                                                  6
                                                ).map((chunk, rowIndex) => {
                                                  return (
                                                    <Box className="flex gap-1" key={`row_${rowIndex}`}>
                                                      {chunk.map((deliveryServiceId: Service) => {
                                                        const deliveryService = getDeliveryServiceDataById(deliveryServiceId)
                                                        const LogoComponent = logoComponents[deliveryService?.logo as keyof typeof logoComponents];

                                                        return (
                                                          <Box key={`service_0${deliveryServiceId}`}>
                                                            <LogoComponent />
                                                          </Box>
                                                        )
                                                      })}
                                                    </Box>
                                                  )
                                                })
                                              }
                                            </Box>
                                          </Box>
                                        </Box>
                                      </Box>
                                    </StoreCard>
                                  ) : (
                                    <SmallStoreCard
                                      width={353} // 1440/1512 x 630 = 600
                                      height={151} // 131.4
                                    >
                                      <Box className="text-black flex" sx={{ flexDirection: 'column' }}>
                                        <Typography sx={{fontWeight: 'bold', fontSize: {xs: '14px', lg: '20px'}}}>
                                          {store.name}
                                        </Typography>
                                        <Box className="mx-auto flex flex-wrap justify-between w-full">
                                          <Box>
                                            {/* 左側のコンテンツ（変更なし） */}
                                            <Box display="flex" alignItems="flex-start">
                                              <Typography sx={{ fontSize: '14px' }}>{store.address}</Typography>
                                            </Box>
                                            <Box className="flex items-center align-center justify-between">
                                              <Box>
                                                <Box display="flex" alignItems="flex-start">
                                                  <Typography sx={{ fontSize: '14px' }}>
                                                    <span className="font-bold">営業時間： </span>
                                                    {store.businessHours}
                                                  </Typography>
                                                </Box>
                                                <Box display="flex" alignItems="flex-start">
                                                  <Typography sx={{ fontSize: '14px' }}>
                                                    <span className="font-bold">電話番号： </span>
                                                    {formatPhoneNumber(store.phone)}
                                                  </Typography>
                                                </Box>
                                                {!isLgUp &&
                                                  <Box display="flex" alignItems="flex-start">
                                                    <Typography sx={{ fontSize: '14px' }}>
                                                      <span className="font-bold">昼の宅配： </span>
                                                      {store.deliveryHours}
                                                    </Typography>
                                                  </Box>
                                                }
                                              </Box>
                                              {isLgUp &&
                                                <Box>
                                                  <Typography sx={{ mt: -2.25, pl: 4, fontSize: '14px' }}>
                                                    <span className="font-bold">昼の宅配： </span>
                                                    {store.deliveryHours}
                                                  </Typography>
                                                </Box>
                                              }
                                            </Box>
                                          </Box>
                                          <Box  
                                            sx={{
                                              position: 'absolute',
                                              top: 22.5,
                                              right: -25,
                                              flexShrink: 0
                                            }}
                                          >
                                            <Box sx={{gap: 1}}>
                                              {store?.deliveryServices && store.deliveryServices.length > 0 &&
                                                chunkArray( // アイコンの存在するデリバリーサービスのみに絞る
                                                  store.deliveryServices
                                                    .filter((deliveryServiceId: number) => [3,4,5,6].includes(deliveryServiceId)),
                                                  6
                                                ).map((chunk, rowIndex) => (
                                                  <Box className="flex gap-1" key={`row_${rowIndex}`}>
                                                    {chunk.map((deliveryServiceId: Service) => {
                                                      const deliveryService = getDeliveryServiceDataById(deliveryServiceId)
                                                      const LogoComponent = logoComponents[deliveryService?.logo as keyof typeof logoComponents];

                                                      return (
                                                        <Box key={`service_0${deliveryServiceId}`}>
                                                          <LogoComponent />
                                                        </Box>
                                                      )
                                                    })}
                                                  </Box>
                                                ))
                                              }
                                            </Box>
                                          </Box>
                                        </Box>
                                      </Box>
                                    </SmallStoreCard>
                                  )
                                }
                              </Link>
                            ))
                          }
                        </Box>
                    ))}
                  </Box>
                </Box> 
              </Box>
            </Box>
          </Box>
        </Container>
        <Footer/>
      </Box>
    </ThemeProvider>
  );
}
