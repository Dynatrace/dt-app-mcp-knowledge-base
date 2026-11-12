## What this means for your app

Nothing to migrate. The refresh ships through Strato's design tokens, so any
component you already use picks it up automatically without API changes, and
no breaking changes either.

If you style anything yourself, design tokens are what save you here. Token
references resolve to CSS custom properties, so anything built on them moved
along with the rest and is already up to date.

The spots worth a close look are hardcoded values: anywhere a color or style
was written literally to match Strato by eye, instead of referenced from a
token. Those didn't move, so they may now sit slightly out of step.

The refresh is live now, across every Strato app your team already ships. Take
a look at your apps today, and if something looks off, let us know through the
Feedback button at the bottom of this page.
