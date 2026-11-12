## Navigate matches with a stepper

The `SearchInput` supports a `SearchInput.Stepper` subcomponent that lets you navigate through search matches. The stepper displays a match position indicator (for example, "1 / 5") along with previous and next buttons to cycle through results.

When the stepper is present, pressing `Enter` inside the input automatically advances to the next match, and pressing `Shift`+`Enter` returns to the previous match. The stepper buttons wrap around — if you navigate past the last match, the stepper returns to the first, and vice versa.

:::note Accessibility

Don't use `SearchInput.Stepper` inside a form or for autocomplete patterns. The `Enter` key is reserved for navigating matches, which conflicts with form submission and autocomplete selection behavior.

:::

**Stepper**

```tsx
import { createContext, useContext, useMemo, useRef, useState } from 'react';

import {
  FormField,
  Label,
  SearchInput,
} from '@dynatrace/strato-components/forms';
import { Flex } from '@dynatrace/strato-components/layouts';
import {
  DataTable,
  DataTableColumnDef,
  DataTableRef,
} from '@dynatrace/strato-components/tables';
import { Highlight } from '@dynatrace/strato-components/typography';

const SearchContext = createContext('');

const NameCell = ({ value }: { value: string }) => {
  const searchValue = useContext(SearchContext);
  return (
    <DataTable.DefaultCell>
      <Highlight term={searchValue}>{value}</Highlight>
    </DataTable.DefaultCell>
  );
};

const subRowsColumns: DataTableColumnDef<unknown>[] = [
  {
    header: 'Firstname',
    accessor: 'firstname',
    id: 'firstname',
    width: 140,
    cell: NameCell,
  },
  {
    header: 'Lastname',
    accessor: 'lastname',
    id: 'lastname',
    width: 140,
    cell: NameCell,
  },
];

const subRowsData = [
  {
    firstname: 'Jael',
    lastname: 'Kim',
    subRows: [
      {
        firstname: 'Abbot',
        lastname: 'Waller',
        subRows: [
          {
            firstname: 'Ryan',
            lastname: 'Lancaster',
            subRows: [
              { firstname: 'Emery', lastname: 'Tyson' },
              { firstname: 'Damian', lastname: 'Graves' },
            ],
          },
        ],
      },
      { firstname: 'Ima', lastname: 'Love' },
    ],
  },
  {
    firstname: 'Iola',
    lastname: 'Luna',
    subRows: [
      { firstname: 'Karina', lastname: 'Gibbs' },
      { firstname: 'Brandon', lastname: 'Turner' },
    ],
  },
  {
    firstname: 'Silas',
    lastname: 'Williams',
  },
  {
    firstname: 'Jescie',
    lastname: 'Baxter',
    subRows: [
      { firstname: 'Caldwell', lastname: 'Santana' },
      {
        firstname: 'James',
        lastname: 'Smith',
        subRows: [
          { firstname: 'Teagan', lastname: 'Lott' },
          { firstname: 'Leroy', lastname: 'Rosario' },
        ],
      },
    ],
  },
];

type MatchPath = number[];

/** Recursively find all rows matching the query, returning the index path to each match. */
function findMatches(
  rows: typeof subRowsData,
  query: string,
  path: number[] = [],
): MatchPath[] {
  if (!query.trim()) {
    return [];
  }
  const q = query.toLowerCase();
  const results: MatchPath[] = [];

  rows.forEach((row, i) => {
    const currentPath = [...path, i];
    if (
      row.firstname.toLowerCase().includes(q) ||
      row.lastname.toLowerCase().includes(q)
    ) {
      results.push(currentPath);
    }
    if (row.subRows) {
      results.push(...findMatches(row.subRows, query, currentPath));
    }
  });

  return results;
}

const Stepper = () => {
  const [searchValue, setSearchValue] = useState('');
  const [current, setCurrent] = useState(0);
  const tableRef = useRef<DataTableRef>(null);

  const matches = useMemo(
    () =>
      findMatches(subRowsData, searchValue).map((matchPath) =>
        matchPath.join('.'),
      ),
    [searchValue],
  );

  const onSearchValueChange = (newValue: string) => {
    setSearchValue(newValue);
    setCurrent(0);
  };

  const onCurrentChange = (newCurrent: number) => {
    setCurrent(newCurrent);
    if (matches.length === 0) {
      return;
    }
    const matchRowId = matches[newCurrent];
    if (!matchRowId) {
      return;
    }

    tableRef.current?.scrollToRow(matchRowId, 'center');
  };

  const activeRow = matches[current] ?? null;

  return (
    <Flex flexDirection="column" gap={16}>
      <FormField>
        <Label>Find in table</Label>
        <SearchInput
          value={searchValue}
          onChange={onSearchValueChange}
          placeholder="Search by name…"
        >
          {/* highlight-start */}
          <SearchInput.Stepper
            current={current}
            onCurrentChange={onCurrentChange}
            total={matches.length}
          />
          {/* highlight-end */}
        </SearchInput>
      </FormField>

      <SearchContext.Provider value={searchValue}>
        <DataTable
          ref={tableRef}
          data={subRowsData}
          columns={subRowsColumns}
          activeRow={activeRow}
          subRows
          interactiveRows
          defaultOpenSubRows
          style={{ maxHeight: 300 }}
          fullWidth
        />
      </SearchContext.Provider>
    </Flex>
  );
};
```
