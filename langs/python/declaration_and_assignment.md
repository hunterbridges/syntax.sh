Variables in Python are not strongly typed. A variable can hold any type of
value and values are always aware of their own types.

Variables can not be **declared** without being **initialized** (and thus
**assigned**). Variables are **assigned** using the
[assignment operator](#assignment_operators) ```=```

    foo = 1

Variables are implicitly declared in **local scope**. A variable declared in
the outermost scope becomes a global, but must be imported into local scopes
to be accessed. This is achieved by using the ```global``` keyword.

    foo = 1

    def bar():
        global foo
        print foo

    bar()
    # Prints 1

**Reading** a variable that has **not been assigned** will throw an [exception](#exceptions).
