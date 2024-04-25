import React from 'react';

import { MarkerF, useGoogleMap } from '@react-google-maps/api';

import trees from '@/app/maptest/_mock/trees';

export default function Markers() {
  const map = useGoogleMap();
  // 위치 정보를 변수에 저장한다.
  // interface location {
  //   lat: number;
  //   lng: number;
  //   name?: string;
  // }
  const locations = trees;

  return (
    <div>
      {' '}
      {locations.map((location, index) => (
        <MarkerF
          // animation={google.maps.Animation.BOUNCE}
          key={index}
          title={location.name}
          position={{ lat: location.lat, lng: location.lng }}
          onClick={() => console.log('MarkerClicked')}
        />
      ))}
    </div>
  );
}
