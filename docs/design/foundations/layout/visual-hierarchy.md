## Visual hierarchy

A clear visual hierarchy helps users understand the relationships between user interface elements and how content is logically structured. Additionally, it helps users scan information and focus on what's essential.

### Base

All content is placed on your app's background, the base.

![Base](https://developer.dynatrace.com/assets/images/layout-base-light-41846c4938aaac1839c41888e5c1fa9c.webp)

### Surfaces

Surfaces are the primary means for structuring your content. To learn more, visit [surface component documentation](https://developer.dynatrace.com/contents/docs/design/components/layouts/Surface/index.mdx/).

![Surfaces](https://developer.dynatrace.com/assets/images/layout-surfaces-light-06aa002964c6d7b95ad27843faf10bbc.webp)

#### Visual characteristics

- Surfaces have rounded corners.
- Surfaces have a background color.

The design tokens provide dedicated surface background colors and border radii.

#### Elevation

Surfaces are the only elements that can have an elevation level and thus overlay other content.

![Surface elevation levels](https://developer.dynatrace.com/assets/images/layout-surface-elevation-light-ca437de42c725d211deeaee3ee316f2f.webp)

Each elevation level serves a different purpose:

1. **Flat:** By default, surfaces are flat and have no shadow.
2. **Raised:** Raised surfaces draw more attention and should only be used sparingly.
3. **Floating:** Floating surfaces overlap other content.

All elevation levels are visualized with box shadows, which are dedicated design tokens.

#### Composition

Surfaces have an [inset spacing](#inset-spacing) of `Spacings.Size24` (24px) (or `Spacings.Size16` (16px) for dense layouts). Where space is limited, such as menus and overlays, you can apply a minimum inset of `Spacings.Size4` (4px). Content within surfaces must not fill the entire width. Ensure a minimum of `Spacings.Size4` (4px) inset spacing. Spacing tokens must be used when applying inset spacing.

![Surface inset spacing](https://developer.dynatrace.com/assets/images/layout-surface-inset-light-9a0bf69a77a91f6625afb31799e403d4.webp)

#### Interactivity

Surfaces can be interactive, clickable elements, which means the whole surface can trigger an action. Surfaces communicate changes to their interaction states (rest, hover, active, and drag) through elevation level changes.

![Surface interactivity](https://developer.dynatrace.com/assets/images/layout-surface-interactivity-light-e61f2c8dd8c218eef839027b5f872596.webp)

There are dedicated box shadow design tokens for the rest, hover, active, and drag states of surfaces.

### Containers

Containers highlight essential information that should stand out from surrounding content and, if needed, convey a semantic meaning. To learn more, visit [container component documentation](https://developer.dynatrace.com/contents/docs/design/components/layouts/Container/index.mdx/).

![Containers](https://developer.dynatrace.com/assets/images/layout-containers-light-8d29f9aefa04817f0550333dd41a5f62.webp)

#### Visual characteristics

- Containers have rounded corners.
- Containers have a background color.
- Containers have a surrounding border.

The design tokens provide dedicated container background colors and border radii.

#### Semantics

You can style containers in five different colors. Each color variant communicates a different level of importance.

![Container semantics](https://developer.dynatrace.com/assets/images/layout-container-semantics-light-9b0139dc04d1d8fcd5dc2890729f1253.webp)

1. **Neutral:** The default container color is neutral. It may appear multiple times on a page.
2. **Primary:** The primary color communicates important messages to the user. It should be used sparingly. It can only appear once per page.
3. **Success:** The success color communicates that an action or operation was successful.
4. **Warning:** The warning color indicates that something is about to go wrong. The user's attention is required.
5. **Critical:** The critical color indicates that something went wrong. The user's immediate attention is required.

There are dedicated design tokens for all the container color variants.

#### Emphasis

Each container color variant comes in three different levels of emphasis:

![Container emphasis](https://developer.dynatrace.com/assets/images/layout-container-emphasis-light-438ee3c9bb8ddb4c27eaad25120f910f.webp)

1. **Default:** The default emphasis level.
2. **Emphasized:** The emphasized level provides more contrast to the background and, thus, draws attention to an element.
3. **Accent:** The accent level provides the highest contrast to the background to draw the most attention. Use it sparingly.

There are dedicated design tokens for all background colors and emphasis levels.

#### Composition

Containers have an [inset spacing](#inset-spacing) of `Spacings.Size16` (16px). You must use our spacing tokens when applying inset spacing.

![Container composition](https://developer.dynatrace.com/assets/images/layout-container-composition-light-42cd205613eaeac951fee168723d4990.webp)

You can split containers into different sections to create more complex layouts. To establish sections, use a [divider](#dividers) that spans the full width of the parent container. Additionally, you may use a different [emphasis](#emphasis) level to create a strong visual separation.

### Fields

Fields are the smallest parts of a user interface and enable you to highlight or group content visually. If needed, they can convey a semantic meaning.

![Fields](https://developer.dynatrace.com/assets/images/layout-fields-light-99bdc57f8fad7e3e477c2d62f8436efb.webp)

#### Visual characteristics

- Fields have rounded corners.
- Fields have a background color.

The design tokens provide dedicated field background colors and border radii.

#### Semantics

You can style fields in five different colors; each color variant communicates a different level of importance.

![Field semantics](https://developer.dynatrace.com/assets/images/layout-field-semantics-light-bb76fe68e0f1bde87c3e77dd43d5fbd0.webp)

1. **Neutral:** The default field color is neutral. It may appear multiple times on a page.
2. **Primary:** The primary color communicates important messages. It should be used sparingly and only appear once per page at most.
3. **Success:** The success color indicates that an action or operation was successful.
4. **Warning:** The warning color warns that something is about to go wrong and the user's attention is required.
5. **Critical:** The critical color shows that something went wrong and the user's immediate attention is required.

#### Emphasis

Each field color variant comes in three different levels of emphasis:

![Field emphasis](https://developer.dynatrace.com/assets/images/layout-field-emphasis-light-327f48e5d7f19ff7f12d68a862d3e98a.webp)

1. **Default:** The default emphasis level has a transparent background.
2. **Emphasized:** The emphasized level provides more contrast to the background and, thus, draws attention to an element.
3. **Accent:** The accent level contrasts the most with the background, bringing heightened attention to an element. Use it sparingly.

#### Composition

Fields have an [inset spacing](#inset-spacing) of `Spacings.Size12` (12px) or less, depending on the use case. You must use our spacing tokens when applying inset spacing.

![Field inset spacing](https://developer.dynatrace.com/assets/images/layout-field-composition-light-5c6bf5ad2d9c50059b32f654dda5c024.webp)

#### Interactivity

Fields are the primary means for interactive, clickable elements. Fields communicate a change in their interaction state (rest, hover, active, and drag) with a change of background color.

![Field interactivity](./assets/layout-field-interactivity-light.webp)

Background colors for the rest, hover, and active states are dedicated design tokens.

### Dividers

Dividers let you visually separate content without adding background color. Use dividers to separate areas of content clearly but without drawing the user's attention to a particular area.

![Dividers](https://developer.dynatrace.com/assets/images/layout-dividers-light-370d2ba7bba12950a55ee17c67944107.webp)

Be aware that dividers can introduce unnecessary visual clutter. Before using a divider to separate content, see if putting more space between the elements is sufficient.

### Nesting of surfaces, containers, fields, and dividers

Nesting of surfaces, containers, fields, and dividers supports more complex layouts.

![Nesting of surfaces](./assets/layout-nesting-light.webp)

1. **Base:** All visual layout elements (surfaces, containers, fields, and dividers) can be placed on your app's background, the base.
2. **Surfaces:** can hold containers, fields, and dividers.
3. **Containers:** can hold fields and dividers.
4. **Fields:** can hold dividers.
5. **Dividers:** can't hold any elements.

No element can contain another instance of itself. In other words, a surface can't hold another surface; a container can't hold another container; a field can't hold another field.
