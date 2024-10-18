function reverseWords(s: string): string {
    let strArr = s.split(' ');
    let newArr = [];

    for(let i = 0; i < strArr.length; i++){
        let revWord = '';
        for(let j =  strArr[i].length -1; j >= 0; j--){
            revWord += strArr[i][j];
        }
        newArr.push(revWord);
    }

    let newS = newArr.join(' ')
    return newS
};
