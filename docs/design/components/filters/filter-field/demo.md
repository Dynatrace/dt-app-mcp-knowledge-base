## Demo

`FilterField` uses a simple and intuitive [filter field syntax](https://docs.dynatrace.com/docs/shortlink/ui-filter-field). When the user begins to type, a dropdown with suggestions for the next key, value, or operator appears. See [Usage](https://developer.dynatrace.com/design/components/filters/FilterField/usage.md) for best practices to implement the component.

**StaticSuggestions**

```tsx
import { useMemo, useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import {
  FilterField,
  isFilterFieldLeafNode,
  isFilterFieldListNode,
} from '@dynatrace/strato-components/filters';
import type {
  FilterFieldGroupNode,
  FilterFieldNode,
  FilterFieldTree,
  FilterFieldValidatorMap,
} from '@dynatrace/strato-components/filters';
import {
  FormField,
  FormFieldMessages,
} from '@dynatrace/strato-components/forms';
import { Flex, Grid } from '@dynatrace/strato-components/layouts';
import {
  DataTable,
  type DataTableColumnDef,
} from '@dynatrace/strato-components/tables';
import { PlayIcon, RefreshIcon } from '@dynatrace/strato-icons';

type Pod = {
  Name: string;
  Running: boolean;
  'Container restarts': number;
  Annotations: string;
  Fields: string;
};

const data: Pod[] = [
  {
    Name: 'frontend-app-7c9d8f7b6d-abc12',
    Running: true,
    'Container restarts': 2,
    Annotations: 'prometheus.io/scrape=true',
    Fields:
      '{"metadata":{"name":"frontend-app-7c9d8f7b6d-abc12","labels":{"app":"frontend"},"annotations":{"prometheus.io/scrape":"true"}},"spec":{"nodeName":"k8s-node-01","restartPolicy":"Always"},"status":{"phase":"Running","podIP":"10.244.1.15"}}',
  },
  {
    Name: 'backend-worker-5f8e9d6c4b-df34',
    Running: false,
    'Container restarts': 0,
    Annotations: 'prometheus.io/port=8080',
    Fields:
      '{"metadata":{"name":"backend-worker-5f8e9d6c4b-df34","labels":{"app":"backend"},"annotations":{"prometheus.io/port":"8080"}},"spec":{"nodeName":"k8s-node-02","restartPolicy":"OnFailure"},"status":{"phase":"Pending","podIP":"10.244.2.21"}}',
  },
  {
    Name: 'db-migrator-2a7b6c5d8e-ghi56',
    Running: true,
    'Container restarts': 1,
    Annotations: 'kubectl.kubernetes.io/restartedAt=2024-06-01T12:34:56Z',
    Fields:
      '{"metadata":{"name":"db-migrator-2a7b6c5d8e-ghi56","labels":{"app":"db"},"annotations":{"kubectl.kubernetes.io/restartedAt":"2024-06-01T12:34:56Z"}},"spec":{"nodeName":"k8s-node-03","restartPolicy":"Never"},"status":{"phase":"Running","podIP":"10.244.3.33"}}',
  },
  {
    Name: 'cache-redis-1b2c3d4e5f-jkl78',
    Running: false,
    'Container restarts': 3,
    Annotations: 'sidecar.istio.io/inject=false',
    Fields:
      '{"metadata":{"name":"cache-redis-1b2c3d4e5f-jkl78","labels":{"app":"cache"},"annotations":{"sidecar.istio.io/inject":"false"}},"spec":{"nodeName":"k8s-node-04","restartPolicy":"Always"},"status":{"phase":"CrashLoopBackOff","podIP":"10.244.4.44"}}',
  },
  {
    Name: 'metrics-exporter-9e8d7c6b5a-mno90',
    Running: true,
    'Container restarts': 0,
    Annotations: 'linkerd.io/inject=enabled',
    Fields:
      '{"metadata":{"name":"metrics-exporter-9e8d7c6b5a-mno90","labels":{"app":"metrics"},"annotations":{"linkerd.io/inject":"enabled"}},"spec":{"nodeName":"k8s-node-05","restartPolicy":"Always"},"status":{"phase":"Running","podIP":"10.244.5.55"}}',
  },
];

function filterData(dataset: Pod[], node?: FilterFieldTree): Pod[] {
  if (!node || dataset.length === 0) {
    return dataset;
  }
  return dataset.filter((item) => filterFunction(item, node));
}

function filterFunction(item: Pod, node: FilterFieldGroupNode): boolean {
  const { logicalOperator, children } = node;
  return logicalOperator === 'OR'
    ? children.some((childNode) => evaluateFilter(item, childNode, false))
    : children.every((childNode) => evaluateFilter(item, childNode, true));
}

function getByPath(obj: object | undefined, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
}

function evaluateFilter(
  item: Pod,
  node: FilterFieldNode,
  defaultReturn: boolean,
): boolean {
  switch (node.type) {
    case 'Group':
      return filterFunction(item, node);
    case 'Statement': {
      const { key, comparisonOperator, value } = node;
      const isValidStatementKey = (needleKey: string): needleKey is keyof Pod =>
        needleKey in item;

      switch (comparisonOperator?.type) {
        case 'ComparisonOperator': {
          if (
            !(
              key &&
              comparisonOperator &&
              value &&
              isFilterFieldLeafNode(value)
            )
          ) {
            return defaultReturn;
          }
          const { value: statementComparisonOperator } = comparisonOperator;
          let { value: statementKey } = key;
          const { type: statementKeyType } = key;
          const { value: statementValue } = value;

          if (!statementValue) {
            return defaultReturn;
          }

          statementKey =
            statementKeyType === 'JSONPath' ? key.root : statementKey;

          if (!isValidStatementKey(statementKey)) {
            return defaultReturn;
          }

          let itemKey = item[statementKey];

          if (statementKeyType === 'JSONPath') {
            try {
              const itemKeyJSONObject = JSON.parse(String(itemKey));
              itemKey = JSON.stringify(
                // Remove $. from key.path. Also, we for the sake of the demo we assume
                // that we can only parse paths with dot notation.
                getByPath(itemKeyJSONObject, key.path.slice(2)),
                // Remove leading/trailing quotes from itemKey if present
              ).replace(/^"+|"+$/g, '');
            } catch {
              return defaultReturn;
            }
          }

          switch (statementComparisonOperator) {
            case '=':
              return itemKey === statementValue;
            case '!=':
              return itemKey !== statementValue;
            case '<':
              return itemKey !== undefined && itemKey < statementValue;
            case '<=':
              return itemKey !== undefined && itemKey <= statementValue;
            case '>':
              return itemKey !== undefined && itemKey > statementValue;
            case '>=':
              return itemKey !== undefined && itemKey >= statementValue;
            case 'contains':
              return (
                itemKey !== undefined &&
                typeof itemKey === 'string' &&
                typeof statementValue === 'string' &&
                itemKey.includes(statementValue)
              );
            case 'not-contains':
              return (
                itemKey !== undefined &&
                typeof itemKey === 'string' &&
                typeof statementValue === 'string' &&
                !itemKey.includes(statementValue)
              );
            case 'starts-with':
              return (
                itemKey !== undefined &&
                typeof itemKey === 'string' &&
                typeof statementValue === 'string' &&
                itemKey.startsWith(statementValue)
              );
            case 'not-starts-with':
              return (
                itemKey !== undefined &&
                typeof itemKey === 'string' &&
                typeof statementValue === 'string' &&
                !itemKey.startsWith(statementValue)
              );
            case 'ends-with':
              return (
                itemKey !== undefined &&
                typeof itemKey === 'string' &&
                typeof statementValue === 'string' &&
                itemKey.endsWith(statementValue)
              );
            case 'not-ends-with':
              return (
                itemKey !== undefined &&
                typeof itemKey === 'string' &&
                typeof statementValue === 'string' &&
                !itemKey.endsWith(statementValue)
              );
            default:
              // In case a new comparison operator was added, it should be handled accordingly.
              console.warn(
                `Comparison operator '${statementComparisonOperator}' not handled.`,
              );
              return defaultReturn;
          }
        }
        case 'InclusionOperator': {
          if (
            !(
              key &&
              comparisonOperator &&
              value &&
              isFilterFieldListNode(value)
            )
          ) {
            return defaultReturn;
          }
          const { value: statementComparisonOperator } = comparisonOperator;
          const { value: statementKey } = key;
          if (!isValidStatementKey(statementKey)) {
            return defaultReturn;
          }
          const { value: listValues } = value;
          const values = listValues.map((entry) => entry.value);
          return statementComparisonOperator === 'in'
            ? values.includes(item[statementKey])
            : !values.includes(item[statementKey]);
        }
        case 'ExistsOperator': {
          if (!(key && comparisonOperator)) {
            return defaultReturn;
          }

          const { value: statementKey } = key;
          const { value } = comparisonOperator;

          if (!isValidStatementKey(statementKey)) {
            return defaultReturn;
          }

          return value
            ? item[statementKey] !== undefined
            : item[statementKey] === undefined;
        }
        case 'SearchOperator': {
          if (!(value && isFilterFieldLeafNode(value))) {
            return defaultReturn;
          }
          const { value: statementValue } = value;
          if (!statementValue) {
            return defaultReturn;
          }
          return Object.values(item).some(
            (itemValue) =>
              typeof itemValue === 'string' &&
              itemValue.includes(statementValue.toString()),
          );
        }
        case undefined:
          return defaultReturn;
        default:
          // In case a new comparison operator was added, it should be handled accordingly.
          console.warn(
            `Comparison operator '${comparisonOperator?.type}' not handled.`,
          );
          return defaultReturn;
      }
    }
    default:
      // The only nodes we want to handle are groups and statements.
      // Any other nodes included in the tree (explicit logical operator) will be ignored.
      return defaultReturn;
  }
}

const validatorMap: FilterFieldValidatorMap = {
  keyPredicates: [
    {
      key: 'Annotations',
      valuePredicate: data.map((pod) => pod.Annotations),
      valueType: 'String',
    },
    {
      key: 'Container restarts',
      valuePredicate: data.map((pod) => pod['Container restarts']),
      valueType: 'Number',
    },
    {
      key: 'Fields',
      valueType: 'JSONPath',
    },
    {
      key: 'Name',
      valuePredicate: data.map((pod) => pod.Name),
      valueType: 'String',
    },
    {
      key: 'Running',
      valueType: 'Boolean',
    },
  ],
  exhaustive: true,
};

const StaticSuggestions = () => {
  const [value, setValue] = useState('');
  const [tree, setTree] = useState<FilterFieldTree>();
  const [submittedValue, setSubmittedValue] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const columns = useMemo<DataTableColumnDef<Pod>[]>(
    () => [
      {
        header: 'Name',
        accessor: 'Name',
        id: 'Name',
        width: '1fr',
      },
      {
        header: 'Running',
        accessor: 'Running',
        id: 'Running',
        width: 'content',
      },
      {
        header: 'Container restarts',
        accessor: 'Container restarts',
        id: 'Container restarts',
        width: 'content',
        alignment: 'right',
      },
      {
        header: 'Annotations',
        accessor: 'Annotations',
        id: 'Annotations',
        width: 200,
      },
      { header: 'Fields', accessor: 'Fields', id: 'Fields', width: '1fr' },
    ],
    [],
  );

  return (
    <Flex flexDirection="column">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setSubmittedValue(value);
          setFilteredData(filterData(data, tree));
        }}
      >
        <FormField>
          <Grid gridTemplateColumns="1fr auto">
            <FilterField
              aria-label="Filter data"
              onChange={(value, tree) => {
                setValue(value);
                setTree(tree);
              }}
              validatorMap={validatorMap}
              parserConfig={{
                searchConversion: true,
                jsonPathConversion: true,
              }}
              autoSuggestions
            />
            <Button
              variant={value !== submittedValue ? 'accent' : 'emphasized'}
              color={value !== submittedValue ? 'primary' : 'neutral'}
              type="submit"
            >
              <Button.Prefix>
                {value === submittedValue ? <RefreshIcon /> : <PlayIcon />}
              </Button.Prefix>
              {value === submittedValue ? 'Refresh' : 'Update'}
            </Button>
          </Grid>
          <FormFieldMessages />
        </FormField>
      </form>
      <DataTable columns={columns} data={filteredData} fullWidth resizable />
    </Flex>
  );
};
```
