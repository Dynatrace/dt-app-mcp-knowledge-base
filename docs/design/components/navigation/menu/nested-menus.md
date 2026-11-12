## Nested menus

You can create nested menus by using `Menu` as a child of `Menu.Item`. This allows you to create multi-level navigation structures.

**MultiLevel**

```tsx
import { useState, type SyntheticEvent } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Label } from '@dynatrace/strato-components/forms';
import { Menu } from '@dynatrace/strato-components/navigation';
import {
  TemplateIcon,
  Heading1Icon,
  LinkIcon,
  FormatQuoteIcon,
  FilterIcon,
  FilterForIcon,
  ChartToolsIcon,
  StackedBarChartIcon,
  LineDashedIcon,
  CertifiedIcon,
  DuplicateIcon,
  BarChartIcon,
  LineChartIcon,
  HorizontalBarChartIcon,
  FontOptionsIcon,
  TreemapIcon,
  WrapTextIcon,
  ListIcon,
  ComponentIcon,
  AbcIcon,
  HorizontalRuleIcon,
  CheckmarkSmallIcon,
  CalendarIcon,
  LabelIcon,
  SelectIcon,
  CircleIcon,
  ChartTooltipGroupedIcon,
  SuccessIcon,
} from '@dynatrace/strato-icons';

const MultiLevel = () => {
  const [selected, setSelected] = useState('');
  const onItemSelected = (event: SyntheticEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLElement) {
      setSelected(event.target.innerText);
    }
  };

  return (
    <>
      <Menu>
        <Menu.Trigger>
          <Button
            variant="accent"
            color="primary"
            aria-label="Reveals more options"
          >
            Components
          </Button>
        </Menu.Trigger>
        <Menu.Content>
          {/* highlight-start */}
          <Menu.Sub>
            <Menu.SubTrigger>
              <Menu.Prefix>
                <TemplateIcon />
              </Menu.Prefix>
              Buttons
            </Menu.SubTrigger>
            <Menu.SubContent>
              <Menu.Item onSelect={onItemSelected}>
                <Menu.Prefix>
                  <TemplateIcon />
                </Menu.Prefix>
                Simple Button
              </Menu.Item>
              <Menu.Item onSelect={onItemSelected}>
                <Menu.Prefix>
                  <TemplateIcon />
                </Menu.Prefix>
                Polymorphic Buttons
              </Menu.Item>
              <Menu.Item onSelect={onItemSelected}>
                <Menu.Prefix>
                  <CertifiedIcon />
                </Menu.Prefix>
                Button With Icon
              </Menu.Item>
              <Menu.Item onSelect={onItemSelected}>
                <Menu.Prefix>
                  <DuplicateIcon />
                </Menu.Prefix>
                Button Counter
              </Menu.Item>
            </Menu.SubContent>
          </Menu.Sub>
          {/* highlight-end */}
          <Menu.Sub>
            <Menu.SubTrigger>
              <Menu.Prefix>
                <FilterIcon />
              </Menu.Prefix>
              Filters
            </Menu.SubTrigger>
            <Menu.SubContent>
              <Menu.Item onSelect={onItemSelected}>
                <Menu.Prefix>
                  <FilterIcon />
                </Menu.Prefix>
                Simple Filter
              </Menu.Item>
              <Menu.Item onSelect={onItemSelected}>
                <Menu.Prefix>
                  <FilterForIcon />
                </Menu.Prefix>
                Multiple Filter Items
              </Menu.Item>
            </Menu.SubContent>
          </Menu.Sub>
          <Menu.Sub>
            <Menu.SubTrigger>
              <Menu.Prefix>
                <BarChartIcon />
              </Menu.Prefix>
              Charts
            </Menu.SubTrigger>
            <Menu.SubContent>
              <Menu.Sub>
                <Menu.SubTrigger>
                  <Menu.Prefix>
                    <LineChartIcon />
                  </Menu.Prefix>
                  Single Value
                </Menu.SubTrigger>
                <Menu.SubContent>
                  <Menu.Item onSelect={onItemSelected}>
                    <Menu.Prefix>
                      <HorizontalBarChartIcon />
                    </Menu.Prefix>
                    Simple Chart
                  </Menu.Item>
                  <Menu.Item onSelect={onItemSelected}>
                    <Menu.Prefix>
                      <ChartToolsIcon />
                    </Menu.Prefix>
                    Simple Chart Playground
                  </Menu.Item>
                  <Menu.Item onSelect={onItemSelected}>
                    <Menu.Prefix>
                      <LineDashedIcon />
                    </Menu.Prefix>
                    Empty State
                  </Menu.Item>
                </Menu.SubContent>
              </Menu.Sub>
              <Menu.Sub>
                <Menu.SubTrigger>
                  <Menu.Prefix>
                    <StackedBarChartIcon />
                  </Menu.Prefix>
                  Categorical BarChart
                </Menu.SubTrigger>
                <Menu.SubContent>
                  <Menu.Item onSelect={onItemSelected}>
                    <Menu.Prefix>
                      <BarChartIcon />
                    </Menu.Prefix>
                    Simple BarChart
                  </Menu.Item>
                  <Menu.Item onSelect={onItemSelected}>
                    <Menu.Prefix>
                      <ChartToolsIcon />
                    </Menu.Prefix>
                    BarChart Playground
                  </Menu.Item>
                </Menu.SubContent>
              </Menu.Sub>
            </Menu.SubContent>
          </Menu.Sub>
          <Menu.Sub>
            <Menu.SubTrigger>
              <Menu.Prefix>
                <FontOptionsIcon />
              </Menu.Prefix>
              Typography
            </Menu.SubTrigger>
            <Menu.SubContent>
              <Menu.Item onSelect={onItemSelected}>
                <Menu.Prefix>
                  <FormatQuoteIcon />
                </Menu.Prefix>
                Blockquote
              </Menu.Item>
              <Menu.Item onSelect={onItemSelected}>
                <Menu.Prefix>
                  <Heading1Icon />
                </Menu.Prefix>
                Heading
              </Menu.Item>
              <Menu.Item onSelect={onItemSelected}>
                <Menu.Prefix>
                  <LinkIcon />
                </Menu.Prefix>
                Link
              </Menu.Item>
              <Menu.Item onSelect={onItemSelected}>
                <Menu.Prefix>
                  <WrapTextIcon />
                </Menu.Prefix>
                Paragraph
              </Menu.Item>
              <Menu.Item onSelect={onItemSelected}>
                <Menu.Prefix>
                  <ListIcon />
                </Menu.Prefix>
                List
              </Menu.Item>
              <Menu.Item onSelect={onItemSelected}>
                <Menu.Prefix>
                  <ComponentIcon />
                </Menu.Prefix>
                Section
              </Menu.Item>
              <Menu.Item onSelect={onItemSelected}>
                <Menu.Prefix>
                  <AbcIcon />
                </Menu.Prefix>
                Text
              </Menu.Item>
              <Menu.Item onSelect={onItemSelected}>
                <Menu.Prefix>
                  <HorizontalRuleIcon />
                </Menu.Prefix>
                Divider
              </Menu.Item>
            </Menu.SubContent>
          </Menu.Sub>
          <Menu.Sub>
            <Menu.SubTrigger>
              <Menu.Prefix>
                <TreemapIcon />
              </Menu.Prefix>
              Forms
            </Menu.SubTrigger>
            <Menu.SubContent>
              <Menu.Item onSelect={onItemSelected}>
                <Menu.Prefix>
                  <CheckmarkSmallIcon />
                </Menu.Prefix>
                Checkbox
              </Menu.Item>
              <Menu.Item onSelect={onItemSelected}>
                <Menu.Prefix>
                  <CalendarIcon />
                </Menu.Prefix>
                Date Picker
              </Menu.Item>
              <Menu.Item onSelect={onItemSelected}>
                <Menu.Prefix>
                  <LabelIcon />
                </Menu.Prefix>
                Label
              </Menu.Item>
              <Menu.Item onSelect={onItemSelected}>
                <Menu.Prefix>
                  <SelectIcon />
                </Menu.Prefix>
                Select
              </Menu.Item>
              <Menu.Item onSelect={onItemSelected}>
                <Menu.Prefix>
                  <CircleIcon />
                </Menu.Prefix>
                Radio
              </Menu.Item>
              <Menu.Item onSelect={onItemSelected}>
                <Menu.Prefix>
                  <AbcIcon />
                </Menu.Prefix>
                Text Input
              </Menu.Item>
              <Menu.Item onSelect={onItemSelected}>
                <Menu.Prefix>
                  <ChartTooltipGroupedIcon />
                </Menu.Prefix>
                Textarea
              </Menu.Item>
              <Menu.Item onSelect={onItemSelected}>
                <Menu.Prefix>
                  <SuccessIcon />
                </Menu.Prefix>
                Validation
              </Menu.Item>
            </Menu.SubContent>
          </Menu.Sub>
        </Menu.Content>
      </Menu>

      {selected && (
        <p>
          Selected menu item: <Label>{selected}</Label>
        </p>
      )}
    </>
  );
};
```
