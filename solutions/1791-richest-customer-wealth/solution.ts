function maximumWealth(accounts: number[][]): number {
    let maxWealth = 0;

    for(let i = 0; i < accounts.length; i++){
       const currentWealth = accounts[i].reduce((num, currentValue) => 
            num + currentValue, 0
        );
     if (currentWealth > maxWealth) maxWealth = currentWealth
    }
    return maxWealth
};
