weight = int(input('Weight: '))
Unit = input('(l)bs or (k)g : ')

if Unit.upper() == "L":
    converted = weight * 0.45
    print(f"you are {converted} kilos")

else:
    converted = weight / 0.45
    print(f"you are {converted} pounds ")
