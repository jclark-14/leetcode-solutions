function maxVowels(s: string, k: number): number {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u']), curr = 0, ans = 0;

    for(let right = 0; right < s.length; right++){

        if(vowels.has(s[right])) curr++;

        if(right >= k && vowels.has(s[right - k])) curr--;

        ans = Math.max(ans,  curr)
    }
    
    return ans
};
