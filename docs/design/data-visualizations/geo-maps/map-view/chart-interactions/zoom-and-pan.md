### Zoom and pan

There is a number of zoom interactions available that can be enabled bt adding the `MapView.Zoom` subcomponent to the `MapView` component.

You can zoom in and out using a scroll wheel, pinching, double click on the left mouse button, or by clicking the left mouse button and holding `Shift` while dragging the cursor. To reset the zoom to the initial state, click the reset button in the toolbar.

The toolbar also provides a `zoom-to-fit` button that, when clicked, will zoom the map to fit all the data points from all the data layers.

A zoom level determines how much of the world is visible on a map. There are 23 zoom levels in total supported, with 0 being the lowest zoom level (fully zoomed out) and 22 being the highest (fully zoomed in).

Zoom level breakdown by what is visible on the map:

- 0: The whole world
- 3: A continent
- 4: Large islands
- 6: Large rivers
- 10: Large rivers
- 15: Buildings

To pan a map, click and hold the left button and drag the cursor.

**ZoomAndPan**

```tsx
import {
  BubbleLayer,
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
];

const ZoomAndPan = () => {
  return (
    <MapView height={400}>
      <DotLayer
        data={earthquakes.slice(0, 16)}
        color="legend"
        valueAccessor="magnitude"
      />
      <BubbleLayer
        data={earthquakes.slice(16, 35)}
        color="legend"
        valueAccessor="magnitude"
        radius={({ magnitude }) => magnitude * 3}
      />
      <MapView.Toolbar placement="bottom-left" />
      <MapView.Zoom />
    </MapView>
  );
};
```
