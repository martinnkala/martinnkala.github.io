import csv
def main():
    read_products()
    process_request()
    
def read_products():
    
    final_products = {}
    filename = "products.csv"

    with open(filename, 'rt') as products_file:
        products_reader = csv.reader(products_file)
        
        next(products_reader)
        for row in products_reader:
            print(row)
            productname = row[0]
            name = row[1]
            price = row[2]
            
            final_products[productname]= [ name, price]
            
    print(final_products)
    
    # This is the function for the request.csv
def process_request():
    final_request = {}
    filename = "request.csv"

    with open(filename, 'rt') as request_file:
        reader = csv.reader(request_file)
        
        next(reader)
        for r in reader:
            # print(row)
            productname = r[0]
            quantity = r[1]
            
            final_request[productname] = [quantity]
            
    print(final_request)
    
    if __name__ == '__main__': 
        main()
    
