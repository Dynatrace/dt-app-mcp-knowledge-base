## Use cases

Use the `DotLayer` component to render data points as dots or simple shapes. The component accepts an array of data points as the data prop. Each data point must have `latitude` and `longitude` properties as the bare minimum.

```typescript
[
  {
    name: 'Vienna International Airport',
    latitude: 48.1049967,
    longitude: 16.5848987,
  },
  {
    name: 'Barcelona El Prat Josep Tarradellas Airport',
    latitude: 41.2969439,
    longitude: 2.0790474,
  },
];
```

Learn more about the data format [here](https://developer.dynatrace.com/design/data-visualizations/geo-maps/DotLayer/props.md).

**DotLayerSimple**

```tsx
import { DotLayer, Location, MapView } from '@dynatrace/strato-geo';

type Flight = {
  id: string;
  origin: {
    name: string;
    coord: [number, number];
  };
  destination: {
    name: string;
    coord: [number, number];
  };
  groundspeed: number;
  displayIdent: string;
  heading: number;
  landingTime: number;
  takeoffTime: number;
} & Location;

const flights: Flight[] = [
  {
    id: 'RYR5149-1691320792-schedule-320p:0',
    groundspeed: 168,
    landingTime: 1691498220,
    takeoffTime: 1691495220,
    heading: 180,
    destination: {
      name: "Orio al Serio Int'l",
      coord: [9.7042, 45.6739],
    },
    displayIdent: 'RYR5149',
    origin: {
      name: 'Zadar',
      coord: [15.3467, 44.1083],
    },
    longitude: 9.7042,
    latitude: 45.6739,
  },
  {
    id: 'RYR47-1691321723-schedule-1122p:0',
    groundspeed: 0,
    landingTime: 1691499600,
    takeoffTime: 1691494500,
    heading: 6,
    destination: {
      name: "Dublin Int'l",
      coord: [-6.2701, 53.4213],
    },
    displayIdent: 'RYR47',
    origin: {
      name: 'Brussels South Charleroi',
      coord: [4.4538, 50.4592],
    },
    longitude: -6.2413,
    latitude: 53.4197,
  },
  {
    id: 'RYR7875-1691329595-schedule-294p:0',
    groundspeed: 414,
    landingTime: 1691507100,
    takeoffTime: 1691502120,
    heading: 346,
    destination: {
      name: "Verona (Villafranca Int'l, Valerio Catullo)",
      coord: [10.8885, 45.3957],
    },
    displayIdent: 'RYR7875',
    origin: {
      name: "Palermo Int'l (Punta Raisi Falcone-Borsellino)",
      coord: [13.091, 38.176],
    },
    longitude: 12.4275,
    latitude: 41.1814,
  },
  {
    id: 'RYR5468-1691323791-schedule-1560p:0',
    groundspeed: 435,
    landingTime: 1691505000,
    takeoffTime: 1691497620,
    heading: 217,
    destination: {
      name: 'El Matorral',
      coord: [-13.8638, 28.4527],
    },
    displayIdent: 'RYR5468',
    origin: {
      name: 'Adolfo Suárez Madrid-Barajas',
      coord: [-3.5668, 40.4936],
    },
    longitude: -11.9583,
    latitude: 30.9932,
  },
  {
    id: 'RYR6837-1691324728-schedule-174p:0',
    groundspeed: 33,
    landingTime: 1691503560,
    takeoffTime: 1691497140,
    heading: 237,
    destination: {
      name: "Naples Int'l (Capodichino)",
      coord: [14.2908, 40.886],
    },
    displayIdent: 'RYR6837',
    origin: {
      name: 'Valencia',
      coord: [-0.4816, 39.4893],
    },
    longitude: 14.3141,
    latitude: 40.8971,
  },
  {
    id: 'RYR1276-1691323790-schedule-737p:0',
    groundspeed: 284,
    landingTime: 1691503920,
    takeoffTime: 1691496720,
    heading: 49,
    destination: {
      name: 'London Stansted',
      coord: [0.235, 51.885],
    },
    displayIdent: 'RYR1276',
    origin: {
      name: 'Porto / Oporto',
      coord: [-8.6814, 41.2481],
    },
    longitude: 0.2387,
    latitude: 52.0239,
  },
  {
    id: 'RYR2015-1691321723-schedule-1274p:0',
    groundspeed: 289,
    landingTime: 1691504940,
    takeoffTime: 1691496720,
    heading: 198,
    destination: {
      name: 'Arrecife (Lanzarote)',
      coord: [-13.6053, 28.9456],
    },
    displayIdent: 'RYR2015',
    origin: {
      name: 'Adolfo Suárez Madrid-Barajas',
      coord: [-3.5668, 40.4936],
    },
    longitude: -13.1414,
    latitude: 29.486,
  },
  {
    id: 'RYR7255-1691314788-schedule-107p:0',
    groundspeed: 1,
    landingTime: 1691495460,
    takeoffTime: 1691487660,
    heading: 11,
    destination: {
      name: 'Alicante',
      coord: [-0.5582, 38.2822],
    },
    displayIdent: 'RYR7255',
    origin: {
      name: 'Kerry (Farranfore)',
      coord: [-9.5238, 52.1809],
    },
    longitude: -0.5656,
    latitude: 38.2833,
  },
  {
    id: 'RYR6841-1691312928-schedule-455p:0',
    groundspeed: 2,
    landingTime: 1691500320,
    takeoffTime: 1691488680,
    heading: 6,
    destination: {
      name: "Dublin Int'l",
      coord: [-6.2701, 53.4213],
    },
    displayIdent: 'RYR6841',
    origin: {
      name: "Naples Int'l (Capodichino)",
      coord: [14.2908, 40.886],
    },
    longitude: -6.2431,
    latitude: 53.4198,
  },
  {
    id: 'RYR6213-1691316859-schedule-1264p:0',
    groundspeed: 5,
    landingTime: 1691499540,
    takeoffTime: 1691490900,
    heading: 97,
    destination: {
      name: 'Weeze',
      coord: [6.1422, 51.6024],
    },
    displayIdent: 'RYR6213',
    origin: {
      name: 'Alicante',
      coord: [-0.5582, 38.2822],
    },
    longitude: 6.1601,
    latitude: 51.602,
  },
  {
    id: 'RYR1605-1691323791-schedule-1518p:0',
    groundspeed: 8,
    landingTime: 1691502900,
    takeoffTime: 1691496900,
    heading: 108,
    destination: {
      name: "Ioannis Kapodistrias Int'l",
      coord: [19.9117, 39.6019],
    },
    displayIdent: 'RYR1605',
    origin: {
      name: 'Marseille Provence',
      coord: [5.2136, 43.4356],
    },
    longitude: 19.9146,
    latitude: 39.5924,
  },
  {
    id: 'RYR3702-1691320792-schedule-185p:0',
    groundspeed: 436,
    landingTime: 1691506800,
    takeoffTime: 1691493240,
    heading: 34,
    destination: {
      name: 'East Midlands',
      coord: [-1.3281, 52.8311],
    },
    displayIdent: 'RYR3702',
    origin: {
      name: 'El Matorral',
      coord: [-13.8638, 28.4527],
    },
    longitude: -2.0244,
    latitude: 48.7234,
  },
  {
    id: 'RYR427-1691325659-schedule-936p:0',
    groundspeed: 487,
    landingTime: 1691514300,
    takeoffTime: 1691499840,
    heading: 132,
    destination: {
      name: "Paphos Int'l",
      coord: [32.4857, 34.718],
    },
    displayIdent: 'RYR427',
    origin: {
      name: 'Newcastle',
      coord: [-1.6917, 55.0375],
    },
    longitude: 9.0058,
    latitude: 50.52,
  },
  {
    id: 'RYR5162-1691323791-schedule-1551p:0',
    groundspeed: 348,
    landingTime: 1691503800,
    takeoffTime: 1691497620,
    heading: 220,
    destination: {
      name: 'Saiss',
      coord: [-4.978, 33.9273],
    },
    displayIdent: 'RYR5162',
    origin: {
      name: 'Marseille Provence',
      coord: [5.2136, 43.4356],
    },
    longitude: -4.3995,
    latitude: 34.2949,
  },
  {
    id: 'RYR9042-1691322655-schedule-852p:0',
    groundspeed: 278,
    landingTime: 1691504400,
    takeoffTime: 1691496120,
    heading: 341,
    destination: {
      name: 'Maastricht Aachen',
      coord: [5.7701, 50.9117],
    },
    displayIdent: 'RYR9042',
    origin: {
      name: 'Alicante',
      coord: [-0.5582, 38.2822],
    },
    longitude: 6.0528,
    latitude: 49.9489,
  },
];

const DotLayerSimple = () => {
  return (
    <MapView height={400}>
      <DotLayer data={flights.slice(0, 10)} />
    </MapView>
  );
};
```

### Data point shapes and sizes

The `DotLayer` component supports various shapes for the data points using the `shape` prop. The supported shapes are `circle`, `square`, `diamond` `heart`, `cross`, `star`, `triangle` and `pin`. The default shape is `pin`. The pin act as a location marker and the tip of the pin will be placed at the location of the datapoint, instead of the center.

The size of the shape can be adjusted using the `shapeSize` prop, which receives a number (in pixels) as a value. The default shape size is 32 pixels.

**DotLayerShapes**

```tsx
import { DotLayer, Location, MapView } from '@dynatrace/strato-geo';

type Flight = {
  id: string;
  origin: {
    name: string;
    coord: [number, number];
  };
  destination: {
    name: string;
    coord: [number, number];
  };
  groundspeed: number;
  displayIdent: string;
  heading: number;
  landingTime: number;
  takeoffTime: number;
} & Location;

const flights: Flight[] = [
  {
    id: 'RYR5149-1691320792-schedule-320p:0',
    groundspeed: 168,
    landingTime: 1691498220,
    takeoffTime: 1691495220,
    heading: 180,
    destination: {
      name: "Orio al Serio Int'l",
      coord: [9.7042, 45.6739],
    },
    displayIdent: 'RYR5149',
    origin: {
      name: 'Zadar',
      coord: [15.3467, 44.1083],
    },
    longitude: 9.7042,
    latitude: 45.6739,
  },
  {
    id: 'RYR47-1691321723-schedule-1122p:0',
    groundspeed: 0,
    landingTime: 1691499600,
    takeoffTime: 1691494500,
    heading: 6,
    destination: {
      name: "Dublin Int'l",
      coord: [-6.2701, 53.4213],
    },
    displayIdent: 'RYR47',
    origin: {
      name: 'Brussels South Charleroi',
      coord: [4.4538, 50.4592],
    },
    longitude: -6.2413,
    latitude: 53.4197,
  },
  {
    id: 'RYR7875-1691329595-schedule-294p:0',
    groundspeed: 414,
    landingTime: 1691507100,
    takeoffTime: 1691502120,
    heading: 346,
    destination: {
      name: "Verona (Villafranca Int'l, Valerio Catullo)",
      coord: [10.8885, 45.3957],
    },
    displayIdent: 'RYR7875',
    origin: {
      name: "Palermo Int'l (Punta Raisi Falcone-Borsellino)",
      coord: [13.091, 38.176],
    },
    longitude: 12.4275,
    latitude: 41.1814,
  },
  {
    id: 'RYR5468-1691323791-schedule-1560p:0',
    groundspeed: 435,
    landingTime: 1691505000,
    takeoffTime: 1691497620,
    heading: 217,
    destination: {
      name: 'El Matorral',
      coord: [-13.8638, 28.4527],
    },
    displayIdent: 'RYR5468',
    origin: {
      name: 'Adolfo Suárez Madrid-Barajas',
      coord: [-3.5668, 40.4936],
    },
    longitude: -11.9583,
    latitude: 30.9932,
  },
  {
    id: 'RYR6837-1691324728-schedule-174p:0',
    groundspeed: 33,
    landingTime: 1691503560,
    takeoffTime: 1691497140,
    heading: 237,
    destination: {
      name: "Naples Int'l (Capodichino)",
      coord: [14.2908, 40.886],
    },
    displayIdent: 'RYR6837',
    origin: {
      name: 'Valencia',
      coord: [-0.4816, 39.4893],
    },
    longitude: 14.3141,
    latitude: 40.8971,
  },
  {
    id: 'RYR1276-1691323790-schedule-737p:0',
    groundspeed: 284,
    landingTime: 1691503920,
    takeoffTime: 1691496720,
    heading: 49,
    destination: {
      name: 'London Stansted',
      coord: [0.235, 51.885],
    },
    displayIdent: 'RYR1276',
    origin: {
      name: 'Porto / Oporto',
      coord: [-8.6814, 41.2481],
    },
    longitude: 0.2387,
    latitude: 52.0239,
  },
  {
    id: 'RYR2015-1691321723-schedule-1274p:0',
    groundspeed: 289,
    landingTime: 1691504940,
    takeoffTime: 1691496720,
    heading: 198,
    destination: {
      name: 'Arrecife (Lanzarote)',
      coord: [-13.6053, 28.9456],
    },
    displayIdent: 'RYR2015',
    origin: {
      name: 'Adolfo Suárez Madrid-Barajas',
      coord: [-3.5668, 40.4936],
    },
    longitude: -13.1414,
    latitude: 29.486,
  },
  {
    id: 'RYR7255-1691314788-schedule-107p:0',
    groundspeed: 1,
    landingTime: 1691495460,
    takeoffTime: 1691487660,
    heading: 11,
    destination: {
      name: 'Alicante',
      coord: [-0.5582, 38.2822],
    },
    displayIdent: 'RYR7255',
    origin: {
      name: 'Kerry (Farranfore)',
      coord: [-9.5238, 52.1809],
    },
    longitude: -0.5656,
    latitude: 38.2833,
  },
  {
    id: 'RYR6841-1691312928-schedule-455p:0',
    groundspeed: 2,
    landingTime: 1691500320,
    takeoffTime: 1691488680,
    heading: 6,
    destination: {
      name: "Dublin Int'l",
      coord: [-6.2701, 53.4213],
    },
    displayIdent: 'RYR6841',
    origin: {
      name: "Naples Int'l (Capodichino)",
      coord: [14.2908, 40.886],
    },
    longitude: -6.2431,
    latitude: 53.4198,
  },
  {
    id: 'RYR6213-1691316859-schedule-1264p:0',
    groundspeed: 5,
    landingTime: 1691499540,
    takeoffTime: 1691490900,
    heading: 97,
    destination: {
      name: 'Weeze',
      coord: [6.1422, 51.6024],
    },
    displayIdent: 'RYR6213',
    origin: {
      name: 'Alicante',
      coord: [-0.5582, 38.2822],
    },
    longitude: 6.1601,
    latitude: 51.602,
  },
  {
    id: 'RYR1605-1691323791-schedule-1518p:0',
    groundspeed: 8,
    landingTime: 1691502900,
    takeoffTime: 1691496900,
    heading: 108,
    destination: {
      name: "Ioannis Kapodistrias Int'l",
      coord: [19.9117, 39.6019],
    },
    displayIdent: 'RYR1605',
    origin: {
      name: 'Marseille Provence',
      coord: [5.2136, 43.4356],
    },
    longitude: 19.9146,
    latitude: 39.5924,
  },
  {
    id: 'RYR3702-1691320792-schedule-185p:0',
    groundspeed: 436,
    landingTime: 1691506800,
    takeoffTime: 1691493240,
    heading: 34,
    destination: {
      name: 'East Midlands',
      coord: [-1.3281, 52.8311],
    },
    displayIdent: 'RYR3702',
    origin: {
      name: 'El Matorral',
      coord: [-13.8638, 28.4527],
    },
    longitude: -2.0244,
    latitude: 48.7234,
  },
  {
    id: 'RYR427-1691325659-schedule-936p:0',
    groundspeed: 487,
    landingTime: 1691514300,
    takeoffTime: 1691499840,
    heading: 132,
    destination: {
      name: "Paphos Int'l",
      coord: [32.4857, 34.718],
    },
    displayIdent: 'RYR427',
    origin: {
      name: 'Newcastle',
      coord: [-1.6917, 55.0375],
    },
    longitude: 9.0058,
    latitude: 50.52,
  },
  {
    id: 'RYR5162-1691323791-schedule-1551p:0',
    groundspeed: 348,
    landingTime: 1691503800,
    takeoffTime: 1691497620,
    heading: 220,
    destination: {
      name: 'Saiss',
      coord: [-4.978, 33.9273],
    },
    displayIdent: 'RYR5162',
    origin: {
      name: 'Marseille Provence',
      coord: [5.2136, 43.4356],
    },
    longitude: -4.3995,
    latitude: 34.2949,
  },
  {
    id: 'RYR9042-1691322655-schedule-852p:0',
    groundspeed: 278,
    landingTime: 1691504400,
    takeoffTime: 1691496120,
    heading: 341,
    destination: {
      name: 'Maastricht Aachen',
      coord: [5.7701, 50.9117],
    },
    displayIdent: 'RYR9042',
    origin: {
      name: 'Alicante',
      coord: [-0.5582, 38.2822],
    },
    longitude: 6.0528,
    latitude: 49.9489,
  },
];

const DotLayerShapes = () => {
  return (
    <MapView height={400}>
      <DotLayer shape="diamond" data={flights.slice(0, 3)} />
      <DotLayer shape="star" data={flights.slice(3, 7)} shapeSize={48} />
      <DotLayer shape="square" data={flights.slice(7, 10)} shapeSize={16} />
      <DotLayer shape="heart" data={flights.slice(10, 12)} />
      <DotLayer shape="pin" data={flights.slice(12, 14)} />
      <DotLayer shape="cross" data={flights.slice(15)} />
    </MapView>
  );
};
```

Additionally, emojis, single character strings, and Strato icons are supported as data point shapes.

Note: Strato icons must be imported from `@dynatrace/strato-icons` namespace.

**DotLayerEmojisAndIcons**

```tsx
import { DotLayer, Location, MapView } from '@dynatrace/strato-geo';
import { AirplaneFilledIcon } from '@dynatrace/strato-icons';

type Flight = {
  id: string;
  origin: {
    name: string;
    coord: [number, number];
  };
  destination: {
    name: string;
    coord: [number, number];
  };
  groundspeed: number;
  displayIdent: string;
  heading: number;
  landingTime: number;
  takeoffTime: number;
} & Location;

const flights: Flight[] = [
  {
    id: 'RYR5149-1691320792-schedule-320p:0',
    groundspeed: 168,
    landingTime: 1691498220,
    takeoffTime: 1691495220,
    heading: 180,
    destination: {
      name: "Orio al Serio Int'l",
      coord: [9.7042, 45.6739],
    },
    displayIdent: 'RYR5149',
    origin: {
      name: 'Zadar',
      coord: [15.3467, 44.1083],
    },
    longitude: 9.7042,
    latitude: 45.6739,
  },
  {
    id: 'RYR47-1691321723-schedule-1122p:0',
    groundspeed: 0,
    landingTime: 1691499600,
    takeoffTime: 1691494500,
    heading: 6,
    destination: {
      name: "Dublin Int'l",
      coord: [-6.2701, 53.4213],
    },
    displayIdent: 'RYR47',
    origin: {
      name: 'Brussels South Charleroi',
      coord: [4.4538, 50.4592],
    },
    longitude: -6.2413,
    latitude: 53.4197,
  },
  {
    id: 'RYR7875-1691329595-schedule-294p:0',
    groundspeed: 414,
    landingTime: 1691507100,
    takeoffTime: 1691502120,
    heading: 346,
    destination: {
      name: "Verona (Villafranca Int'l, Valerio Catullo)",
      coord: [10.8885, 45.3957],
    },
    displayIdent: 'RYR7875',
    origin: {
      name: "Palermo Int'l (Punta Raisi Falcone-Borsellino)",
      coord: [13.091, 38.176],
    },
    longitude: 12.4275,
    latitude: 41.1814,
  },
  {
    id: 'RYR5468-1691323791-schedule-1560p:0',
    groundspeed: 435,
    landingTime: 1691505000,
    takeoffTime: 1691497620,
    heading: 217,
    destination: {
      name: 'El Matorral',
      coord: [-13.8638, 28.4527],
    },
    displayIdent: 'RYR5468',
    origin: {
      name: 'Adolfo Suárez Madrid-Barajas',
      coord: [-3.5668, 40.4936],
    },
    longitude: -11.9583,
    latitude: 30.9932,
  },
  {
    id: 'RYR6837-1691324728-schedule-174p:0',
    groundspeed: 33,
    landingTime: 1691503560,
    takeoffTime: 1691497140,
    heading: 237,
    destination: {
      name: "Naples Int'l (Capodichino)",
      coord: [14.2908, 40.886],
    },
    displayIdent: 'RYR6837',
    origin: {
      name: 'Valencia',
      coord: [-0.4816, 39.4893],
    },
    longitude: 14.3141,
    latitude: 40.8971,
  },
  {
    id: 'RYR1276-1691323790-schedule-737p:0',
    groundspeed: 284,
    landingTime: 1691503920,
    takeoffTime: 1691496720,
    heading: 49,
    destination: {
      name: 'London Stansted',
      coord: [0.235, 51.885],
    },
    displayIdent: 'RYR1276',
    origin: {
      name: 'Porto / Oporto',
      coord: [-8.6814, 41.2481],
    },
    longitude: 0.2387,
    latitude: 52.0239,
  },
  {
    id: 'RYR2015-1691321723-schedule-1274p:0',
    groundspeed: 289,
    landingTime: 1691504940,
    takeoffTime: 1691496720,
    heading: 198,
    destination: {
      name: 'Arrecife (Lanzarote)',
      coord: [-13.6053, 28.9456],
    },
    displayIdent: 'RYR2015',
    origin: {
      name: 'Adolfo Suárez Madrid-Barajas',
      coord: [-3.5668, 40.4936],
    },
    longitude: -13.1414,
    latitude: 29.486,
  },
  {
    id: 'RYR7255-1691314788-schedule-107p:0',
    groundspeed: 1,
    landingTime: 1691495460,
    takeoffTime: 1691487660,
    heading: 11,
    destination: {
      name: 'Alicante',
      coord: [-0.5582, 38.2822],
    },
    displayIdent: 'RYR7255',
    origin: {
      name: 'Kerry (Farranfore)',
      coord: [-9.5238, 52.1809],
    },
    longitude: -0.5656,
    latitude: 38.2833,
  },
  {
    id: 'RYR6841-1691312928-schedule-455p:0',
    groundspeed: 2,
    landingTime: 1691500320,
    takeoffTime: 1691488680,
    heading: 6,
    destination: {
      name: "Dublin Int'l",
      coord: [-6.2701, 53.4213],
    },
    displayIdent: 'RYR6841',
    origin: {
      name: "Naples Int'l (Capodichino)",
      coord: [14.2908, 40.886],
    },
    longitude: -6.2431,
    latitude: 53.4198,
  },
  {
    id: 'RYR6213-1691316859-schedule-1264p:0',
    groundspeed: 5,
    landingTime: 1691499540,
    takeoffTime: 1691490900,
    heading: 97,
    destination: {
      name: 'Weeze',
      coord: [6.1422, 51.6024],
    },
    displayIdent: 'RYR6213',
    origin: {
      name: 'Alicante',
      coord: [-0.5582, 38.2822],
    },
    longitude: 6.1601,
    latitude: 51.602,
  },
  {
    id: 'RYR1605-1691323791-schedule-1518p:0',
    groundspeed: 8,
    landingTime: 1691502900,
    takeoffTime: 1691496900,
    heading: 108,
    destination: {
      name: "Ioannis Kapodistrias Int'l",
      coord: [19.9117, 39.6019],
    },
    displayIdent: 'RYR1605',
    origin: {
      name: 'Marseille Provence',
      coord: [5.2136, 43.4356],
    },
    longitude: 19.9146,
    latitude: 39.5924,
  },
  {
    id: 'RYR3702-1691320792-schedule-185p:0',
    groundspeed: 436,
    landingTime: 1691506800,
    takeoffTime: 1691493240,
    heading: 34,
    destination: {
      name: 'East Midlands',
      coord: [-1.3281, 52.8311],
    },
    displayIdent: 'RYR3702',
    origin: {
      name: 'El Matorral',
      coord: [-13.8638, 28.4527],
    },
    longitude: -2.0244,
    latitude: 48.7234,
  },
  {
    id: 'RYR427-1691325659-schedule-936p:0',
    groundspeed: 487,
    landingTime: 1691514300,
    takeoffTime: 1691499840,
    heading: 132,
    destination: {
      name: "Paphos Int'l",
      coord: [32.4857, 34.718],
    },
    displayIdent: 'RYR427',
    origin: {
      name: 'Newcastle',
      coord: [-1.6917, 55.0375],
    },
    longitude: 9.0058,
    latitude: 50.52,
  },
  {
    id: 'RYR5162-1691323791-schedule-1551p:0',
    groundspeed: 348,
    landingTime: 1691503800,
    takeoffTime: 1691497620,
    heading: 220,
    destination: {
      name: 'Saiss',
      coord: [-4.978, 33.9273],
    },
    displayIdent: 'RYR5162',
    origin: {
      name: 'Marseille Provence',
      coord: [5.2136, 43.4356],
    },
    longitude: -4.3995,
    latitude: 34.2949,
  },
  {
    id: 'RYR9042-1691322655-schedule-852p:0',
    groundspeed: 278,
    landingTime: 1691504400,
    takeoffTime: 1691496120,
    heading: 341,
    destination: {
      name: 'Maastricht Aachen',
      coord: [5.7701, 50.9117],
    },
    displayIdent: 'RYR9042',
    origin: {
      name: 'Alicante',
      coord: [-0.5582, 38.2822],
    },
    longitude: 6.0528,
    latitude: 49.9489,
  },
];

const DotLayerEmojisAndIcons = () => {
  const airplaneIcon = <AirplaneFilledIcon />;

  return (
    <MapView height={400}>
      <DotLayer shape="✈️" data={flights.slice(0, 6)} />
      <DotLayer shape="A" data={flights.slice(6, 11)} shapeSize={40} />
      <DotLayer
        shape={airplaneIcon}
        data={flights.slice(11, 15)}
        shapeSize={40}
      />
    </MapView>
  );
};
```

### Icon background

The `DotLayer` component provides an optional feature to include a background for the rendered data points' icons. This feature enhances the visual representation of the data points on the map.

To enable the optional icon background, use the `background` prop when defining the `DotLayer`. The `background` prop can take a boolean, a string, or a callback function:

- If set to `false`, the icon background feature is disabled for the `DotLayer` and the default background is only shown on a data point hover.
- If set to `true`, the background color is visible without hovering, and the default background color is applied.
- If a string is provided, the feature is enabled with a custom background color specified by the CSS string or color token.
- When a callback function is provided, the function should return a string that specifies the background color for each data point.

**DotLayerIconBackground**

```tsx
import Colors from '@dynatrace/strato-design-tokens/colors';
import { DotLayer, Location, MapView } from '@dynatrace/strato-geo';
import { AirplaneFilledIcon } from '@dynatrace/strato-icons';

type Flight = {
  id: string;
  origin: {
    name: string;
    coord: [number, number];
  };
  destination: {
    name: string;
    coord: [number, number];
  };
  groundspeed: number;
  displayIdent: string;
  heading: number;
  landingTime: number;
  takeoffTime: number;
} & Location;

const flights: Flight[] = [
  {
    id: 'RYR5149-1691320792-schedule-320p:0',
    groundspeed: 168,
    landingTime: 1691498220,
    takeoffTime: 1691495220,
    heading: 180,
    destination: {
      name: "Orio al Serio Int'l",
      coord: [9.7042, 45.6739],
    },
    displayIdent: 'RYR5149',
    origin: {
      name: 'Zadar',
      coord: [15.3467, 44.1083],
    },
    longitude: 9.7042,
    latitude: 45.6739,
  },
  {
    id: 'RYR47-1691321723-schedule-1122p:0',
    groundspeed: 0,
    landingTime: 1691499600,
    takeoffTime: 1691494500,
    heading: 6,
    destination: {
      name: "Dublin Int'l",
      coord: [-6.2701, 53.4213],
    },
    displayIdent: 'RYR47',
    origin: {
      name: 'Brussels South Charleroi',
      coord: [4.4538, 50.4592],
    },
    longitude: -6.2413,
    latitude: 53.4197,
  },
  {
    id: 'RYR7875-1691329595-schedule-294p:0',
    groundspeed: 414,
    landingTime: 1691507100,
    takeoffTime: 1691502120,
    heading: 346,
    destination: {
      name: "Verona (Villafranca Int'l, Valerio Catullo)",
      coord: [10.8885, 45.3957],
    },
    displayIdent: 'RYR7875',
    origin: {
      name: "Palermo Int'l (Punta Raisi Falcone-Borsellino)",
      coord: [13.091, 38.176],
    },
    longitude: 12.4275,
    latitude: 41.1814,
  },
  {
    id: 'RYR5468-1691323791-schedule-1560p:0',
    groundspeed: 435,
    landingTime: 1691505000,
    takeoffTime: 1691497620,
    heading: 217,
    destination: {
      name: 'El Matorral',
      coord: [-13.8638, 28.4527],
    },
    displayIdent: 'RYR5468',
    origin: {
      name: 'Adolfo Suárez Madrid-Barajas',
      coord: [-3.5668, 40.4936],
    },
    longitude: -11.9583,
    latitude: 30.9932,
  },
  {
    id: 'RYR6837-1691324728-schedule-174p:0',
    groundspeed: 33,
    landingTime: 1691503560,
    takeoffTime: 1691497140,
    heading: 237,
    destination: {
      name: "Naples Int'l (Capodichino)",
      coord: [14.2908, 40.886],
    },
    displayIdent: 'RYR6837',
    origin: {
      name: 'Valencia',
      coord: [-0.4816, 39.4893],
    },
    longitude: 14.3141,
    latitude: 40.8971,
  },
  {
    id: 'RYR1276-1691323790-schedule-737p:0',
    groundspeed: 284,
    landingTime: 1691503920,
    takeoffTime: 1691496720,
    heading: 49,
    destination: {
      name: 'London Stansted',
      coord: [0.235, 51.885],
    },
    displayIdent: 'RYR1276',
    origin: {
      name: 'Porto / Oporto',
      coord: [-8.6814, 41.2481],
    },
    longitude: 0.2387,
    latitude: 52.0239,
  },
  {
    id: 'RYR2015-1691321723-schedule-1274p:0',
    groundspeed: 289,
    landingTime: 1691504940,
    takeoffTime: 1691496720,
    heading: 198,
    destination: {
      name: 'Arrecife (Lanzarote)',
      coord: [-13.6053, 28.9456],
    },
    displayIdent: 'RYR2015',
    origin: {
      name: 'Adolfo Suárez Madrid-Barajas',
      coord: [-3.5668, 40.4936],
    },
    longitude: -13.1414,
    latitude: 29.486,
  },
  {
    id: 'RYR7255-1691314788-schedule-107p:0',
    groundspeed: 1,
    landingTime: 1691495460,
    takeoffTime: 1691487660,
    heading: 11,
    destination: {
      name: 'Alicante',
      coord: [-0.5582, 38.2822],
    },
    displayIdent: 'RYR7255',
    origin: {
      name: 'Kerry (Farranfore)',
      coord: [-9.5238, 52.1809],
    },
    longitude: -0.5656,
    latitude: 38.2833,
  },
  {
    id: 'RYR6841-1691312928-schedule-455p:0',
    groundspeed: 2,
    landingTime: 1691500320,
    takeoffTime: 1691488680,
    heading: 6,
    destination: {
      name: "Dublin Int'l",
      coord: [-6.2701, 53.4213],
    },
    displayIdent: 'RYR6841',
    origin: {
      name: "Naples Int'l (Capodichino)",
      coord: [14.2908, 40.886],
    },
    longitude: -6.2431,
    latitude: 53.4198,
  },
  {
    id: 'RYR6213-1691316859-schedule-1264p:0',
    groundspeed: 5,
    landingTime: 1691499540,
    takeoffTime: 1691490900,
    heading: 97,
    destination: {
      name: 'Weeze',
      coord: [6.1422, 51.6024],
    },
    displayIdent: 'RYR6213',
    origin: {
      name: 'Alicante',
      coord: [-0.5582, 38.2822],
    },
    longitude: 6.1601,
    latitude: 51.602,
  },
  {
    id: 'RYR1605-1691323791-schedule-1518p:0',
    groundspeed: 8,
    landingTime: 1691502900,
    takeoffTime: 1691496900,
    heading: 108,
    destination: {
      name: "Ioannis Kapodistrias Int'l",
      coord: [19.9117, 39.6019],
    },
    displayIdent: 'RYR1605',
    origin: {
      name: 'Marseille Provence',
      coord: [5.2136, 43.4356],
    },
    longitude: 19.9146,
    latitude: 39.5924,
  },
  {
    id: 'RYR3702-1691320792-schedule-185p:0',
    groundspeed: 436,
    landingTime: 1691506800,
    takeoffTime: 1691493240,
    heading: 34,
    destination: {
      name: 'East Midlands',
      coord: [-1.3281, 52.8311],
    },
    displayIdent: 'RYR3702',
    origin: {
      name: 'El Matorral',
      coord: [-13.8638, 28.4527],
    },
    longitude: -2.0244,
    latitude: 48.7234,
  },
  {
    id: 'RYR427-1691325659-schedule-936p:0',
    groundspeed: 487,
    landingTime: 1691514300,
    takeoffTime: 1691499840,
    heading: 132,
    destination: {
      name: "Paphos Int'l",
      coord: [32.4857, 34.718],
    },
    displayIdent: 'RYR427',
    origin: {
      name: 'Newcastle',
      coord: [-1.6917, 55.0375],
    },
    longitude: 9.0058,
    latitude: 50.52,
  },
  {
    id: 'RYR5162-1691323791-schedule-1551p:0',
    groundspeed: 348,
    landingTime: 1691503800,
    takeoffTime: 1691497620,
    heading: 220,
    destination: {
      name: 'Saiss',
      coord: [-4.978, 33.9273],
    },
    displayIdent: 'RYR5162',
    origin: {
      name: 'Marseille Provence',
      coord: [5.2136, 43.4356],
    },
    longitude: -4.3995,
    latitude: 34.2949,
  },
  {
    id: 'RYR9042-1691322655-schedule-852p:0',
    groundspeed: 278,
    landingTime: 1691504400,
    takeoffTime: 1691496120,
    heading: 341,
    destination: {
      name: 'Maastricht Aachen',
      coord: [5.7701, 50.9117],
    },
    displayIdent: 'RYR9042',
    origin: {
      name: 'Alicante',
      coord: [-0.5582, 38.2822],
    },
    longitude: 6.0528,
    latitude: 49.9489,
  },
];

const DotLayerIconBackground = () => {
  const airplaneIcon = <AirplaneFilledIcon />;

  const backgroundColorCallback = (flight: Flight): string => {
    if (flight.displayIdent === 'RYR3702') {
      return Colors.Charts.Sequential.Pear.Color04.Default;
    } else if (flight.displayIdent === 'RYR6213') {
      return Colors.Charts.Sequential.Moss.Color07.Default;
    } else if (flight.displayIdent === 'RYR1605') {
      return Colors.Charts.Sequential.Yellow.Color01.Default;
    }

    return '';
  };

  return (
    <MapView height={400}>
      <DotLayer shape="✈️" data={flights.slice(0, 6)} background={true} />
      <DotLayer shape="A" data={flights.slice(6, 9)} background="#1abc9c" />
      <DotLayer
        shape="🛩️"
        data={flights.slice(9, 12)}
        background={backgroundColorCallback}
      />
      <DotLayer shape={airplaneIcon} data={flights.slice(12, 15)} />
    </MapView>
  );
};
```

### Bearing

The `DotLayer` component supports rotation of the data points using the `bearing` prop. The `bearing` prop accepts a number or a callback that returns a number. The bearing number can between 0 and 360. The default value is 0.

**DotLayerBearing**

```tsx
import { DotLayer, Location, MapView } from '@dynatrace/strato-geo';
import { AirplaneFilledIcon } from '@dynatrace/strato-icons';

type Flight = {
  id: string;
  origin: {
    name: string;
    coord: [number, number];
  };
  destination: {
    name: string;
    coord: [number, number];
  };
  groundspeed: number;
  displayIdent: string;
  heading: number;
  landingTime: number;
  takeoffTime: number;
} & Location;

const flights: Flight[] = [
  {
    id: 'RYR5149-1691320792-schedule-320p:0',
    groundspeed: 168,
    landingTime: 1691498220,
    takeoffTime: 1691495220,
    heading: 180,
    destination: {
      name: "Orio al Serio Int'l",
      coord: [9.7042, 45.6739],
    },
    displayIdent: 'RYR5149',
    origin: {
      name: 'Zadar',
      coord: [15.3467, 44.1083],
    },
    longitude: 9.7042,
    latitude: 45.6739,
  },
  {
    id: 'RYR47-1691321723-schedule-1122p:0',
    groundspeed: 0,
    landingTime: 1691499600,
    takeoffTime: 1691494500,
    heading: 6,
    destination: {
      name: "Dublin Int'l",
      coord: [-6.2701, 53.4213],
    },
    displayIdent: 'RYR47',
    origin: {
      name: 'Brussels South Charleroi',
      coord: [4.4538, 50.4592],
    },
    longitude: -6.2413,
    latitude: 53.4197,
  },
  {
    id: 'RYR7875-1691329595-schedule-294p:0',
    groundspeed: 414,
    landingTime: 1691507100,
    takeoffTime: 1691502120,
    heading: 346,
    destination: {
      name: "Verona (Villafranca Int'l, Valerio Catullo)",
      coord: [10.8885, 45.3957],
    },
    displayIdent: 'RYR7875',
    origin: {
      name: "Palermo Int'l (Punta Raisi Falcone-Borsellino)",
      coord: [13.091, 38.176],
    },
    longitude: 12.4275,
    latitude: 41.1814,
  },
  {
    id: 'RYR5468-1691323791-schedule-1560p:0',
    groundspeed: 435,
    landingTime: 1691505000,
    takeoffTime: 1691497620,
    heading: 217,
    destination: {
      name: 'El Matorral',
      coord: [-13.8638, 28.4527],
    },
    displayIdent: 'RYR5468',
    origin: {
      name: 'Adolfo Suárez Madrid-Barajas',
      coord: [-3.5668, 40.4936],
    },
    longitude: -11.9583,
    latitude: 30.9932,
  },
  {
    id: 'RYR6837-1691324728-schedule-174p:0',
    groundspeed: 33,
    landingTime: 1691503560,
    takeoffTime: 1691497140,
    heading: 237,
    destination: {
      name: "Naples Int'l (Capodichino)",
      coord: [14.2908, 40.886],
    },
    displayIdent: 'RYR6837',
    origin: {
      name: 'Valencia',
      coord: [-0.4816, 39.4893],
    },
    longitude: 14.3141,
    latitude: 40.8971,
  },
  {
    id: 'RYR1276-1691323790-schedule-737p:0',
    groundspeed: 284,
    landingTime: 1691503920,
    takeoffTime: 1691496720,
    heading: 49,
    destination: {
      name: 'London Stansted',
      coord: [0.235, 51.885],
    },
    displayIdent: 'RYR1276',
    origin: {
      name: 'Porto / Oporto',
      coord: [-8.6814, 41.2481],
    },
    longitude: 0.2387,
    latitude: 52.0239,
  },
  {
    id: 'RYR2015-1691321723-schedule-1274p:0',
    groundspeed: 289,
    landingTime: 1691504940,
    takeoffTime: 1691496720,
    heading: 198,
    destination: {
      name: 'Arrecife (Lanzarote)',
      coord: [-13.6053, 28.9456],
    },
    displayIdent: 'RYR2015',
    origin: {
      name: 'Adolfo Suárez Madrid-Barajas',
      coord: [-3.5668, 40.4936],
    },
    longitude: -13.1414,
    latitude: 29.486,
  },
  {
    id: 'RYR7255-1691314788-schedule-107p:0',
    groundspeed: 1,
    landingTime: 1691495460,
    takeoffTime: 1691487660,
    heading: 11,
    destination: {
      name: 'Alicante',
      coord: [-0.5582, 38.2822],
    },
    displayIdent: 'RYR7255',
    origin: {
      name: 'Kerry (Farranfore)',
      coord: [-9.5238, 52.1809],
    },
    longitude: -0.5656,
    latitude: 38.2833,
  },
  {
    id: 'RYR6841-1691312928-schedule-455p:0',
    groundspeed: 2,
    landingTime: 1691500320,
    takeoffTime: 1691488680,
    heading: 6,
    destination: {
      name: "Dublin Int'l",
      coord: [-6.2701, 53.4213],
    },
    displayIdent: 'RYR6841',
    origin: {
      name: "Naples Int'l (Capodichino)",
      coord: [14.2908, 40.886],
    },
    longitude: -6.2431,
    latitude: 53.4198,
  },
  {
    id: 'RYR6213-1691316859-schedule-1264p:0',
    groundspeed: 5,
    landingTime: 1691499540,
    takeoffTime: 1691490900,
    heading: 97,
    destination: {
      name: 'Weeze',
      coord: [6.1422, 51.6024],
    },
    displayIdent: 'RYR6213',
    origin: {
      name: 'Alicante',
      coord: [-0.5582, 38.2822],
    },
    longitude: 6.1601,
    latitude: 51.602,
  },
  {
    id: 'RYR1605-1691323791-schedule-1518p:0',
    groundspeed: 8,
    landingTime: 1691502900,
    takeoffTime: 1691496900,
    heading: 108,
    destination: {
      name: "Ioannis Kapodistrias Int'l",
      coord: [19.9117, 39.6019],
    },
    displayIdent: 'RYR1605',
    origin: {
      name: 'Marseille Provence',
      coord: [5.2136, 43.4356],
    },
    longitude: 19.9146,
    latitude: 39.5924,
  },
  {
    id: 'RYR3702-1691320792-schedule-185p:0',
    groundspeed: 436,
    landingTime: 1691506800,
    takeoffTime: 1691493240,
    heading: 34,
    destination: {
      name: 'East Midlands',
      coord: [-1.3281, 52.8311],
    },
    displayIdent: 'RYR3702',
    origin: {
      name: 'El Matorral',
      coord: [-13.8638, 28.4527],
    },
    longitude: -2.0244,
    latitude: 48.7234,
  },
  {
    id: 'RYR427-1691325659-schedule-936p:0',
    groundspeed: 487,
    landingTime: 1691514300,
    takeoffTime: 1691499840,
    heading: 132,
    destination: {
      name: "Paphos Int'l",
      coord: [32.4857, 34.718],
    },
    displayIdent: 'RYR427',
    origin: {
      name: 'Newcastle',
      coord: [-1.6917, 55.0375],
    },
    longitude: 9.0058,
    latitude: 50.52,
  },
  {
    id: 'RYR5162-1691323791-schedule-1551p:0',
    groundspeed: 348,
    landingTime: 1691503800,
    takeoffTime: 1691497620,
    heading: 220,
    destination: {
      name: 'Saiss',
      coord: [-4.978, 33.9273],
    },
    displayIdent: 'RYR5162',
    origin: {
      name: 'Marseille Provence',
      coord: [5.2136, 43.4356],
    },
    longitude: -4.3995,
    latitude: 34.2949,
  },
  {
    id: 'RYR9042-1691322655-schedule-852p:0',
    groundspeed: 278,
    landingTime: 1691504400,
    takeoffTime: 1691496120,
    heading: 341,
    destination: {
      name: 'Maastricht Aachen',
      coord: [5.7701, 50.9117],
    },
    displayIdent: 'RYR9042',
    origin: {
      name: 'Alicante',
      coord: [-0.5582, 38.2822],
    },
    longitude: 6.0528,
    latitude: 49.9489,
  },
];

const DotLayerBearing = () => {
  const airplaneIcon = <AirplaneFilledIcon />;
  const numberBearing = 30;
  const callbackBearing = ({ heading }: Flight) => heading;

  return (
    <MapView height={400}>
      <DotLayer shape="✈️" data={flights.slice(0, 6)} bearing={numberBearing} />
      <DotLayer shape="A" data={flights.slice(6, 11)} />
      <DotLayer
        shape={airplaneIcon}
        data={flights.slice(11, 16)}
        bearing={callbackBearing}
      />
    </MapView>
  );
};
```

### Tooltip

The `DotLayer` component displays a tooltip by default when hovering over a data point.

By default, the tooltip will display the location information of the hovered point, but [it can be heavily customized](https://developer.dynatrace.com/design/data-visualizations/geo-maps/MapView/Tooltip.md#customize-tooltip).

**DotLayerTooltip**

```tsx
import {
  DotLayer,
  DotLayerTooltipData,
  Location,
  MapView,
  Tooltip,
} from '@dynatrace/strato-geo';
import { AirplaneFilledIcon } from '@dynatrace/strato-icons';

type Flight = {
  id: string;
  origin: {
    name: string;
    coord: [number, number];
  };
  destination: {
    name: string;
    coord: [number, number];
  };
  groundspeed: number;
  displayIdent: string;
  heading: number;
  landingTime: number;
  takeoffTime: number;
} & Location;

const flights: Flight[] = [
  {
    id: 'RYR5149-1691320792-schedule-320p:0',
    groundspeed: 168,
    landingTime: 1691498220,
    takeoffTime: 1691495220,
    heading: 180,
    destination: {
      name: "Orio al Serio Int'l",
      coord: [9.7042, 45.6739],
    },
    displayIdent: 'RYR5149',
    origin: {
      name: 'Zadar',
      coord: [15.3467, 44.1083],
    },
    longitude: 9.7042,
    latitude: 45.6739,
  },
  {
    id: 'RYR47-1691321723-schedule-1122p:0',
    groundspeed: 0,
    landingTime: 1691499600,
    takeoffTime: 1691494500,
    heading: 6,
    destination: {
      name: "Dublin Int'l",
      coord: [-6.2701, 53.4213],
    },
    displayIdent: 'RYR47',
    origin: {
      name: 'Brussels South Charleroi',
      coord: [4.4538, 50.4592],
    },
    longitude: -6.2413,
    latitude: 53.4197,
  },
  {
    id: 'RYR7875-1691329595-schedule-294p:0',
    groundspeed: 414,
    landingTime: 1691507100,
    takeoffTime: 1691502120,
    heading: 346,
    destination: {
      name: "Verona (Villafranca Int'l, Valerio Catullo)",
      coord: [10.8885, 45.3957],
    },
    displayIdent: 'RYR7875',
    origin: {
      name: "Palermo Int'l (Punta Raisi Falcone-Borsellino)",
      coord: [13.091, 38.176],
    },
    longitude: 12.4275,
    latitude: 41.1814,
  },
  {
    id: 'RYR5468-1691323791-schedule-1560p:0',
    groundspeed: 435,
    landingTime: 1691505000,
    takeoffTime: 1691497620,
    heading: 217,
    destination: {
      name: 'El Matorral',
      coord: [-13.8638, 28.4527],
    },
    displayIdent: 'RYR5468',
    origin: {
      name: 'Adolfo Suárez Madrid-Barajas',
      coord: [-3.5668, 40.4936],
    },
    longitude: -11.9583,
    latitude: 30.9932,
  },
  {
    id: 'RYR6837-1691324728-schedule-174p:0',
    groundspeed: 33,
    landingTime: 1691503560,
    takeoffTime: 1691497140,
    heading: 237,
    destination: {
      name: "Naples Int'l (Capodichino)",
      coord: [14.2908, 40.886],
    },
    displayIdent: 'RYR6837',
    origin: {
      name: 'Valencia',
      coord: [-0.4816, 39.4893],
    },
    longitude: 14.3141,
    latitude: 40.8971,
  },
  {
    id: 'RYR1276-1691323790-schedule-737p:0',
    groundspeed: 284,
    landingTime: 1691503920,
    takeoffTime: 1691496720,
    heading: 49,
    destination: {
      name: 'London Stansted',
      coord: [0.235, 51.885],
    },
    displayIdent: 'RYR1276',
    origin: {
      name: 'Porto / Oporto',
      coord: [-8.6814, 41.2481],
    },
    longitude: 0.2387,
    latitude: 52.0239,
  },
  {
    id: 'RYR2015-1691321723-schedule-1274p:0',
    groundspeed: 289,
    landingTime: 1691504940,
    takeoffTime: 1691496720,
    heading: 198,
    destination: {
      name: 'Arrecife (Lanzarote)',
      coord: [-13.6053, 28.9456],
    },
    displayIdent: 'RYR2015',
    origin: {
      name: 'Adolfo Suárez Madrid-Barajas',
      coord: [-3.5668, 40.4936],
    },
    longitude: -13.1414,
    latitude: 29.486,
  },
  {
    id: 'RYR7255-1691314788-schedule-107p:0',
    groundspeed: 1,
    landingTime: 1691495460,
    takeoffTime: 1691487660,
    heading: 11,
    destination: {
      name: 'Alicante',
      coord: [-0.5582, 38.2822],
    },
    displayIdent: 'RYR7255',
    origin: {
      name: 'Kerry (Farranfore)',
      coord: [-9.5238, 52.1809],
    },
    longitude: -0.5656,
    latitude: 38.2833,
  },
  {
    id: 'RYR6841-1691312928-schedule-455p:0',
    groundspeed: 2,
    landingTime: 1691500320,
    takeoffTime: 1691488680,
    heading: 6,
    destination: {
      name: "Dublin Int'l",
      coord: [-6.2701, 53.4213],
    },
    displayIdent: 'RYR6841',
    origin: {
      name: "Naples Int'l (Capodichino)",
      coord: [14.2908, 40.886],
    },
    longitude: -6.2431,
    latitude: 53.4198,
  },
  {
    id: 'RYR6213-1691316859-schedule-1264p:0',
    groundspeed: 5,
    landingTime: 1691499540,
    takeoffTime: 1691490900,
    heading: 97,
    destination: {
      name: 'Weeze',
      coord: [6.1422, 51.6024],
    },
    displayIdent: 'RYR6213',
    origin: {
      name: 'Alicante',
      coord: [-0.5582, 38.2822],
    },
    longitude: 6.1601,
    latitude: 51.602,
  },
  {
    id: 'RYR1605-1691323791-schedule-1518p:0',
    groundspeed: 8,
    landingTime: 1691502900,
    takeoffTime: 1691496900,
    heading: 108,
    destination: {
      name: "Ioannis Kapodistrias Int'l",
      coord: [19.9117, 39.6019],
    },
    displayIdent: 'RYR1605',
    origin: {
      name: 'Marseille Provence',
      coord: [5.2136, 43.4356],
    },
    longitude: 19.9146,
    latitude: 39.5924,
  },
  {
    id: 'RYR3702-1691320792-schedule-185p:0',
    groundspeed: 436,
    landingTime: 1691506800,
    takeoffTime: 1691493240,
    heading: 34,
    destination: {
      name: 'East Midlands',
      coord: [-1.3281, 52.8311],
    },
    displayIdent: 'RYR3702',
    origin: {
      name: 'El Matorral',
      coord: [-13.8638, 28.4527],
    },
    longitude: -2.0244,
    latitude: 48.7234,
  },
  {
    id: 'RYR427-1691325659-schedule-936p:0',
    groundspeed: 487,
    landingTime: 1691514300,
    takeoffTime: 1691499840,
    heading: 132,
    destination: {
      name: "Paphos Int'l",
      coord: [32.4857, 34.718],
    },
    displayIdent: 'RYR427',
    origin: {
      name: 'Newcastle',
      coord: [-1.6917, 55.0375],
    },
    longitude: 9.0058,
    latitude: 50.52,
  },
  {
    id: 'RYR5162-1691323791-schedule-1551p:0',
    groundspeed: 348,
    landingTime: 1691503800,
    takeoffTime: 1691497620,
    heading: 220,
    destination: {
      name: 'Saiss',
      coord: [-4.978, 33.9273],
    },
    displayIdent: 'RYR5162',
    origin: {
      name: 'Marseille Provence',
      coord: [5.2136, 43.4356],
    },
    longitude: -4.3995,
    latitude: 34.2949,
  },
  {
    id: 'RYR9042-1691322655-schedule-852p:0',
    groundspeed: 278,
    landingTime: 1691504400,
    takeoffTime: 1691496120,
    heading: 341,
    destination: {
      name: 'Maastricht Aachen',
      coord: [5.7701, 50.9117],
    },
    displayIdent: 'RYR9042',
    origin: {
      name: 'Alicante',
      coord: [-0.5582, 38.2822],
    },
    longitude: 6.0528,
    latitude: 49.9489,
  },
];

const DotLayerTooltip = () => {
  return (
    <MapView height={400}>
      <DotLayer
        data={flights.slice(0, 4)}
        shape={<AirplaneFilledIcon />}
        color="blue"
      >
        <DotLayer.Tooltip>
          {(dotData: DotLayerTooltipData<Flight>) => {
            const { data } = dotData;
            const timeDiff = data.landingTime - data.takeoffTime;
            const diffAsDate = new Date(timeDiff * 1000);
            return (
              <>
                <Tooltip.Header>
                  <Tooltip.Item>
                    <Tooltip.Symbol>
                      <AirplaneFilledIcon />
                    </Tooltip.Symbol>
                    <Tooltip.Content>
                      <Tooltip.Text>{data.displayIdent}</Tooltip.Text>
                    </Tooltip.Content>
                  </Tooltip.Item>
                  <Tooltip.Subheader>
                    <Tooltip.Value>{`${data.latitude}, ${data.longitude}`}</Tooltip.Value>
                  </Tooltip.Subheader>
                </Tooltip.Header>
                <Tooltip.Body>
                  <Tooltip.Item>
                    <Tooltip.Content>
                      <Tooltip.Text>Origin: </Tooltip.Text>
                    </Tooltip.Content>
                    <Tooltip.Value>{data.origin.name}</Tooltip.Value>
                  </Tooltip.Item>
                  <Tooltip.Item>
                    <Tooltip.Content>
                      <Tooltip.Text>Destination: </Tooltip.Text>
                    </Tooltip.Content>
                    <Tooltip.Value>{data.destination.name}</Tooltip.Value>
                  </Tooltip.Item>
                  <Tooltip.Item>
                    <Tooltip.Content>
                      <Tooltip.Text>Flight duration: </Tooltip.Text>
                    </Tooltip.Content>
                    <Tooltip.Value>{`${diffAsDate.getHours()}hs ${diffAsDate.getMinutes()}m`}</Tooltip.Value>
                  </Tooltip.Item>
                </Tooltip.Body>
                <Tooltip.Footer>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Tooltip.Text>Total:</Tooltip.Text>
                    <span>{flights.length}</span>
                  </div>
                </Tooltip.Footer>
              </>
            );
          }}
        </DotLayer.Tooltip>
      </DotLayer>
    </MapView>
  );
};
```

#### Custom tooltip

Pass a render function as the `DotLayer.Tooltip` slot children to take full control over what is displayed when a dot is hovered. The render function receives a single `DotLayerTooltipData<T>` argument with the following properties:

- `color` — the resolved color of the hovered dot.
- `bearing` — the rotation angle of the dot shape.
- `data` — the original data point, including `latitude`, `longitude`, and any extra properties you provided.

You can compose the tooltip using `ChartTooltip` primitives (or any custom markup) — exactly the same building blocks used by other Strato charts.

**DotLayerCustomTooltip**

```tsx
import { _OverlayTooltip as ChartTooltip } from '@dynatrace/strato-components/charts';
import {
  DotLayer,
  type DotLayerTooltipData,
  type Location,
  MapView,
} from '@dynatrace/strato-geo';
import {
  AirplaneFilledIcon,
  LocationMarkerFilledIcon,
} from '@dynatrace/strato-icons';

type Flight = {
  displayIdent: string;
  groundspeed: number;
  origin: string;
  destination: string;
} & Location;

const flights: Flight[] = [
  {
    displayIdent: 'RYR5149',
    groundspeed: 168,
    origin: 'Zadar',
    destination: "Orio al Serio Int'l",
    longitude: 9.7042,
    latitude: 45.6739,
  },
  {
    displayIdent: 'RYR47',
    groundspeed: 0,
    origin: 'Brussels South Charleroi',
    destination: "Dublin Int'l",
    longitude: -6.2413,
    latitude: 53.4197,
  },
  {
    displayIdent: 'RYR7875',
    groundspeed: 414,
    origin: "Palermo Int'l",
    destination: "Verona Int'l",
    longitude: 12.4275,
    latitude: 41.1814,
  },
  {
    displayIdent: 'RYR1276',
    groundspeed: 284,
    origin: 'Porto / Oporto',
    destination: 'London Stansted',
    longitude: 0.2387,
    latitude: 52.0239,
  },
];

const DotLayerCustomTooltip = () => {
  return (
    <MapView height={400}>
      <DotLayer
        data={flights}
        shape={<AirplaneFilledIcon />}
        color="blue"
        bearing={(flight: Flight) => (flight.groundspeed > 0 ? 45 : 0)}
      >
        <DotLayer.Tooltip>
          {(dotData: DotLayerTooltipData<Flight>) => {
            const { data, color } = dotData;
            return (
              <>
                <ChartTooltip.SeriesItem
                  icon={<AirplaneFilledIcon />}
                  name={data.displayIdent}
                  value={
                    data.groundspeed === 0
                      ? 'Landed'
                      : `${data.groundspeed} km/h`
                  }
                />
                <ChartTooltip.SeriesItem
                  icon={<LocationMarkerFilledIcon />}
                  name={`${data.latitude.toFixed(2)}, ${data.longitude.toFixed(
                    2,
                  )}`}
                  value=""
                />
                <ChartTooltip.SeriesItem
                  color={color}
                  name="Origin"
                  value={data.origin}
                />
                <ChartTooltip.SeriesItem
                  color={color}
                  name="Destination"
                  value={data.destination}
                />
              </>
            );
          }}
        </DotLayer.Tooltip>
      </DotLayer>
    </MapView>
  );
};
```

### Coloring

The `DotLayer` supports two ways of color configuration: granular configuration using the `color` prop, or using a one of the available legend subcomponents (e.g. `SequentialLegend`, `ThresholdLegend`, or `CategoricalLegend`).

**Note:** Detailed information about coloring can be found in the `MapView` documentation page under the `Coloring` section.

#### Granular color configuration

For a granular color customization, layer's `color` prop should be used.

**DotLayerCustomColor**

```tsx
import { DotLayer, MapView, Location } from '@dynatrace/strato-geo';

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

const DotLayerCustomColor = () => {
  const callbackColor = (s: Earthquake) => {
    if (s.magnitude < 1.5) {
      return 'green';
    } else if (s.magnitude < 2) {
      return 'yellow';
    } else {
      return 'red';
    }
  };

  return (
    <MapView height={400}>
      <DotLayer data={earthquakes} color={callbackColor} />
    </MapView>
  );
};
```

#### Color configuration using a legend

To connect a data layer to the legend, a `color` property of the layer should be set to `legend` string.

##### Sequential legend

**DotLayerSequentialLegendColor**

```tsx
import {
  DotLayer,
  MapView,
  SequentialLegend,
  Location,
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

const DotLayerSequentialLegendColor = () => {
  return (
    <MapView height={400}>
      <DotLayer data={earthquakes} color="legend" valueAccessor="magnitude" />
      <SequentialLegend min={0} max={6} colorPalette="red-blue" />
    </MapView>
  );
};
```

##### Threshold legend

**DotLayerThresholdLegendColor**

```tsx
import Colors from '@dynatrace/strato-design-tokens/colors';
import {
  DotLayer,
  MapView,
  ThresholdLegend,
  Location,
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

const DotLayerThresholdLegendColor = () => {
  return (
    <MapView height={400}>
      <DotLayer data={earthquakes} color="legend" valueAccessor="magnitude" />
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

##### Categorical legend

**DotLayerCategoricalLegendColor**

```tsx
import {
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

const DotLayerCategoricalLegendColor = () => {
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
      <DotLayer data={categoricalData} color="legend" valueAccessor="status" />
      <CategoricalLegend colorPalette={colorPalette} />
    </MapView>
  );
};
```
