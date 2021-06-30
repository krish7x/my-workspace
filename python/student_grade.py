import math

total_subjects = int(input("Enter the total subjects...  "))
max_mark = int(input("Enter Maximum mark for a subject.. "))

arr = []  # array creating
for i in range(0, total_subjects):  # 0,1,2,3,4,5
    marks = int(input("Enter Mark" + str(i + 1) + "... "))
    arr.append(marks)

# for loop
total_marks = 0
for i in arr:  # m1,m2,m3,m4,m5
    total_marks = total_marks + i

total_max_marks = total_subjects * max_mark
avg = float(total_marks / total_subjects)
percentage = float(((total_marks / total_max_marks) * 100))

print("Total = ", total_marks)
print("Total Max Marks = ", total_max_marks)
print("Average = ", avg)
print("Percentage = ", percentage)

# if els or elif
if(percentage >= 90):
    print("Grade = Outstanding")
elif(percentage < 90 and percentage >= 80):
    print("Grade = Excellent")
elif(percentage >= 70 and percentage < 80):
    print("Grade = Good")
elif(percentage >= 60 and percentage < 70):
    print("Grade = First Class")
elif(percentage >= 50 and percentage < 60):
    print("Grade = Second Class")
elif(percentage >= 40 and percentage < 50):
    print("Grade = Pass")
else:
    print("Fail")


my_percentage = 96
print("Yes") if my_percentage > 90 else print(
    "No")  # replacement for terinary operation


# Things to learn from this

"""

1. Getting input from user and casting it to integer
2. Declaring array
3. For Loop (Iteration)
4. Appending in array
5. Finding total in an array
6. Finding Average and percentage by casting it to float
7. Finding Grades using if elif and else
8. Printing it to user

"""
