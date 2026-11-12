### Granular color configuration per layer

For a granular color customization of a single layer, layer's `color` prop should be used. It supports a string or a callback that returns a string. The string value should be any valid CSS color, including rgba, hex, transparent, or a color name.

If string is provided, it will be used as a color for all data points in the layer, while providing a callback that receives a data point as an argument allows to customize the color per data point.

**CustomLayerColor**

```tsx
import Colors from '@dynatrace/strato-design-tokens/colors';
import { BubbleLayer, Location, MapView } from '@dynatrace/strato-geo';

type Earthquake = {
  magnitude: number;
  tsunami: number;
} & Location;

const earthquakes: Earthquake[] = [
  {
    longitude: -155.7645,
    latitude: 19.608333,
    magnitude: 1.47,
    tsunami: 0,
  },
  {
    longitude: -111.456667,
    latitude: 42.600833,
    magnitude: 1.84,
    tsunami: 0,
  },
  {
    longitude: -152.8997,
    latitude: 62.5624,
    magnitude: 1.4,
    tsunami: 0,
  },
  {
    longitude: -147.6239,
    latitude: 61.9391,
    magnitude: 2,
    tsunami: 0,
  },
  {
    longitude: -155.6845,
    latitude: 18.778833,
    magnitude: 2.06,
    tsunami: 0,
  },
  {
    longitude: -149.0205,
    latitude: 61.3011,
    magnitude: 1.7,
    tsunami: 0,
  },
  {
    longitude: -149.1141,
    latitude: 63.8125,
    magnitude: 1.6,
    tsunami: 0,
  },
  {
    longitude: -116.364,
    latitude: 33.395667,
    magnitude: 0.97,
    tsunami: 0,
  },
  {
    longitude: -118.118,
    latitude: 33.743333,
    magnitude: 1.15,
    tsunami: 0,
  },
  {
    longitude: -178.1517,
    latitude: -31.5827,
    magnitude: 5,
    tsunami: 0,
  },
  {
    longitude: -173.6834,
    latitude: 51.2465,
    magnitude: 2,
    tsunami: 0,
  },
  {
    longitude: -139.521,
    latitude: 59.9658,
    magnitude: 1.3,
    tsunami: 0,
  },
  {
    longitude: -121.7125,
    latitude: 37.351167,
    magnitude: 1.22,
    tsunami: 0,
  },
  {
    longitude: -73.1491,
    latitude: 7.5135,
    magnitude: 5.1,
    tsunami: 0,
  },
  {
    longitude: -116.354833,
    latitude: 33.961167,
    magnitude: 1.75,
    tsunami: 0,
  },
  {
    longitude: 140.5685,
    latitude: 36.9167,
    magnitude: 4.9,
    tsunami: 0,
  },
  {
    longitude: -169.8117,
    latitude: 51.8357,
    magnitude: 2.5,
    tsunami: 0,
  },
  {
    longitude: -117.119167,
    latitude: 33.9365,
    magnitude: 1,
    tsunami: 0,
  },
  {
    longitude: -153.8841,
    latitude: 57.2184,
    magnitude: 1.3,
    tsunami: 0,
  },
  {
    longitude: -150.4019,
    latitude: 63.1122,
    magnitude: 1,
    tsunami: 0,
  },
  {
    longitude: -70.2379,
    latitude: -31.7388,
    magnitude: 3.9,
    tsunami: 0,
  },
  {
    longitude: -115.605333,
    latitude: 32.8245,
    magnitude: 1.54,
    tsunami: 0,
  },
  {
    longitude: -111.4244,
    latitude: 42.5958,
    magnitude: 2.5,
    tsunami: 0,
  },
  {
    longitude: -119.12,
    latitude: 38.2855,
    magnitude: 1.3,
    tsunami: 0,
  },
  {
    longitude: -121.059667,
    latitude: 36.477833,
    magnitude: 1.21,
    tsunami: 0,
  },
];

const CustomLayerColor = () => {
  const { longitude, latitude } = earthquakes[5];
  const initialViewState = {
    longitude,
    latitude,
    zoom: 1,
  };
  const callbackColor = (s: Earthquake) => {
    if (s.magnitude < 1.5) {
      return Colors.Charts.Threshold.Good.Default;
    } else if (s.magnitude < 2) {
      return Colors.Charts.Threshold.Warning.Default;
    } else {
      return Colors.Charts.Threshold.Bad.Default;
    }
  };

  return (
    <MapView height={400} initialViewState={initialViewState}>
      <BubbleLayer
        data={earthquakes}
        radius={(s: Earthquake) => s.magnitude * 5}
        color={callbackColor}
      />
    </MapView>
  );
};
```
