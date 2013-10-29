**Note:** The term “block” in the context of Objective-C generally refers to
a [closure](#closures) that is [passed by reference](#callables_by_reference).
In this context, “block” refers to a logical encapsulation of code.

Blocks in Objective-C can be created arbitrarily by containing code in braces.
All blocks contain their own [scope](#scope).

    {
        int one = 1;
        int two = 2;
    }

[Control flow structures](#control_flow) and [functions](#functions) are also
blocks.
