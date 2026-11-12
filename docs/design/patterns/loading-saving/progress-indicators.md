## Progress indicators

Progress indicators inform users about the state of an ongoing loading or saving process.

![Progress indicator](./assets/loading-progress-indicators-light.webp)

There are two types of progress indicators:

- The [progress circle component](https://developer.dynatrace.com/contents/docs/design/components/content/ProgressCircle/index.mdx/) informs users about the state of an ongoing **loading process**.
- The [progress bar component](https://developer.dynatrace.com/contents/docs/design/components/content/ProgressBar/index.mdx/) informs users about the state of an ongoing **saving or uploading process**.

Progress indicators can purposely steer the user's attention toward a specific part of your app. However, be aware that progress indicators draw a lot of attention and can be distracting if shown more than once on a page.

### Behavior

Wait to show progress indicators. Always use a delay (\~500 ms - 1 s) unless you know loading will take a while. Once you show a progress indicator, don't clear it immediately but display it for at least some time to avoid flickering (a minimum of \~200 ms).
