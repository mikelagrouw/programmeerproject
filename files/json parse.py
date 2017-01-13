import csv
import json

csvfile = open("data.csv", "r")
jsonfile = open("json", "w")

fieldnames = ("land", "population", "christians","muslim", "unaf", "hindu", "buddhist", "folk", "other", "jewish")
reader = csv.DictReader( csvfile, fieldnames)

for row in reader:
    json.dump(row, jsonfile)
    jsonfile.write("\n")