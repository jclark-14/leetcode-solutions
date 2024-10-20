function reversePrefix(word: string, ch: string): string {
    let chIndex = word.indexOf(ch);
    if(chIndex === -1) return word;
    
    let reverseString = word.slice(0, chIndex + 1).split('').reverse().join('');
    return reverseString + word.slice(chIndex + 1)
};
