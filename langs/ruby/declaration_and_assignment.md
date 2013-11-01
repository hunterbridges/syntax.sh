Variables in Ruby are not strongly typed. A variable can hold any type of value
and values are always aware of their own types.

Variables can not be **declared** without being **initialized** (and thus
**assigned**). Variables are **declared** and **assigned** using the
[assignment operator](#assignment_operators) ```=```

    foo = 1

Variables are implicitly declared in **local scope**. To declare a **global**,
prepend ```$``` to the name.

    def setbar()
        $bar = 2
    end

    setbar()

    puts $bar
    # Puts 2

**Reading** a variable that has **not been declared** will throw an [exception](#exceptions).
