import math

# These are my Variables
width = int(input("Enter the width of the tire in mm (ex 205): "))
ratio = int (input("Enter the aspect ratio of the tire (ex 60): "))
diameter = int (input("Enter the diameter of the wheel in inches (ex 15): "))
volume = math.pi * width * width * ratio * (width*ratio + 2540*diameter)/10000000
# This is my output

print(f"The approximate volume is {volume:.1f}")
# print(v)