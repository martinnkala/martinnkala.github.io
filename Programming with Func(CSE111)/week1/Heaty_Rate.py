"""
When you physically exercise to strengthen your heart, you
should maintain your heart rate within a range for at least 20
minutes. To find that range, subtract your age from 220. This
difference is your maximum heart rate per minute. Your heart
simply will not beat faster than this maximum (220 - age).
When exercising to strengthen your heart, you should keep your
heart rate between 65% and 85% of your heart's maximum.
"""

# This is my code

age = int(input("Please enter your age:" ))
print("When you exercise to strengthen your heart, you should keep your heart rate between 128 and 167 beats per minute.")
Max_Heart_Beat = (220 - age)
print(f" Your Maximum Heart beat is: {Max_Heart_Beat}")
