function missingNumber(nums: number[]): number {
    return ((nums.length * (nums.length + 1)) / 2) - (nums.reduce((sum, num) => sum + num, 0));
};
