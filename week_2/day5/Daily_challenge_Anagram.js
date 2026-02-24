function isAnagram(str1,str2){
    if(!str1 || !str2)
        return false;
    str1=str1.toLowerCase().split(" ").join('');
    str2=str2.toLowerCase().split(" ").join('');
    if(str1.split("").sort().join('') === str2.split("").sort().join(''))
    {
        console.log(`"${str1}" is an anagram of "${str2}"`)
        return(true);
    }
}
console.log(isAnagram("test","st te"))
