/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let left = 0;
    let right = s.length - 1;
    while(left < right){
      let rightChar = s[right];
      let leftChar = s[left];
        s[right] = leftChar;
        s[left] = rightChar;
        left++;
        right--;
    }
    
};
