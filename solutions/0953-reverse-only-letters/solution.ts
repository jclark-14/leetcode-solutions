function reverseOnlyLetters(s: string): string {
    let sArr = s.split(''), left = 0, right = sArr.length-1;
    
    while(left < right){
        if(!/^[A-Za-z]$/.test(sArr[right])){
         right--;
        }else if (!/^[A-Za-z]$/.test(sArr[left])){
         left++;
        }else{
         [sArr[right], sArr[left]] = [sArr[left], sArr[right]];
         left++;
         right--
        }
   }
    return sArr.join('')
};
