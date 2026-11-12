## Visual configuration

`SimpleTable` supports configuration for its visual look, data density, and data point separation.

### Container

#### Contained

- Use the contained variant for **most cases**, and particularly when the table is prominent in the visual hierarchy of the view.

![A SimpleTable in the contained style, with a bordered background that sets it apart from the surface.](https://developer.dynatrace.com/assets/images/simpletable-contained-light-099846e45b82bd49bb6626afd10f40b9.webp)

#### Uncontained

- Always use the uncontained variant if the table is the only element inside a `Surface`.
- Use for a subtler appearance if the table is **secondary** in the visual hierarchy of the view.

![A SimpleTable in the uncontained style, with no border or background, blending into the surface.](https://developer.dynatrace.com/assets/images/simpletable-uncontained-light-01eb963a2278594f016f4109251e1094.webp)

### Data density

`SimpleTable` has three density options that control the standard row height and whitespace in a cell.

#### Default

- Use the default row density for datasets where users need to process and scan the information shown quickly.

![A SimpleTable with default row density, using standard row height and spacing.](https://developer.dynatrace.com/assets/images/simpletable-density-default-light-bd12f3f53e59375a74719477a386336e.webp)

#### Condensed

- Use the condensed row density to show more information in smaller areas and compact layouts. Consider that cell content might be more challenging for users to scan and distinguish.

![A SimpleTable with condensed row density, using shorter rows to fit more data in less space.](https://developer.dynatrace.com/assets/images/simpletable-density-condensed-light-b867746833d92619005b92b3d6eeed06.webp)

#### Comfortable

- Use the comfortable row density to **improve readability** for tables with visually crowded cell content.

![A SimpleTable with comfortable row density, using taller rows and extra whitespace for readability.](https://developer.dynatrace.com/assets/images/simpletable-density-comfortable-light-b4ccb04b9c3114e74826978ba3a65adc.webp)

### Data point separation

#### No separation

- Use no visual data point separation for **simple data sets**. For example, if you use a key-value list.

![A SimpleTable with no data point separation, showing no dividing lines between rows.](../../components-docs-assets/simpletable-no-separation-light.webp)

#### Horizontal dividers

- Use horizontal dividers to highlight the distinction and separation between rows.

![A SimpleTable with horizontal dividers separating each row.](https://developer.dynatrace.com/assets/images/simpletable-horizontal-dividers-light-dca6a907656e5ec223849d364745caa9.webp)

#### Zebra stripes

- Consider using zebra stripes for **large datasets** where users may want to interact with one or more data points in the view. This ensures easier scanning and distinction between rows.

![A SimpleTable with zebra stripes, alternating the background color of each row.](https://developer.dynatrace.com/assets/images/simpletable-zebra-stripes-light-c57f90d65bdc2e8e80cdb45865bde1a3.webp)

#### Vertical dividers

- Use vertical dividers to separate columns, especially when dealing with a relatively large amount of data points.

![A SimpleTable with vertical dividers separating each column.](https://developer.dynatrace.com/assets/images/simpletable-vertical-dividers-light-1262226335aa6622ab7b0aa31a6969a9.webp)

#### Combined separation

- Combine zebra stripes and vertical dividers to establish a structured dataset, ensuring row and column distinction for effective readability.

![A SimpleTable combining zebra stripes and vertical dividers for both row and column separation.](https://developer.dynatrace.com/assets/images/simpletable-combined-separation-light-cea604ee86df3a220c37436278d5b9cb.webp)
