class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {}

        for(let item of nums){
            freq[item] = (freq[item] || 0) + 1
        }
       
       const sortedKeys = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);
       const repeatedK = sortedKeys.slice(0, k).map(Number);

       return repeatedK;
    }
}