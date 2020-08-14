var fourSum = function(nums, target) {
    // sort
    nums = nums.sort((a,b) => a - b)
    
    var answer = []
    if (nums.length < 4) return answer
    
    for (var start = 0; start <= nums.length - 4; start++) {
        if (start > 0 && nums[start] == nums[start - 1]) continue
        var _target = target - nums[start]
				
        for (var i = start + 1; i <= nums.length - 3; i++) {
            if (i > start + 1 && nums[i] == nums[i - 1]) continue
            
            for (var lo = i + 1, hi = nums.length - 1; lo < hi; /* blank */) {
                var sum = nums[i] + nums[lo] + nums[hi]
                
                if (sum === _target) {
                    answer.push([nums[start], nums[i], nums[lo], nums[hi]])
                    while (lo < hi && nums[lo] == nums[lo + 1]) lo++
                    while (lo < hi && nums[hi] == nums[hi - 1]) hi--
                    lo++
                    hi--
                }
                else if (sum > _target) {
                    hi--
                }
                else {
                    lo++
                }
            }
        }
    }
    
    return answer
};