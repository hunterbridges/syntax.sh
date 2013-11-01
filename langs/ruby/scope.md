A variable’s scope is determined by the innermost lambda,
[function](#functions), [Ruby block](#callables_by_reference),
module definition, or [class definition](#class_definition) in which
it is declared. Scopes do not inherit local variables from their containing
scopes.

    outer = 1
    def foo()
        puts outer
        # Throws an exception
    end
    foo()

Global variables may be accessed from any scope

    $a = 1

[Instance variables](#instance_variables) may be accessed from within any
[instance method](#instance_methods).

    @b = 1

[Class variables](#class_variables) may be accessed from within any
[instance method](#instance_methods) or [class method](#class_methods).

    @@c = 1
