In JavaScript, variables are [dynamically typed](http://en.wikipedia.org/wiki/Type_system#Dynamic_type-checking_and_runtime_type_information)
and objects are [duck typed](http://en.wikipedia.org/wiki/Duck_typing). Since
JavaScript is an interpreted language, a program can not be
[type checked](http://en.wikipedia.org/wiki/Type_safety) before it executes.

If an operation expects a differently typed value than it is provided,
the interpreter will attempt to [coerce](http://en.wikipedia.org/wiki/Type_conversion)
the value to the expected type. This can cause bugs that are hard to track down.
If the interpreter can not coerce the value, it throws an [exception](#exceptions).
