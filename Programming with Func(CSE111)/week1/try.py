# import math
# from datetime import datetime

# # These are my Variables
# check_price = input("Do you want to see the other prices we've based on the size? ")
# diameter = ""
# if check_price.capitalize() == "Yes":
#     price = 50
#     diameter == 14
#     current_date_and_time = datetime.now()
#     width = int(input("Enter the width of the tire in mm (ex 205): "))
#     ratio = int (input("Enter the aspect ratio of the tire (ex 60): "))
#     diameter = int (input("Enter the diameter of the wheel in inches (ex 15): "))
#     volume = math.pi * width * width * ratio * (width*ratio + 2540*diameter)/10000000

#     with open ("volume.txt","at") as vol_file:
#         print(volume, file= vol_file)
#         print(f"{current_date_and_time},{width}, {ratio}, {diameter}, {volume:.1f} milliliters and the price is {price:.2f}", file=vol_file)
#         print(f"The price for the {diameter} inches tire is {price:.2f}")
    
# elif check_price.capitalize() == "Yes":
#     price = 150
#     diameter == 15
#     with open ("volume.txt","at") as vol_file:
#         print(volume, file= vol_file)
#         print(f"{current_date_and_time},{width}, {ratio}, {diameter}, {volume:.1f} milliliters and the price is {price:.2f}",  file=vol_file)
#         print(f"The price for the {diameter} inche tire is {price:.2f}")
#     # This is my output
    
# elif check_price.capitalize() == "Yes":
#     price = 200
#     diameter == 16
#     with open ("volume.txt","at") as vol_file:
#         print(volume, file= vol_file)
#         print(f"{current_date_and_time},{width}, {ratio}, {diameter}, {volume:.1f} milliliters milliliters and the price is {price:.2f}", file=vol_file)
#         print(f"The price for the {diameter} inche tire is {price:.2f}")

# elif check_price > 200 and diameter > 16:
#     print("The tire you are searching for is out of range. Please try again")  

# else:
#     print("Thank you!")

def kilometers_from_miles(miles):
    """Convert a value in miles to kilometers
    and return the kilometers value.
    """
def torus_volume(inner, outer):

    """Compute and return the volume of a torus."""
    vol = 2 * (math.pi * inner) ** 2 * outer