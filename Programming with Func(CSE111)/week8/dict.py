# Example 1

def main():
    # Create a dictionary with student IDs as
    # the keys and student names as the values.
    students = {
        "42-039-4736": "Clint Huish",
        "61-315-0160": "Michelle Davis",
        "10-450-1203": "Jorge Soares",
        "75-421-2310": "Abdul Ali",
        "07-103-5621": "Michelle Davis"
    }

    # Add an item to the dictionary.
    students["81-298-9238"] = "Sama Patel"
    students["05-201-1109"] = "Martin Nkala"
    # Remove an item from the dictionary.
    students.pop("61-315-0160")
    

    # Get the number of items in the dictionary and print it.
    length = len(students)
    print(length)

    # Print the entire dictionary.
    print(students)

    # Get a student ID from the user.
    id = input("Enter a student ID: ")

    # Check if the student ID is in the dictionary.
    if id in students:

        # Find the student ID in the dictionary and
        # retrieve the corresponding student name.
        name = students[id]

        # Print the student's name.
        print(name)
    else:
        print("No such student")


# Call main to start this program.
if __name__ == "__main__":
    main()