## Use cases

Use the `ChoroplethLayer` subcomponent to apply color to a specific region. The `ChoroplethLayer` subcomponent accepts an array of data entries as the `data` prop. Each entry must contain an ISO 3166-2 region code.

You can use the `regionAccessor` prop to access the region where the color needs to be applied. This can be either a string in the form of a value accessor or a callback to dynamically construct the region code.

```typescript
[
  {
    country: 'DE',
    color: '#f7c910',
    population: 84724070,
  },
  {
    country: 'AU',
    color: '#012066',
    population: 26473055,
  },
  {
    country: 'BR',
    color: '#029639',
    population: 218689752,
  },
];
```

Learn more about the data format [here](https://developer.dynatrace.com/design/data-visualizations/geo-maps/ChoroplethLayer/props.md).

**ChoroplethLayerSimple**

```tsx
import { ChoroplethLayer, MapView } from '@dynatrace/strato-geo';

const countriesStats = [
  {
    country: 'DE',
    primary_color: '#f7c910',
    population: 84724070,
    continent: 'Europe',
    apdex: 'Excellent',
  },
  {
    country: 'AU',
    primary_color: '#012066',
    population: 26473055,
    continent: 'Oceania',
    apdex: 'Excellent',
  },
  {
    country: 'BR',
    primary_color: '#029639',
    population: 218689752,
    continent: 'South America',
    apdex: 'Unacceptable',
  },
  {
    country: 'ES',
    primary_color: '#c70219',
    population: 48196693,
    continent: 'Europe',
    apdex: 'Fair',
  },
  {
    country: 'MX',
    primary_color: '#006e49',
    population: 131135337,
    continent: 'North America',
    apdex: 'Unacceptable',
  },
  {
    country: 'CA',
    primary_color: '#d62618',
    population: 38037204,
    continent: 'North America',
    apdex: 'Excellent',
  },
  {
    country: 'AR',
    primary_color: '#6CACE4',
    population: 47327407,
    continent: 'South America',
    apdex: 'Good',
  },
  {
    country: 'VE',
    primary_color: '#FCE300',
    population: 28515829,
    continent: 'South America',
    apdex: 'Excellent',
  },
  {
    country: 'CU',
    primary_color: '#002a90',
    population: 10985974,
    continent: 'North America',
    apdex: 'Good',
  },
  {
    country: 'PR',
    primary_color: '#ee0200',
    population: 3285874,
    continent: 'North America',
    apdex: 'Excellent',
  },
  {
    country: 'UA',
    primary_color: '#0057B7',
    population: 41732779,
    continent: 'Europe',
    apdex: 'Fair',
  },
  {
    country: 'IT',
    primary_color: '#028e44',
    population: 59346717,
    continent: 'Europe',
    apdex: 'Poor',
  },
];

const ChoroplethLayerSimple = () => {
  return (
    <MapView height={400} initialViewState={{ zoom: 1 }}>
      <ChoroplethLayer data={countriesStats} regionAccessor="country" />
    </MapView>
  );
};
```

### Tooltip

Finally, when hovering a region in the `ChoroplethLayer`, the tooltip will output the region `name`, the `color` and all the additional custom props inside a `data` object. It can be [customized or hidden](https://developer.dynatrace.com/design/data-visualizations/geo-maps/MapView/Tooltip.md#tooltip).

**ChoroplethLayerTooltip**

```tsx
import Colors from '@dynatrace/strato-design-tokens/colors';
import {
  ChoroplethLayer,
  ChoroplethLayerTooltipData,
  MapView,
  Tooltip,
  TooltipAtoms,
} from '@dynatrace/strato-geo';

type CountryStats = {
  country: string;
  primary_color: string;
  population: number;
  continent: string;
  apdex: string;
  status: string;
};

const countriesStats: CountryStats[] = [
  {
    country: 'DE',
    primary_color: '#f7c910',
    population: 84_724_070,
    continent: 'Europe',
    apdex: 'Excellent',
    status: 'muted',
  },
  {
    country: 'AU',
    primary_color: '#012066',
    population: 26_473_055,
    continent: 'Oceania',
    apdex: 'Excellent',
    status: 'affected',
  },
  {
    country: 'BR',
    primary_color: '#029639',
    population: 218_689_752,
    continent: 'South America',
    apdex: 'Unacceptable',
    status: 'muted',
  },
  {
    country: 'ES',
    primary_color: '#c70219',
    population: 48_196_693,
    continent: 'Europe',
    apdex: 'Fair',
    status: 'resolved',
  },
  {
    country: 'MX',
    primary_color: '#006e49',
    population: 131_135_337,
    continent: 'North America',
    apdex: 'Unacceptable',
    status: 'muted',
  },

  {
    country: 'CA',
    primary_color: '#d62618',
    population: 38_037_204,
    continent: 'North America',
    apdex: 'Excellent',
    status: 'muted',
  },
  {
    country: 'AR',
    primary_color: '#6CACE4',
    population: 47_327_407,
    continent: 'South America',
    apdex: 'Good',
    status: 'muted',
  },
  {
    country: 'VE',
    primary_color: '#FCE300',
    population: 28_515_829,
    continent: 'South America',
    apdex: 'Excellent',
    status: 'affected',
  },
  {
    country: 'CU',
    primary_color: '#002a90',
    population: 10_985_974,
    continent: 'North America',
    apdex: 'Good',
    status: 'resolved',
  },
  {
    country: 'PR',
    primary_color: '#ee0200',
    population: 3_285_874,
    continent: 'North America',
    apdex: 'Excellent',
    status: 'muted',
  },
  {
    country: 'UA',
    primary_color: '#0057B7',
    population: 41_732_779,
    continent: 'Europe',
    apdex: 'Fair',
    status: 'resolved',
  },
  {
    country: 'IT',
    primary_color: '#028e44',
    population: 59_346_717,
    continent: 'Europe',
    apdex: 'Poor',
    status: 'affected',
  },
];

const ChoroplethLayerTooltip = () => {
  return (
    <MapView height={400} initialViewState={{ zoom: 1 }}>
      <ChoroplethLayer
        data={countriesStats}
        regionAccessor="country"
        color={Colors.Charts.Sequential.Pink.Color05.Default}
      >
        <ChoroplethLayer.Tooltip>
          {(regionData: ChoroplethLayerTooltipData<CountryStats>) => {
            const { name, color, data } = regionData;

            const { apdex } = data;

            return (
              <Tooltip.Body>
                <Tooltip.Item>
                  <Tooltip.Symbol>
                    <TooltipAtoms.SingleDataPoint color={color} />
                  </Tooltip.Symbol>
                  <Tooltip.Content>
                    <Tooltip.Text variant="secondary">{name}</Tooltip.Text>
                  </Tooltip.Content>
                  <Tooltip.Value>
                    <TooltipAtoms.Chip>{apdex}</TooltipAtoms.Chip>
                  </Tooltip.Value>
                </Tooltip.Item>
              </Tooltip.Body>
            );
          }}
        </ChoroplethLayer.Tooltip>
      </ChoroplethLayer>
    </MapView>
  );
};
```

#### Custom tooltip

Pass a render function as the `ChoroplethLayer.Tooltip` slot children to take full control over what is displayed when a region is hovered. The render function receives a single `ChoroplethLayerTooltipData<T>` argument with the following properties:

- `color` — the fill color of the hovered region.
- `name` — the display name of the region (e.g. "Germany").
- `data` — the original data record you provided for that region.

You can compose the tooltip using `ChartTooltip` primitives (or any custom markup) — exactly the same building blocks used by other Strato charts. You can also attach interactive actions via the `actions` prop on `ChartTooltip.SeriesItem`.

**ChoroplethLayerCustomTooltip**

```tsx
import { _OverlayTooltip as ChartTooltip } from '@dynatrace/strato-components/charts';
import { showToast } from '@dynatrace/strato-components/notifications';
import {
  ChoroplethLayer,
  type ChoroplethLayerTooltipData,
  MapView,
} from '@dynatrace/strato-geo';
import { MagnifyingGlassIcon } from '@dynatrace/strato-icons';

const countryData = [
  { country: 'DE', population: 84724070, status: 'healthy' },
  { country: 'FR', population: 68042591, status: 'warning' },
  { country: 'ES', population: 47778340, status: 'healthy' },
  { country: 'IT', population: 58853482, status: 'critical' },
  { country: 'GB', population: 67886011, status: 'healthy' },
];

const ChoroplethLayerCustomTooltip = () => {
  return (
    <MapView height={400}>
      <ChoroplethLayer data={countryData} regionAccessor="country">
        <ChoroplethLayer.Tooltip>
          {(
            regionData: ChoroplethLayerTooltipData<Record<string, unknown>>,
          ) => (
            <ChartTooltip.SeriesItem
              color={regionData.color}
              name={regionData.name}
              value={String(regionData.data['population'])}
              actions={() => (
                <ChartTooltip.Action
                  label="View details"
                  icon={<MagnifyingGlassIcon />}
                  onSelect={() =>
                    showToast({
                      title: `Details for ${regionData.name}`,
                      type: 'info',
                      lifespan: 1000,
                    })
                  }
                />
              )}
            />
          )}
        </ChoroplethLayer.Tooltip>
      </ChoroplethLayer>
    </MapView>
  );
};
```

### Coloring

The `ChoroplethLayer` supports two ways of color configuration: granular configuration using the `color` prop, or using a one of the available legend subcomponents (e.g. `SequentialLegend`, `ThresholdLegend`, or `CategoricalLegend`).

**Note:** Detailed information about coloring can be found in the `MapView` documentation page under the `Coloring` section.

#### Granular color configuration

For a granular color customization, layer's `color` prop should be used.

**ChoroplethLayerCustomColor**

```tsx
import { ChoroplethLayer, MapView } from '@dynatrace/strato-geo';

const countriesStats = [
  {
    country: 'DE',
    primary_color: '#f7c910',
    population: 84_724_070,
    continent: 'Europe',
    apdex: 'Excellent',
  },
  {
    country: 'AU',
    primary_color: '#012066',
    population: 26_473_055,
    continent: 'Oceania',
    apdex: 'Excellent',
  },
  {
    country: 'BR',
    primary_color: '#029639',
    population: 218_689_752,
    continent: 'South America',
    apdex: 'Unacceptable',
  },
  {
    country: 'ES',
    primary_color: '#c70219',
    population: 48_196_693,
    continent: 'Europe',
    apdex: 'Fair',
  },
  {
    country: 'MX',
    primary_color: '#006e49',
    population: 131_135_337,
    continent: 'North America',
    apdex: 'Unacceptable',
  },
  {
    country: 'CA',
    primary_color: '#d62618',
    population: 38_037_204,
    continent: 'North America',
    apdex: 'Excellent',
  },
  {
    country: 'AR',
    primary_color: '#6CACE4',
    population: 47_327_407,
    continent: 'South America',
    apdex: 'Good',
  },
  {
    country: 'VE',
    primary_color: '#FCE300',
    population: 28_515_829,
    continent: 'South America',
    apdex: 'Excellent',
  },
  {
    country: 'CU',
    primary_color: '#002a90',
    population: 10_985_974,
    continent: 'North America',
    apdex: 'Good',
  },
  {
    country: 'PR',
    primary_color: '#ee0200',
    population: 3_285_874,
    continent: 'North America',
    apdex: 'Excellent',
  },
  {
    country: 'UA',
    primary_color: '#0057B7',
    population: 41_732_779,
    continent: 'Europe',
    apdex: 'Fair',
  },
  {
    country: 'IT',
    primary_color: '#028e44',
    population: 59_346_717,
    continent: 'Europe',
    apdex: 'Poor',
  },
];

const ChoroplethLayerCustomColor = () => {
  return (
    <MapView height={400} initialViewState={{ zoom: 1 }}>
      <ChoroplethLayer
        data={countriesStats}
        regionAccessor="country"
        color={(item) => item.primary_color}
      />
    </MapView>
  );
};
```

##### Custom color applied on singular country state

This type of display can be done by providing country/state array for `include` and `exclude` props in `BaseLayer` component

**BaseLayerColored**

```tsx
import { BaseLayer, ChoroplethLayer, MapView } from '@dynatrace/strato-geo';

const serverStatusByCountry = [
  { location: 'AU', status: 'affected' },
  { location: 'ES', status: 'resolved' },
  { location: 'ES-MD', status: 'affected' },
];

const BaseLayerColored = () => {
  return (
    <MapView>
      <ChoroplethLayer
        data={serverStatusByCountry}
        regionAccessor="location"
        color={(item) => {
          switch (item.status) {
            case 'resolved': {
              return 'green';
            }
            case 'muted': {
              return 'gray';
            }
            default: {
              return 'rebeccapurple';
            }
          }
        }}
      ></ChoroplethLayer>
      <BaseLayer include={['*', 'ES-MD']}></BaseLayer>
    </MapView>
  );
};
```

#### Coloring countries and regions

**BaseLayerRegionsColored**

```tsx
import {
  BaseLayer,
  ChoroplethLayer,
  MapView,
  Tooltip,
  TooltipAtoms,
  ChoroplethLayerTooltipData,
} from '@dynatrace/strato-geo';

type CountryStats = {
  country: string;
  primary_color: string;
  population: number;
  continent: string;
  apdex: string;
  status: string;
};

const countriesStats = [
  {
    country: 'US-AB',
    primary_color: '#0033A0',
    population: 4_371_316,
    continent: 'North America',
    apdex: 'Good',
  },
  {
    country: 'US-MT',
    primary_color: '#003366',
    population: 1_084_225,
    continent: 'North America',
    apdex: 'Good',
  },
  {
    country: 'US-NE',
    primary_color: '#0033A0',
    population: 1_963_333,
    continent: 'North America',
    apdex: 'Good',
  },
  {
    country: 'BR-RJ',
    primary_color: '#0033A0',
    population: 17_463_349,
    continent: 'South America',
    apdex: 'Excellent',
  },
  {
    country: 'BR-MT',
    primary_color: '#028E44',
    population: 3_526_220,
    continent: 'South America',
    apdex: 'Good',
  },
  {
    country: 'BR-AM',
    primary_color: '#028E44',
    population: 4_269_995,
    continent: 'South America',
    apdex: 'Good',
  },
  {
    country: 'CA-NT',
    primary_color: '#002868',
    population: 45_605,
    continent: 'North America',
    apdex: 'Fair',
  },
  {
    country: 'CA-AB',
    primary_color: '#0033A0',
    population: 4_371_316,
    continent: 'North America',
    apdex: 'Good',
  },
  {
    country: 'AR',
    primary_color: '#75AADB',
    population: 45_376_763,
    continent: 'South America',
    apdex: 'Excellent',
  },
  {
    country: 'PT',
    primary_color: '#006600',
    population: 10_276_617,
    continent: 'Europe',
    apdex: 'Good',
  },
  {
    country: 'ES-CT',
    primary_color: '#FFCC00',
    population: 7_661_950,
    continent: 'Europe',
    apdex: 'Good',
  },
  {
    country: 'ES-MD',
    primary_color: '#B22222',
    population: 6_746_011,
    continent: 'Europe',
    apdex: 'Good',
  },
  {
    country: 'ES-PV',
    primary_color: '#006847',
    population: 2_199_711,
    continent: 'Europe',
    apdex: 'Good',
  },
  {
    country: 'ES-AN',
    primary_color: '#006847',
    population: 8_472_407,
    continent: 'Europe',
    apdex: 'Good',
  },
  {
    country: 'MX',
    primary_color: '#006847',
    population: 126_705_138,
    continent: 'North America',
    apdex: 'Good',
  },
];

const BaseLayerRegionsColored = () => {
  return (
    <MapView height={400} initialViewState={{ zoom: 1 }}>
      <ChoroplethLayer
        data={countriesStats}
        regionAccessor="country"
        color={(item) => item.primary_color}
      >
        <ChoroplethLayer.Tooltip>
          {(regionData: ChoroplethLayerTooltipData<CountryStats>) => {
            const { name, color, data } = regionData;

            const { apdex } = data;

            return (
              <Tooltip.Body>
                <Tooltip.Item>
                  <Tooltip.Symbol>
                    <TooltipAtoms.SingleDataPoint color={color} />
                  </Tooltip.Symbol>
                  <Tooltip.Content>
                    <Tooltip.Text variant="secondary">{name}</Tooltip.Text>
                  </Tooltip.Content>
                  <Tooltip.Value>
                    <TooltipAtoms.Chip>{apdex}</TooltipAtoms.Chip>
                  </Tooltip.Value>
                </Tooltip.Item>
              </Tooltip.Body>
            );
          }}
        </ChoroplethLayer.Tooltip>
      </ChoroplethLayer>
      <BaseLayer include={['*', 'US-*', 'BR-*', 'CA-*', 'ES-*']}></BaseLayer>
    </MapView>
  );
};
```

#### Color configuration using a legend

To connect a data layer to the legend, a `color` property of the layer should be set to `legend` string.

##### Sequential legend

**ChoroplethLayerSequentialLegendColor**

```tsx
import {
  ChoroplethLayer,
  MapView,
  SequentialLegend,
} from '@dynatrace/strato-geo';

const countriesStats = [
  {
    country: 'DE',
    primary_color: '#f7c910',
    population: 84724070,
    continent: 'Europe',
    apdex: 'Excellent',
  },
  {
    country: 'AU',
    primary_color: '#012066',
    population: 26473055,
    continent: 'Oceania',
    apdex: 'Excellent',
  },
  {
    country: 'BR',
    primary_color: '#029639',
    population: 218689752,
    continent: 'South America',
    apdex: 'Unacceptable',
  },
  {
    country: 'ES',
    primary_color: '#c70219',
    population: 48196693,
    continent: 'Europe',
    apdex: 'Fair',
  },
  {
    country: 'MX',
    primary_color: '#006e49',
    population: 131135337,
    continent: 'North America',
    apdex: 'Unacceptable',
  },
  {
    country: 'CA',
    primary_color: '#d62618',
    population: 38037204,
    continent: 'North America',
    apdex: 'Excellent',
  },
  {
    country: 'AR',
    primary_color: '#6CACE4',
    population: 47327407,
    continent: 'South America',
    apdex: 'Good',
  },
  {
    country: 'VE',
    primary_color: '#FCE300',
    population: 28515829,
    continent: 'South America',
    apdex: 'Excellent',
  },
  {
    country: 'CU',
    primary_color: '#002a90',
    population: 10985974,
    continent: 'North America',
    apdex: 'Good',
  },
  {
    country: 'PR',
    primary_color: '#ee0200',
    population: 3285874,
    continent: 'North America',
    apdex: 'Excellent',
  },
  {
    country: 'UA',
    primary_color: '#0057B7',
    population: 41732779,
    continent: 'Europe',
    apdex: 'Fair',
  },
  {
    country: 'IT',
    primary_color: '#028e44',
    population: 59346717,
    continent: 'Europe',
    apdex: 'Poor',
  },
];

const ChoroplethLayerSequentialLegendColor = () => {
  return (
    <MapView height={400} initialViewState={{ zoom: 1 }}>
      <ChoroplethLayer
        data={countriesStats}
        regionAccessor="country"
        valueAccessor="population"
        color="legend"
      ></ChoroplethLayer>
      <SequentialLegend
        min={10_000_000}
        max={220_000_000}
        colorPalette="magenta"
      />
    </MapView>
  );
};
```

##### Threshold legend

**ChoroplethLayerThresholdLegendColor**

```tsx
import Colors from '@dynatrace/strato-design-tokens/colors';
import {
  ChoroplethLayer,
  MapView,
  ThresholdLegend,
} from '@dynatrace/strato-geo';

const countriesStats = [
  {
    country: 'DE',
    primary_color: '#f7c910',
    population: 84724070,
    continent: 'Europe',
    apdex: 'Excellent',
  },
  {
    country: 'AU',
    primary_color: '#012066',
    population: 26473055,
    continent: 'Oceania',
    apdex: 'Excellent',
  },
  {
    country: 'BR',
    primary_color: '#029639',
    population: 218689752,
    continent: 'South America',
    apdex: 'Unacceptable',
  },
  {
    country: 'ES',
    primary_color: '#c70219',
    population: 48196693,
    continent: 'Europe',
    apdex: 'Fair',
  },
  {
    country: 'MX',
    primary_color: '#006e49',
    population: 131135337,
    continent: 'North America',
    apdex: 'Unacceptable',
  },
  {
    country: 'CA',
    primary_color: '#d62618',
    population: 38037204,
    continent: 'North America',
    apdex: 'Excellent',
  },
  {
    country: 'AR',
    primary_color: '#6CACE4',
    population: 47327407,
    continent: 'South America',
    apdex: 'Good',
  },
  {
    country: 'VE',
    primary_color: '#FCE300',
    population: 28515829,
    continent: 'South America',
    apdex: 'Excellent',
  },
  {
    country: 'CU',
    primary_color: '#002a90',
    population: 10985974,
    continent: 'North America',
    apdex: 'Good',
  },
  {
    country: 'PR',
    primary_color: '#ee0200',
    population: 3285874,
    continent: 'North America',
    apdex: 'Excellent',
  },
  {
    country: 'UA',
    primary_color: '#0057B7',
    population: 41732779,
    continent: 'Europe',
    apdex: 'Fair',
  },
  {
    country: 'IT',
    primary_color: '#028e44',
    population: 59346717,
    continent: 'Europe',
    apdex: 'Poor',
  },
];

const ChoroplethLayerThresholdLegendColor = () => {
  return (
    <MapView height={400} initialViewState={{ zoom: 1 }}>
      <ChoroplethLayer
        data={countriesStats}
        regionAccessor="country"
        valueAccessor="population"
        color="legend"
      ></ChoroplethLayer>
      <ThresholdLegend
        ranges={[
          {
            from: 0,
            to: 50_000_000,
            color: Colors.Charts.Sequential.BlueTurquoise.Color05.Default,
          },
          {
            from: 50_000_000,
            to: 100_000_000,
            color: Colors.Charts.Sequential.BlueTurquoise.Color03.Default,
          },
          {
            from: 100_000_000,
            to: 300_000_000,
            color: Colors.Charts.Sequential.BlueTurquoise.Color01.Default,
          },
        ]}
      />
    </MapView>
  );
};
```

##### Categorical legend

**ChoroplethLayerCategoricalLegendColor**

```tsx
import {
  CategoricalLegend,
  ChoroplethLayer,
  MapView,
} from '@dynatrace/strato-geo';

const countriesStats = [
  {
    country: 'DE',
    primary_color: '#f7c910',
    population: 84_724_070,
    continent: 'Europe',
    apdex: 'Excellent',
  },
  {
    country: 'AU',
    primary_color: '#012066',
    population: 26_473_055,
    continent: 'Oceania',
    apdex: 'Excellent',
  },
  {
    country: 'BR',
    primary_color: '#029639',
    population: 218_689_752,
    continent: 'South America',
    apdex: 'Unacceptable',
  },
  {
    country: 'ES',
    primary_color: '#c70219',
    population: 48_196_693,
    continent: 'Europe',
    apdex: 'Fair',
  },
  {
    country: 'MX',
    primary_color: '#006e49',
    population: 131_135_337,
    continent: 'North America',
    apdex: 'Unacceptable',
  },
  {
    country: 'CA',
    primary_color: '#d62618',
    population: 38_037_204,
    continent: 'North America',
    apdex: 'Excellent',
  },
  {
    country: 'AR',
    primary_color: '#6CACE4',
    population: 47_327_407,
    continent: 'South America',
    apdex: 'Good',
  },
  {
    country: 'VE',
    primary_color: '#FCE300',
    population: 28_515_829,
    continent: 'South America',
    apdex: 'Excellent',
  },
  {
    country: 'CU',
    primary_color: '#002a90',
    population: 10_985_974,
    continent: 'North America',
    apdex: 'Good',
  },
  {
    country: 'PR',
    primary_color: '#ee0200',
    population: 3_285_874,
    continent: 'North America',
    apdex: 'Excellent',
  },
  {
    country: 'UA',
    primary_color: '#0057B7',
    population: 41_732_779,
    continent: 'Europe',
    apdex: 'Fair',
  },
  {
    country: 'IT',
    primary_color: '#028e44',
    population: 59_346_717,
    continent: 'Europe',
    apdex: 'Poor',
  },
];

const ChoroplethLayerCategoricalLegendColor = () => {
  return (
    <MapView height={400} initialViewState={{ zoom: 1 }}>
      <ChoroplethLayer
        data={countriesStats}
        regionAccessor="country"
        valueAccessor="apdex"
        color="legend"
      ></ChoroplethLayer>
      <CategoricalLegend colorPalette="apdex" />
    </MapView>
  );
};
```
