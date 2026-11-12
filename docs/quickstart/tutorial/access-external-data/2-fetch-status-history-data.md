## 2. Fetch status history data

The **external** status history API is available at `https://dt-url.net/status-history` and returns something like this:

```json
[
  {
    "status": "disruption",
    "title": "Tenants in Azure clusters 6 and 7 inaccessible",
    "date": "2023-11-26T23:36:00.000Z",
    "active": true
  },
  {
    "status": "partial-disruption",
    "title": "Potential interruption of monitoring of services",
    "date": "2023-11-15T18:06:00.000Z",
    "active": true
  },
  {
    "status": "operational",
    "title": "Unable to Access Certain Tenants",
    "date": "2023-11-08T19:15:00.000Z",
    "active": false
  }
]
```

Using the [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API), we can fetch the status history within our app function. We'll use the `payload` argument of the app function to define filters. In this case, it will only indicate whether the incident is still active. Adapt the payload type and the app function's code to allow filtering. Finally, enrich the API's response with color and description fields to use them in the UI as follows:

```ts testable title="api/get-status-history.function.ts"
const statusMap = {
  'disruption': {
    color: 'critical',
    description: 'Service disruption',
  },
  'partial-disruption': {
    color: 'warning',
    description: 'Partial service disruption',
  },
  'operational': {
    color: 'success',
    description: 'Operational',
  },
} as const;

type HistoryItem = {
  status: keyof typeof statusMap;
  active: boolean;
};

export default async function (payload?: { active: boolean }) {
  const res = await fetch('https://dt-url.net/status-history');
  let history = (await res.json()) as HistoryItem[];

  if (payload) {
    history = history.filter(({ active }) => active === payload.active);
  }

  return history.map((item) => ({
    ...item,
    color: statusMap[item.status].color,
    description: statusMap[item.status].description,
  }));
}
```

Every TypeScript file in the `api` directory is exposed as an app function via the relative URL `/api/filename`. Therefore, after restarting the development server, we can open `http://localhost:3000/api/get-status-history` to see the result of the app function.

You can restart the development server using the appropriate command for your operating system. For example, on Windows, press `Ctrl + C` in the terminal where the server is running. Then, run the `npx dt-app dev` command.
