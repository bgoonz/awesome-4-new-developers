def kidsWithCandies(candies, extraCandies):
    temp_array = []
    max_element = max(candies)
    for i in candies:
        temp = i + extraCandies
        if max_element <= temp:
            temp_array.append(True)
        else:
            temp_array.append(False)

    return temp_array


candies = [2, 3, 5, 1, 3]
extraCandies = 3

print(kidsWithCandies(candies, extraCandies))
