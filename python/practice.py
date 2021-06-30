name = input('enter your name... ')

if len(name) < 3:
    print("this name is a bit smaller try again... ")

elif len(name) > 8:
    print("this name is a bit large try again... ")

else:
    print("this name looks good")
