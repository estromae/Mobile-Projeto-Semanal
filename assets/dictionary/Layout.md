flexDirection controls the direction in which the children of a node are laid out. This is also referred to as the main axis. The cross axis is the axis perpendicular to the main axis, or the axis which the wrapping lines are laid out in.


Layout direction specifies the direction in which children and text in a hierarchy should be laid out. Layout direction also affects what edge start and end refer to. By default, React Native lays out with LTR layout direction. In this mode start refers to left and end refers to right.


justifyContent describes how to align children within the main axis of their container. For example, you can use this property to center a child horizontally within a container with flexDirection set to row or vertically within a container with flexDirection set to column.


alignItems describes how to align children along the cross axis of their container. It is very similar to justifyContent but instead of applying to the main axis, alignItems applies to the cross axis.


alignSelf has the same options and effect as alignItems but instead of affecting the children within a container, you can apply this property to a single child to change its alignment within its parent. alignSelf overrides any option set by the parent with alignItems.


alignContent defines the distribution of lines along the cross-axis. This only has effect when items are wrapped to multiple lines using flexWrap.


The flexWrap property is set on containers and it controls what happens when children overflow the size of the container along the main axis. By default, children are forced into a single line (which can shrink elements). If wrapping is allowed, items are wrapped into multiple lines along the main axis if needed.



**Row Gap, Column Gap and Gap**

rowGap sets the size of the gap (gutter) between an element's rows.

columnGap sets the size of the gap (gutter) between an element's columns.

gap sets the size of the gap (gutter) between rows and columns. It is a shorthand for rowGap and columnGap.