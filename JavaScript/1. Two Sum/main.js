/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Create a map so we can store the index of every element easily.
    const map = {};

    // Loop over the array
    for(let i = 0; i < nums.length; i++){
        // Create a complement number.
        const complement = target - nums[i];

        // Check if the map has the property of the complement number.
        if(map.hasOwnProperty(complement)) return [map[complement], i];
        map[nums[i]] = i;
    }

    return []; // There are no answers
};
