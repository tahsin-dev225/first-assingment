/* function calculateMoney(ticket){
    let ticketSum =ticket * 120;
    let cost = 900;
    let res = ticketSum -cost;
    if(res < 0){
        return 'earn more'
    }else if(ticket >= 0){
        return res;
    }else{
        return 'invalide'
    }
    
} */
//console.log(calculateMoney(73))

/* function checkName(namei){
    let lastLetter = namei[namei.length - 1];
    if(lastLetter === 'a' || lastLetter === 'e' || lastLetter === 'i' || lastLetter === 'o' || lastLetter === 'u'){
        return 'Good name'
    }else{
        return 'Bad name'
    }
}
console.log(checkName('tasin')) 

function deleteInvalids(arr){
    function isNumber(value) {
        return typeof value === "number" && !Number.isNaN(value);
      }
    let newArr =[];
    for(let i of arr){
        if(isNumber(i) === true){
            newArr.push(i)
        }
    }
    return newArr;
}
let arraa =[null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala"} ]
console.log(deleteInvalids(arraa))

function password(obj){
    let birth = obj.birthYear;
    if(birth.index < 8){
        return 'invalide'
    }else{
        return obj.siteName+'#'+obj.name + obj.birthYear;
    }
    
}

let obje ={
     name: "kolimuddin",
     birthYear: 1990,
     siteName: "google"
}
console.log(password(obje))
*/

function monthlySavings(arr, livingCost){
    let sum =0;
    
    for(let i of arr){
        if(i >= 3000){
            let res = i /100;
            let dis = res *20;
            let main = i -dis;
            sum =sum +main; 
        }else{
            sum =sum +i;
        }
        
    }
    let last =sum -livingCost;
    if(last < 0){
        return 'Earn more'
    }else{
        return last;
    } 
}
console.log(monthlySavings([ 1000 , 1800 , 2000 ], 5000 ))
//offer discouunt
/* let i = 3000;
let res = i /100;
let dis = res *20;
let main = i -dis;
console.log(main) */