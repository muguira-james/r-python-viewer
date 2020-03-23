import requests

js = {
    "X" : [ 1,2,3,4,5,6,7,8,9,0,23,43,6,5,76,12,31,22,21,18,17 ],
    "Y" : [ 1,2,3,4,5,6,7,8,9,10,11,12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
}

r = requests.post('http://localhost:5000/regression', json=js)
print(r.json())

