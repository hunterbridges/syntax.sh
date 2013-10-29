**Note:** The term “block” in the context of Ruby generally refers to
a callable that is [passed by reference](#callables_by_reference). In this
context, “block” refers to a logical encapsulation of code.

Blocks can not be created arbitrarily in Ruby. They are implicitly created
when declaring a [class](#class_declaration), module, [function](#functions),
or using a [control flow structure](#control_flow_structure). All blocks
contain their own [scope](#scope).
