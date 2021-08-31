def split_string(string:str, break_on:str = " ")->list:
    # A list is similar to an array but apparently not the same
    
    split_words = []

    last_index = 0
    for index, char in enumerate(string):
        if char == break_on:
            split_words.append(string[last_index:index])
            last_index = index + 1
        elif index + 1 == len(string):
            split_words.append(string[last_index: index + 1])
    return split_words


