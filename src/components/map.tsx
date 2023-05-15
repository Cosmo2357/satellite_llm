import DeckGL, {TextLayer} from 'deck.gl';
import { LineLayer } from '@deck.gl/layers';
type Props = {}

const MAPBOX_ACCESS_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN; // eslint-disable-line
// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

export default function Map() {


  const data = [
    { sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781] }
  ];

const layers = [
  new LineLayer({ id: 'line-layer', data })
];
  return 
  <DeckGL
  initialViewState={INITIAL_VIEW_STATE}
  controller={true}
  layers={layers} >
    </DeckGL > 
}