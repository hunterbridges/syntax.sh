Blocks in Python can not be created arbitrarily. They are only ever one of the
following: a module, a [function body](#functions), or a [class definition](#class_declaration).
They are notated by indent levels, much like [control flow structures](#control_flow).

    def example():
        one = 1
        two = 2

Modules, functions, and class definitions are the only constructs in Python
that modify [scope](#scope). Control flow structures in Python are **not** blocks.
