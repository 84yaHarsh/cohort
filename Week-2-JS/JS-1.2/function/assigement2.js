function canVote(age){
    if(age>=18){
        return true;
    }
    return false;
}
let ans1 = canVote(18);
console.log(ans1);
