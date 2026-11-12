## Legend

The purpose of the legend is to provide additional identifying information for the chart, without needing to interact with the legend directly.

### Visibility

The legend of the `HistogramChart` is shown by default. In order to hide or show the legend, you need to set the value of `legend.hidden` on the subcomponent.

### Position

By default, the position of the legend of the `HistogramChart` is set automatically. This option prioritizes the legend placement to the right of the chart area. When the chart width is reduced, the legend is repositioned to the area beneath the chart. It is also possible to explicitly set the chart's legend position to right or bottom with the `position` prop.

### Legend ratio

By default, the legend occupies `25%` of the container width, in the case where the legend is positioned on the right and `25%` of the container height if the legend position is on the bottom.

It is possible to override the default legend ratio by setting a custom percentage value for the ratio prop. The expected value is in the range of `5-80`. Values out of expected ranges will roll back to the default legend ratio.

**Legend**

```tsx
import {
  HistogramChart,
  HistogramSeries,
} from '@dynatrace/strato-components/charts';
import { Flex } from '@dynatrace/strato-components/layouts';

const multipleSeriesOverlapped: HistogramSeries[] = [
  {
    name: 'Series 1',
    bins: [
      {
        from: -40,
        to: -30,
        value: 0,
      },
      {
        from: -30,
        to: -20,
        value: 20,
      },
      {
        from: -20,
        to: -10,
        value: 50,
      },
      {
        from: -10,
        to: 0,
        value: 120,
      },
      {
        from: 0,
        to: 10,
        value: 200,
      },
      {
        from: 10,
        to: 20,
        value: 300,
      },
      {
        from: 20,
        to: 30,
        value: 400,
      },
      {
        from: 30,
        to: 40,
        value: 600,
      },
      {
        from: 40,
        to: 50,
        value: 900,
      },
      {
        from: 50,
        to: 60,
        value: 700,
      },
      {
        from: 60,
        to: 70,
        value: 600,
      },
      {
        from: 70,
        to: 80,
        value: 500,
      },
      {
        from: 80,
        to: 90,
        value: 360,
      },
      {
        from: 90,
        to: 100,
        value: 340,
      },
      {
        from: 100,
        to: 110,
        value: 300,
      },
      {
        from: 110,
        to: 120,
        value: 280,
      },
      {
        from: 120,
        to: 130,
        value: 200,
      },
      {
        from: 130,
        to: 140,
        value: 150,
      },
      {
        from: 140,
        to: 150,
        value: 80,
      },
      {
        from: 150,
        to: 160,
        value: 50,
      },
      {
        from: 160,
        to: 170,
        value: 30,
      },
      {
        from: 170,
        to: 180,
        value: 15,
      },
      {
        from: 180,
        to: 190,
        value: 0,
      },
    ],
  },
  {
    name: 'Series 2',
    bins: [
      {
        from: 55,
        to: 65,
        value: 0,
      },
      {
        from: 65,
        to: 75,
        value: 20,
      },
      {
        from: 75,
        to: 85,
        value: 50,
      },
      {
        from: 85,
        to: 95,
        value: 120,
      },
      {
        from: 95,
        to: 105,
        value: 200,
      },
      {
        from: 105,
        to: 115,
        value: 300,
      },
      {
        from: 115,
        to: 125,
        value: 400,
      },
      {
        from: 125,
        to: 135,
        value: 600,
      },
      {
        from: 135,
        to: 145,
        value: 900,
      },
      {
        from: 145,
        to: 155,
        value: 700,
      },
      {
        from: 155,
        to: 165,
        value: 600,
      },
      {
        from: 165,
        to: 175,
        value: 500,
      },
      {
        from: 175,
        to: 185,
        value: 360,
      },
      {
        from: 185,
        to: 195,
        value: 340,
      },
      {
        from: 195,
        to: 205,
        value: 300,
      },
      {
        from: 205,
        to: 215,
        value: 280,
      },
      {
        from: 215,
        to: 225,
        value: 200,
      },
      {
        from: 225,
        to: 235,
        value: 150,
      },
      {
        from: 235,
        to: 245,
        value: 80,
      },
      {
        from: 245,
        to: 255,
        value: 50,
      },
      {
        from: 255,
        to: 265,
        value: 30,
      },
      {
        from: 265,
        to: 275,
        value: 10,
      },
      {
        from: 275,
        to: 285,
        value: 0,
      },
    ],
  },
];
const multipleSeriesStacked: HistogramSeries[] = [
  {
    name: 'Series 1',
    bins: [
      {
        from: -40,
        to: -30,
        value: 0,
      },
      {
        from: -30,
        to: -20,
        value: 20,
      },
      {
        from: -20,
        to: -10,
        value: 50,
      },
      {
        from: -10,
        to: 0,
        value: 120,
      },
      {
        from: 0,
        to: 10,
        value: 200,
      },
      {
        from: 10,
        to: 20,
        value: 300,
      },
      {
        from: 20,
        to: 30,
        value: 400,
      },
      {
        from: 30,
        to: 40,
        value: 600,
      },
      {
        from: 40,
        to: 50,
        value: 900,
      },
      {
        from: 50,
        to: 60,
        value: 700,
      },
      {
        from: 60,
        to: 70,
        value: 600,
      },
      {
        from: 70,
        to: 80,
        value: 500,
      },
      {
        from: 80,
        to: 90,
        value: 360,
      },
      {
        from: 90,
        to: 100,
        value: 340,
      },
      {
        from: 100,
        to: 110,
        value: 300,
      },
      {
        from: 110,
        to: 120,
        value: 280,
      },
      {
        from: 120,
        to: 130,
        value: 200,
      },
      {
        from: 130,
        to: 140,
        value: 150,
      },
      {
        from: 140,
        to: 150,
        value: 80,
      },
      {
        from: 150,
        to: 160,
        value: 50,
      },
      {
        from: 160,
        to: 170,
        value: 30,
      },
      {
        from: 170,
        to: 180,
        value: 15,
      },
      {
        from: 180,
        to: 190,
        value: 0,
      },
    ],
  },
  {
    name: 'Series 2',
    bins: [
      {
        from: 100,
        to: 110,
        value: 10,
      },
      {
        from: 110,
        to: 120,
        value: 20,
      },
      {
        from: 120,
        to: 130,
        value: 40,
      },
      {
        from: 130,
        to: 140,
        value: 50,
      },
      {
        from: 140,
        to: 150,
        value: 60,
      },
      {
        from: 150,
        to: 160,
        value: 80,
      },
      {
        from: 160,
        to: 170,
        value: 150,
      },
      {
        from: 170,
        to: 180,
        value: 200,
      },
      {
        from: 180,
        to: 190,
        value: 250,
      },
      {
        from: 190,
        to: 200,
        value: 300,
      },
      {
        from: 200,
        to: 210,
        value: 360,
      },
      {
        from: 210,
        to: 220,
        value: 590,
      },
      {
        from: 220,
        to: 230,
        value: 890,
      },
      {
        from: 230,
        to: 240,
        value: 670,
      },
      {
        from: 240,
        to: 250,
        value: 600,
      },
      {
        from: 250,
        to: 260,
        value: 500,
      },
      {
        from: 260,
        to: 270,
        value: 450,
      },
      {
        from: 270,
        to: 280,
        value: 340,
      },
      {
        from: 280,
        to: 290,
        value: 300,
      },
      {
        from: 290,
        to: 300,
        value: 180,
      },
      {
        from: 300,
        to: 310,
        value: 80,
      },
      {
        from: 310,
        to: 320,
        value: 50,
      },
      {
        from: 320,
        to: 330,
        value: 0,
      },
    ],
  },
];

const Legend = () => {
  return (
    <Flex gap={8} flexDirection="column">
      <HistogramChart data={multipleSeriesStacked}>
        {/* highlight-start */}
        <HistogramChart.Legend
          hidden={false}
          position="right"
          initialRatio={25}
        />
        {/* highlight-end */}
      </HistogramChart>
      <HistogramChart data={multipleSeriesOverlapped}>
        {/* highlight-start */}
        <HistogramChart.Legend
          hidden={false}
          position="bottom"
          initialRatio={25}
        />
        {/* highlight-end */}
      </HistogramChart>
    </Flex>
  );
};
```
