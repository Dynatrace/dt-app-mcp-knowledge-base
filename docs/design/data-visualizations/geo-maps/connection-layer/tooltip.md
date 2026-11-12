## Tooltip

The `Connection Layer` provides a tooltip that displays additional information about the connected points, when hovering over a connection. It can be [customized or hidden](https://developer.dynatrace.com/design/data-visualizations/geo-maps/MapView/Tooltip.md#tooltip).

**ConnectionLayerTooltip**

```tsx
import Colors from '@dynatrace/strato-design-tokens/colors';
import {
  ConnectionLayer,
  Location,
  MapView,
  Tooltip,
  TooltipAtoms,
} from '@dynatrace/strato-geo';
import { LocationMarkerFilledIcon } from '@dynatrace/strato-icons';

type Airport = {
  name?: string;
} & Location;

const airportConnections: Airport[] = [
  { latitude: 35.76727, longitude: -5.79975, name: 'Tanger' },
  { latitude: 47.218102, longitude: -1.5528, name: 'Nantes' },
  { latitude: 38.78101, longitude: 9.1360051 },
  { latitude: 51.8780363, longitude: 0.3701408 },
  { latitude: 41.7992581, longitude: 12.5927407 },
  { latitude: 51.5169901, longitude: 7.613085 },
  { latitude: 51.5169901, longitude: 9.613085 },
  { latitude: 55.5169901, longitude: 9.613085 },
];

const ConnectionLayerTooltip = () => {
  const firstConnectionLayerData: { path: (Location & { name: string })[] }[] =
    [
      {
        path: airportConnections.slice(0, 2).map((connection: Airport) => ({
          name: connection.name || '',
          latitude: connection.latitude,
          longitude: connection.longitude,
        })),
      },
    ];

  return (
    <MapView height={400}>
      <ConnectionLayer
        data={firstConnectionLayerData}
        directionIndicator="end"
        thickness={10}
        color={Colors.Charts.Categorical.Color04.Default}
      >
        <ConnectionLayer.Tooltip>
          {({ data }) => (
            <Tooltip.Body>
              <Tooltip.Item>
                <Tooltip.Symbol>
                  <LocationMarkerFilledIcon />
                </Tooltip.Symbol>
                <Tooltip.Content>
                  <Tooltip.Text>Origin</Tooltip.Text>
                </Tooltip.Content>
                <Tooltip.Value>
                  <TooltipAtoms.Chip>
                    {(data.path[0] as unknown as { name: string }).name}
                  </TooltipAtoms.Chip>
                </Tooltip.Value>
              </Tooltip.Item>

              <Tooltip.Item>
                <Tooltip.Symbol>
                  <LocationMarkerFilledIcon />
                </Tooltip.Symbol>
                <Tooltip.Content>
                  <Tooltip.Text>Destination</Tooltip.Text>
                </Tooltip.Content>
                <Tooltip.Value>
                  <TooltipAtoms.Chip>
                    {(data.path[1] as unknown as { name: string }).name}
                  </TooltipAtoms.Chip>
                </Tooltip.Value>
              </Tooltip.Item>
            </Tooltip.Body>
          )}
        </ConnectionLayer.Tooltip>
      </ConnectionLayer>
    </MapView>
  );
};
```

### Custom tooltip

Pass a render function as the `ConnectionLayer.Tooltip` slot children to take full control over what is displayed when a connection is hovered. The render function receives a single `ConnectionLayerTooltipData<T>` argument with the following properties:

- `color` — the resolved color of the hovered connection.
- `thickness` — the line thickness of the connection.
- `data` — the original connection object, including its `path` array of locations and any extra properties you provided.

You can compose the tooltip using `ChartTooltip` primitives (or any custom markup) — exactly the same building blocks used by other Strato charts.

**ConnectionLayerCustomTooltip**

```tsx
import { _OverlayTooltip as ChartTooltip } from '@dynatrace/strato-components/charts';
import {
  ConnectionLayer,
  type ConnectionLayerTooltipData,
  type Location,
  MapView,
} from '@dynatrace/strato-geo';
import { LocationMarkerFilledIcon } from '@dynatrace/strato-icons';

type NamedLocation = { name: string } & Location;

type NamedConnection = {
  path: NamedLocation[];
};

const connections: NamedConnection[] = [
  {
    path: [
      { name: 'Barcelona', latitude: 41.3828939, longitude: 2.1774322 },
      { name: 'Vienna', latitude: 48.2083537, longitude: 16.3725042 },
    ],
  },
  {
    path: [
      { name: 'Tangier', latitude: 35.76727, longitude: -5.79975 },
      { name: 'Nantes', latitude: 47.218102, longitude: -1.5528 },
    ],
  },
  {
    path: [
      { name: 'London', latitude: 51.5074, longitude: -0.1278 },
      { name: 'Berlin', latitude: 52.52, longitude: 13.405 },
    ],
  },
];

const ConnectionLayerCustomTooltip = () => {
  return (
    <MapView height={400}>
      <ConnectionLayer data={connections}>
        <ConnectionLayer.Tooltip>
          {(connectionData: ConnectionLayerTooltipData<NamedConnection>) => (
            <>
              {connectionData.data.path.map((point) => (
                <ChartTooltip.SeriesItem
                  key={point.name}
                  icon={<LocationMarkerFilledIcon />}
                  name={point.name}
                  value={`${point.latitude.toFixed(
                    2,
                  )}, ${point.longitude.toFixed(2)}`}
                  iconStyle="large"
                />
              ))}
            </>
          )}
        </ConnectionLayer.Tooltip>
      </ConnectionLayer>
    </MapView>
  );
};
```
