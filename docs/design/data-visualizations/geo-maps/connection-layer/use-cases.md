## Use cases

Use the `ConnectionLayer` to visually represent connections between points on a world map. The `ConnectionLayer` subcomponent requires an array of `Connection` objects as its data prop.

Each `Connection` object must contain at least one `path`, which is defined by an array of data points. Each data point must have at least `latitude` and `longitude`.

The `ConnectionLayer` automatically connects the points in the paths with lines. It's commonly used to depict networks combined with geographical data, flight connections, or any type of connection between different locations.

```typescript
[
  {
    path: [
      {
        name: 'Tangier',
        latitude: 35.76727,
        longitude: -5.79975,
      },
      {
        name: 'Nantes',
        latitude: 47.218102,
        longitude: -1.5528,
      },
    ],
  },
  {
    path: [
      {
        name: 'Barcelona',
        latitude: 41.3828939,
        longitude: 2.1774322,
      },
      {
        name: 'Vienna',
        latitude: 48.2083537,
        longitude: 16.3725042,
      },
    ],
  },
];
```

Learn more about the data format [here](https://developer.dynatrace.com/design/data-visualizations/geo-maps/ConnectionLayer/props.md).

**ConnectionLayerSimple**

```tsx
import Colors from '@dynatrace/strato-design-tokens/colors';
import {
  Connection,
  ConnectionLayer,
  DotLayer,
  Location,
  MapView,
} from '@dynatrace/strato-geo';
import { AirplaneFilledIcon } from '@dynatrace/strato-icons';

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

type Flight = {
  airline?: string;
  origin?: string;
  destination?: string;
} & Location;

const flightConnections: Flight[] = [
  {
    longitude: 2.7042,
    latitude: 48.6739,
    origin: 'London',
    destination: 'Cagliari',
    airline: 'MY-AIR',
  },
  {
    latitude: 41.7992581,
    longitude: 12.5927407,
    origin: 'Rome',
    destination: 'London',
    airline: 'MY-AIR',
  },
];

const ConnectionLayerSimple = () => {
  const connectionLayerData: Connection[] = [
    {
      path: airportConnections.slice(2, 5).map((connection: Airport) => ({
        latitude: connection.latitude,
        longitude: connection.longitude,
      })),
    },
  ];

  return (
    <MapView height={400}>
      <ConnectionLayer
        data={connectionLayerData}
        color={Colors.Charts.Categorical.Color07.Default}
      />
      <DotLayer
        data={flightConnections.slice(0, 1)}
        shape={<AirplaneFilledIcon />}
        color={Colors.Icon.Primary.Default}
        bearing={-20}
      />
      <DotLayer
        data={flightConnections.slice(1)}
        shape={<AirplaneFilledIcon />}
        color={Colors.Icon.Primary.Default}
        bearing={-30}
      />
    </MapView>
  );
};
```

### Customize connection styling

Each `ConnectionLayer` exposes some additional properties as `line` and `connectionIndicator` to customize the layer's styling.

To alter the `color`, the `thickness`, or any of the other styles of a specific `Connection` you can utilize the corresponding props.

It is also possible to modify the way the connection is displayed, to do this, use the `curve` parameter, which allows two values `line` or `smooth`.

**ConnectionLayerCurved**

```tsx
import Colors from '@dynatrace/strato-design-tokens/colors';
import {
  Connection,
  ConnectionLayer,
  Location,
  MapView,
} from '@dynatrace/strato-geo';

const initialViewState = {
  longitude: 10,
  latitude: 45,
  zoom: 1.5,
};

type Airport = {
  name?: string;
} & Location;

const airportConnections: Airport[] = [
  {
    latitude: 41.29846943749848,
    longitude: 2.080653227280594,
    name: 'Barcelona',
  },
  { latitude: 48.258016616789874, longitude: 14.193000566580404, name: 'Linz' },
  {
    latitude: 40.00481152990936,
    longitude: 116.26517472674753,
    name: 'Beijing',
  },
];

const ConnectionLayerCurved = () => {
  const connectionLayerData: Connection[] = [
    {
      path: airportConnections.map((connection: Airport) => ({
        latitude: connection.latitude,
        longitude: connection.longitude,
      })),
    },
  ];

  return (
    <MapView initialViewState={initialViewState} height={400}>
      <ConnectionLayer
        data={connectionLayerData}
        curve="smooth"
        thickness={3}
        directionIndicator="end"
        color={Colors.Charts.Categorical.Color08.Default}
      />
    </MapView>
  );
};
```

**ConnectionLayerAirports**

```tsx
import { Children } from 'react';

import Colors from '@dynatrace/strato-design-tokens/colors';
import {
  Connection,
  ConnectionLayer,
  type ConnectionLayerProps,
  ConnectionLayerTooltipData,
  DotLayer,
  type DotLayerProps,
  Location,
  MapView,
  Tooltip,
} from '@dynatrace/strato-geo';
import { LocationMarkerFilledIcon } from '@dynatrace/strato-icons';

const firstTrip: Location[] = [
  // Linz
  { latitude: 48.261481548307685, longitude: 14.282092964821299 },
  // Yaounde
  { latitude: 3.8463527320568387, longitude: 11.538838181011585 },
];

const secondTrip: Location[] = [
  // Linz
  { latitude: 48.261481548307685, longitude: 14.282092964821299 },
  // Detroit
  { latitude: 42.21338714345631, longitude: -83.35240730169907 },
];

const thirdTrip: Location[] = [
  // Linz
  { latitude: 48.261481548307685, longitude: 14.282092964821299 },
  // Moscow
  { latitude: 55.973786255242835, longitude: 37.41349005016253 },
];

const fourthTrip: Location[] = [
  // Linz
  { latitude: 48.261481548307685, longitude: 14.282092964821299 },
  // Gothenburg
  { latitude: 57.66885635297306, longitude: 12.293011371697771 },
];

const fifthTrip: Location[] = [
  // Linz
  { latitude: 48.261481548307685, longitude: 14.282092964821299 },
  // Singapore
  { latitude: 1.3588292408429157, longitude: 103.99084481764653 },
];

const sixthTrip: Location[] = [
  // Linz
  { latitude: 48.261481548307685, longitude: 14.282092964821299 },
  // Reykijavik
  { latitude: 64.13193787833866, longitude: -21.946615573373258 },
];

const seventhTrip: Location[] = [
  // Linz
  { latitude: 48.261481548307685, longitude: 14.282092964821299 },
  // Nairobi
  { latitude: -1.303491384537122, longitude: 36.968236736051466 },
];

const eighthTrip: Location[] = [
  // Linz
  { latitude: 48.261481548307685, longitude: 14.282092964821299 },
  // Brasilia
  { latitude: -15.870484087328565, longitude: -47.919316217831685 },
];

const ninthTrip: Location[] = [
  // Linz
  { latitude: 48.261481548307685, longitude: 14.282092964821299 },
  // Los Angeles
  { latitude: 33.942482297014564, longitude: -118.40358374626068 },
];

const tenthTrip: Location[] = [
  // Linz
  { latitude: 48.261481548307685, longitude: 14.282092964821299 },
  // Tokyo
  { latitude: 35.54960267166456, longitude: 139.7798600538072 },
];

const eleventhTrip: Location[] = [
  // Linz
  { latitude: 48.261481548307685, longitude: 14.282092964821299 },
  // Mexico
  { latitude: 19.436278530430393, longitude: -99.07190830439944 },
];

const twelfthTrip: Location[] = [
  // Linz
  { latitude: 48.261481548307685, longitude: 14.282092964821299 },
  // Guatemala
  { latitude: 14.588115747303878, longitude: -90.5297787534256 },
];

const thirteenthTrip: Location[] = [
  // Linz
  { latitude: 48.261481548307685, longitude: 14.282092964821299 },
  // Lima
  { latitude: -12.022812831388372, longitude: -77.1076864681832 },
];

const fourteenthTrip: Location[] = [
  // Linz
  { latitude: 48.261481548307685, longitude: 14.282092964821299 },
  // Astana
  { latitude: 51.02731101744436, longitude: 71.46105413318249 },
];

const trips: Location[][] = [
  firstTrip,
  secondTrip,
  thirdTrip,
  fourthTrip,
  fifthTrip,
  sixthTrip,
  seventhTrip,
  eighthTrip,
  ninthTrip,
  tenthTrip,
  eleventhTrip,
  twelfthTrip,
  thirteenthTrip,
  fourteenthTrip,
];

const ConnectionLayerAirports = () => {
  const initialViewState = {
    longitude: 10,
    latitude: 45,
    zoom: 0.5,
  };

  interface ColoredConnection extends Connection {
    color: string;
  }

  const curve = 'smooth';

  const getTripConnectionData = (coords: Location[]): ColoredConnection[] => [
    {
      color: Colors.Charts.Categorical.Color08.Default,
      path: coords,
    },
  ];

  const getConnectionLayer = (
    props: ConnectionLayerProps<ColoredConnection>,
  ) => (
    <ConnectionLayer {...props}>
      <ConnectionLayer.Tooltip>
        {({ data }: ConnectionLayerTooltipData) => (
          <Tooltip.Body>
            {Children.toArray(
              data.path.map((coord) => (
                <Tooltip.GeoItem
                  latitude={coord.latitude}
                  longitude={coord.longitude}
                />
              )),
            )}
          </Tooltip.Body>
        )}
      </ConnectionLayer.Tooltip>
    </ConnectionLayer>
  );

  const getDotLayer = (props: DotLayerProps<Location>) => (
    <DotLayer {...props}>
      <DotLayer.Tooltip>
        {({ data: { latitude, longitude } }) => (
          <Tooltip.Body>
            <Tooltip.GeoItem latitude={latitude} longitude={longitude} />
          </Tooltip.Body>
        )}
      </DotLayer.Tooltip>
    </DotLayer>
  );

  return (
    <MapView initialViewState={initialViewState}>
      {Array.from({ length: trips.length }, (_, i) => {
        return getConnectionLayer({
          data: getTripConnectionData(trips[i]),
          curve: curve,
          thickness: 3,
        });
      })}
      {Array.from({ length: trips.length }, (_, i) => {
        return getDotLayer({
          data: trips[i].slice(1, trips[i].length),
          shape: <LocationMarkerFilledIcon />,
          shapeSize: 30,
          color: Colors.Charts.Categorical.Color04.Default,
        });
      })}
    </MapView>
  );
};
```

**ConnectionLayerStyle**

```tsx
import { Children } from 'react';

import Colors from '@dynatrace/strato-design-tokens/colors';
import {
  BubbleLayer,
  Connection,
  ConnectionLayer,
  type ConnectionLayerProps,
  type ConnectionLayerTooltipData,
  Location,
  MapView,
  Tooltip,
} from '@dynatrace/strato-geo';

const firstTrip: Location[] = [
  // Bologna
  { latitude: 44.534712318319414, longitude: 11.288685646435859 },
  // Madrid
  { latitude: 40.489579874107534, longitude: -3.563997469234174 },
];

const secondTrip: Location[] = [
  // Bologna
  { latitude: 44.534712318319414, longitude: 11.288685646435859 },
  // Lithuania
  { latitude: 55.302358673239844, longitude: 24.10233776040283 },
];

const thirdTrip: Location[] = [
  // Bologna
  { latitude: 44.534712318319414, longitude: 11.288685646435859 },
  // London
  { latitude: 51.48870585897685, longitude: -0.345250518347064 },
];

const fourthTrip: Location[] = [
  // Bologna
  { latitude: 44.534712318319414, longitude: 11.288685646435859 },
  // Norwey
  { latitude: 60.65759729840975, longitude: 13.282144620621846 },
];

const fifthTrip: Location[] = [
  // Bologna
  { latitude: 44.534712318319414, longitude: 11.288685646435859 },
  // Pakistan
  { latitude: 30.47009171626589, longitude: 67.0027058000812 },
];

const sixthTrip: Location[] = [
  // Bologna
  { latitude: 44.534712318319414, longitude: 11.288685646435859 },
  // Brasil
  { latitude: -18.92104479060964, longitude: -42.3921855862661 },
];

const seventhTrip: Location[] = [
  // Brasil
  { latitude: -18.92104479060964, longitude: -42.3921855862661 },
  // Nairobi
  { latitude: -12.022907242425234, longitude: -77.10804053918604 },
];

const eighthTrip: Location[] = [
  // Bologna
  { latitude: 44.534712318319414, longitude: 11.288685646435859 },
  // Washington
  { latitude: 38.95251558468332, longitude: -77.45872023374497 },
];

const ninthTrip: Location[] = [
  // Washington DC
  { latitude: 38.95251558468332, longitude: -77.45872023374497 },
  // Ontario
  { latitude: 50.503057370947374, longitude: -87.92268800331388 },
];

const tenthTrip: Location[] = [
  // Washington DC
  { latitude: 38.95251558468332, longitude: -77.45872023374497 },
  // Louisiana
  { latitude: 29.953494107311855, longitude: -90.34757888273126 },
];

const eleventhTrip: Location[] = [
  // Washington DC
  { latitude: 38.95251558468332, longitude: -77.45872023374497 },
  // Portland
  { latitude: 45.55601113869263, longitude: -122.84800527288391 },
];

const twelfthTrip: Location[] = [
  // Portland
  { latitude: 45.55601113869263, longitude: -122.84800527288391 },
  // San Diego
  { latitude: 32.73332802458343, longitude: -117.18963924509582 },
];

const thirteenthTrip: Location[] = [
  // Portland
  { latitude: 45.55601113869263, longitude: -122.84800527288391 },
  // Albuquerque
  { latitude: 35.04055772537379, longitude: -106.60925243205276 },
];

const fourteenthTrip: Location[] = [
  // Bologna
  { latitude: 44.534712318319414, longitude: 11.288685646435859 },
  // Melbourne
  { latitude: -37.670678003660015, longitude: 144.84351183896527 },
];

const fithteenthTrip: Location[] = [
  // Bologna
  { latitude: 44.534712318319414, longitude: 11.288685646435859 },
  // Siberia
  { latitude: 68.0953165066381, longitude: 133.3530076423636 },
];

const sixthteenthTrip: Location[] = [
  // Pakistan
  { latitude: 30.47009171626589, longitude: 67.0027058000812 },
  // Tokyo
  { latitude: 35.54965497577638, longitude: 139.7806217847792 },
];
const seventeenthTrip: Location[] = [
  // Pakistan
  { latitude: 30.47009171626589, longitude: 67.0027058000812 },
  // Papua
  { latitude: -1.2964171458516638, longitude: 140.09212916003375 },
];

const trips: Location[][] = [
  firstTrip,
  secondTrip,
  thirdTrip,
  fourthTrip,
  fifthTrip,
  sixthTrip,
  seventhTrip,
  eighthTrip,
  ninthTrip,
  tenthTrip,
  eleventhTrip,
  twelfthTrip,
  thirteenthTrip,
  fourteenthTrip,
  fithteenthTrip,
  sixthteenthTrip,
  seventeenthTrip,
];

const ConnectionLayerStyle = () => {
  const initialViewState = {
    longitude: 10,
    latitude: 45,
    zoom: 0.5,
  };

  interface ColoredConnection extends Connection {
    color: string;
  }

  const curve = 'smooth';

  const getTripConnectionData = (coords: Location[]): ColoredConnection[] => [
    {
      color: Colors.Charts.Categorical.Color04.Default,
      path: coords,
    },
  ];

  const getConnectionLayer = (
    props: ConnectionLayerProps<ColoredConnection>,
  ) => (
    <ConnectionLayer
      {...props}
      color={Colors.Charts.CategoricalThemed.BlueSteel.Color04.Default}
    >
      <ConnectionLayer.Tooltip>
        {({ data }: ConnectionLayerTooltipData) => (
          <Tooltip.Body>
            {Children.toArray(
              data.path.map((coord) => (
                <Tooltip.GeoItem
                  latitude={coord.latitude}
                  longitude={coord.longitude}
                />
              )),
            )}
          </Tooltip.Body>
        )}
      </ConnectionLayer.Tooltip>
    </ConnectionLayer>
  );

  const getBubbleLayer = () => (
    <BubbleLayer
      scale="none"
      data={trips.flatMap((trip) => {
        return trip;
      })}
    ></BubbleLayer>
  );

  return (
    <MapView height={400} initialViewState={initialViewState}>
      {getBubbleLayer()}
      {getConnectionLayer({
        data: getTripConnectionData(trips[0]),
        curve: curve,
        thickness: 3,
        line: 'solid',
        directionIndicator: 'both',
      })}
      {getConnectionLayer({
        data: getTripConnectionData(trips[1]),
        curve: curve,
        thickness: 3,
        line: 'solid',
        directionIndicator: 'end',
      })}
      {getConnectionLayer({
        data: getTripConnectionData(trips[2]),
        curve: curve,
        thickness: 3,
        line: 'solid',
        directionIndicator: 'end',
      })}
      {getConnectionLayer({
        data: getTripConnectionData(trips[3]),
        curve: curve,
        thickness: 3,
        line: 'solid',
        directionIndicator: 'end',
      })}
      {getConnectionLayer({
        data: getTripConnectionData(trips[4]),
        curve: curve,
        thickness: 3,
        line: 'dashed',
        directionIndicator: 'end',
      })}
      {getConnectionLayer({
        data: getTripConnectionData(trips[5]),
        curve: curve,
        thickness: 3,
        line: 'dashed',
        directionIndicator: 'both',
      })}
      {getConnectionLayer({
        data: getTripConnectionData(trips[6]),
        curve: curve,
        thickness: 3,
        line: 'solid',
        directionIndicator: 'end',
      })}
      {getConnectionLayer({
        data: getTripConnectionData(trips[7]),
        curve: curve,
        thickness: 3,
        line: 'dashed',
        directionIndicator: 'end',
      })}
      {getConnectionLayer({
        data: getTripConnectionData(trips[8]),
        curve: curve,
        thickness: 3,
        line: 'solid',
        directionIndicator: 'end',
      })}
      {getConnectionLayer({
        data: getTripConnectionData(trips[9]),
        curve: curve,
        thickness: 3,
        line: 'solid',
        directionIndicator: 'end',
      })}
      {getConnectionLayer({
        data: getTripConnectionData(trips[10]),
        curve: curve,
        thickness: 3,
        line: 'solid',
        directionIndicator: 'end',
      })}
      {getConnectionLayer({
        data: getTripConnectionData(trips[11]),
        curve: curve,
        thickness: 3,
        line: 'solid',
        directionIndicator: 'end',
      })}
      {getConnectionLayer({
        data: getTripConnectionData(trips[12]),
        curve: curve,
        thickness: 3,
        line: 'solid',
        directionIndicator: 'end',
      })}
      {getConnectionLayer({
        data: getTripConnectionData(trips[13]),
        curve: curve,
        thickness: 3,
        line: 'dashed',
        directionIndicator: 'end',
      })}
      {getConnectionLayer({
        data: getTripConnectionData(trips[14]),
        curve: curve,
        thickness: 3,
        line: 'dashed',
        directionIndicator: 'end',
      })}
      {getConnectionLayer({
        data: getTripConnectionData(trips[15]),
        curve: curve,
        thickness: 3,
        line: 'solid',
        directionIndicator: 'end',
      })}
      {getConnectionLayer({
        data: getTripConnectionData(trips[16]),
        curve: curve,
        thickness: 3,
        line: 'solid',
        directionIndicator: 'end',
      })}
    </MapView>
  );
};
```
