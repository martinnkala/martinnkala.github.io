#This is my DocString: which just gives a brief explaination of what the code is about.
""" This program prompts a user to make a choice and then display it on the console.
If the choice made is out of the scope, the USER fails the game and has to play again. """

#Created two variables globally. 
# Note that choice1 and choice2 have been hard coded - meaning that the values are statically set. However, we can set those to be dynamic.
#For the purpsoe of this exercise hardcoding them will be helpful because we are helping each otther understand how to use [Conditional Statements].
choice1 = "match"
choice2 = "flashlight"

#Prompts thw the [User] for input.
choice = input(" You are walking through a dark forest and find two items a [match] and a [flashlight]. Which one did you want to pick up? ")
# My conditional statements ensures that we get the correct resutls based off of the User's input.\
# The curly braces {} allows us to concatenate our choices with a string.  
if choice == "match":
    print(f"You picked a {choice1}.")
elif choice == "flashlight":
    print(f"You have picked up {choice2}")
else:
    print("Sorry! YOu have picked up somthing out of range. Try again.")
