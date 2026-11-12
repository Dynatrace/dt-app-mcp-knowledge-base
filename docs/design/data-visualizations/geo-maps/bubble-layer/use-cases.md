## Use cases

Use the `BubbleLayer` component to render data points with customizable radius. The `BubbleLayer` component accepts an array of data points as the data prop. Each data point must have `latitude` and `longitude` as minimum required properties.

```typescript
[
  {
    radius: 85,
    longitude: -115.195615,
    latitude: 36.171462,
  },
  {
    radius: 35,
    longitude: -94.556725,
    latitude: 39.104532,
  },
  {
    radius: 40,
    longitude: -73.998772,
    latitude: 40.717575,
  },
];
```

Learn more about the data format [here](https://developer.dynatrace.com/design/data-visualizations/geo-maps/BubbleLayer/props.md).

**BubbleLayerSimple**

```tsx
import { BubbleLayer, Location, MapView } from '@dynatrace/strato-geo';

type CyberAttackEvent = {
  id: string;
  distancePrecision: number;
  severity: 'high' | 'medium' | 'low';
} & Location;

const cyberAttacks: CyberAttackEvent[] = [
  {
    id: 'CYB-2024-001',
    distancePrecision: 85,
    severity: 'high',
    longitude: -115.195615,
    latitude: 36.171462,
  },
  {
    id: 'CYB-2024-002',
    distancePrecision: 35,
    severity: 'medium',
    longitude: -94.556725,
    latitude: 39.104532,
  },
  {
    id: 'CYB-2024-003',
    distancePrecision: 40,
    severity: 'low',
    longitude: -73.998772,
    latitude: 40.717575,
  },
  {
    id: 'CYB-2024-004',
    distancePrecision: 50,
    severity: 'high',
    longitude: -87.773124,
    latitude: 41.786535,
  },
  {
    id: 'CYB-2024-005',
    distancePrecision: 60,
    severity: 'low',
    longitude: -122.293741,
    latitude: 47.545032,
  },
];

const BubbleLayerSimple = () => {
  const initialViewState = {
    longitude: -101.465989,
    latitude: 40.822381,
    zoom: 3,
  };

  return (
    <MapView initialViewState={initialViewState} height={400}>
      <BubbleLayer
        data={cyberAttacks}
        radius={(cyberAttack: CyberAttackEvent) =>
          cyberAttack.distancePrecision
        }
      />
    </MapView>
  );
};
```

### Size interpolation

The `sizeInterpolation` prop determines how the size of the bubbles changes with zoom level.

- `'zoom'`: The size of the bubbles adjusts dynamically based on the zoom level of the map. As the user zooms in or out, the bubble sizes change accordingly to maintain relative proportions.
- `'fixed'`:The size of the bubbles remains constant regardless of the zoom level. This means that as the user zooms in or out, the size of the bubbles on the map remains the same, offering consistent visual representation.

**BubbleLayerSizeInterpolationZoom**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { BubbleLayer, Location, MapView } from '@dynatrace/strato-geo';

type CyberAttackEvent = {
  id: string;
  distancePrecision: number;
  severity: 'high' | 'medium' | 'low';
} & Location;

const cyberAttacks: CyberAttackEvent[] = [
  {
    id: 'CYB-2024-001',
    distancePrecision: 85,
    severity: 'high',
    longitude: -115.195615,
    latitude: 36.171462,
  },
  {
    id: 'CYB-2024-002',
    distancePrecision: 35,
    severity: 'medium',
    longitude: -94.556725,
    latitude: 39.104532,
  },
  {
    id: 'CYB-2024-003',
    distancePrecision: 40,
    severity: 'low',
    longitude: -73.998772,
    latitude: 40.717575,
  },
  {
    id: 'CYB-2024-004',
    distancePrecision: 50,
    severity: 'high',
    longitude: -87.773124,
    latitude: 41.786535,
  },
  {
    id: 'CYB-2024-005',
    distancePrecision: 60,
    severity: 'low',
    longitude: -122.293741,
    latitude: 47.545032,
  },
];

const BubbleLayerSizeInterpolationZoom = () => {
  const [sizeInterpolation, setSizeInterpolation] = useState<'zoom' | 'fixed'>(
    'zoom',
  );

  const initialViewState = {
    longitude: -101.465989,
    latitude: 40.822381,
    zoom: 3,
  };

  return (
    <>
      <Button
        onClick={() => {
          setSizeInterpolation('zoom');
        }}
        variant="emphasized"
        disabled={sizeInterpolation === 'zoom'}
        style={{ margin: '4px 2px' }}
      >
        Size interpolation: Zoom
      </Button>
      <Button
        onClick={() => {
          setSizeInterpolation('fixed');
        }}
        variant="emphasized"
        disabled={sizeInterpolation === 'fixed'}
        style={{ margin: '4px 2px' }}
      >
        Size interpolation: Fixed
      </Button>

      <MapView initialViewState={initialViewState} height={400}>
        <BubbleLayer
          data={cyberAttacks}
          radius={(cyberAttack: CyberAttackEvent) =>
            cyberAttack.distancePrecision
          }
          sizeInterpolation={sizeInterpolation}
        />
      </MapView>
    </>
  );
};
```

### Scale and radius

The `scale` prop controls how the size of the bubbles is scaled, affecting their visual representation on the map.

#### Linear Scaling

This is the default scaling mode, in which the size of the bubbles is scaled linearly based on the data range provided. The size of the bubbles increases or decreases proportionally to data values.

In this scaling mode, the value accessor has to be explicitly provided by passing to the `radius` prop a callback that returns the value which will be used to calculate the scale.

Additionally, when using linear scaling, you have the option to specify a `radiusRange`, which is an array or the minimum and maximum sizes for the bubble radius in pixels. This allows more control over the size range of bubble displayed on the map.

**BubbleLayerScaleLinear**

```tsx
import { BubbleLayer, Location, MapView } from '@dynatrace/strato-geo';

type CyberAttackEvent = {
  id: string;
  distancePrecision: number;
  severity: 'high' | 'medium' | 'low';
} & Location;

const cyberAttacks: CyberAttackEvent[] = [
  {
    id: 'CYB-2024-001',
    distancePrecision: 250,
    severity: 'high',
    longitude: -115.195615,
    latitude: 36.171462,
  },
  {
    id: 'CYB-2024-002',
    distancePrecision: 500,
    severity: 'medium',
    longitude: -94.556725,
    latitude: 39.104532,
  },
  {
    id: 'CYB-2024-003',
    distancePrecision: 100,
    severity: 'low',
    longitude: -73.998772,
    latitude: 40.717575,
  },
  {
    id: 'CYB-2024-004',
    distancePrecision: 50,
    severity: 'high',
    longitude: -87.773124,
    latitude: 41.786535,
  },
  {
    id: 'CYB-2024-005',
    distancePrecision: 300,
    severity: 'low',
    longitude: -122.293741,
    latitude: 47.545032,
  },
];

const BubbleLayerScaleLinear = () => {
  const initialViewState = {
    longitude: -101.465989,
    latitude: 40.822381,
    zoom: 3,
  };

  return (
    <MapView initialViewState={initialViewState} height={400}>
      <BubbleLayer
        data={cyberAttacks}
        radius={(cyberAttack: CyberAttackEvent) =>
          cyberAttack.distancePrecision
        }
        radiusRange={[10, 50]}
        scale="log"
        sizeInterpolation="zoom"
      />
    </MapView>
  );
};
```

#### Logarithmic Scaling

Alternatively, setting the `scale` prop to `'log'` applies logarithmic scaling to the bubble sizes. Logarithmic scaling is useful for representing data that spans several orders of magnitude, as it compresses the range of values into a more visually manageable scale.

Similar to linear scaling, logarithmic scaling also allows for specifying a `radiusRange` to define the minimum and maximum sizes for the bubble radius.

In this scaling mode, the `radius` prop must be callback function that dynamically calculates the radius based on the data points.

**BubbleLayerScaleLog**

```tsx
import { BubbleLayer, Location, MapView } from '@dynatrace/strato-geo';

type CyberAttackEvent = {
  id: string;
  distancePrecision: number;
  severity: 'high' | 'medium' | 'low';
} & Location;

const cyberAttacks: CyberAttackEvent[] = [
  {
    id: 'CYB-2024-001',
    distancePrecision: 250,
    severity: 'high',
    longitude: -115.195615,
    latitude: 36.171462,
  },
  {
    id: 'CYB-2024-002',
    distancePrecision: 500,
    severity: 'medium',
    longitude: -94.556725,
    latitude: 39.104532,
  },
  {
    id: 'CYB-2024-003',
    distancePrecision: 100,
    severity: 'low',
    longitude: -73.998772,
    latitude: 40.717575,
  },
  {
    id: 'CYB-2024-004',
    distancePrecision: 50,
    severity: 'high',
    longitude: -87.773124,
    latitude: 41.786535,
  },
  {
    id: 'CYB-2024-005',
    distancePrecision: 300,
    severity: 'low',
    longitude: -122.293741,
    latitude: 47.545032,
  },
];

const BubbleLayerScaleLog = () => {
  const initialViewState = {
    longitude: -101.465989,
    latitude: 40.822381,
    zoom: 3,
  };

  return (
    <MapView initialViewState={initialViewState} height={400}>
      <BubbleLayer
        data={cyberAttacks}
        radius={(cyberAttack: CyberAttackEvent) =>
          cyberAttack.distancePrecision
        }
        radiusRange={[10, 50]}
        scale="log"
      />
    </MapView>
  );
};
```

#### No Scaling

In contrast, when the scale prop is set to `'none'`, no automatic scaling is applied to the bubble size. A constant number must be provided for the `radius` prop to set the size of all bubbles uniformly, or a callback function that will be run for each data point and the returned value used as a radius. When `radius` prop is not set, the default radius of 12px will be applied.

Be aware, that the `radiusRange` prop is not supported in `none` scaling mode because it's not possible to derive the scaling mechanism for the provided range.

### Tooltip

The `BubbleLayer` component displays a tooltip by default when hovering over a data point. By default, the tooltip will display the location information of the hovered bubble, but [it can be heavily customized](https://developer.dynatrace.com/design/data-visualizations/geo-maps/MapView/Tooltip.md#customize-tooltip).

**BubbleLayerTooltip**

```tsx
import {
  BubbleLayer,
  BubbleLayerTooltipData,
  Location,
  MapView,
  Tooltip,
  TooltipAtoms,
} from '@dynatrace/strato-geo';
import { AttackIcon } from '@dynatrace/strato-icons';

type CyberAttackEvent = {
  id: string;
  distancePrecision: number;
  severity: 'high' | 'medium' | 'low';
} & Location;

const cyberAttacks: CyberAttackEvent[] = [
  {
    id: 'CYB-2024-001',
    distancePrecision: 250,
    severity: 'high',
    longitude: -115.195615,
    latitude: 36.171462,
  },
  {
    id: 'CYB-2024-002',
    distancePrecision: 500,
    severity: 'medium',
    longitude: -94.556725,
    latitude: 39.104532,
  },
  {
    id: 'CYB-2024-003',
    distancePrecision: 100,
    severity: 'low',
    longitude: -73.998772,
    latitude: 40.717575,
  },
  {
    id: 'CYB-2024-004',
    distancePrecision: 50,
    severity: 'high',
    longitude: -87.773124,
    latitude: 41.786535,
  },
  {
    id: 'CYB-2024-005',
    distancePrecision: 300,
    severity: 'low',
    longitude: -122.293741,
    latitude: 47.545032,
  },
];

const BubbleLayerTooltip = () => {
  const initialViewState = {
    longitude: -101.465989,
    latitude: 40.822381,
    zoom: 2,
  };

  return (
    <MapView height={400} initialViewState={initialViewState}>
      <BubbleLayer
        data={cyberAttacks}
        radius={(cyberAttack: CyberAttackEvent) =>
          cyberAttack.distancePrecision
        }
      >
        <BubbleLayer.Tooltip>
          {(
            closestAttack: BubbleLayerTooltipData<CyberAttackEvent>,
            cyberAttacks: BubbleLayerTooltipData<CyberAttackEvent>[],
          ) => {
            return (
              <>
                <Tooltip.Header>
                  <Tooltip.Item>
                    <Tooltip.Symbol>
                      <AttackIcon />
                    </Tooltip.Symbol>
                    <Tooltip.Content>
                      <Tooltip.Text variant="secondary">
                        {closestAttack.data.id}
                      </Tooltip.Text>
                    </Tooltip.Content>
                    <Tooltip.Value>
                      <TooltipAtoms.Chip>{`${closestAttack.data.severity} severity`}</TooltipAtoms.Chip>
                    </Tooltip.Value>
                  </Tooltip.Item>
                </Tooltip.Header>
                <Tooltip.Body
                  virtualization={false}
                  style={{ width: '95%', padding: '2px 8px' }}
                >
                  {cyberAttacks.length > 0 ? (
                    cyberAttacks.map((cyberAttack, idx) => {
                      return (
                        <Tooltip.Item
                          key={`${cyberAttack.data.id}${idx}`}
                          style={{ padding: '2px 0' }}
                        >
                          <Tooltip.Content>
                            {cyberAttack.data.id}
                          </Tooltip.Content>
                          <Tooltip.Value variant="chip">
                            {`${cyberAttack.data.severity} severity`}
                          </Tooltip.Value>
                        </Tooltip.Item>
                      );
                    })
                  ) : (
                    <Tooltip.Item style={{ padding: '2px 0' }}>
                      <Tooltip.Content>No other attacks</Tooltip.Content>
                    </Tooltip.Item>
                  )}
                </Tooltip.Body>
                <Tooltip.Footer>
                  <Tooltip.Item>
                    <Tooltip.Content>Total attacks:</Tooltip.Content>
                    <Tooltip.Value variant="chip">
                      {cyberAttacks.length + 1}
                    </Tooltip.Value>
                  </Tooltip.Item>
                </Tooltip.Footer>
              </>
            );
          }}
        </BubbleLayer.Tooltip>
      </BubbleLayer>
    </MapView>
  );
};
```

#### Custom tooltip

Pass a render function as the `BubbleLayer.Tooltip` slot children to take full control over what is displayed when a bubble is hovered. The render function receives two arguments:

1. `closestBubble` — a `BubbleLayerTooltipData<T>` object for the bubble nearest to the cursor.
2. `nearbyBubbles` — an array of `BubbleLayerTooltipData<T>` objects for any neighbouring bubbles that overlap the hovered position.

Each `BubbleLayerTooltipData<T>` exposes `color`, `radius`, and `data` (the original data point with `latitude`, `longitude`, and any extra properties you provided).

You can compose the tooltip using `ChartTooltip` primitives (or any custom markup) — exactly the same building blocks used by other Strato charts.

**BubbleLayerCustomTooltip**

```tsx
import { _OverlayTooltip as ChartTooltip } from '@dynatrace/strato-components/charts';
import {
  BubbleLayer,
  type BubbleLayerTooltipData,
  type Location,
  MapView,
} from '@dynatrace/strato-geo';
import { LocationMarkerFilledIcon } from '@dynatrace/strato-icons';

type StoreLocation = {
  name: string;
  revenue: number;
} & Location;

const stores: StoreLocation[] = [
  {
    name: 'Las Vegas Store',
    revenue: 850000,
    longitude: -115.195615,
    latitude: 36.171462,
  },
  {
    name: 'Kansas City Store',
    revenue: 350000,
    longitude: -94.556725,
    latitude: 39.104532,
  },
  {
    name: 'New York Store',
    revenue: 1200000,
    longitude: -73.998772,
    latitude: 40.717575,
  },
  {
    name: 'Chicago Store',
    revenue: 680000,
    longitude: -87.773124,
    latitude: 41.786535,
  },
  {
    name: 'Seattle Store',
    revenue: 420000,
    longitude: -122.293741,
    latitude: 47.545032,
  },
];

const BubbleLayerCustomTooltip = () => {
  const initialViewState = {
    longitude: -101.465989,
    latitude: 40.822381,
    zoom: 2,
  };

  return (
    <MapView height={400} initialViewState={initialViewState}>
      <BubbleLayer
        data={stores}
        radius={(store: StoreLocation) => store.revenue / 10000}
      >
        <BubbleLayer.Tooltip>
          {(
            closestStore: BubbleLayerTooltipData<StoreLocation>,
            nearbyStores: BubbleLayerTooltipData<StoreLocation>[],
          ) => (
            <>
              <ChartTooltip.SeriesItem
                icon={<LocationMarkerFilledIcon />}
                name={closestStore.data.name}
                value={`$${(closestStore.data.revenue / 1000).toFixed(0)}k`}
                iconStyle="large"
              />
              {nearbyStores.map((store) => (
                <ChartTooltip.SeriesItem
                  key={store.data.name}
                  color={store.color}
                  name={store.data.name}
                  value={`$${(store.data.revenue / 1000).toFixed(0)}k`}
                />
              ))}
            </>
          )}
        </BubbleLayer.Tooltip>
      </BubbleLayer>
    </MapView>
  );
};
```

### Coloring

The `BubbleLayer` supports two ways of color configuration: granular configuration using the `color` prop, or using a one of the available legend subcomponents (e.g. `SequentialLegend`, `ThresholdLegend`, or `CategoricalLegend`).

**Note:** Detailed information about coloring can be found in the `MapView` documentation page under the `Coloring` section.

### Granular color configuration

For a granular color customization, layer's `color` prop should be used.

**BubbleLayerCustomColor**

```tsx
import Colors from '@dynatrace/strato-design-tokens/colors';
import { BubbleLayer, Location, MapView } from '@dynatrace/strato-geo';

type CyberAttackEvent = {
  id: string;
  distancePrecision: number;
  severity: 'high' | 'medium' | 'low';
} & Location;

const cyberAttacks: CyberAttackEvent[] = [
  {
    id: 'CYB-2024-001',
    distancePrecision: 85,
    severity: 'high',
    longitude: -115.195615,
    latitude: 36.171462,
  },
  {
    id: 'CYB-2024-002',
    distancePrecision: 35,
    severity: 'medium',
    longitude: -94.556725,
    latitude: 39.104532,
  },
  {
    id: 'CYB-2024-003',
    distancePrecision: 40,
    severity: 'low',
    longitude: -73.998772,
    latitude: 40.717575,
  },
  {
    id: 'CYB-2024-004',
    distancePrecision: 50,
    severity: 'high',
    longitude: -87.773124,
    latitude: 41.786535,
  },
  {
    id: 'CYB-2024-005',
    distancePrecision: 60,
    severity: 'low',
    longitude: -122.293741,
    latitude: 47.545032,
  },
];

const BubbleLayerCustomColor = () => {
  const initialViewState = {
    longitude: -101.465989,
    latitude: 40.822381,
    zoom: 3,
  };
  const callbackColor = (attack: CyberAttackEvent) => {
    if (attack.severity === 'low') {
      return Colors.Charts.Threshold.Good.Default;
    } else if (attack.severity === 'medium') {
      return Colors.Charts.Threshold.Warning.Default;
    } else {
      return Colors.Charts.Threshold.Bad.Default;
    }
  };

  return (
    <MapView initialViewState={initialViewState} height={400}>
      <BubbleLayer
        data={cyberAttacks}
        color={callbackColor}
        radius={(cyberAttack: CyberAttackEvent) =>
          cyberAttack.distancePrecision
        }
        sizeInterpolation="zoom"
      />
    </MapView>
  );
};
```

### Color configuration using a legend

To connect a data layer to the legend, a `color` property of the layer should be set to `legend` string.

#### Sequential legend

**BubbleLayerSequentialLegendColor**

```tsx
import {
  BubbleLayer,
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

const BubbleLayerSequentialLegendColor = () => {
  return (
    <MapView height={400}>
      <BubbleLayer
        data={earthquakes}
        color="legend"
        valueAccessor="magnitude"
        radius={({ magnitude }) => magnitude * 3}
        scale="none"
      />
      <SequentialLegend min={0} max={8} colorPalette="blue" />
    </MapView>
  );
};
```

#### Threshold legend

**BubbleLayerThresholdLegendColor**

```tsx
import Colors from '@dynatrace/strato-design-tokens/colors';
import {
  BubbleLayer,
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

const BubbleLayerThresholdLegendColor = () => {
  return (
    <MapView height={400}>
      <BubbleLayer
        data={earthquakes}
        color="legend"
        valueAccessor="magnitude"
        radius={({ magnitude }) => magnitude * 3}
        scale="none"
      />
      <ThresholdLegend
        ranges={[
          {
            from: 0,
            to: 1.8,
            color: Colors.Charts.Sequential.Petrol.Color09.Default,
          },
          {
            from: 1.8,
            to: 5,
            color: Colors.Charts.Sequential.Petrol.Color06.Default,
          },
          {
            from: 5,
            to: 6.5,
            color: Colors.Charts.Sequential.Petrol.Color01.Default,
          },
        ]}
      />
    </MapView>
  );
};
```

#### Categorical legend

**BubbleLayerCategoricalLegendColor**

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

const BubbleLayerCategoricalLegendColor = () => {
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
      <BubbleLayer
        data={categoricalData}
        color="legend"
        valueAccessor="status"
        radius={({ magnitude }) => magnitude * 5}
        scale="none"
      />
      <CategoricalLegend colorPalette={colorPalette} />
    </MapView>
  );
};
```
