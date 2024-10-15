function canConstruct(ransomNote: string, magazine: string): boolean {
  let magazineCharCount: { [key:string]: number } = {};

  for(let char of magazine){
    magazineCharCount[char] = (magazineCharCount[char] || 0) + 1;
  }
  
  for (let char of ransomNote){
    if(!magazineCharCount[char]){
        return false
    }
    magazineCharCount[char]--;
  }
 return true
};
