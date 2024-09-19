'use client'

import React, { useState, useEffect } from 'react';
import { 
  Typography, 
  Container, 
  MenuItem, 
  FormControl,
  Box,
  Dialog,
  DialogContent
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

  return (
    <ThemeProvider theme={theme}>
      <Box className="min-h-full" sx={{ bgcolor: 'background.default' }}>
        <Header/>
        <Container className="container w-full mt-[100px] mb-[100px]" sx={{ minWidth: '85%'}}>
          <Box className="flex justify-center items-center">
            <Image
              src={'/images/store-title.png'}
              alt={'Menu Title'}
              width={274.95}
              height={72.98}
            />
          </Box>
          <Box className="flex justify-end pr-[70px] mb-[27px]">
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
            className="w-full mb-[100px]"
            sx={{
              '& > div': {  // Wrapper に直接渡す
                minHeight: '600px !important',
              }
            }}
          >
            <Wrapper apiKey={apiKey!} version="beta" libraries={["marker"]}>
              {mapCenter && mapCenter.lat !== undefined && mapCenter.lng !== undefined &&
                <MulipleMarkersMap markers={markers} mapCenter={mapCenter} />
              }
            </Wrapper>
          </Box>
          <Box>
            <Typography className="text-black" variant="h5" component="h2" gutterBottom>
              エリアから探す
            </Typography>
            <Box className="flex items-center align-center justify-between mb-[100px]" alignItems="flex-end">
              <Box className="flex justify-between">
                <Box className="mr-[60px]">
                  <FormControl fullWidth>
                    <CustomSelect
                      className="w-[353px] h-[30px] bg-white rounded-[10px]"
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
                      className="w-[353px] h-[30px] bg-white rounded-[10px]"
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
              <Box className="flex justify-start w-full ml-[180px]">
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
                  <Typography className="mb-4 text-black items-center align-center" variant="h5" gutterBottom>
                    店舗一覧
                    {/* <Typography className="text-black flex justify-center" variant="h4" component="h3" gutterBottom>
                    {getPrefName(stores[0].prefCode)} {getCityName(stores[0].cityCode)} の検索結果
                  </Typography> */}
                  </Typography>
                )}
              </Box>
              <Box
                className="w-full max-w-full m-auto m-0 flex flex-wrap flex-start"
                sx={{ 
                  width: '1300px', // (630px * 2) + (20px) = 1280px
                }}
              >
                {stores && stores.length > 0 && stores.map((store, index) => (
                  <Box key={index} className="max-w-full mt-[10px] mr-[10px] mb-[10px] relative">
                    <StyledLink className="text-decoration-none" href={`/store/${store.id}`}>
                      <HexagonalBox
                        width={600} // 1440/1512 x 630 = 600
                        height={130} // 131.4
                      >
                        <Box className="text-black flex" sx={{ flexDirection: 'column' }}>
                          <Typography sx={{fontWeight: 'bold', fontSize: '20px'}} gutterBottom>
                            {store.name}
                          </Typography>
                          <Box className="mx-auto flex flex-wrap justify-between w-full">
                            <Box>
                              {/* 左側のコンテンツ（変更なし） */}
                              <Box display="flex" alignItems="flex-start" mb={1}>
                                <Typography>{store.address}</Typography>
                              </Box>
                              <Box className="flex items-center align-center justify-between">
                                <Box>
                                  <Box display="flex" alignItems="flex-start" mb={1}>
                                    <Typography>
                                      <span className="font-bold">営業時間: </span>
                                      {store.businessHours}
                                    </Typography>
                                  </Box>
                                  <Box display="flex" alignItems="flex-start" mb={1}>
                                    <Typography>
                                      <span className="font-bold">電話番号: </span>
                                      {formatPhoneNumber(store.phone)}
                                    </Typography>
                                  </Box>
                                </Box>
                                <Box>
                                  <Typography sx={{ mt: -4, pl: 4}}>
                                    <span className="font-bold">昼の宅配: </span>
                                    {store.deliveryHours}
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                            <Box className="absolute top-0 right-0 shrink-0">
                              <Box className="gap-1">
                                {store?.deliveryServices && store.deliveryServices.length > 0 &&
                                  chunkArray(store.deliveryServices, 6).map((chunk, rowIndex) => {
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
                    </StyledLink>
                  </Box>
                ))}
              </Box> 
            </Box>
          </Box>
        </Container>
        <Footer/>
      </Box>
    </ThemeProvider>
  );
}
