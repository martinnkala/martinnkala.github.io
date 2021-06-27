import math
from datetime import datetime

# These are my Variables
current_date_and_time = datetime.now()
width = int(input("Enter the width of the tire in mm (ex 205): "))
ratio = int (input("Enter the aspect ratio of the tire (ex 60): "))
diameter = int (input("Enter the diameter of the wheel in inches (ex 15): "))
volume = math.pi * width * width * ratio * (width*ratio + 2540*diameter)/10000000

# This is my output
with open ("volume.txt","at") as vol_file:
    print(volume, file= vol_file)
    print(f"{current_date_and_time},{width}, {ratio}, {diameter}, {volume:.1f} milliliters", file=vol_file)
