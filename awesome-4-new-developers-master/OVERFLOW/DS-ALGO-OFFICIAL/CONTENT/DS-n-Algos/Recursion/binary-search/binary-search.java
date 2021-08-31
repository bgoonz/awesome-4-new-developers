static<T extends Comparable<T>> int binarySearch(T[] a, T val)
{
    return binarySearch(a, val, 0, a.length - 1);
}


private static<T extends Comparable<T>> int binarySearch(T[] a, T val, int start, int end)
{
    if(end < start)
    {
        return -1;
    }
    int mid = (start + end) / 2;
    T midVal = a[mid];
    if(midVal.compareTo(val) == 0)
    {
        return mid;
    }
    else if(midVal.compareTo(val) == -1)
    {
        start = mid + 1;
    }
    else
    {
        end = mid - 1;
    }
    return binarySearch(a, val, start, end);
}
