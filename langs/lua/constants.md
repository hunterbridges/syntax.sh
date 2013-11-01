Lua does not have language support for constants. A common convention
is declaring a global with an all caps name to imply it is a constant.

    FOOS_PER_BAR = 32

These values can still be changed just like any other variable, so handle with
care.
