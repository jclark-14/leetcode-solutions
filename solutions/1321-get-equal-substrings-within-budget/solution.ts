function equalSubstring(s: string, t: string, maxCost: number): number {
    let ans = 0, left = 0, currCost = 0;

    for(let right = 0; right < s.length; right++){
        currCost += Math.abs(t[right].charCodeAt(0) - s[right].charCodeAt(0)); 

        while (currCost > maxCost){
            currCost -= Math.abs(t[left].charCodeAt(0) - s[left].charCodeAt(0));
            left++;
        }

        ans = Math.max(ans, right - left + 1)
    }
    
    return ans
};
