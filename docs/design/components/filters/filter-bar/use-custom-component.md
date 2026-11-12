## Use custom component

To use a custom component as a `FilterBar.Item`, use the React [forwardRef](https://react.dev/reference/react/forwardRef). Forward the ref to the wrapper element and add the following contract props:

- `value` if the component is controlled. The `onChange` callback is also required.

- `defaultValue` if the component is uncontrolled. The ref is required to focus or open items from additional filters in the dropdown. This means that you must also use the imperative handle in your component to expose the ref of your input element.

  Be sure to add an `aria-label` or `name` for each custom component. If there's no text content, the `aria-label` or `name` will be used as a fallback.

**CustomFilterItem**

```tsx
import type { Property } from 'csstype';
import {
  type Ref,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  type ChangeEvent,
} from 'react';

import { useFocusRing } from '@dynatrace/strato-components/core';
import {
  FilterBar,
  FilterItemValues,
} from '@dynatrace/strato-components/filters';
import { FormControlRef } from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';
import { DataTable } from '@dynatrace/strato-components/tables';
import { Code, Text } from '@dynatrace/strato-components/typography';
import Borders from '@dynatrace/strato-design-tokens/borders';
import Colors from '@dynatrace/strato-design-tokens/colors';
import Spacings from '@dynatrace/strato-design-tokens/spacings';
import Typography from '@dynatrace/strato-design-tokens/typography';

const columns = [
  {
    header: 'Name',
    accessor: 'name',
    id: 'name',
  },
  {
    header: 'Owner',
    accessor: 'owner',
    id: 'owner',
  },
  {
    header: 'Last run',
    accessor: 'lastRun',
    id: 'lastRun',
  },
  {
    header: 'Type',
    accessor: 'type',
    id: 'type',
  },
];
type Data = {
  name: string;
  owner: string;
  lastRun: Date;
  type: string;
};
const data: Data[] = [
  {
    name: 'OutageMonitor',
    owner: 'Brandy Barrett',
    lastRun: new Date('2025-08-13T10:15:00Z'),
    type: 'Event',
  },
  {
    name: 'HeartbeatCheck',
    owner: 'Cleveland Allison',
    lastRun: new Date('2025-08-12T14:30:00Z'),
    type: 'Schedule',
  },
  {
    name: 'DailySweep',
    owner: 'Dora Braun',
    lastRun: new Date('2025-08-11T09:45:00Z'),
    type: 'Schedule',
  },
  {
    name: 'AlertResponder',
    owner: 'Lacy Houston',
    lastRun: new Date('2025-08-10T16:00:00Z'),
    type: 'Event',
  },
  {
    name: 'SmartRestart',
    owner: 'Patrick Gamble',
    lastRun: new Date('2025-08-09T11:20:00Z'),
    type: 'Manual',
  },
  {
    name: 'RecoveryFlow',
    owner: 'Brandy Barrett',
    lastRun: new Date('2025-08-08T08:10:00Z'),
    type: 'Event',
  },
  {
    name: 'MetricWatch',
    owner: 'Cleveland Allison',
    lastRun: new Date('2025-08-07T13:50:00Z'),
    type: 'Schedule',
  },
  {
    name: 'AnomalyCatcher',
    owner: 'Dora Braun',
    lastRun: new Date('2025-08-06T17:25:00Z'),
    type: 'Event',
  },
  {
    name: 'IncidentRadar',
    owner: 'Lacy Houston',
    lastRun: new Date('2025-08-05T12:40:00Z'),
    type: 'Event',
  },
  {
    name: 'ForecastBot',
    owner: 'Patrick Gamble',
    lastRun: new Date('2025-08-04T15:05:00Z'),
    type: 'Schedule',
  },
  {
    name: 'EventTrigger',
    owner: 'Brandy Barrett',
    lastRun: new Date('2025-08-03T07:55:00Z'),
    type: 'Event',
  },
];
interface MyCustomItemProps {
  value: string;
  onChange: (newValue: string) => void;
}

// highlight-next-line
const MyCustomItem = forwardRef(
  (
    props: MyCustomItemProps,
    forwardedRef: Ref<Omit<FormControlRef<HTMLDivElement>, 'validate'>>,
  ) => {
    const { onChange, value, ...remainingProps } = props;

    const inputRef = useRef<HTMLInputElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(
      forwardedRef,
      (): Omit<FormControlRef<HTMLDivElement>, 'validate'> => ({
        element: wrapperRef.current,
        inputRef: inputRef.current,
        focus: () => inputRef.current?.focus(),
      }),
      [],
    );

    const { focusProps, focusClassName } = useFocusRing({
      ignoreModality: true,
    });

    return (
      <div
        className={focusClassName}
        ref={wrapperRef}
        style={{
          paddingLeft: Spacings.Size12,
          paddingRight: Spacings.Size12,
          borderRadius: Borders.Radius.Field.Default,
          backgroundColor: Colors.Background.Field.Neutral.Emphasized,
        }}
      >
        <input
          ref={inputRef}
          value={value}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            onChange?.(e.target.value)
          }
          style={{
            textOverflow: 'ellipsis',
            appearance: 'none',
            background: 'transparent',
            border: 'none',
            padding: 0,
            marginTop: Spacings.Size6,
            marginBottom: Spacings.Size6,
            color: Colors.Text.Neutral.Default,
            outline: 'none',
            fontFamily: Typography.Text.Base.Default.Family,
            fontWeight: Typography.Text.Base.Default.Weight,
            fontSize: Typography.Text.Base.Default.Size,
            lineHeight: Typography.Text.Base.Default.LineHeight,
            textDecoration: Typography.Text.Base.Default.TextDecoration,
            textTransform: Typography.Text.Base.Default
              .TextTransform as Property.TextTransform,
          }}
          {...focusProps}
          {...remainingProps}
        />
      </div>
    );
  },
);

(MyCustomItem as typeof MyCustomItem & { displayName: string }).displayName =
  'MyCustomItem';

const CustomFilterItem = () => {
  const [filteredData, setFilteredData] = useState(data);
  const [filterItemValues, setFilterItemValues] =
    useState<FilterItemValues | null>(null);

  function filterData(filterItemValues: FilterItemValues) {
    return data.filter((d) => {
      return Object.entries(filterItemValues).every(([key, { value }]) => {
        if (!value || typeof value !== 'string') {
          return true;
        }

        switch (key) {
          case 'text-full':
            return (
              d.name.toLowerCase().includes(value.toLowerCase()) ||
              d.type.toLowerCase().includes(value.toLowerCase())
            );
          case 'text-owner':
            return d.owner.toLowerCase().includes(value.toLowerCase());
          default:
            return true;
        }
      });
    });
  }

  const handleFilterChange = (filterItemValues: FilterItemValues) => {
    setFilterItemValues(filterItemValues);
    const result = filterData(filterItemValues);
    setFilteredData(result);
  };

  const [textValue, setTextValue] = useState('');
  const [textValue2, setTextValue2] = useState('');

  return (
    <Flex gap={8} flexDirection="column" height={400}>
      <DataTable columns={columns} data={filteredData}>
        <DataTable.TableActions>
          <FilterBar
            onFilterChange={handleFilterChange}
            defaultPinnedState={{
              'text-full': 'optional',
              'text-owner': 'pinned',
            }}
          >
            <FilterBar.Item name="text-full" label="Full text">
              {/* highlight-next-line */}
              <MyCustomItem value={textValue} onChange={setTextValue} />
            </FilterBar.Item>

            <FilterBar.Item name="text-owner" label="Owner">
              {/* highlight-next-line */}
              <MyCustomItem value={textValue2} onChange={setTextValue2} />
            </FilterBar.Item>
          </FilterBar>
        </DataTable.TableActions>
      </DataTable>
      <Text>
        Filter values on change: <Code>{JSON.stringify(filterItemValues)}</Code>
      </Text>
    </Flex>
  );
};
```
