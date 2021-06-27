import csv
def main():
    
    filename = "request.csv"

    with open(filename, 'rt') as products_file:
        products_reader = csv.reader(products_file)
        
        next(products_reader)
        
        print(products_reader)
main()
    
