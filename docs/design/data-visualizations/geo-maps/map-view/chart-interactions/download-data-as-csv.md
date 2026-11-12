### Download data as CSV

All the data from data layers can be download in CSV format using a toolbar button. To enable this feature, a `MapView.DownloadCSV` subcomponent must be provided. The CSV file will contain at least two columns: `latitude` and `longitude`. Depending on the shape of the data point, all additional properties will be added as columns to the CSV file.

**DownloadCSV**

```tsx
import { DotLayer, Location, MapView } from '@dynatrace/strato-geo';

type Airport = {
  name?: string;
} & Location;

const airports: Airport[] = [
  { latitude: 40.4950168, longitude: -3.5619325 },
  { latitude: 49.0068962, longitude: 2.5625635 },
  { latitude: 38.78101, longitude: 9.1360051 },
  { latitude: 51.8780363, longitude: 0.3701408 },
  { latitude: 41.7992581, longitude: 12.5927407 },
  { latitude: 51.5169901, longitude: 7.613085 },
];

const DownloadCSV = () => {
  const initialViewState = {
    longitude: 1.5361653,
    latitude: 42.6185889,
    zoom: 3,
  };

  return (
    <MapView height={400} initialViewState={initialViewState}>
      <MapView.DownloadCSV />
      <DotLayer data={airports} color="blue" />
    </MapView>
  );
};
```

It's also possible to programmatically trigger the download of the CSV file by calling the `downloadData` method on the `MapView` instance reference.

**DownloadCSVProgrammatic**

```tsx
import { useRef } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Flex } from '@dynatrace/strato-components/layouts';
import { DotLayer, Location, MapView, MapViewRef } from '@dynatrace/strato-geo';
import { DownloadIcon } from '@dynatrace/strato-icons';

type Airport = {
  name?: string;
} & Location;

const airports: Airport[] = [
  { latitude: 40.4950168, longitude: -3.5619325 },
  { latitude: 49.0068962, longitude: 2.5625635 },
  { latitude: 38.78101, longitude: 9.1360051 },
  { latitude: 51.8780363, longitude: 0.3701408 },
  { latitude: 41.7992581, longitude: 12.5927407 },
  { latitude: 51.5169901, longitude: 7.613085 },
];

const DownloadCSVProgrammatic = () => {
  const initialViewState = {
    longitude: 1.5361653,
    latitude: 42.6185889,
    zoom: 3,
  };
  const customStyles = { width: '100%' };
  const mapRef = useRef<MapViewRef>(null);
  const downloadData = () => {
    mapRef.current?.downloadData();
  };

  return (
    <Flex flexDirection="column">
      <Flex justifyContent="center">
        <Button
          onClick={downloadData}
          variant="emphasized"
          style={{ margin: '4px' }}
        >
          <Button.Prefix>
            <DownloadIcon />
          </Button.Prefix>
          Download Data
        </Button>
      </Flex>
      <Flex>
        <MapView
          style={customStyles}
          height={400}
          initialViewState={initialViewState}
          ref={mapRef}
        >
          <DotLayer data={airports} color="blue" />
        </MapView>
      </Flex>
    </Flex>
  );
};
```
