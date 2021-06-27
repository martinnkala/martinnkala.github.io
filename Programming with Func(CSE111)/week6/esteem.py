# Import and set basic variables
pos = 1
neg = -1


def main():
    print("This program is an implementaiton of the Rosenberg Self-Esteem Scale.")
    print("This program will show you ten statements that you could possibly")
    print("apply to yourself. Please rate how much you agree with each of the")
    print("statements by responding with one of these four letters:\n")
    print("D means you strongly disagree with the statement.")
    print("d means you disagree with the statement.")
    print("a means you agree with the statement.")
    print("A means you strongly agree with the statement.\n")

# Section break

    score = 0
    score += ask_question("1. I feel that I am a person of worth, at least on an equal plane with others.", pos)
    score += ask_question("2. I feel that I have a number of good qualities.", pos)
    score += ask_question("3. All in all, I am inclined to feel that I am a failure.", neg)
    score += ask_question("4. I am able to do things as well as most other people.", pos)
    score += ask_question("5. I feel I do not have much to be proud of.", neg)
    score += ask_question("6. I take a positive attitude toward myself.", pos)
    score += ask_question("7. On the whole, I am satisfied with myself.", pos)
    score += ask_question("8. I wish I could have more respect for myself.", neg)
    score += ask_question("9. I certainly feel useless at times.", neg)
    score += ask_question("10. At times I think I am no good at all.", neg)

# Final score // prints when questions are exausted 

    print(f"\nYour score is {score}.")
    print("A score below 15 may indicate problematic low self-esteem.")

# Calculate score based on user input

def ask_question(statement,score_def):
    print(statement)
    answer = input("Please enter D, d, a, or A: ")
    print("")
    score = 0
    if answer == 'D':
        score = 0
    elif answer == 'd':
        score = 1
    elif answer == 'a':
        score = 2
    elif answer == 'A':
        score = 3
    if score_def == neg:
        score = 3 - score

    return score

if __name__ == "__main__":
    main()
