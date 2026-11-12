## DNS errors

Due to platform limitations, you might encounter DNS error messages such as:

```text
dns error: Device or resource busy (os error 16)
```

There are two primary causes of this error:

- The host targeted by an HTTP request doesn't exist, for example, due to a typo.
- The system is overloaded because too many requests are sent concurrently. This error is standard when ingesting a lot of data split into several requests, especially when you don't `await` such requests. Consider sending all your data in a single request (if supported by the server) or batch your requests instead.

### Batching requests

Find a simple implementation for request batching below. Note that this code only serves as a minimal example. Consider handling errors and potential rate limits of the remote service gracefully in a production environment.

```ts testable
async function fetchInBatches(urls: string[], batchSize: number): Promise<unknown[]> {
  const results: unknown[] = [];
  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const batchResults = await Promise.all(
      batch.map((url) => fetch(url).then((res) => res.json() as Promise<unknown>)),
    );
    results.push(...batchResults);
  }
  return results;
}

export default async function () {
  const urls = [
    'https://some-api.example.com/item/1',
    'https://some-api.example.com/item/2',
    'https://some-api.example.com/item/3',
    'https://some-api.example.com/item/4',
    'https://some-api.example.com/item/5',
    'https://some-api.example.com/item/6',
    // ...
  ];

  const batchSize = 5; // Adjust this number based on expected load
  const allData = await fetchInBatches(urls, batchSize);
  console.log(allData);
}
```
