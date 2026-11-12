## Use cases

The minimal representation of a `MapView` component is a base layer that contains a world map.

The height of the `MapView` component must be set explicitly using the `height` prop. The width of the `MapView` component will be determined by the width of the parent container.

Learn more about the `MapView` props [here](https://developer.dynatrace.com/design/data-visualizations/geo-maps/MapView/props.md).

**Simple**

```tsx
import { MapView } from '@dynatrace/strato-geo';

const Simple = () => {
  return <MapView height={400} />;
};
```

### Formatter

There are two other options in the formatter that allow for greater customization. The first option enables you to prepend the unit to the value, while the second option enables you to ignore the original unit and append a custom string instead. Additionally, there is a custom formatter option available to allow you to change the input unit to one of your choice, e.g.: if the input unit is `bits`, you are able to switch and display the unit as `bytes`, correctly formatted. The formatted value is applied in the tooltip and the legend.

**Formatter**

```tsx
import { units } from '@dynatrace-sdk/units';
import { BubbleLayer, MapView, SequentialLegend } from '@dynatrace/strato-geo';

const Formatter = () => {
  const bubbleData = [
    {
      longitude: -155.7645,
      latitude: 19.608333,
      magnitude: 1024,
    },
    {
      longitude: -100.7645,
      latitude: 30.608333,
      magnitude: 1024000,
    },
  ];

  return (
    <MapView
      formatter={{
        maximumFractionDigits: 2,
        input: units.data.kilobyte,
        output: units.data.megabyte,
      }}
    >
      <BubbleLayer
        data={bubbleData}
        color="legend"
        valueAccessor="magnitude"
        radius={({ magnitude }) => magnitude / 50}
      >
        <BubbleLayer.Tooltip />
      </BubbleLayer>
      <SequentialLegend colorPalette="orange" min={0} max={1500000} />
    </MapView>
  );
};
```

### Truncation mode

The purpose of truncation is to gracefully handle extra long tooltips or legends within data visualization components. By changing the value of this property, you have control over where truncation is applied within charts. By default, the truncation is applied to the `middle` value with the use of an ellipsis. Truncation can, however be changed to instead be applied at the `start` or `end` of data visualization component elements.

**TruncationMode**

```tsx
import { BubbleLayer, CategoricalLegend, MapView } from '@dynatrace/strato-geo';

const TruncationMode = () => {
  const extraLongName =
    'Extreme Lorem ipsum dolor sit amet consectetur adipiscing elit ad inceptos Risk';
  const customColorPalette = {
    'Low Risk': 'rgba(238,208,103,0.8)',
    'Medium Risk': 'rgba(238,170,122,0.8)',
    'High Risk': 'rgba(225,109,123,0.8)',
    [extraLongName]: '#000000',
  };

  const bubbleData = [
    {
      longitude: -155.7645,
      latitude: 19.608333,
      status: extraLongName,
      magnitude: 100,
    },
  ];

  return (
    <MapView truncationMode="end">
      <BubbleLayer
        data={bubbleData}
        color="legend"
        valueAccessor="magnitude"
        radius={({ magnitude }) => magnitude * 2}
      >
        <BubbleLayer.Tooltip />
      </BubbleLayer>
      <CategoricalLegend colorPalette={customColorPalette} />
    </MapView>
  );
};
```

### Controlled and uncontrolled states

The `MapView` component can be used in both controlled and uncontrolled states. In the uncontrolled state it's possible to configure the initial longitude, latitude and zoom level of the map using `initialViewState` prop. By default, the map will be centered on the equator and zoomed out to show the whole world.

**Uncontrolled**

```tsx
import { MapView } from '@dynatrace/strato-geo';

const Uncontrolled = () => {
  const initialViewState = {
    longitude: 2.1700581793810483,
    latitude: 41.389448379708284,
    zoom: 3,
  };

  return <MapView height={400} initialViewState={initialViewState}></MapView>;
};
```

In the controlled state, user can attach state handlers to the `MapView` component using the `onViewStateChange` prop, as well as dynamically change the longitude, latitude and zoom level of the map.

**Controlled**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { MapView, ViewState } from '@dynatrace/strato-geo';

const Controlled = () => {
  const [viewState, setViewState] = useState<ViewState>({
    latitude: 41.389448379708284,
    longitude: 2.1700581793810483,
    zoom: 3,
  });
  function flyToNewYork() {
    setViewState({
      latitude: 40.71506864978226,
      longitude: -73.99685872184544,
      zoom: 4,
    });
  }
  function flyToBarcelona() {
    setViewState({
      latitude: 41.390205,
      longitude: 2.154007,
      zoom: 4,
    });
  }
  const stateHandler = (viewState: ViewState) => {
    setViewState({
      latitude: viewState.latitude,
      longitude: viewState.longitude,
      zoom: viewState.zoom,
    });
  };

  return (
    <>
      <Button
        onClick={flyToNewYork}
        variant="emphasized"
        style={{ margin: '4px 2px' }}
      >
        Fly to New York, US
      </Button>
      <Button
        onClick={flyToBarcelona}
        variant="emphasized"
        style={{ margin: '4px 2px' }}
      >
        Fly to Barcelona, Spain
      </Button>

      <MapView
        height={400}
        onViewStateChange={stateHandler}
        {...viewState}
      ></MapView>
    </>
  );
};
```

### Data layers

The `MapView` component supports rendering of data layers on the map using the different subcomponents. Multiple data layers of the same type can be rendered. The order of the data layers is determined by the order of the subcomponents of the `MapView` component.

For detailed documentation about each data layer, please refer to the respective docs pages.
