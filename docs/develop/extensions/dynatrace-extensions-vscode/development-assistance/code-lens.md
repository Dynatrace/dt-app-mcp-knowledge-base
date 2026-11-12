## Code lens

Code lenses are actionable, contextual information interspersed with your code. For **Dynatrace Extensions**, these can help trigger
code-related actions to your Dynatrace environment or other external endpoints.

### Metric selectors

The lens appears automatically wherever `metricSelector` and shows:

- Query data - an action that runs the metric selector query and visualizes its results
- Validate selector - an action to verify this selector against your Dynatrace environment
- An icon representing the last validation status for this selector. You can hover over it for more details

![metric selector lens](https://developer.dynatrace.com/assets/images/metric_selector_lens-cc03bc362e3432e5fe7cc3bb032920b0.png)

Metric selector results are displayed within a separate metric panel:

![results panel](https://developer.dynatrace.com/assets/images/metric_selector_panel-e4e02b6b77b1fe39a08f715287f9048f.png)

Any errors from querying your environment are displayed in the Dynatrace output panel (by default at the bottom of your editor):

![output panel](https://developer.dynatrace.com/assets/images/metric_selector_errors-05f6c2f7054ba8c75bc20134ceba7245.png)

### Entity selectors

The lens appears automatically wherever `entitySelector` is mentioned and shows:

- Query data - an action that runs the entity selector query and visualizes its results
- Validate selector - an action to verify this selector against your Dynatrace environment
- An icon representing the last validation status for this selector. You can hover over it for more details

![entity selector lens](https://developer.dynatrace.com/assets/images/entity_selector_lens-1e2b0cdd7970d8939d7a3b54fba838d7.png)

Entity selector results, as well as any errors, are displayed within the Dynatrace output panel (by default at the bottom of your editor):

![selector results](https://developer.dynatrace.com/assets/images/entity_selector_results-7664d0c011b93bd15d874ac49972f8b5.png)

### Prometheus

The lens appears automatically when the Prometheus data source is defined and shows:

- Scrape data - an action that connects to a Prometheus scraper endpoint and collects its data
- Edit config - an action that allows you to make changes to the connected Prometheus endpoint
- Text indicating the status of the last scrape action, such as the timestamp and number of metrics scraped

![prometheus lens](https://developer.dynatrace.com/assets/images/prometheus_lens-ba611175807e26a9f063af31e346d387.png)

After the data has been scraped, this can be used with [Code actions](#code-actions) to:

- insert metric definitions in the `prometheus` section of the manifest
- insert dimensions in the `prometheus` section of the manifest
- insert metric metadata in the `metrics` section of the manifest

![prometheus data action](https://developer.dynatrace.com/assets/images/prometheus_lens_action-d2438497b0d6e728d717b1401bf75f58.png)

### Windows Management Interface (WMI) queries

The lens appears automatically over queries inside the WMI data source definition and shows:

- Run WMI Query: an action that runs your query against the local Windows machine
- Text indicating the summary of the query results (i.e., how many object instances were found)

The full results of running the WMI query are displayed in a separate panel:

![wmi panel](https://developer.dynatrace.com/assets/images/wmi_query_lens_panel-d4f04e5fe73bbf205703c63ce7763e35.png)

After a query is run, you can use the results with [Code completions](#code-completions)

![wmi query completions](https://developer.dynatrace.com/assets/images/wmi_query_lens_suggestion-338083fdfbd7bbc06f3dc4f557ad4e1a.png)

### Unified analysis screens

The lens appears automatically over entity type definitions inside the `screens` element of the manifest
and shows:

- Open List View: an action to open a browser window to this entity's [Unified analysis list view](https://docs.dynatrace.com/docs/shortlink/ua-pages#page-types)
- Open Details view: an action to open a browser window to this entity's [Unified analysis details view](https://docs.dynatrace.com/docs/shortlink/ua-pages#page-types)

![unified analysis screen lens](https://developer.dynatrace.com/assets/images/screen_lens-09a6416c02742f1030cde8b99ec0f2de.png)

> **Note**
>
> A 404 response code is expected if your entity type does exist yet.
