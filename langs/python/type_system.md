In Python, variables are [dynamically typed](http://en.wikipedia.org/wiki/Type_system#Dynamic_type-checking_and_runtime_type_information)
and objects are [duck typed](http://en.wikipedia.org/wiki/Duck_typing). Since
Python is an interpreted language, a program can not be
[type checked](http://en.wikipedia.org/wiki/Type_safety) before it executes.

Python has a number of [built-in types](http://docs.python.org/2/library/types.html).
Among them are ```IntType```, [```StringType```](#strings),
[```FunctionType```](#functions), [```ListType```](#arrays),
[```DictType```](#kv_containers), [```ClassType```](#class_declaration) and
[```InstanceType```](#instantiation).

Note the distinction between _classes_ and _types_. A _class_ in Python
is a value of type ```ClassType```. An _instance_ of a _class_ is a
value of type ```InstanceType```.

If an operation expects differently typed values than it is provided,
Python will attempt to coerce the values to compatible types. This can
cause bugs that are hard to track down. If the interpreter can not coerce
the values, it throws an [exception](#exceptions).
