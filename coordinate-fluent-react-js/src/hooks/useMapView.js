import { useRef, useEffect, useState } from "react";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";

const loadMapView = (mapProperties, mapViewProperties = {}) => {
  const map = new WebMap({ ...mapProperties });

  return new MapView({
    ...mapViewProperties,
    map,
  });
};

const destroyMapView = (view) => {
  if (!view) {
    return;
  }

  view.container = null;
};

export function useMapView(mapProperties, mapViewProperties) {
  const mapViewRef = useRef(null);

  const [mapView, setMapView] = useState();

  const initialArguments = useRef({ mapProperties, mapViewProperties });

  useEffect(() => {
    let cancelled = false;
    let mapView;

    async function load() {
      const { mapProperties, mapViewProperties } = initialArguments.current;
      mapView = loadMapView(mapProperties, mapViewProperties);
      if (cancelled) {
        return;
      }

      mapView.container = mapViewRef.current;

      setMapView(mapView);
    }

    load();

    return function cleanUp() {
      cancelled = true;

      destroyMapView(mapView);
    };
  }, []);

  return { mapViewRef, mapView };
}
