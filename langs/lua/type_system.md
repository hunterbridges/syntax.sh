In Lua, variables are [dynamically typed](http://en.wikipedia.org/wiki/Type_system#Dynamic_type-checking_and_runtime_type_information)
and tables can be used for [duck typing](http://en.wikipedia.org/wiki/Duck_typing).
Since Lua is an interpreted language, a program can not be
[type checked](http://en.wikipedia.org/wiki/Type_safety) before it executes.

Lua values can be of the following types:
```number```, ```string```, ```boolean```, ```table```, ```function```,
```nil```, ```userdata```, and ```lightuserdata```.

If an operation expects differently typed values than it is provided,
the interpreter will attempt to [coerce](http://en.wikipedia.org/wiki/Type_conversion)
the values to compatible types. This can cause bugs that are hard to track down.
If the interpreter can not coerce the values, it generates an [error](#exceptions).
Lua coerces values left-to-right.

    local one = "1"
    local two = 2

    print(one + two)
    -- Prints 3
    -- The + is not the concatenation operator in Lua, so the interpreter knows
    -- to coerce the string "1" into a number.

    print(two + one)
    -- Prints 3
    -- "1" is coerced into a number and added to 2

    print(one .. two)
    -- Prints 12
    -- 2 is coerced into a string and concatenated to "1"

    print(two .. one)
    -- Prints 21
