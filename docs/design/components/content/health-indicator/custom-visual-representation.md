## Custom visual representation

Use the `HealthIndicator.Visual` component to customize the visual representation of the indicator.

**CustomVisual**

```tsx
import { HealthIndicator } from '@dynatrace/strato-components/content';
import { Flex } from '@dynatrace/strato-components/layouts';
import { Text } from '@dynatrace/strato-components/typography';
import { ApplicationSecuritySignetIcon } from '@dynatrace/strato-icons';

const CustomShape = (
  <svg
    focusable="false"
    role="img"
    aria-hidden="true"
    fill="currentColor"
    width="12"
    height="12"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 12"
  >
    <path d="M5.6107 11C5.55998 10.9999 5.50965 10.9907 5.46198 10.9727C5.37001 10.9377 5.292 10.8717 5.24045 10.7851C5.1889 10.6986 5.16679 10.5966 5.17765 10.4955L5.51447 7.27274H2.93808C2.85861 7.27287 2.78062 7.2505 2.71246 7.20803C2.64431 7.16556 2.58858 7.1046 2.55126 7.0317C2.51393 6.9588 2.49642 6.87671 2.50061 6.79425C2.50479 6.71179 2.53052 6.63207 2.57502 6.56366L6.02624 1.20004C6.08083 1.11611 6.16083 1.05352 6.25355 1.02223C6.34627 0.990937 6.44639 0.992727 6.53802 1.02732C6.62611 1.0613 6.70133 1.12385 6.75253 1.20572C6.80374 1.28759 6.82822 1.38441 6.82234 1.48186L6.48553 4.7273H9.06192C9.14139 4.72718 9.21938 4.74955 9.28754 4.79202C9.35569 4.83448 9.41142 4.89544 9.44874 4.96834C9.48607 5.04124 9.50358 5.12333 9.49939 5.20579C9.49521 5.28826 9.46948 5.36797 9.42498 5.43639L5.97375 10.8C5.93363 10.8617 5.87954 10.9122 5.81623 10.9471C5.75293 10.9819 5.68235 11.0001 5.6107 11Z" />
  </svg>
);

const CustomVisual = () => {
  return (
    <>
      <Flex gap={8} alignItems="center">
        <Flex alignSelf="flex-start">
          <HealthIndicator status="ideal" visual="icon">
            {/* highlight-start */}
            <HealthIndicator.Visual>
              <ApplicationSecuritySignetIcon />
            </HealthIndicator.Visual>
            {/* highlight-end */}
          </HealthIndicator>
        </Flex>
        <Text>
          HealthIndicator custom visual representation as icon with a width and
          height of 20px. The gap between the icon and the text is 8px.
        </Text>
      </Flex>
      <Flex gap={4} alignItems="center">
        <HealthIndicator status="critical" visual="shape">
          {/* highlight-start */}
          <HealthIndicator.Visual>{CustomShape}</HealthIndicator.Visual>
          {/* highlight-end */}
        </HealthIndicator>
        <Text>
          HealthIndicator custom visual representation as shape with a width and
          height of 12px. The gap between the shape and the text is 4px.
        </Text>
      </Flex>
    </>
  );
};
```
