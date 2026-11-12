### Color configuration using a legend

Using predefined legend subcomponents it's possible to easily set an advanced colors configuration for multiple data layers at once.

There are three legend subcomponents that can be used to configure colors of the data layers: `SequentialLegend`, `ThresholdLegend`, and `CategoricalLegend`.

To connect a data layer to the legend, a `color` property of the layer should be set to `legend` string. All data layers with `legend` color will be colored according to the legend configuration. Only one legend subcomponent can be used at a time.

As most of the data layer subcomponents have minimal required data properties of `latitude` and `longitude`, the value associated with the data point must be provided using the `valueAccessor` prop. The string provided as a value accessor will be used to access the property of the data point object. Be aware, that while some legends expect the value to be a numeric (`SequentialLegend` and `ThresholdLegend`), other expect a string value (`CategoricalLegend`).

#### Sequential legend

The `SequentialLegend` subcomponent allows to automatically split the value range of the data points into multiple even-sized buckets and assign a color to each bucket. The sequential legend will automatically consider the minimum and maximum values of data provided in all layers which have set the `coloring` prop to `legend` and have valid value accessors referring to numerical values. The value boundaries can be manually customised using the `min` and `max` numeric props. To define a color palette to be used, a `colorPalette` prop should be set. The `colorPalette` prop supports custom color palettes as an array of string values, as well as variety of predefined color palettes ( see [coloring](https://developer.dynatrace.com/design/data-visualizations/charts/ChartColoring.md) for more details).

The data layer's `valueAccessor` prop must reference a numeric property of the data point object.

**SequentialLegendColor**

```tsx
import {
  BubbleLayer,
  DotLayer,
  Location,
  MapView,
  SequentialLegend,
} from '@dynatrace/strato-geo';

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

const SequentialLegendColor = () => {
  return (
    <MapView height={400}>
      <DotLayer
        data={earthquakes.splice(0, 14)}
        color="legend"
        valueAccessor="magnitude"
      />
      <BubbleLayer
        data={earthquakes.splice(14, 25)}
        color="legend"
        valueAccessor="magnitude"
        radius={({ magnitude }) => magnitude * 2}
      />
      <SequentialLegend min={0} colorPalette="orange" />
    </MapView>
  );
};
```

#### Threshold legend

The `ThresholdLegend` subcomponent is similar to the `SequentialLegend`, but allows to define custom value ranges for each bucket. To configure the threshold legend, an array of ranges must be provided using the `ranges` prop. Each range must contain `min` and `max` props that define the range boundaries, and a `color` prop. If a range contains an `Infinity` value, the value will be be displayed as the maximum value present in the data, or as `0` if the data only contains negative values. A `-Infinity` value will show the minimum value present in the data, or `0` if the data only contains positive values.

The data layer's `valueAccessor` prop must reference a numeric property of the data point object.

**ThresholdLegendColor**

```tsx
import Colors from '@dynatrace/strato-design-tokens/colors';
import {
  BubbleLayer,
  DotLayer,
  Location,
  MapView,
  ThresholdLegend,
} from '@dynatrace/strato-geo';

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

const ThresholdLegendColor = () => {
  return (
    <MapView height={400}>
      <DotLayer
        data={earthquakes.slice(0, 16)}
        color="legend"
        valueAccessor="magnitude"
      />
      <BubbleLayer
        data={earthquakes.slice(16, 35)}
        color="legend"
        valueAccessor="magnitude"
        radius={({ magnitude }) => magnitude * 3}
      />
      <ThresholdLegend
        ranges={[
          {
            from: 0,
            to: 1.8,
            color: Colors.Charts.Sequential.Pear.Color05.Default,
          },
          {
            from: 1.8,
            to: 5,
            color: Colors.Charts.Sequential.Pear.Color03.Default,
          },
          {
            from: 5,
            to: 6.5,
            color: Colors.Charts.Sequential.Pear.Color01.Default,
          },
        ]}
      />
    </MapView>
  );
};
```

#### Categorical legend

The `CategoricalLegend` subcomponent allows mapping of a string value to a specific color, thus creating a categorical color mapping. To configure the categorical legend, an key-value object where every key is category name, and every value is assigned color string can be provided as `colorPalette` prop.

**CategoricalLegendColorObject**

```tsx
import {
  BubbleLayer,
  CategoricalLegend,
  Location,
  MapView,
} from '@dynatrace/strato-geo';

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

const CategoricalLegendColorObject = () => {
  const customColorPalette = {
    'Low Risk': 'rgba(238,208,103,0.8)',
    'Medium Risk': 'rgba(238,170,122,0.8)',
    'High Risk': 'rgba(225,109,123,0.8)',
    'Extreme Risk': '#000000',
  };

  const setSeverityBasedOnMagnitude = (magnitude: number): string => {
    if (magnitude < 1.8) {
      return 'Low Risk';
    } else if (magnitude < 5) {
      return 'Medium Risk';
    } else if (magnitude < 6.5) {
      return 'High Risk';
    }
    return 'Extreme Risk';
  };

  const getStatus = (magnitude: number) =>
    setSeverityBasedOnMagnitude(magnitude);

  const categoricalData = earthquakes.map((t) => ({
    ...t,
    status: getStatus(t.magnitude),
  }));

  return (
    <MapView>
      <CategoricalLegend
        position="bottom"
        hidden={false}
        colorPalette={customColorPalette}
      />
      <BubbleLayer
        data={categoricalData}
        color="legend"
        valueAccessor="status"
        radius={({ magnitude }) => magnitude * 2}
      />
    </MapView>
  );
};
```

When passing a predefined color palette, a key of the color palette item will be mapped to the equal category name (if found), and a value of the color palette item will be used as a color. If a category name is not found in the color palette, a default color of the data layer will be used.

The categorical legend supports legend items interactions. When hovering on a legend item name, data points of this category will be highlighted on the map. When hovering on a legend item icon, the opposite will happen - all other categories will be highlighted. When clicking left mouse button (LButton) on a legend item name, all other categories will be hidden.

**CategoricalLegendColor**

```tsx
import {
  BubbleLayer,
  CategoricalLegend,
  DotLayer,
  Location,
  MapView,
} from '@dynatrace/strato-geo';

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

const CategoricalLegendColor = () => {
  const categories = ['Muted', 'Critical', 'High', 'Medium', 'Low'];
  const colorPalette = 'security-risk-level';

  const getStatus = (magnitude: number) =>
    categories[Math.floor(Math.random() * categories.length)];

  const categoricalData = earthquakes.map((t) => ({
    ...t,
    status: getStatus(t.magnitude),
  }));

  return (
    <MapView height={400}>
      <DotLayer
        data={categoricalData.slice(0, 16)}
        color="legend"
        valueAccessor="status"
      />
      <BubbleLayer
        data={categoricalData.slice(16, 35)}
        color="legend"
        valueAccessor="status"
        radius={({ magnitude }) => magnitude * 5}
      />
      <CategoricalLegend colorPalette={colorPalette} />
    </MapView>
  );
};
```

#### Legend shared properties

All legend subcomponents support the following shared properties:

- `position` - defines the position of the legend on the map. Supported options are `right`, `bottom`, and `auto`. The default value is `auto`, which will place the legend on the right side of the map if the map width is greater than the height, and on the bottom of the map otherwise.
- `hidden` - defines whether the legend should be hidden. The legend is visible by default.
