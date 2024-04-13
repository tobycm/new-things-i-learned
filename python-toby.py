myarray = [1, 2, 3, 4, 5, 6, 7, 8]

# :: is like start : stop : step
# stop-exclusive: won't include element at index stop

# start is 2 : stop is 0 : step is 0 
print(myarray[2:]) # [3, 4, 5, 6, 7, 8]

# start is 3 : stop is 5 : step is 0 
print(myarray[3:5]) # [4, 5]

# start is 0 : step is 2 : stop is 6
print(myarray[:6:2]) # [1, 3, 5]

# start is 0 : step is 2 : stop is 0
print(myarray[::2]) # [1, 3, 5. 7]

# start is 0 : step is 0 : stop is 6
print(myarray[:6]) # [1, 2, 3, 4, 5, 6]
