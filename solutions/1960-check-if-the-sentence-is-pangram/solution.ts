function checkIfPangram(sentence: string): boolean {
    if (sentence.length < 26) return false;
    
    let alphabet = new Set();
    
    for(const char of sentence){
        alphabet.add(char)
    }
    
    return alphabet.size === 26;
};
