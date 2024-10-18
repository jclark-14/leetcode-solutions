function getAverages(nums: number[], k: number): number[] {
    let avgs = [-1];
    let prefix = [nums[0]];
    let curr = 0;
    const window = k * 2 + 1; //inclusive
    let start = k;
    let right = start + k;
    let left = right - window;
    let end = nums.length - k;
    
    if(k === 0){return nums};
    
    for(let i = 1; i < nums.length; i++){
        prefix.push(prefix[i - 1] + nums[i]);
        avgs.push(-1);
    }
    
    for(let i = 0; i < nums.length; i++){
        if(i >= start && i < end){
          curr = (i === k) ? prefix[right] : prefix[right] - prefix[left];
          avgs[i] = (Math.floor(curr/window));
          right++;
          left++;
        }
    }
    return avgs
};
