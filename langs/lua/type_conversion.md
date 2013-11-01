Lua does not have much in the way of manual type conversion. The language has
disambiguated [operators](#operators) to make its automatic type coercion
system less mysterious. Nonetheless, Lua does have the ```tostring()``` and
```tonumber()``` functions built in.

Use ```tostring()``` to convert non-string values to ```string```.
If it is present, the ```__tostring``` metamethod is called on the passed-in
table’s metatable.

    print(tostring(nil) .. tostring(4))
    -- Prints "nil4"

    local foo = {}
    local metafoo = {__tostring = function() return "bar" end}
    setmetatable(foo, metafoo)
    print(foo)
    -- Prints "bar"

Use ```tonumber()``` to convert a ```string``` to ```number```.

    print(tonumber("10".."0") * 2)
    -- Prints 200

    print(tonumber("100", 2))
    -- Prints 4

**Note:** ```tonumber()``` takes an optional second parameter, the _radix_
parameter. If the second parameter is omitted, it defaults to ```10```.
