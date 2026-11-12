## Use cases

Use the `BaseLayer` component to render a map with controlled countries and regions. It accepts an array of country codes and region codes in ISO 3166-2 format as `include` or `exclude` props to control the display of regions on the map. Use the `*` symbol to include all countries and the `-*` suffix to include all country states. You can control the display of both countries and regions in the same array.

```typescript
const include = ['ES-*', 'AT'];
const exclude = ['ES-CT'];
```

Learn more about the data format [here](https://developer.dynatrace.com/design/data-visualizations/geo-maps/BaseLayer/props.md).

### Inclusion/Exclusion of countries

#### Include only Spain and Austria

**BaseLayerSimple**

```tsx
import { BaseLayer, MapView } from '@dynatrace/strato-geo';

const BaseLayerSimple = () => {
  const austriaSpainViewState = {
    longitude: 11,
    latitude: 42,
    zoom: 3,
  };

  return (
    <MapView initialViewState={austriaSpainViewState} height={500}>
      <BaseLayer include={['ES', 'AT']}></BaseLayer>
    </MapView>
  );
};
```

#### Include all countries, without Spain and Austria

**BaseLayerExcludeCountries**

```tsx
import { BaseLayer, MapView } from '@dynatrace/strato-geo';

const BaseLayerExcludeCountries = () => {
  const austriaSpainViewState = {
    longitude: 11,
    latitude: 42,
    zoom: 3,
  };

  return (
    <MapView initialViewState={austriaSpainViewState} height={500}>
      <BaseLayer include={['*']} exclude={['ES', 'AT']}></BaseLayer>
    </MapView>
  );
};
```

### Mix of country and state level regions

#### Include all countries, and all regions of Spain and Austria

**BaseLayerRegions**

```tsx
import { BaseLayer, MapView } from '@dynatrace/strato-geo';

const BaseLayerRegions = () => {
  const austriaSpainViewState = {
    longitude: 11,
    latitude: 42,
    zoom: 3,
  };

  return (
    <MapView initialViewState={austriaSpainViewState} height={500}>
      <BaseLayer include={['*', 'AT-*', 'ES-*']}></BaseLayer>
    </MapView>
  );
};
```

#### Include Spain and Austria, without regions: Catalonia, Madrid, Vienna, Upper Austria

**BaseLayerExcludeRegions**

```tsx
import { BaseLayer, MapView } from '@dynatrace/strato-geo';

const BaseLayerExcludeRegions = () => {
  const austriaSpainViewState = {
    longitude: 11,
    latitude: 42,
    zoom: 3,
  };

  return (
    <MapView initialViewState={austriaSpainViewState} height={500}>
      <BaseLayer
        include={['ES-*', 'AT-*']}
        exclude={['ES-CT', 'ES-MD', 'AT-9', 'AT-4']}
      ></BaseLayer>
    </MapView>
  );
};
```
