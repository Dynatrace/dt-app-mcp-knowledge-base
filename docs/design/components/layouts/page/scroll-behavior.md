## Scroll behavior

Each of the panels of the page will be a scroll container if the content overflows. If you switch from an already scrolled panel to another scrollable content in the same panel, the browser will remember the old scroll position. You may want to reset the scroll position and start at the top of the scroll container again. To do so, we're exposing a reference to the container element of each panel that you can leverage to reset the scroll position when changing the content.

**ScrollToTop**

```tsx
import { useEffect, useRef, useState } from 'react';

import { Button } from '@dynatrace/strato-components/buttons';
import { Flex, Page, TitleBar } from '@dynatrace/strato-components/layouts';
import Borders from '@dynatrace/strato-design-tokens/borders';
import Colors from '@dynatrace/strato-design-tokens/colors';
import Spacings from '@dynatrace/strato-design-tokens/spacings';

const ScrollToTop = () => {
  const [togglePageContent, setTogglePageContent] = useState(false);
  const [toggleScroll, setToggleScroll] = useState(false);
  const mainRef = useRef<HTMLDivElement | null>(null);
  // highlight-start
  useEffect(() => {
    if (toggleScroll && mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
  }, [toggleScroll, togglePageContent]);
  // highlight-end

  return (
    <Page>
      <Page.Header>
        <Flex>
          <Button
            onClick={() => {
              setTogglePageContent(!togglePageContent);
            }}
          >
            Toggle content
          </Button>
          <Button
            onClick={() => {
              setToggleScroll(!toggleScroll);
            }}
          >
            Toggle scroll behavior
          </Button>
        </Flex>
      </Page.Header>
      {/* highlight-next-line */}
      <Page.Main ref={mainRef}>
        <TitleBar>
          <TitleBar.Title>Main</TitleBar.Title>
          <TitleBar.Subtitle>
            Place your main content in this area
          </TitleBar.Subtitle>
        </TitleBar>
        <div
          style={{
            width: '100%',
            height: togglePageContent ? '3000px' : '1500px',
            marginTop: Spacings.Size24,
            borderRadius: Borders.Radius.Container.Default,
            background: `linear-gradient(${
              togglePageContent
                ? `${Colors.Background.Container.Neutral.Default}, ${Colors.Background.Container.Neutral.Emphasized}`
                : `${Colors.Background.Container.Success.Default}, ${Colors.Background.Container.Success.Emphasized}`
            })`,
          }}
        />
      </Page.Main>
    </Page>
  );
};
```
