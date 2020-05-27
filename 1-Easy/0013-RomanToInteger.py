class Solution:
    def romanToInt(self, s: str) -> int:
        dictionary = {
            "I":1,
            "V":5,
            "X":10,
            "L":50,
            "C":100,
            "D":500,
            "M":1000,
        }
        
        sum = 0

        myIter = iter(range(0, len(s)))
        for i in myIter:
            if i+1 < len(s):
                if dictionary[s[i]] < dictionary[s[i+1]]:
                    sum += (dictionary[s[i+1]]-dictionary[s[i]])
                    next(myIter, None)
                elif dictionary[s[i]] >= dictionary[s[i+1]]:
                    sum += dictionary[s[i]]
            elif i+1 == len(s):
                sum += dictionary[s[i]]

        return sum

solution = Solution()
print(solution.romanToInt("MCM"))