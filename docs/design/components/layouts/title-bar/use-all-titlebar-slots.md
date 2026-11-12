## Use all TitleBar slots

We recommend using the following content for each of the `TitleBar` slots:

- Navigation: `Breadcrumbs`
- Title: String or `Heading`. If a string is provided the recommended styles are applied automatically.
- Subtitle: String or `Text`. If a string is provided the recommended styles are applied automatically.
- Prefix: Image, Icon or an Icon Button
- Suffix: One or more `Button` components
- Action: Icon Button, e.g. for a closing action

**Full**

```tsx
import { Button } from '@dynatrace/strato-components/buttons';
import {
  Flex,
  Container,
  TitleBar,
} from '@dynatrace/strato-components/layouts';
import { Breadcrumbs } from '@dynatrace/strato-components/navigation';
import {
  FavoriteIcon,
  InformationIcon,
  RefreshIcon,
  UnfavoriteIcon,
  XmarkIcon,
} from '@dynatrace/strato-icons';

const Full = () => {
  return (
    <TitleBar>
      {/* highlight-start */}
      <TitleBar.Navigation>
        <Breadcrumbs>
          <Breadcrumbs.Item href="#">Home</Breadcrumbs.Item>
          <Breadcrumbs.Item href="#">Level 1</Breadcrumbs.Item>
          <Breadcrumbs.Item href="#">Level 2</Breadcrumbs.Item>
        </Breadcrumbs>
      </TitleBar.Navigation>
      <TitleBar.Action>
        <Button variant="default">
          <Button.Prefix>
            <XmarkIcon />
          </Button.Prefix>
        </Button>
      </TitleBar.Action>
      <TitleBar.Prefix>
        <Container as={Flex}>
          <InformationIcon />
        </Container>
      </TitleBar.Prefix>
      <TitleBar.Title>AppName</TitleBar.Title>
      <TitleBar.Subtitle>Some Subtitle</TitleBar.Subtitle>
      <TitleBar.Suffix>
        <Flex gap={4}>
          <Button variant="default">
            <Button.Prefix>
              <UnfavoriteIcon />
            </Button.Prefix>
            Action
          </Button>
          <Button variant="default">
            <Button.Prefix>
              <FavoriteIcon />
            </Button.Prefix>
            Action
          </Button>
          <Button variant="default">
            <Button.Prefix>
              <RefreshIcon />
            </Button.Prefix>
            Action
          </Button>
        </Flex>
      </TitleBar.Suffix>
      {/* highlight-end */}
    </TitleBar>
  );
};
```
