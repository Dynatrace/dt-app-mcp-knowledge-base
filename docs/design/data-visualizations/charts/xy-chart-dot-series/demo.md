## Demo

A Dot series visualizes data as individual dots and is used to create charts like scatter plots, strip plots, opposite diagrams, or dot charts.

### Scatter plot

**DotSeriesScatterplot**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const websiteVisits = [
  { seriesName: 'Homepage', date: '2024-01-01', visits: 120 },
  { seriesName: 'Homepage', date: '2024-01-02', visits: 98 },
  { seriesName: 'Homepage', date: '2024-01-03', visits: 135 },
  { seriesName: 'Homepage', date: '2024-01-04', visits: 150 },
  { seriesName: 'Homepage', date: '2024-01-05', visits: 110 },
  { seriesName: 'Homepage', date: '2024-01-06', visits: 123 },
  { seriesName: 'Homepage', date: '2024-01-07', visits: 142 },
  { seriesName: 'Homepage', date: '2024-01-08', visits: 130 },
  { seriesName: 'Homepage', date: '2024-01-09', visits: 115 },
  { seriesName: 'Homepage', date: '2024-01-10', visits: 128 },
  { seriesName: 'Homepage', date: '2024-01-11', visits: 140 },
  { seriesName: 'Homepage', date: '2024-01-12', visits: 132 },
  { seriesName: 'Homepage', date: '2024-01-13', visits: 125 },
  { seriesName: 'Homepage', date: '2024-01-14', visits: 138 },
  { seriesName: 'Homepage', date: '2024-01-15', visits: 145 },
  { seriesName: 'Homepage', date: '2024-01-16', visits: 120 },
  { seriesName: 'Homepage', date: '2024-01-17', visits: 110 },
  { seriesName: 'Homepage', date: '2024-01-18', visits: 134 },
  { seriesName: 'Homepage', date: '2024-01-19', visits: 129 },
  { seriesName: 'Homepage', date: '2024-01-20', visits: 137 },
  { seriesName: 'Homepage', date: '2024-01-21', visits: 141 },
  { seriesName: 'Homepage', date: '2024-01-22', visits: 126 },
  { seriesName: 'Homepage', date: '2024-01-23', visits: 119 },
  { seriesName: 'Homepage', date: '2024-01-24', visits: 133 },
  { seriesName: 'Homepage', date: '2024-01-25', visits: 127 },
  { seriesName: 'Homepage', date: '2024-01-26', visits: 136 },
  { seriesName: 'Homepage', date: '2024-01-27', visits: 144 },
  { seriesName: 'Homepage', date: '2024-01-28', visits: 121 },
  { seriesName: 'Homepage', date: '2024-01-29', visits: 118 },
  { seriesName: 'Homepage', date: '2024-01-30', visits: 139 },
  { seriesName: 'Homepage', date: '2024-01-31', visits: 124 },
  { seriesName: 'Homepage', date: '2024-02-01', visits: 130 },
  { seriesName: 'Homepage', date: '2024-02-02', visits: 122 },
  { seriesName: 'Homepage', date: '2024-02-03', visits: 137 },
  { seriesName: 'Homepage', date: '2024-02-04', visits: 140 },
  { seriesName: 'Homepage', date: '2024-02-05', visits: 128 },
  { seriesName: 'Homepage', date: '2024-02-06', visits: 135 },
  { seriesName: 'Homepage', date: '2024-02-07', visits: 120 },
  { seriesName: 'Homepage', date: '2024-02-08', visits: 133 },
  { seriesName: 'Homepage', date: '2024-02-09', visits: 126 },
  { seriesName: 'Homepage', date: '2024-02-10', visits: 138 },
  { seriesName: 'Homepage', date: '2024-02-11', visits: 129 },
  { seriesName: 'Homepage', date: '2024-02-12', visits: 124 },
  { seriesName: 'Homepage', date: '2024-02-13', visits: 132 },
  { seriesName: 'Homepage', date: '2024-02-14', visits: 141 },
  { seriesName: 'Homepage', date: '2024-02-15', visits: 119 },
  { seriesName: 'Homepage', date: '2024-02-16', visits: 127 },
  { seriesName: 'Homepage', date: '2024-02-17', visits: 136 },
  { seriesName: 'Homepage', date: '2024-02-18', visits: 125 },
  { seriesName: 'Homepage', date: '2024-02-19', visits: 139 },
  { seriesName: 'Homepage', date: '2024-02-20', visits: 123 },
  { seriesName: 'Homepage', date: '2024-02-21', visits: 130 },
  { seriesName: 'Homepage', date: '2024-02-22', visits: 120 },
  { seriesName: 'Homepage', date: '2024-02-23', visits: 134 },
  { seriesName: 'Homepage', date: '2024-02-24', visits: 128 },
  { seriesName: 'Homepage', date: '2024-02-25', visits: 137 },
  { seriesName: 'Homepage', date: '2024-02-26', visits: 121 },
  { seriesName: 'Homepage', date: '2024-02-27', visits: 140 },
  { seriesName: 'Homepage', date: '2024-02-28', visits: 131 },
  { seriesName: 'Homepage', date: '2024-02-29', visits: 125 },
];

const DotSeriesScatterplot = () => {
  return (
    <XYChart data={websiteVisits} colorPalette="rainbow">
      <XYChart.DotSeries
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="date"
        y0Accessor="visits"
        nameAccessor="seriesName"
      />
      <XYChart.XAxis
        id="x-first-axis"
        type="time"
        position="bottom"
        label="Date"
      />
      <XYChart.YAxis
        id="y-first-axis"
        type="numerical"
        position="left"
        label="Website visits over last month"
      />
    </XYChart>
  );
};
```

### Strip plot

**DotSeriesStripPlot**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const stripPlotData = [
  { seriesName: 'First Class', x0: 'First', y0: 44.82 },
  { seriesName: 'First Class', x0: 'First', y0: 41.78 },
  { seriesName: 'First Class', x0: 'First', y0: 11.16 },
  { seriesName: 'First Class', x0: 'First', y0: 40.59 },
  { seriesName: 'First Class', x0: 'First', y0: 7.34 },
  { seriesName: 'First Class', x0: 'First', y0: 7.63 },
  { seriesName: 'First Class', x0: 'First', y0: 21.8 },
  { seriesName: 'First Class', x0: 'First', y0: 16.17 },
  { seriesName: 'First Class', x0: 'First', y0: 18.13 },
  { seriesName: 'First Class', x0: 'First', y0: 13.35 },
  { seriesName: 'First Class', x0: 'First', y0: 21.41 },
  { seriesName: 'First Class', x0: 'First', y0: 24.35 },
  { seriesName: 'First Class', x0: 'First', y0: 32.8 },
  { seriesName: 'First Class', x0: 'First', y0: 6.32 },
  { seriesName: 'First Class', x0: 'First', y0: 21.6 },
  { seriesName: 'First Class', x0: 'First', y0: 43.56 },
  { seriesName: 'First Class', x0: 'First', y0: 35.8 },
  { seriesName: 'First Class', x0: 'First', y0: 44.82 },
  { seriesName: 'First Class', x0: 'First', y0: 5.26 },
  { seriesName: 'First Class', x0: 'First', y0: 37.32 },
  { seriesName: 'First Class', x0: 'First', y0: 5.6 },
  { seriesName: 'First Class', x0: 'First', y0: 44.47 },
  { seriesName: 'First Class', x0: 'First', y0: 38.51 },
  { seriesName: 'First Class', x0: 'First', y0: 18.8 },
  { seriesName: 'First Class', x0: 'First', y0: 27.18 },
  { seriesName: 'First Class', x0: 'First', y0: 30.52 },
  { seriesName: 'First Class', x0: 'First', y0: 44.96 },
  { seriesName: 'First Class', x0: 'First', y0: 13.11 },
  { seriesName: 'First Class', x0: 'First', y0: 15.36 },
  { seriesName: 'First Class', x0: 'First', y0: 20.93 },
  { seriesName: 'First Class', x0: 'First', y0: 42.7 },
  { seriesName: 'First Class', x0: 'First', y0: 44.28 },
  { seriesName: 'First Class', x0: 'First', y0: 13.92 },
  { seriesName: 'First Class', x0: 'First', y0: 22.49 },
  { seriesName: 'First Class', x0: 'First', y0: 40.23 },
  { seriesName: 'First Class', x0: 'First', y0: 20.9 },
  { seriesName: 'First Class', x0: 'First', y0: 26.53 },
  { seriesName: 'First Class', x0: 'First', y0: 23.38 },
  { seriesName: 'First Class', x0: 'First', y0: 30.34 },
  { seriesName: 'First Class', x0: 'First', y0: 18.96 },
  { seriesName: 'Second Class', x1: 'Second', y1: 36.5 },
  { seriesName: 'Second Class', x1: 'Second', y1: 15.63 },
  { seriesName: 'Second Class', x1: 'Second', y1: 47.98 },
  { seriesName: 'Second Class', x1: 'Second', y1: 33.4 },
  { seriesName: 'Second Class', x1: 'Second', y1: 24.4 },
  { seriesName: 'Second Class', x1: 'Second', y1: 20.93 },
  { seriesName: 'Second Class', x1: 'Second', y1: 19.86 },
  { seriesName: 'Second Class', x1: 'Second', y1: 38.33 },
  { seriesName: 'Second Class', x1: 'Second', y1: 44.18 },
  { seriesName: 'Second Class', x1: 'Second', y1: 21.23 },
  { seriesName: 'Second Class', x1: 'Second', y1: 47.8 },
  { seriesName: 'Second Class', x1: 'Second', y1: 24.08 },
  { seriesName: 'Second Class', x1: 'Second', y1: 49.79 },
  { seriesName: 'Second Class', x1: 'Second', y1: 39.78 },
  { seriesName: 'Second Class', x1: 'Second', y1: 21.77 },
  { seriesName: 'Second Class', x1: 'Second', y1: 35.72 },
  { seriesName: 'Second Class', x1: 'Second', y1: 19.35 },
  { seriesName: 'Second Class', x1: 'Second', y1: 23.87 },
  { seriesName: 'Second Class', x1: 'Second', y1: 33.51 },
  { seriesName: 'Second Class', x1: 'Second', y1: 46.84 },
  { seriesName: 'Second Class', x1: 'Second', y1: 16.35 },
  { seriesName: 'Second Class', x1: 'Second', y1: 27.55 },
  { seriesName: 'Second Class', x1: 'Second', y1: 31.34 },
  { seriesName: 'Second Class', x1: 'Second', y1: 37.51 },
  { seriesName: 'Second Class', x1: 'Second', y1: 27.77 },
  { seriesName: 'Second Class', x1: 'Second', y1: 39.68 },
  { seriesName: 'Second Class', x1: 'Second', y1: 46.38 },
  { seriesName: 'Second Class', x1: 'Second', y1: 39.51 },
  { seriesName: 'Second Class', x1: 'Second', y1: 28.21 },
  { seriesName: 'Second Class', x1: 'Second', y1: 35.68 },
  { seriesName: 'Third Class', x2: 'Third', y2: 32.38 },
  { seriesName: 'Third Class', x2: 'Third', y2: 19.43 },
  { seriesName: 'Third Class', x2: 'Third', y2: 16.76 },
  { seriesName: 'Third Class', x2: 'Third', y2: 4.52 },
  { seriesName: 'Third Class', x2: 'Third', y2: 35.14 },
  { seriesName: 'Third Class', x2: 'Third', y2: 3.11 },
  { seriesName: 'Third Class', x2: 'Third', y2: 65.44 },
  { seriesName: 'Third Class', x2: 'Third', y2: 58.95 },
  { seriesName: 'Third Class', x2: 'Third', y2: 48.67 },
  { seriesName: 'Third Class', x2: 'Third', y2: 60.71 },
  { seriesName: 'Third Class', x2: 'Third', y2: 11.48 },
  { seriesName: 'Third Class', x2: 'Third', y2: 5.15 },
  { seriesName: 'Third Class', x2: 'Third', y2: 34.6 },
  { seriesName: 'Third Class', x2: 'Third', y2: 32.75 },
  { seriesName: 'Third Class', x2: 'Third', y2: 15.93 },
  { seriesName: 'Third Class', x2: 'Third', y2: 21.05 },
  { seriesName: 'Third Class', x2: 'Third', y2: 54.02 },
  { seriesName: 'Third Class', x2: 'Third', y2: 30.16 },
  { seriesName: 'Third Class', x2: 'Third', y2: 14.7 },
  { seriesName: 'Third Class', x2: 'Third', y2: 33.66 },
  { seriesName: 'Third Class', x2: 'Third', y2: 31.26 },
  { seriesName: 'Third Class', x2: 'Third', y2: 52.75 },
  { seriesName: 'Third Class', x2: 'Third', y2: 58.4 },
  { seriesName: 'Third Class', x2: 'Third', y2: 9.57 },
  { seriesName: 'Third Class', x2: 'Third', y2: 38.58 },
  { seriesName: 'Third Class', x2: 'Third', y2: 2.13 },
  { seriesName: 'Third Class', x2: 'Third', y2: 2.25 },
  { seriesName: 'Third Class', x2: 'Third', y2: 8.04 },
  { seriesName: 'Third Class', x2: 'Third', y2: 24.15 },
  { seriesName: 'Third Class', x2: 'Third', y2: 53.48 },
  { seriesName: 'Third Class', x2: 'Third', y2: 55.07 },
  { seriesName: 'Third Class', x2: 'Third', y2: 4.98 },
  { seriesName: 'Third Class', x2: 'Third', y2: 8.79 },
  { seriesName: 'Third Class', x2: 'Third', y2: 12.06 },
  { seriesName: 'Third Class', x2: 'Third', y2: 47.61 },
  { seriesName: 'Third Class', x2: 'Third', y2: 24.52 },
  { seriesName: 'Third Class', x2: 'Third', y2: 35.19 },
  { seriesName: 'Third Class', x2: 'Third', y2: 12.1 },
  { seriesName: 'Third Class', x2: 'Third', y2: 23.17 },
  { seriesName: 'Third Class', x2: 'Third', y2: 12.79 },
  { seriesName: 'Third Class', x2: 'Third', y2: 63.51 },
  { seriesName: 'Third Class', x2: 'Third', y2: 13.45 },
  { seriesName: 'Third Class', x2: 'Third', y2: 18.42 },
  { seriesName: 'Third Class', x2: 'Third', y2: 43.79 },
  { seriesName: 'Third Class', x2: 'Third', y2: 10.75 },
  { seriesName: 'Third Class', x2: 'Third', y2: 62.86 },
  { seriesName: 'Third Class', x2: 'Third', y2: 36.21 },
  { seriesName: 'Third Class', x2: 'Third', y2: 34.31 },
  { seriesName: 'Third Class', x2: 'Third', y2: 1.21 },
  { seriesName: 'Third Class', x2: 'Third', y2: 54.2 },
  { seriesName: 'Third Class', x2: 'Third', y2: 0.86 },
  { seriesName: 'Third Class', x2: 'Third', y2: 43.06 },
  { seriesName: 'Third Class', x2: 'Third', y2: 39.87 },
  { seriesName: 'Third Class', x2: 'Third', y2: 35.06 },
  { seriesName: 'Third Class', x2: 'Third', y2: 18.85 },
  { seriesName: 'Third Class', x2: 'Third', y2: 68.79 },
  { seriesName: 'Third Class', x2: 'Third', y2: 53.4 },
  { seriesName: 'Third Class', x2: 'Third', y2: 42.72 },
  { seriesName: 'Third Class', x2: 'Third', y2: 35.1 },
  { seriesName: 'Third Class', x2: 'Third', y2: 51.84 },
];

const DotSeriesStripPlot = () => {
  return (
    <XYChart data={stripPlotData} colorPalette="fireplace">
      <XYChart.DotSeries
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="x0"
        y0Accessor="y0"
        nameAccessor="seriesName"
      />
      <XYChart.DotSeries
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="x1"
        y0Accessor="y1"
        nameAccessor="seriesName"
      />
      <XYChart.DotSeries
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="x2"
        y0Accessor="y2"
        nameAccessor="seriesName"
      />
      <XYChart.XAxis id="x-first-axis" type="categorical" position="bottom" />
      <XYChart.YAxis id="y-first-axis" type="numerical" position="left" />
    </XYChart>
  );
};
```

### Opposite diagram

**DotSeriesOppositeDiagram**

```tsx
import { XYChart } from '@dynatrace/strato-components/charts';

const oppositeDiagramData = [
  { seriesName: 'Current solution', x0: 8.46, y0: -9.44 },
  { seriesName: 'Current solution', x0: 7.71, y0: 6.52 },
  { seriesName: 'Current solution', x0: 3.29, y0: 4.38 },
  { seriesName: 'Current solution', x0: -6.85, y0: -5.61 },
  { seriesName: 'Current solution', x0: -8.21, y0: -1.09 },
  { seriesName: 'Current solution', x0: 7.52, y0: -1.8 },
  { seriesName: 'Current solution', x0: 5.39, y0: 6.29 },
  { seriesName: 'Current solution', x0: 6.89, y0: -4 },
  { seriesName: 'Current solution', x0: -6.34, y0: -8.2 },
  { seriesName: 'Option A', x1: 4.75, y1: 3.76 },
  { seriesName: 'Option A', x1: 9.82, y1: -8.84 },
  { seriesName: 'Option A', x1: -4.96, y1: -3.72 },
  { seriesName: 'Option A', x1: -9.09, y1: -4.56 },
  { seriesName: 'Option A', x1: -6.2, y1: -1.9 },
  { seriesName: 'Option A', x1: 9.96, y1: -5.52 },
  { seriesName: 'Option A', x1: -0.97, y1: -6.12 },
  { seriesName: 'Option A', x1: 3.62, y1: 4.47 },
  { seriesName: 'Option A', x1: -6.32, y1: 9.95 },
];

const DotSeriesOppositeDiagram = () => {
  return (
    <XYChart data={oppositeDiagramData} colorPalette="categorical">
      <XYChart.DotSeries
        xAxisId="x-first-axis"
        yAxisId="y-first-axis"
        x0Accessor="x0"
        y0Accessor="y0"
        nameAccessor="seriesName"
      />
      <XYChart.DotSeries
        xAxisId="x-second-axis"
        yAxisId="y-second-axis"
        x0Accessor="x1"
        y0Accessor="y1"
        nameAccessor="seriesName"
      />
      <XYChart.XAxis
        id="x-first-axis"
        type="numerical"
        position="bottom"
        min={-10}
        max={10}
        label="Bad"
      />
      <XYChart.YAxis
        id="y-first-axis"
        type="numerical"
        position="left"
        min={-10}
        max={10}
        label="Complex"
      />
      <XYChart.XAxis
        id="x-second-axis"
        type="numerical"
        position="top"
        min={-10}
        max={10}
        label="Good"
      />
      <XYChart.YAxis
        id="y-second-axis"
        type="numerical"
        position="right"
        min={-10}
        max={10}
        label="Simple"
      />
    </XYChart>
  );
};
```
