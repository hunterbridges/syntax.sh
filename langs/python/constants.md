Python does not provide special support for constants. The convention is to
declare module-level variables with all-caps names, described in
[PEP0008](http://www.python.org/dev/peps/pep-0008/#constants).

    # cfg.py
    FOOS_PER_BAR = 32

Then access them via the module:

    import cfg

    print cfg.FOOS_PER_BAR
    # Prints 32

These values can still be changed just like any other variable, so handle with
care.
