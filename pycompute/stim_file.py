
import requests
import sys
import json

if len(sys.argv) < 3:
    print("usage stim_file.py func data_file\n\twhere func is either: regress or describe")
    sys.exit()

func = sys.argv[1]
dataFile = sys.argv[2]
print(func, dataFile)

with open(dataFile) as rdr:
    js = json.load(rdr)

print(js['cols'], js['cols'][0], js['cols'][1])


if func == "regress":
    r = requests.post('https://pycompute.herokuapp.com/stats/regress-col', json=js)
    print(r.json())
elif func == "describe":
    r = requests.post('https://pycompute.herokuapp.com/stats/describe', json=js)
    print(r.json())

 
