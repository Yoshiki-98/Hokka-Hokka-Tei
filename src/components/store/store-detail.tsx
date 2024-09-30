'use client'

import React, { useState, useEffect } from 'react';
import { 
  Typography, 
  Container, 
  Box,
  useMediaQuery,
} from '@mui/material';
import axios from 'axios';
import { Store } from '@/types/store';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Wrapper } from "@googlemaps/react-wrapper";
import { prefsWithCities } from '@/data/prefs-with-cities';
import Header from 'src/components/header';
import Footer from 'src/components/footer';
import { MapComponent } from 'src/components/map/map-component';
import { MarkerConfig } from '@/types/map-marker';
import { DeliveryServiceComponent } from './delivery-service-component';
import { StoreInfoComponent } from './store-info-component';

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_CLOUD_API_KEY;

const theme = createTheme({
  palette: {
    background: {
      default: '#FFF1E6',
    },
    primary: {
      main: '#ff0000',
    },
    secondary: {
      main: '#008000',
    },
  },
})

export default function StoreDetail() {
  const [store, setStore] = useState<Store|undefined>(undefined);
  const [marker, setMarker] = useState<MarkerConfig | undefined>(undefined);
  const [mapCenter, setMapCenter] = useState<any>(undefined);

  const windowPath = typeof window !== 'undefined' ? window.location.pathname : null;
  const pathSegments = windowPath ? windowPath.split('/') : null;
  const storeId = pathSegments ? pathSegments[pathSegments.length - 1] : null;

  const fetchStore = async (id: string) => {
    try {
      const res = await axios.get('/api/store', { params: { id: id } });
      const storeData = res.data;

      setStore(storeData);

      const cityCenter = storeData.location;
      setMapCenter(cityCenter);

      const markerData = {
        zoom: 10,
        position: storeData.location,
        title: storeData.name
      } as MarkerConfig;

      setMarker(markerData);

      return storeData;
    } catch (error) {
      console.error('店舗のフェッチに失敗しました:', error);
    }
  }

  useEffect(() => {
    fetchStore(storeId!);
  }, [storeId]);

  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const isSubLgUp = useMediaQuery('(min-width:1024px)');

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <Header/>
        <Container className="w-full text-black mb-[200px]" sx={{ minWidth: '90%'}}>
          <Typography
            sx={{
              mb: 4,
              textAlign: isSubLgUp ? 'unset' : isMdUp ? 'center' : 'unset',
              fontWeight: 'bold',
              fontSize: {xs: '24px', sm: '28px', lg: '36px'},
            }}
          >
            {store?.name}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              margin: '0 auto 50px auto',
              alignItems: 'center',
              justifyContent: isSubLgUp ? 'space-between' : 'center'
            }}
          >
            <StoreInfoComponent store={store}/>
            {isSubLgUp &&
              <DeliveryServiceComponent store={store}/>
            }
          </Box>
          {!isSubLgUp && <DeliveryServiceComponent store={store}/>}
          <Box className="mx-auto">
            <Box className="mt-10 mb-[20px]">
              <Typography
                sx={{
                  textAlign: isSubLgUp ? 'unset' : isMdUp ? 'center' : 'unset',
                  fontWeight: 'bold',
                  fontSize: '24px'
                }}>
                  アクセス
                </Typography> 
            </Box>
            <Box
              sx={{
                '& > div': {  // Wrapper に直接渡す
                  minHeight: {xs: '353px !important',lg: '600px !important'},
                },
              }}
            >
              <Wrapper apiKey={apiKey!} version="beta" libraries={["marker"]}>
                {marker && mapCenter && mapCenter.lat !== undefined && mapCenter.lng !== undefined &&
                  <MapComponent marker={marker} mapCenter={mapCenter} />
                }
              </Wrapper>
            </Box>
          </Box>
        </Container>
        <Footer/>
      </Box>
    </ThemeProvider>
  );
}
