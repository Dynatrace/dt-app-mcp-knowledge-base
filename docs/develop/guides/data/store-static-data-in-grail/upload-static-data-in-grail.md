## Upload static data in Grail

The  endpoint is used to upload lookup data and store it as a new tabular file or replace an existing one. The data is parsed using the Dynatrace Pattern Language (DPL), which allows you to define patterns for extracting records from the uploaded data.

The request must be submitted as `multipart/form-data` with the following parts:

- request: Contains the request parameters in JSON format
- content: Contains the lookup data in text format

### Key request parameters

Here are details of important request parameters:

- filePath **(required)**: A file path where the data will be stored in Grail. It must start with a `/lookups/` prefix. It is later used to fetch the data.
- parsePattern **(required)**: A DPL (Dynatrace Pattern Language) expression to parse the uploaded data.
- lookupField **(required)**: The unique field in the lookup data that acts as ID.
- overwrite: If set to true, the API will overwrite previously written content in the file.
- displayName: A user-friendly name for the file.
- description: A description of the file.
- skippedRecords: The number of initial records to skip in the uploaded data. The default is 0.
- timezone: The timezone for parsing time and date fields.
- locale: The local for parsing locale-specific information.
- autoFlatten: Set it to true to extract nested fields to the root level when the specified DPL pattern results in a single record-type field.

### Upload data in Dynatrace app

In the following example, when the user selects the button **Store Currency rates**, the app will upload the currency rate information to the Grail Resource Store into filePath `/lookups/currencyrates`. In the example, we're hardcoding the currency rates, but you can easily use an app function to fetch the data from a third-party API and store it.

```tsx title="ui/app/pages/Home.tsx"
import React, { useCallback } from 'react';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Button } from '@dynatrace/strato-components/buttons';

const data = [
  { source: 'USD', EUR: 0.88, AUD: 1.39, PLN: 3.94 },
  { source: 'EUR', USD: 1.14, AUD: 0.72, PLN: 0.25 },
];

export const Home = () => {
  const handleClick = useCallback(() => {
    if (!data) {
      console.error('No conversion rate data available.');
      return;
    }

    const request = {
      lookupField: 'data',
      filePath: '/lookups/currencyrates',
      overwrite: true,
      displayName: 'Currency Rates',
      skippedRecords: 0,
      autoFlatten: false,
      timezone: 'UTC',
      locale: 'en_US',
      description: 'Currency Rates for Conversion',
      parsePattern: 'JSON:data',
    };

    const blob = new Blob([JSON.stringify(data)], {
      type: 'application/json',
    });
    const file = new File([blob], 'currencyrates.json', {
      type: 'application/json',
    });

    const formData = new FormData();
    formData.append('request', JSON.stringify(request));
    formData.append('content', file);

    fetch('/platform/storage/resource-store/v1/files/tabular/lookup:upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      })
      .then((json) => {
        console.log('Lookup data uploaded successfully:');
      })
      .catch((error) => {
        console.error('Error uploading lookup data:', error);
      });
  }, []);

  return (
    <Flex flexDirection="column" alignItems="center" padding={32}>
      <Button onClick={handleClick}>Store Currency Rates</Button>
    </Flex>
  );
};
```

This operation requires the scope `storage:files:write` Read more about scopes in this [guide](https://developer.dynatrace.com/develop/guides/security/add-permission-scopes-to-use-dynatrace-apis.md).
