## Caveats

Do not overuse this query, since it still has a high performance impact in combination with a very large number of containers and resizing events. Also, avoid styling the container's width/height depending on the result of this query or do it sensibly, since it might run into an endless render cycle.

Example: Don't add `style={{ width: restrictedWidth ? '900px' : '300px') }}` on the container, where the media query used is `'(min-width: 130px) and (max-width: 800px)'`.

Moreover, since only width and height-related queries can be supported and wrong usages can lead to endless render cycles, this is a temporary solution until the native [CSS container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries) are available.
