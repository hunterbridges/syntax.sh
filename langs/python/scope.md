A variable’s scope is determined by the innermost [function](#functions),
[class](#class_declaration), or module in which it is declared.

    outer = 1

    def foo():
        inner = 2

        print outer
        # Prints 1

    foo()
    print inner
    # Throws NameError

Functions that reference variables from inherited scopes are called
[closures](#closures).
