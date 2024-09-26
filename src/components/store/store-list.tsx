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
  useMediaQuery
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
import HexagonalBox from './hexagonal-box';
import { LoadScript } from '@react-google-maps/api';
import { getDeliveryServiceDataById } from '@/utils/theme/delivery-service-utils';
import SearchByLocationButton from '@/components/svg/button/trigger/search-by-location';
import LocationRetrievalButton from '@/components/svg/button/trigger/location-retrieval';
import { formatPhoneNumber } from '@/utils/format-utils';
import { CustomSelect, StyledLink } from 'src/components/styled/styled-component';
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
import SmallHexaBox from './small-hexa-box';

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

  const isXlUp = useMediaQuery(theme.breakpoints.up('xl'));
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  const handleSearchLocation = async () => {
    try {
      if (navigator.geolocation) {
        await navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            setMapCenter({ lat: lat, lng: lng })
            setIsOpen(true);
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

  const fetchStores = async (cityCode: number) => {
    try {
      const res = await axios.get('/api/store', { params: { cityCode: cityCode } });
      const storeData = res.data;

      setStores(storeData);

      const markersData = storeData.map((store: Store) => ({
        zoom: 10,
        position: store.location,
        title: store.name
      })) as MarkerConfig[];

      setMarkers(markersData);

      return storeData;
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
    }
  }, []);

  useEffect(() => {
    fetchStores(selectedCityCode);
  }, []);

  useEffect(() => {
    setSelectedCityCode(0);
    const prefWithCities = prefsWithCities.find((pref) => pref.code === selectedPrefCode);
    const cities = prefWithCities?.cities;

    setCitiesList(cities!);
  }, [selectedPrefCode]);

  useEffect(() => {
    setSearched(false);
    const selectedCity = citiesList?.find((city) => city.code === String(selectedCityCode));
    const selectedCityCenter = { lat: selectedCity?.lat, lng: selectedCity?.lng };

    setMapCenter(selectedCityCenter);
  }, [selectedCityCode]);

  useEffect(() => {
    if (stores) console.log(stores);
  }, [stores]);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100%', bgcolor: 'background.default' }}>
        <Header/>
        <Container
          sx={{
            width: '100%',
            marginTop: {xs: '50px', md: '100px'},
            marginBottom: '200px',
            minWidth: '90%'
          }}
        >
          <Box
            sx={{marginBottom: '50px'}}
            className="flex justify-center items-center"
          >
            {
              isMdUp ? (
                <Image
                  src={'/images/store-title.png'}
                  alt={'Menu Title'}
                  width={274.95}
                  height={72.98}
                />
              ) : (
                <Image
                  src={'/images/store-title.png'}
                  alt={'Menu Title'}
                  width={207}
                  height={55}
                />
              )
            }
          </Box>
          <Box
            sx={{
              display: isXlUp ? 'flex' : isLgUp ? undefined: 'flex',
              justifyContent: {xs: 'center', lg: 'flex-end', xl: 'center'},
              paddingRight: {lg: '85px', xl: 0},
              marginLeft: isLgUp ? '915px' : 0,
              marginBottom: '27px'
            }}
          >
            <SearchByLocationButton
              className="shrink-0"
              onClick={async () => await handleSearchLocation()}
            />
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} maxWidth="md" fullWidth>
              <DialogContent>
                {mapCenter && (<LoadScript googleMapsApiKey={apiKey!}/>)}
              </DialogContent>
            </Dialog>
          </Box>
          <Box
            sx={{
              width: '100%',
              marginBottom: '100px',
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
          <Box className="search-by-area-box">
            <Typography
              className="text-black"
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ textAlign: {sm: 'center', lg: 'unset'} }}
            >
              エリアから探す
            </Typography>
            <Box
              className="flex justify-between items-center"
              sx={{
                marginBottom: '40px',
                flexDirection: {xs: 'column', lg: 'unset'},
                alignItems: {xs: 'center'}
              }}
            >
              <Box
                sx={{
                  marginBottom: {xs: '20px', lg: 0},
                  flexDirection: {xs: 'column', lg: 'unset'}
                }}
                className="flex justify-between"
              >
                <Box
                  sx={{
                    marginBottom: {xs: '10px', lg: 0},
                    marginRight: {xs: 0, lg: '60px'}
                  }}
                >
                  <FormControl fullWidth>
                    <CustomSelect
                      sx={{
                        width: '353px',
                        height: '40px',
                        borderRadius: '10px'
                      }}
                      className="bg-white"
                      value={selectedPrefCode}
                      onChange={(e: any) => setSelectedPrefCode(e.target.value)}
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
                      width: '353px',
                      height: '40px',
                      borderRadius: '10px'
                    }}
                      className="bg-white"
                      value={selectedCityCode}
                      onChange={(e) => setSelectedCityCode(e.target.value as number)}
                      IconComponent={() =>
                        <DownArrowIcon className="mr-4"/>
                      }
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
                className="flex"
                sx={{
                  width: '100%',
                  marginLeft: {xs : '0px', lg: '150px'},
                  justifyContent: {xs: 'center', lg: 'start', xl: 'center'}
                }}
              >
                <LocationRetrievalButton
                  className="shrink-0"
                  onClick={() => {
                    fetchStores(selectedCityCode);
                    setSearched(true);
                  }}
                  disabled={searched}
                />
              </Box>
            </Box>
          </Box>
          <Box>
            <Box className="text-black">
              <Box>
                {stores && stores.length > 0 && (
                  <Typography
                    sx={{
                      marginBottom: 2.5,
                      textAlign: {sm: 'center', lg: 'unset'},
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
                className="max-w-full flex justify-center"
                sx={{
                  width: '100%', // (630px * 2) + (20px) = 1280px
                  margin: '0 auto',
                }}
              >
                <Box className="flex-col">
                  {stores && stores.length > 0 && chunkArray(stores, isMdUp ? 2 : 1).map((chunk, rowIndex) => (
                    <Box
                      key={`chunk_wrapper_0${rowIndex}`}
                      sx={{
                        display: 'flex',
                        maxWidth: '100%',
                        position: 'relative',
                      }}
                    >
                      {
                        chunk.map((store, index) => (
                          <StyledLink
                            className="text-decoration-none"
                            sx={{mx: '10px'}}
                            href={`/store/${store.id}`}
                          >
                            {
                              isLgUp ? (
                                <HexagonalBox
                                  width={630} // 1440/1512 x 630 = 600
                                  height={138} // 131.4]
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
                                          right: -50,
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
                                </HexagonalBox>
                              ) : (
                                <SmallHexaBox
                                  width={353} // 1440/1512 x 630 = 600
                                  height={151} // 131.4]
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
                                                <span className="font-bold">営業時間: </span>
                                                {store.businessHours}
                                              </Typography>
                                            </Box>
                                            <Box display="flex" alignItems="flex-start">
                                              <Typography sx={{ fontSize: '14px' }}>
                                                <span className="font-bold">電話番号: </span>
                                                {formatPhoneNumber(store.phone)}
                                              </Typography>
                                            </Box>
                                            {!isLgUp &&
                                              <Box display="flex" alignItems="flex-start">
                                                <Typography sx={{ fontSize: '14px' }}>
                                                  <span className="font-bold">昼の宅配: </span>
                                                  {store.deliveryHours}
                                                </Typography>
                                              </Box>
                                            }
                                          </Box>
                                          {isLgUp &&
                                            <Box>
                                              <Typography sx={{ mt: -2.25, pl: 4, fontSize: '14px' }}>
                                                <span className="font-bold">昼の宅配: </span>
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
                                </SmallHexaBox>
                              )
                            }
                          </StyledLink>
                        ))
                      }
                    </Box>
                  ))}
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
