Blocks in Lua can be created arbitrarily by containing code between
```do``` and ```end```. All blocks contain their own [scope](#scope).

    do
        local one = 1
        local two = 2
    end

[Control flow](#control_flow) structures are also blocks.

    if x == 1 then
        print "x is 1"
    end
