/* Create a function that take input a arr and return the user whose age greater then 18*/

function canVote(arr){
    let result =[];
    for(let i=0; i<arr.length; i++){
        if(arr[i].gender=="male" && arr[i].age>=18){
            result.push(arr[i]);
        }
    }
    return result;
}
let user = [{
            firstName:"harsh",
            age:21,
            gender:"male"
},
       {     firstName:"mantosh",
            age: 23,
            gender:"male"

       },
       {  firstName:"chotu",
        age:12,
        gender:"male"

       },
{
        firstName:"naman",
        age:17,
        gender:"male"
}

];
let brr = (canVote(user));

    console.log(brr);
