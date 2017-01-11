import csv
f = open('data.csv', "r")
reader = csv.reader(f)
for row in reader:
    print row