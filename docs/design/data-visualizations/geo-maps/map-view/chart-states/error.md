### Error

The `<ErrorState />` subcomponent can be used to customise the error message that will be displayed when an error occurs in the `MapView` component.

**ErrorState**

```tsx
import { useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
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

const ErrorState = () => {
  const flightsSlice = flights.slice(0, 10);
  const [errorState, setErrorState] = useState(false);

  function toggleErrorState() {
    setErrorState(!errorState);
  }

  return (
    <>
      <Button onClick={toggleErrorState}>Toggle error state</Button>

      <MapView height={400}>
        <MapView.ErrorState>
          {(errorMessage) => <span>An error occurred: {errorMessage}</span>}
        </MapView.ErrorState>

        {errorState && (
          <DotLayer
            data={flightsSlice}
            bearing={() => {
              throw new Error('Data processing error in the DotLayer.');
            }}
          />
        )}
      </MapView>
    </>
  );
};
```
