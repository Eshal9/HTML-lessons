height = float(input("Enter your height in cm:"))
weight = float(input("Enter your weight in kg:"))

BMI = weight / (height/100)**2

print("your BMI is", BMI)

if BMI <=18.4:
    print("You are underweight.")

    if BMI <=24.9:
        print("you are healthy:")

        if BMI <=29.9:
            print("you are overweight")

            if BMI <=34.9:
                print("you are severely overweight")

    if BMI <=39.9:
            print("you are obese")

else: 
    print("you are severely obese")