import React, { useEffect, useRef } from 'react';
import { MarkerConfig } from '@/types/map-marker';

interface MultipleMarkersMapProps {
  markers: MarkerConfig[];
  mapCenter: { lat: number, lng: number };
}

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const mapId = process.env.NEXT_PUBLIC_GOOGLE_CLOUD_MAP_ID;

export const MulipleMarkersMap: React.FC<MultipleMarkersMapProps> = ({ markers, mapCenter }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current || !window.google) return;

    const initMap = async () => {
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;

      const map = new Map(mapRef.current as unknown as HTMLElement, {
        center: mapCenter,
        zoom: 14,
        mapId: mapId
      });

      markers.forEach((marker, index) => {
        const beachFlagImg = document.createElement('img');
        beachFlagImg.src = '/images/flag.png';

        new AdvancedMarkerElement({
          map,
          position: marker.position,
          content: beachFlagImg,
          title: marker.title,
        }) as any;
      });
    };

    initMap();
  }, [markers, mapCenter]);

  return <div ref={mapRef} style={mapContainerStyle} />;
};
