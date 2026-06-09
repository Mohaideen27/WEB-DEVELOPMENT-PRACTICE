# set

# 1 add
s={2, 3, 5, 6, 7, 10, 23, 27}
print(s)
print(s.add(11))
print(s)

# 2 pop
s={2, 3, 5, 6, 7, 10, 23, 27}
print(s)
print(s.pop())
print(s)

# 3 remove
s={2, 3, 5, 6, 7, 10, 23, 27}
print(s)
print(s.remove(5))
print(s)

# 4 copy
s={2, 3, 5, 6, 7, 10, 23, 27}
print(s)
print(s.copy())
print(s)

# 5 clear
s={2, 3, 5, 6, 7, 10, 23, 27}
print(s)
print(s.clear())
print(s)

# 6 discard
# while the argument element is missing discard ignores rathar than rising an error
s={2, 3, 5, 6, 7, 10, 23, 27}
print(s)
print(s.discard(7))
print(s)

# 7 union
s1={2, 3, 5, 6, 7, 10, 23, 27}
s2={1, 3, 4, 6, 7, 8, 11, 23}
print(s1,s2)
print(s1.union(s2))
print(s1,s2)

# 8 update
s1={2, 3, 5, 6, 7, 10, 23, 27}
s2={1, 3, 4, 6, 7, 8, 11, 23}
print(s1,s2)
print(s1.update(s2))
print(s1,s2)

# 9 difference
s1={2, 3, 5, 6, 7, 10, 23, 27}
s2={1, 3, 4, 6, 7, 8, 11, 23}
print(s1,s2)
print(s1.difference(s2))
print(s1,s2)

# 10 difference update
s1={2, 3, 5, 6, 7, 10, 23, 27}
s2={1, 3, 4, 6, 7, 8, 11, 23}
print(s1,s2)
print(s1.difference_update(s2))
print(s1,s2)

# 11 symmetric difference
s1={2, 3, 5, 6, 7, 10, 23, 27}
s2={1, 3, 4, 6, 7, 8, 11, 23}
print(s1,s2)
print(s1.symmetric_difference(s2))
print(s1,s2)

# 12 symmetric difference update
s1={2, 3, 5, 6, 7, 10, 23, 27}
s2={1, 3, 4, 6, 7, 8, 11, 23}
print(s1,s2)
print(s1.symmetric_difference_update(s2))
print(s1,s2)

# 13 intersection 
s1={2, 3, 5, 6, 7, 10, 23, 27}
s2={1, 3, 4, 6, 7, 8, 11, 23}
print(s1,s2)
print(s1.intersection(s2))
print(s1,s2)

# 14 intersection update
s1={2, 3, 5, 6, 7, 10, 23, 27}
s2={1, 3, 4, 6, 7, 8, 11, 23}
print(s1,s2)
print(s1.intersection_update(s2))
print(s1,s2)






