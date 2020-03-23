from flask import Flask, escape, request
import re
from scipy import stats
import numpy as np
import json
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)

@app.route('/')
def hello():
    return 'Hello james'

@app.route('/user')
def profile():
    word = request.args.get('name', '')
    print('name-->', word)
    return 'user'

@app.route('/add/<int_list>')
def index(int_list):
    # Make sure it is a list that only contains integers.
    if not re.match(r'^\d+(?:,\d+)*,?$', int_list):
        return "Please input a list of integers, split with ','"
    result = sum(int(i) for i in int_list.split(','))
    return "{0}".format(result)

@app.route('/stats/regression', methods=['POST'])
def regression():
    # check to make sure I've been 'POST' ed to
    if request.method=='POST':
        print('post ed')
        js = request.get_json()
        slope, intercept, r_value, p_value, std_err = stats.linregress(js['X'], js['Y'])
        dt = { 
            "slope" : slope, 
            "intercept" : intercept, 
            "r_value" : r_value, 
            "p_value" : p_value, 
            "std_err" : std_err }
        
    return json.dumps(dt)

@app.route('/stats/regress-with-col', methods=['POST'])
def regression_with_col():
    # check to make sure I've been 'POST' ed to
    if request.method=='POST':
        print('post ed')
        js = request.get_json()
        X = js['cols'][0]
        Y = js['cols'][1]
        
        slope, intercept, r_value, p_value, std_err = stats.linregress(js[X], js[Y])
        dt = { 
            "slope" : slope, 
            "intercept" : intercept, 
            "r_value" : r_value, 
            "p_value" : p_value, 
            "std_err" : std_err }
        return json.dumps(dt)
        

@app.route('/stats/describe', methods=['POST'])
def descriptive():
    if request.method=='POST':
        print('post ed')
        js = request.get_json()
        print("js ==>", js, type(js))
        X = js['X']
        # Y = js['cols'][1]
        # print(js[1])

        mean = np.mean(X)
        median = np.median(X)
        std = np.std(X)
        dt = {
            "mean": mean,
            "median": median,
            "Stdev": std
        }
    return json.dumps(dt)