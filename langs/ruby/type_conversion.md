The Ruby language itself has no conventions for type conversion. Type conversion
is achieved via [class methods](#class_methods). Type conversion methods
tend to take no parameters and follow the naming convention ```to_TYPE```.
Many built-in Ruby classes implement obvious conversions.

    # Convert a Fixnum to a String
    x = 41.to_s

    # Convert a String to a Float
    y = "3.14".to_f

    # Convert a Float to a Fixnum
    z = 6.022.to_i

    puts "#{x} #{x.class}"
    # Puts "41 String"

    puts "#{y} #{y.class}"
    # Puts "3.14 Float"

    puts "#{z} #{z.class}"
    # Puts "6 Fixnum"
