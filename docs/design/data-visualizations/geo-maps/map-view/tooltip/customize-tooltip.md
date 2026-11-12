### Customize Tooltip

The tooltip can be customized using a **template-based** approach with `Tooltip.Header`, `Tooltip.Body`, and `Tooltip.Footer` sections for full layout control.

Each data layer page documents how to pass a render function as children of its `.Tooltip` slot and which data the render function receives. See [DotLayer](https://developer.dynatrace.com/design/data-visualizations/geo-maps/DotLayer.md#custom-tooltip), [BubbleLayer](https://developer.dynatrace.com/design/data-visualizations/geo-maps/BubbleLayer.md#custom-tooltip), [ConnectionLayer](https://developer.dynatrace.com/design/data-visualizations/geo-maps/ConnectionLayer.md#custom-tooltip), and [ChoroplethLayer](https://developer.dynatrace.com/design/data-visualizations/geo-maps/ChoroplethLayer.md#custom-tooltip) for examples.

Every `.Tooltip` slot also accepts the following optional props:

- `hidden` — set to `true` to opt out of the tooltip entirely for that layer.
- `symbolAlignment` — overrides the horizontal alignment of series symbols inside the default tooltip. Accepted values are `'left'` (default) and `'right'`.

#### Tooltip sections

It's possible to customize the tooltip by providing a custom template that can consist of tooltip sections, items, and atoms. The `Tooltip` comprises three main sections: `Tooltip.Header`, `Tooltip.Body`, and `Tooltip.Footer`. Each section can contain different subsections, items, and atoms.

The `Tooltip.Header` serves as the topmost part of the tooltip and it always contains a divider at its bottom. It is also possible to set an optional `Tooltip.Subheader` within a `Tooltip.Header` to add additional information that is rendered in a new block.

The `Tooltip.Body` is the central and interactive part of the tooltip. The `Tooltip.Body` content is virtualized by default to improve performance, and it can be disabled by setting the `virtualization` prop to `false`.

In order to have a proper virtualization, the `itemHeight` prop, which is the height of every `Tooltip.Item` subcomponent within the `Tooltip.Body`, is needed.

The `Tooltip.Footer` subcomponent always includes a divider at the top. This section can be used to display the total number of items available or any other contextual information.

**TooltipSections**

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

const TooltipSections = () => {
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
            closestDataPoint: BubbleLayerTooltipData<CyberAttackEvent>,
            overlappingDataPoints: BubbleLayerTooltipData<CyberAttackEvent>[],
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
                        {closestDataPoint.data.id}
                      </Tooltip.Text>
                    </Tooltip.Content>
                    <Tooltip.Value>
                      <TooltipAtoms.Chip>{`${closestDataPoint.data.severity} severity`}</TooltipAtoms.Chip>
                    </Tooltip.Value>
                  </Tooltip.Item>
                </Tooltip.Header>
                <Tooltip.Body
                  virtualization={false}
                  style={{ width: '95%', padding: '2px 8px' }}
                >
                  {overlappingDataPoints.length > 0 ? (
                    overlappingDataPoints.map((cyberAttack, idx) => {
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
                      {overlappingDataPoints.length + 1}
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

#### Items

`Tooltip.Item`s are independent components that can be placed in the header, body, or footer sections. Each of these items serve a specific purpose and acts as a flexbox. It is recommended nesting `Tooltip.Symbol`, `Tooltip.Content`, and `Tooltip.Value` within the `Tooltip.Item` so that the space will be distributed evenly.

**TooltipItemTemplate**

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

const TooltipItemTemplate = () => {
  const initialViewState = {
    longitude: 45,
    latitude: 45,
    zoom: 2,
  };

  return (
    <MapView height={400} initialViewState={initialViewState}>
      <DotLayer
        data={flights.slice(0, 5)}
        shape={<AirplaneFilledIcon />}
        color="blue"
      >
        <DotLayer.Tooltip>
          {(dotData: DotLayerTooltipData<Flight>) => {
            const { data } = dotData;
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
                </Tooltip.Header>
                <Tooltip.Body style={{ maxWidth: 'unset' }}>
                  <Tooltip.Item>
                    <Tooltip.Content>
                      <Tooltip.Text>Origin: </Tooltip.Text>
                    </Tooltip.Content>
                    <Tooltip.Value>{data.origin.name}</Tooltip.Value>
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

The tooltip template can nest any custom HTML and styles can be overridden.

**TooltipCustomContent**

```tsx
import { MeterBarChart } from '@dynatrace/strato-components/charts';
import {
  DotLayer,
  DotLayerTooltipData,
  Location,
  MapView,
  Tooltip,
} from '@dynatrace/strato-geo';
import {
  AirplaneFilledIcon,
  LocationMarkerFilledSubscriptIcon,
} from '@dynatrace/strato-icons';

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

const TooltipCustomContent = () => {
  const initialViewState = {
    longitude: 45,
    latitude: 45,
    zoom: 2,
  };

  return (
    <MapView height={400} initialViewState={initialViewState}>
      <DotLayer
        data={flights.slice(0, 4)}
        shape={<AirplaneFilledIcon />}
        color="blue"
      >
        <DotLayer.Tooltip>
          {(dotData: DotLayerTooltipData<Flight>) => {
            const { data } = dotData;
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
                    <Tooltip.Symbol>
                      <LocationMarkerFilledSubscriptIcon />
                    </Tooltip.Symbol>
                    <Tooltip.Content>
                      <Tooltip.Text>{`${data.origin.name}`}</Tooltip.Text>
                    </Tooltip.Content>
                  </Tooltip.Subheader>
                </Tooltip.Header>
                <Tooltip.Body virtualization={false}>
                  <Tooltip.Item>
                    <MeterBarChart value={50}>
                      <MeterBarChart.Label>Host unit hours</MeterBarChart.Label>
                      <MeterBarChart.Value>50/100</MeterBarChart.Value>
                      <MeterBarChart.Min>0</MeterBarChart.Min>
                      <MeterBarChart.Max>100</MeterBarChart.Max>
                    </MeterBarChart>
                  </Tooltip.Item>
                  <Tooltip.Item showDivider>
                    <Tooltip.Content>
                      <Tooltip.Text>Destination: </Tooltip.Text>
                    </Tooltip.Content>
                    <Tooltip.Value>{data.destination.name}</Tooltip.Value>
                  </Tooltip.Item>
                </Tooltip.Body>
                <Tooltip.Footer>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Tooltip.Text>Total Flight: </Tooltip.Text>
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

#### Tooltip Atoms

Multiple `Tooltip.Item` components can be combined in various ways, and the space distribution is flexible, allowing their arrangement according to preferences.

**TooltipAtomsTemplate**

```tsx
import {
  DotLayer,
  DotLayerTooltipData,
  Location,
  MapView,
  Tooltip,
  TooltipAtoms,
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

const TooltipAtomsTemplate = () => {
  const initialViewState = {
    longitude: 45,
    latitude: 45,
    zoom: 2,
  };

  return (
    <MapView height={400} initialViewState={initialViewState}>
      <DotLayer
        data={flights.slice(0, 3)}
        shape={<AirplaneFilledIcon />}
        color="blue"
      >
        <DotLayer.Tooltip>
          {(dotData: DotLayerTooltipData<Flight>) => {
            const { data } = dotData;
            const takingOffDate = new Date(data.takeoffTime * 1000);
            const landingDate = new Date(data.landingTime * 1000);

            return (
              <>
                <Tooltip.Header>
                  <Tooltip.Item>
                    <Tooltip.Symbol>
                      <TooltipAtoms.SingleDataPoint color="green" />
                    </Tooltip.Symbol>
                    <Tooltip.Content>
                      <TooltipAtoms.Primary>Primary</TooltipAtoms.Primary>
                    </Tooltip.Content>
                  </Tooltip.Item>
                  <Tooltip.Subheader>
                    <TooltipAtoms.Secondary>Secondary</TooltipAtoms.Secondary>
                  </Tooltip.Subheader>
                </Tooltip.Header>
                <Tooltip.Body>
                  <Tooltip.Item>
                    <Tooltip.Symbol>
                      <TooltipAtoms.Emoji>
                        <span role="img" aria-label="takeoff">
                          🛫
                        </span>
                      </TooltipAtoms.Emoji>
                    </Tooltip.Symbol>
                    <Tooltip.Content>
                      <TooltipAtoms.Secondary>Origin: </TooltipAtoms.Secondary>
                    </Tooltip.Content>
                    <Tooltip.Value>
                      <TooltipAtoms.Primary>
                        {data.origin.name}
                      </TooltipAtoms.Primary>
                    </Tooltip.Value>
                  </Tooltip.Item>
                  <Tooltip.Item showDivider>
                    <Tooltip.Symbol>
                      <TooltipAtoms.Emoji>
                        <span role="img" aria-label="landing">
                          🛬
                        </span>
                      </TooltipAtoms.Emoji>
                    </Tooltip.Symbol>
                    <Tooltip.Content>
                      <TooltipAtoms.Secondary>
                        Destination:
                      </TooltipAtoms.Secondary>
                    </Tooltip.Content>
                    <Tooltip.Value>
                      <TooltipAtoms.Primary>
                        {data.destination.name}
                      </TooltipAtoms.Primary>
                    </Tooltip.Value>
                  </Tooltip.Item>
                  <Tooltip.Item>
                    <Tooltip.Content>
                      <TooltipAtoms.Secondary>
                        Flight Duration:
                      </TooltipAtoms.Secondary>
                    </Tooltip.Content>
                    <Tooltip.Value>
                      <TooltipAtoms.DurationChipAtom
                        from={takingOffDate}
                        to={landingDate}
                      />
                    </Tooltip.Value>
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
