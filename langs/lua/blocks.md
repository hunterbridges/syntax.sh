Blocks in Lua can be created arbitrarily by containing code between
```do``` and ```end```. All blocks contain their own [scope](#scope).

    do
        local one = 1
        local two = 2
    end

[Control flow](#control_flow) structures and [function bodies](#functions) are
also blocks.
