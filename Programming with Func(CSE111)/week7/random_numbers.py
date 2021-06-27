import random

def main():
    rand_nums = [4, -36,20,10,6]
    append_random_numbers(rand_nums, 5)
    print(rand_nums)

def append_random_numbers(number_list, quantity = 1):
    for i  in range(quantity):
        random_num =round(random.uniform(1, 1000), 1)
        number_list.append(random_num)
        
main()
    
    