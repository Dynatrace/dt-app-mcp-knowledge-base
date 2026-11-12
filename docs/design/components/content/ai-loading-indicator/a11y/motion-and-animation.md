## Motion and animation

The label animates with a moving gradient to signal that content is still loading.

`AiLoadingIndicator` respects the user's motion preference out of the box. When `prefers-reduced-motion` is set to `reduce`, the animation doesn't play and the label renders as static text. You don't need to configure anything.

- **Do** write a label that describes the loading state on its own, because the animation carries no meaning for users who turn off motion.
- **Don't** reintroduce the animation through a custom `className` or `style`. That overrides the motion preference the component honors.
