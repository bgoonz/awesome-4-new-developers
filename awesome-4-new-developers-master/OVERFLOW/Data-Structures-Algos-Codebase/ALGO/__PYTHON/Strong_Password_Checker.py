class Solution:
    def strongPasswordChecker(self, s: str) -> int:
        len_passwd = len(s)
        lowercase, uppercase, digit = False, False, False
        repeating = []  # list of interval of consecutive char.
        for idx, char in enumerate(s):
            if not lowercase and 97 <= ord(char) <= 122:
                lowercase = True
            if not uppercase and 65 <= ord(char) <= 90:
                uppercase = True
            if not digit and char in {"1", "2", "3", "4", "5", "6", "7", "8", "9", "0"}:
                digit = True
            if (
                repeating
                and repeating[-1][1] + 1 == idx
                and s[repeating[-1][1]] == s[idx]
            ):
                repeating[-1][1] = idx  # extend the lastest interval
            if (
                0 < idx < len_passwd - 1
                and s[idx - 1] == s[idx] == s[idx + 1]
                and (not repeating or idx > repeating[-1][1])
            ):
                repeating.append([idx - 1, idx + 1])  # new an interval

        def helper(lenpass, case, repeat):
            if 6 <= lenpass <= 20 and case == 3 and repeat == ():
                return 0
            ans = inf

            if lenpass < 6:
                # Insertion
                if repeat:
                    add_repeat = [repeat[0] - 2] if repeat[0] > 4 else []
                    ans = min(
                        ans,
                        helper(
                            lenpass + 1,
                            min(case + 1, 3),
                            tuple(list(repeat[1:]) + add_repeat),
                        ),
                    )
                else:
                    ans = helper(lenpass + 1, min(case + 1, 3), ())
            elif lenpass > 20:
                # Deletion
                if repeat:
                    for i in range(len(repeat)):
                        repeat_del = list(repeat)
                        if repeat_del[i] > 3:
                            repeat_del[i] -= 1
                        else:
                            del repeat_del[i]
                        ans = min(ans, helper(lenpass - 1, case, tuple(repeat_del)))
                else:
                    ans = helper(lenpass - 1, case, ())
            else:
                # Replace
                if repeat:
                    add_repeat = [repeat[0] - 3] if repeat[0] > 5 else []
                    ans = min(
                        ans,
                        helper(
                            lenpass,
                            min(case + 1, 3),
                            tuple(list(repeat[1:]) + add_repeat),
                        ),
                    )
                else:
                    ans = helper(lenpass, min(case + 1, 3), ())
            return 1 + ans

        return helper(
            len_passwd,
            sum([lowercase, uppercase, digit]),
            tuple([term[1] - term[0] + 1 for term in repeating]),
        )


Sol = Solution()
print(Sol.strongPasswordChecker("a"))
