import React from 'react'
import DeckGL from '@deck.gl/react';
import { LineLayer } from '@deck.gl/layers';
import { Map } from 'react-map-gl';

type Props = {}
const MAPBOX_ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN; // eslint-disable-line

const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

const data = [
  { sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781] }
];

function Deck_gl({ }: Props) {

  const layers = [
    new LineLayer({ id: 'line-layer', data })
  ];

  return (<>

    <div className={'h-20 w-20'}>
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={layers} >
        <Map mapboxAccessToken={MAPBOX_ACCESS_TOKEN} initialViewState={INITIAL_VIEW_STATE} />
      </DeckGL>
    </div>
  </>
  )
}

export default Deck_gl