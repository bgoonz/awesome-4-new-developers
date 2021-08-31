# Time complexity O(M*N)
# Space Complexity O(M+N)
# Method 1
class Solution:
    # Function to return the count of number of elements in union of two arrays.
    def doUnion(self, a, n, b, m):
        c = a + b
        c.sort()

        d = []
        for i in c:
            if i not in d:
                d.append(i)
            else:
                pass

        return len(d)


if __name__ == "__main__":
    t = int(input())
    for _ in range(t):
        n, m = [int(x) for x in input().strip().split()]

        a = [int(x) for x in input().strip().split()]
        b = [int(x) for x in input().strip().split()]
        ob = Solution()

        print(ob.doUnion(a, n, b, m))


# Time complexity  O(M)+O(N)+O(Mlog(M)+Nlog(N))
# Space Complexity O(n+m)
# Method 2


class Solution:
    # Function to return the count of number of elements in union of two arrays.
    def doUnion(self, a, n, b, m):
        c = a + b
        c.sort()  # O(Mlog(M))+O(Nlog(N))
        sample_dict = {}

        for i in c:  # O(M)+O(N)
            if i in sample_dict.keys():
                sample_dict[i] += 1
            else:
                sample_dict[i] = 1

        return len([int(x) for x in sample_dict.values()])


if __name__ == "__main__":
    t = int(input())
    for _ in range(t):
        n, m = [int(x) for x in input().strip().split()]

        a = [int(x) for x in input().strip().split()]
        b = [int(x) for x in input().strip().split()]
        ob = Solution()

        print(ob.doUnion(a, n, b, m))
