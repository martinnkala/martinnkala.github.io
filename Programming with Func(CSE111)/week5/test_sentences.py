from sentences import get_determiner, get_noun, get_verb
import pytest


def test_get_determiner():
    # Test the singular determiners.
    singular_determiners = ["the", "one"]
    # This loop will repeat the statements inside it 4 times.
    for _ in range(4):
        word = get_determiner(1)
           # Verify that the word returned from get_determiner is
        # one of the words in the singular_determiners list.
        assert word in singular_determiners
    plural_determiners = ["some", "many"]
    for _ in range(4):
        word = get_determiner(2)
        assert word in plural_determiners
    
        
def test_get_noun():
     singular_noun = [ "adult", "bird", "boy", "car", "cat",
         "child", "dog", "girl", "man", "woman"]
     for i in range(6):
         noun = get_noun(1)
         
         assert noun in singular_noun
     plural_noun =["adults", "birds", "boys", "cars", "cats",
        "children", "dogs", "girls", "men", "women"]
     for i in range(6):
         noun = get_noun(2)
         assert noun in plural_noun

def test_get_verb():
     singular_verb = ["drank", "ate", "grew", "laughed", "thought",
         "ran", "slept", "talked", "walked", "wrote"]
     for j in range(6):
         tense = get_verb(1, "past")
         assert tense in singular_verb
         
     plural_verb = [ "drinks", "eats", "grows", "laughs", "thinks",
        "runs", "sleeps", "talks", "walks", "writes"]
     for j in range(6):
         tense = get_verb(1, "present")
         assert tense in plural_verb

     

#     # If a loop's counting variable is not used inside the
#     # body of the loop, many programmers will use underscore
#     # (_) as the variable name for the counting variable.

#     # Test the plural determiners.
#     plural_determiners = ["some", "many"]
#     for _ in range(4):
#         word = get_determiner(2)

#         # Verify that the word returned from get_determiner
#         # is one of the words in the plural_determiners list.
#         assert word in plural_determiners
#         assert 

pytest.main(["-v", "--tb=line", "-rN", "test_sentences.py"])