### Updating map display

By changing the `include`/`exclude` props the map display will be updated.

Zoom in and zoom out to see Spain with or without regions.

**RegionsOnZoom**

```tsx
import { debounce } from 'lodash-es';
import { useState } from 'react';

import { BaseLayer, MapView } from '@dynatrace/strato-geo';

const RegionsOnZoom = () => {
  const breakpointZoomLevel = 4;
  const spainViewState = {
    longitude: -2,
    latitude: 39.5,
    zoom: 3,
  };

  const [region, setRegion] = useState({ include: ['ES'] });

  const mapDetailsManager = (zoom: number) =>
    zoom > breakpointZoomLevel
      ? setRegion({ include: ['ES-*'] })
      : setRegion({ include: ['ES'] });

  return (
    <MapView
      initialViewState={spainViewState}
      height={300}
      onViewStateChange={debounce(
        ({ zoom }) => zoom && mapDetailsManager(zoom),
        300,
      )}
    >
      <BaseLayer {...region}></BaseLayer>
    </MapView>
  );
};
```

There can be also conditional layers rendering inside of map, zoom in and zoom out to see `ChoroplethLayer` or `DotLayer`

**NewLayerOnZoom**

```tsx
import { debounce } from 'lodash-es';
import { useState } from 'react';

import { ChoroplethLayer, DotLayer, MapView } from '@dynatrace/strato-geo';

const NewLayerOnZoom = () => {
  const countriesStats = [
    {
      country: 'ES',
      primary_color: '#f7c910',
      population: 84724070,
      continent: 'Europe',
      apdex: 'Excellent',
    },
  ];
  const breakpointZoomLevel = 4;
  const spainViewState = {
    longitude: -2,
    latitude: 39.5,
    zoom: 3,
  };

  const flights = [
    {
      id: 'RYR9042-1691322655-schedule-852p:0',
      longitude: -2,
      latitude: 39,
    },
  ];

  const [shouldRenderDetails, setShouldRenderDetails] = useState<boolean>(
    breakpointZoomLevel < spainViewState.zoom,
  );

  const mapDetailsManager = (zoom: number) =>
    setShouldRenderDetails(zoom > breakpointZoomLevel);

  return (
    <MapView
      initialViewState={spainViewState}
      height={300}
      onViewStateChange={debounce(
        ({ zoom }) => zoom && mapDetailsManager(zoom),
        300,
      )}
    >
      {shouldRenderDetails ? (
        <DotLayer data={flights} />
      ) : (
        <ChoroplethLayer data={countriesStats} regionAccessor="country" />
      )}
    </MapView>
  );
};
```
