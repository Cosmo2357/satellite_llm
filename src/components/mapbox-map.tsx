import * as React from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// reference: https://dev.to/dqunbp/using-mapbox-gl-in-react-with-next-js-2glg
// thanx good article :D
//https://github.com/mapbox/mapbox-react-examples
//https://docs.mapbox.com/mapbox-gl-js/guides/globe/
function MapboxMap() {

  const [map, setMap] = React.useState<mapboxgl.Map>();

  const mapNode = React.useRef(null);

  React.useEffect(() => {
    const node = mapNode.current;

    if (typeof window === "undefined" || node === null) return;

    const mapboxMap = new mapboxgl.Map({
      container: node,
      //terrain: 'mapbox://mapbox.mapbox-terrain-dem-v1',
      //show satellite map
      style: 'mapbox://styles/mapbox/satellite-v9',
      //style: "mapbox://styles/mapbox/streets-v11",
      projection: 'globe',
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
      
      center: [-74.5, 40],
      zoom: 9,
    });

    setMap(mapboxMap);

    return () => {
      mapboxMap.remove();
    };
  }, []);

  return <div ref={mapNode} style={{ width: "100%", height: "100%" }} />;
}

export default MapboxMap