Use the `PageLayout` to structure app pages with persistent header, sidebar, content, and details panel slots, including responsive breakpoint handling and resizable panels.

`PageLayout` replaces `Page` with a composition-first model where each panel owns its own state. Most migrations are mechanical: rename slots and props, replace removed APIs with the built-in alternatives, and update width value types.

## Slots

The new slot names for `PageLayout` are mapped against their old counterparts in `Page`:

| `Page`                    | `PageLayout`                                       |
| ------------------------- | -------------------------------------------------- |
| `Page`                    | `PageLayout`                                       |
| `Page.Header`             | `PageLayout.Header`                                |
| `Page.Sidebar`            | `PageLayout.Sidebar`                               |
| `Page.Main`               | `PageLayout.Content`                               |
| `Page.DetailView`         | `PageLayout.Details`                               |
| `Page.PanelControlButton` | removed - see [below](#panelcontrolbutton-removed) |

`PageLayout.Content` is **required**. All other slots are optional.

## Prop changes

For both `Sidebar` and `Details`:

| `Page`                           | `PageLayout`                       |
| -------------------------------- | ---------------------------------- |
| `preferredWidth`                 | `defaultWidth`                     |
| `dismissed`                      | `collapsed`                        |
| `defaultDismissed`               | `defaultCollapsed`                 |
| `onDismissChange(state, reason)` | `onCollapsedChange(value)`         |
| `minWidth: number`               | `minWidth: PanelWidth`             |
| `keepMounted`                    | removed (state is alway preserved) |
| `integratedControls`             | removed (always enabled)           |

- `maxWidth` on both `Sidebar` and `Details`
- `layout: 'split' | 'overlay'` on `Details`
- `defaultLayout: 'split' | 'overlay'`
- on `Details` `onLayoutChange(value)` on `Details`
