class FooClass:
    def __init__(self):
        self.bar = 1

foo = FooClass()
print foo.__class__

if isinstance(foo, FooClass):
    print "foo is a FooClass"
