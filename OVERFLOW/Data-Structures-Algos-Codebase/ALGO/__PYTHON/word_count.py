file = open("sample.txt", "r")

d = dict()
for lines in file:
    lines = lines.strip()
    lines = lines.lower()
    words = lines.split(" ")
    for word in words:
        if word in d:
            d[word] = d[word] + 1
        else:
            d[word] = 1

find = str(input("enter the word to count: "))
find = find.lower()
if find in list(d.keys()):
    print(f"{find} : " + str(d.get(find)))
else:
    print("word not present!! ")
