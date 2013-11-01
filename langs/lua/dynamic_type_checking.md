Use the ```type()``` function to return a string representing the type of a
given value. It will return ```"number"```, ```"string"```,
```"boolean"```, ```"function"```, ```"table"```, ```"userdata"```,
```"lightuserdata"```, or ```"nil"```.

    print(type(1))
    -- Prints "number"

    local foo = "bar"
    print(type(foo))
    -- Prints "string"

[Comparison operators](#comparison) are type-safe in Lua, e.g. ```2 == "2"```
evaluates to ```false```.
