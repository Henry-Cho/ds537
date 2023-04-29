import math

array = [65,13,29,19,4,8,15,16,23,42,21,66,15,55,99]
print("Array Sum is " + str(sum(array)))
mean = 0
median = 0
difference = 0
studentName = "Henry Cho"

def calcValues(arr):
    global mean, median, difference
#/*******************************************/
#/*********** Place Your Code Here **********/
    arr_len = len(arr)

    mean = sum(arr) / arr_len
    
    arr_median = sorted(arr)

    if len(arr) % 2 == 0:
        median1 = arr_median[arr_len // 2]
        median2 = arr_median[arr_len // 2 - 1]
        median = (median1 + median2) / 2
    else:
        median = arr_median[arr_len // 2]

    difference = abs(mean - median)

    return mean, median, difference
    

#/*******************************************/
#/*******************************************/

calcValues(array)

print(studentName)
print("Mean is " + str(mean))
print("Median is " + str(median))
print("Difference is " + str(difference))

