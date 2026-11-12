## Usage

To use design tokens in your app, you need to install the following package:

```bash
npm install @dynatrace/strato-design-tokens
```

Then import the design tokens depending on the needs of your custom styles as follows:

```tsx testable
import Colors from '@dynatrace/strato-design-tokens/colors';
```

In the following example, you have a component styled using design tokens:

```tsx title="ui/app/components/CustomComponent.tsx"
import React from 'react';

// highlight-start
import Borders from '@dynatrace/strato-design-tokens/borders';
import Colors from '@dynatrace/strato-design-tokens/colors';
import Spacings from '@dynatrace/strato-design-tokens/spacings';
import Typography from '@dynatrace/strato-design-tokens/typography';
//highlight-end

export const CustomComponent = () => {
  return (
    <div
      style={{
        display: 'grid',
        // highlight-start
        gap: Spacings.Size32,
        //highlight-end
      }}
    >
      <div style={{ display: 'grid' }}>
        <h1
          style={{
            // highlight-start
            fontSize: Typography.Heading.Level1.Size,
            fontFamily: Typography.Heading.Level1.Family,
            fontWeight: Typography.Heading.Level1.Weight,
            lineHeight: Typography.Heading.Level1.LineHeight,
            //highlight-end
            margin: 0,
          }}
        >
          Monitoring
        </h1>
        <p
          style={{
            // highlight-start
            fontSize: Typography.Subtitle.Heading.Level1.Size,
            fontFamily: Typography.Subtitle.Heading.Level1.Family,
            fontWeight: Typography.Subtitle.Heading.Level1.Weight,
            lineHeight: Typography.Subtitle.Heading.Level1.LineHeight,
            //highlight-end
            margin: 0,
          }}
        >
          Monitored technologies
        </p>
      </div>
      <div
        style={{
          // highlight-start
          padding: Spacings.Size16,
          border: `${Borders.Width.Emphasized} ${Borders.Style.Default} ${Colors.Border.Success.Default}`,
          borderRadius: Borders.Radius.Container.Default,
          backgroundColor: Colors.Background.Container.Success.Default,
          color: Colors.Text.Success.Default,
          //highlight-end
        }}
      >
        Looking for container technology support? You can find them under the container monitoring page.
      </div>
    </div>
  );
};
```
