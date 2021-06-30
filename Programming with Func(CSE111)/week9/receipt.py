import csv

def read_products():
    products = "products.csv"
    final_products={}
    
    with open(products, 'rt') as product_file:
        reader = csv.reader(product_file)
        
        next(reader)
        for i in reader:
            print(i)
            
            
    if __name__ == '__main__':
        main()
        
        
    
        