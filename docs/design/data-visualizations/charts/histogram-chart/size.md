## Size

By default, the chart will use all the available container size up to a maximum height of 300 pixels and width of 100%. This height and width can be changed by providing a value in the `height` and `width` props of the `HistogramChart`. If a number is passed to these props, it will be treated as `px`. If a string is passed, it will be treated as a CSS string.

**ChartSize**

```tsx
import {
  HistogramChart,
  HistogramSeries,
} from '@dynatrace/strato-components/charts';

const mirroredSeries: HistogramSeries[] = [
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
        value: -20,
      },
      {
        from: 75,
        to: 85,
        value: -50,
      },
      {
        from: 85,
        to: 95,
        value: -150,
      },
      {
        from: 95,
        to: 105,
        value: -220,
      },
      {
        from: 105,
        to: 115,
        value: -350,
      },
      {
        from: 115,
        to: 125,
        value: -470,
      },
      {
        from: 125,
        to: 135,
        value: -600,
      },
      {
        from: 135,
        to: 145,
        value: -920,
      },
      {
        from: 145,
        to: 155,
        value: -720,
      },
      {
        from: 155,
        to: 165,
        value: -640,
      },
      {
        from: 165,
        to: 175,
        value: -500,
      },
      {
        from: 175,
        to: 185,
        value: -360,
      },
      {
        from: 185,
        to: 195,
        value: -390,
      },
      {
        from: 195,
        to: 205,
        value: -320,
      },
      {
        from: 205,
        to: 215,
        value: -280,
      },
      {
        from: 215,
        to: 225,
        value: -200,
      },
      {
        from: 225,
        to: 235,
        value: -150,
      },
      {
        from: 235,
        to: 245,
        value: -80,
      },
      {
        from: 245,
        to: 255,
        value: -50,
      },
      {
        from: 255,
        to: 265,
        value: -30,
      },
      {
        from: 265,
        to: 275,
        value: -10,
      },
      {
        from: 275,
        to: 285,
        value: 0,
      },
    ],
  },
];

const ChartSize = () => {
  return (
    <HistogramChart
      data={mirroredSeries}
      // highlight-next-line
      height={500}
    />
  );
};
```
