## Visual configuration

`DataTable` supports configuration for its visual look, data density, and data point separation.

### Container

#### Contained

- Use the contained variant for **most cases**, and especially if it is prominent in the visual hierarchy of the view.

![A DataTable in the contained style, with a bordered background that sets it apart from the surface.](https://developer.dynatrace.com/assets/images/datatable-contained-light-057334da206771d92c315b0a20038b04.webp)

#### Uncontained

- Always use the uncontained variant when it's the only element inside a `Surface`.
- Use for a subtler appearance when the table is **secondary** in the visual hierarchy of the view.

![A DataTable in the uncontained style, with no border or background, blending into the surface.](https://developer.dynatrace.com/assets/images/datatable-uncontained-light-4569b3e3724917e111c4121e81ec7753.webp)

### Data density

`DataTable` comes with three density options that control the standard row height and whitespace in a cell.

#### Default

- Use the default row density for datasets where users need to process and scan the information shown.

![A DataTable with default row density, using standard row height and spacing.](https://developer.dynatrace.com/assets/images/datatable-density-default-light-97330d71652df530c60d319a6135822b.webp)

#### Condensed

- Use the condensed row density to show more information in smaller areas and compact layouts. Consider that cell content might be more challenging for users to scan and distinguish.

![A DataTable with condensed row density, using shorter rows to fit more data in less space.](https://developer.dynatrace.com/assets/images/datatable-density-condensed-light-5277a8b51fc576b5a14e7b6513cc081d.webp)

#### Comfortable

- Use the comfortable row density to **improve readability** for tables with visually crowded cell content and where extra space will support user experience. Consider that this density setting will show less information in the same area.

![A DataTable with comfortable row density, using taller rows and extra whitespace for readability.](https://developer.dynatrace.com/assets/images/datatable-density-comfortable-light-80f35d8ce1f2eb613b4ead978dd7c2c3.webp)

### Data point separation

#### No separation

- Use no visual data point separation for **simple data sets**, for example, a key-value list.

![A DataTable with no data point separation, showing no dividing lines between rows.](../../components-docs-assets/datatable-no-separation-light.webp)

#### Horizontal dividers

- Use horizontal dividers to highlight the distinction and separation between rows.

![A DataTable with horizontal dividers separating each row.](https://developer.dynatrace.com/assets/images/datatable-horizontal-dividers-light-5eea627f240ed02869c17a7919a0a901.webp)

#### Zebra stripes

- Consider using zebra stripes for **large datasets** where users may want to interact with one or more data points in the view to ensure easier scanning and distinction between rows.

![A DataTable with zebra stripes, alternating the background color of each row.](https://developer.dynatrace.com/assets/images/datatable-zebra-stripes-light-d6ab77052668a8f43790d634d40858ea.webp)

#### Vertical dividers

- Use vertical dividers to separate columns, especially when dealing with a relatively large amount of data points.

![A DataTable with vertical dividers separating each column.](https://developer.dynatrace.com/assets/images/datatable-vertical-dividers-light-902d16dcc1f64618acd2ceb8a7b26912.webp)

#### Combined separation

- Combine zebra stripes and vertical dividers to establish a structured dataset, ensuring row and column distinction for effective readability.

![A DataTable combining zebra stripes and vertical dividers for both row and column separation.](https://developer.dynatrace.com/assets/images/datatable-combined-separation-light-621836c9002574190ee164a06b6dd051.webp)
