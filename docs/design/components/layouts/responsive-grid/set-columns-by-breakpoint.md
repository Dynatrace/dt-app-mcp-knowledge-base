## Set columns by breakpoint

Each key of `columns` is the minimum component width, in pixels, at which its value applies. A positive integer `n` expands to `repeat(n, minmax(0, 1fr))`. A string is used as the track list verbatim.

Every key is optional, and an omitted key takes the value of the next smaller key. For example, `columns={{ 600: 2 }}` results in one column below 600px and two columns from 600px up.
