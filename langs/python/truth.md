Python has an extensible truth value system.

The following values are considered **false**:

* ```None```
* ```False```
* zero of any numeric type, for example, ```0```, ```0L```, ```0.0```, ```0j```.
* any empty sequence, for example, ```''```, ```()```, ```[]```.
* any empty mapping, for example, ```{}```.
* instances of user-defined classes, if the class defines a ```__nonzero__()``` or ```__len__()``` method, when that method returns the integer zero or bool value False.2.5

All other values are considered **true**– so objects of many types are always true.

_Cited from
[Python Library Reference](http://docs.python.org/2.4/lib/truth.html)_

