**Note:** The term “block” in the context of Ruby generally refers to
a callable that is [passed by reference](#callables_by_reference). In this
context, “block” refers to a logical encapsulation of code.

Blocks in Ruby can be created arbitrarily by containing code between ```begin```
and ```end```. This is a hack of the
[exception handling syntax](#exceptions). All blocks contain their own
[scope](#scope).

    begin
        one = 1
        two = 2
    end

[Class declarations](#class_declaration), modules, [functions](#functions),
lambdas, [Ruby blocks](#callables_by_reference), and
[control flow structures](#control_flow) are also blocks.
