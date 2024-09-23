import React, { useEffect, useRef } from 'react';
import { MarkerConfig } from '@/types/map-marker';
import HokateiFlag from '../svg/icon/hokatei-flag';
import SmallHokateiFlag from '../svg/icon/small-hokatei-flag';
import { createRoot } from 'react-dom/client';
import { useMediaQuery, useTheme } from '@mui/material';

interface MapComponentProps {
  marker: MarkerConfig;
  mapCenter: { lat: number, lng: number };
}

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const mapId = process.env.NEXT_PUBLIC_GOOGLE_CLOUD_MAP_ID;

export const MapComponent: React.FC<MapComponentProps> = ({ marker, mapCenter }) => {
  const mapRef = useRef(null);

  const theme = useTheme();
  const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

  useEffect(() => {
    if (!mapRef.current || !window.google) return;

    const initMap = async () => {
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

      const map = new Map(mapRef.current as unknown as HTMLElement, {
        center: marker.position,
        zoom: 15,
        mapId: mapId
      });

      // const beachFlagImg = document.createElement('img');
      // beachFlagImg.src = '/images/flag.png';

      const markerContent = document.createElement('div');
      const root = createRoot(markerContent);
      root.render(isSmUp ? <HokateiFlag/> : <SmallHokateiFlag />);

      new AdvancedMarkerElement({
        map,
        position: marker.position,
        // content: beachFlagImg,
        content: markerContent,
        title: marker.title,
      }) as any;
    };

    initMap();
  }, []);

  return <div ref={mapRef} style={mapContainerStyle} />;
};
