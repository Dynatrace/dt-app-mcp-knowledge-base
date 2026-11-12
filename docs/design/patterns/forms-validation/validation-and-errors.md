## Validation and errors

Sometimes users make mistakes when filling out forms. Always validate input and explain errors to help users quickly and efficiently correct mistakes.

### Showing errors in form elements

Provide a clear, concise error message that explains why validation failed.

![Showing errors in form elements](./assets/forms-validation-light.webp)

In forms, errors caused by validation need to be resolved before users can successfully submit the form and continue. Clear, understandable error messages are crucial for user experience and successful form completion.

### Types of validation

As a rule, validate groups of form elements on submission. This way, users can fill out forms without interruption and focus on providing the required information. In certain scenarios, however, it may make sense to validate individual form elements as the user's input changes and provide immediate feedback. Some controls, such as [complex inputs](#complex-inputs), use a distinct lifecycle described below.

#### Immediate

Immediate form validation should only happen when users finish providing input, and focus leaves the entire form element.

The only exception is if the input of a form element is already in an invalid state, and giving users feedback while they're typing will help them resolve the issue.

For overlay-based components such as `Select`, `SegmentSelector`, or `TimeframeSelector`, show validation errors when the overlay closes rather than when the outer component loses focus. Because the overlay is the primary interaction surface, its closing is the natural signal that the user has finished their input.

#### On submit

We recommend validating the user's input client-side. However, if the data is validated server-side and the response takes time, disable the form's elements and put the submit button into a loading state to prevent multiple submissions while users wait for a response.

The first invalid form element should be focused and scrolled into the viewport if a form validation fails. Otherwise, in long forms, users might not notice an error. After users have submitted a form and its validation fails the first time, be sure to provide immediate validation for form elements.

Never block users from submitting a form by disabling the submit button. Sometimes, users unknowingly leave out information for one or more required form elements. A disabled submit button with no clear cause, makes for a frustrating experience. Instead, let users submit the form, then show that input is incomplete or incorrect.

#### Complex inputs

Complex inputs are controls that accept structured values—such as expressions, filter clauses, or query fragments. [FilterField](https://developer.dynatrace.com/design/components/filters/FilterField/usage.md) is an example of a complex input.

The lifecycle of the error message shown below a complex input differs from immediate and on-submit validation:

- **First error**—no error message is shown while the user is still interacting with the field for the first time. The message appears only after focus leaves the field, the form is submitted, or validation is triggered programmatically.
- **Re-validation after the first trigger**—once an error has been shown, validation re-runs on every change. If the user fixes the input, the message clears immediately. If a new problem appears, it's shown only after focus next leaves the field.
- **Independent error resolution**—multiple errors can be active at the same time; for example, a syntax error and a required-field error. Each clears independently as soon as its own condition is resolved, without waiting for the entire input to be valid.
- **Programmatic trigger**—a `validate()` method lets a parent form—such as a wizard or multi-step flow—trigger validation and mark the field as touched without requiring the user to leave the field.
