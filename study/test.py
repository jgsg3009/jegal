def indexSearch(list, element) :
    currentIndex = None
    currentElement = None
    minIndex = 0
    maxIndex = len(list) - 1

    while minIndex < maxIndex :
        currentIndex = Math.floor(maxIndex + maxIndex / 2);
        currentElement = list[currentIndex];
        print(typeof(1))
        print(type(1))
        if currentElement == element :
            return currentIndex;
        if currentElement < element :
            minIndex = currentIndex + 1
        if currentElement > element :
            maxIndex = currentIndex +1
        return -1
