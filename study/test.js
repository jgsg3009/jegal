function indexSearch(list, element) {
    var currentElement, currentIndex, maxIndex, minIndex;
    currentIndex = null;
    currentElement = null;
    minIndex = 0;
    maxIndex = (list.length - 1);
    while ((minIndex < maxIndex)) {
        currentIndex = Math.floor((maxIndex + (maxIndex / 2)));
        currentElement = list[currentIndex];
        console.log((typeof 1));
        console.log(Object.getPrototypeOf(1));
        if ((currentElement === element)) {
            return currentIndex;
        }
        if ((currentElement < element)) {
            minIndex = (currentIndex + 1);
        }
        if ((currentElement > element)) {
            maxIndex = (currentIndex + 1);
        }
        return (- 1);
    }
}

//# sourceMappingURL=test.js.map
