## Change status and visual

Use the `status` and `visual` prop to create the different contextual indicator variants. When `HealthIndicator` is used within an accentuated `Container`, it automatically uses the on accent text color of the color defined on the `HealthIndicator`.

**Variants**

```tsx
import { HealthIndicator } from '@dynatrace/strato-components/content';
import { Container, Grid } from '@dynatrace/strato-components/layouts';

const Variants = () => {
  return (
    <Grid
      alignItems="center"
      justifyItems="center"
      gridAutoRows="minmax(20px, auto)"
      gridTemplateColumns="repeat(5, minmax(0,max-content))"
    >
      <HealthIndicator
        // highlight-start
        status="ideal"
        visual="icon"
        // highlight-end
      />
      <HealthIndicator
        // highlight-start
        status="good"
        visual="icon"
        // highlight-end
      />
      <HealthIndicator
        // highlight-start
        status="neutral"
        visual="icon"
        // highlight-end
      />
      <HealthIndicator
        // highlight-start
        status="warning"
        visual="icon"
        // highlight-end
      />
      <HealthIndicator
        // highlight-start
        status="critical"
        visual="icon"
        // highlight-end
      />
      <HealthIndicator
        //highlight-next-line
        status="ideal"
      />
      <HealthIndicator
        //highlight-next-line
        status="good"
      />
      <HealthIndicator
        //highlight-next-line
        status="neutral"
      />
      <HealthIndicator
        //highlight-next-line
        status="warning"
      />
      <HealthIndicator
        //highlight-next-line
        status="critical"
      />

      <Container variant="accent" color="success">
        <HealthIndicator
          // highlight-start
          status="ideal"
          visual="icon"
          // highlight-end
        />
      </Container>
      <Container variant="accent" color="primary">
        <HealthIndicator
          // highlight-start
          status="good"
          visual="icon"
          // highlight-end
        />
      </Container>
      <Container variant="accent" color="neutral">
        <HealthIndicator
          // highlight-start
          status="neutral"
          visual="icon"
          // highlight-end
        />
      </Container>
      <Container variant="accent" color="warning">
        <HealthIndicator
          // highlight-start
          status="warning"
          visual="icon"
          // highlight-end
        />
      </Container>
      <Container variant="accent" color="critical">
        <HealthIndicator
          // highlight-start
          status="critical"
          visual="icon"
          // highlight-end
        />
      </Container>
    </Grid>
  );
};
```
