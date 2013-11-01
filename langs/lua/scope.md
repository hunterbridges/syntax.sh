A variable’s scope is determined by the innermost [block](#blocks) in
which it is declared.

    local outer = 1
    if true
        print(outer)
        -- Prints 1

        local inner = 2
    end

    print(inner)
    -- Prints nil

If a variable is not declared within a block it is scoped as a **global**.
Additionally, a variable is also scoped as a global if it is initialized
without the ```local``` keyword.

    if true
        -- Global
        a = 1

        -- Local
        local b = 2
    end

    print(a)
    -- Prints 1

    print(b)
    -- Prints nil

Functions that reference variables from inherited scopes are called
[closures](#closures). In Lua, these inherited variables are referred to as
_upvalues_.
