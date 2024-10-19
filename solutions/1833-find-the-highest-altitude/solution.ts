function largestAltitude(gain: number[]): number {
    let sum = 0, ans = 0;

    for(let i = 0; i < gain.length; i++){
        sum += gain[i];
        ans = Math.max(ans, sum)
    }

    return ans
};
