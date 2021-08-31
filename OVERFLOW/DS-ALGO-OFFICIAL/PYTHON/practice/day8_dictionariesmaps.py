def getphonebook(n):
    phonebook = {}
    for x in range(n):
        line = input().strip().split(" ")
        name = line[0]
        number = line[1]
        phonebook[name] = number
    return phonebook


if __name__ == "__main__":
    numberofentries = int(input())
    phonebook = getphonebook(numberofentries)

    while True:
        try:
            name = input()
            if name in phonebook.keys():
                print(name, "=", phonebook[name], sep="")
            else:
                print("Not found")
        except EOFError as eof:
            break
