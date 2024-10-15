function fizzBuzz(n: number): string[] {
    let answer = [];

    for(let i = 1; i <= n; i++){
        let result = '';
        if (i % 3 === 0)result += 'Fizz';
        if (i % 5 === 0)result += 'Buzz';
        if(result==='')result += `${i}`;
        answer.push(result)
    } 

    return answer
};
