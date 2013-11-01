Ruby constants follow a set of rules that differentiate them from other
variables. They are declared with names that begin with a capital letter.
By convention, constant values are fully uppercased with underscores, e.g.
```FOOS_PER_BAR```, while classes are camel-cased with an initial capital,
e.g. ```FooInfo```.

    FOOS_PER_BAR = 32

Constants can not be declared in a dynamic scope. This will throw an error.

    def setbar()
        BAR = 2
        # Throws an error
    end

    setbar()

While the interpreter will allow reassignment to a constant, it will generate
a warning. Reassigning contradicts the semantics of a _constant_.

    BAR = 2
    BAR = 3
    # Emits warning: already initialized constant BAR
