
from scipy import stats
import numpy as numpy

y = [ 1,2,3,4,5,6,7,8,9,10,11,12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
x = [ 1,2,3,4,5,6,7,8,9,0,23,43,6,5,76,12,31,22,21,18,17 ]

jdata = {
    "X" : [ 1,2,3,4,5,6,7,8,9,0,23,43,6,5,76,12,31,22,21,18,17 ],
    "Y" : [ 1,2,3,4,5,6,7,8,9,10,11,12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
}

def regression_ceof(X,Y, xCol=1, yCol=0):
    slope, intercept, r_value, p_value, std_err = stats.linregress(X, Y)
    print(slope, intercept)



regression_ceof(jdata["X"], jdata["Y"])