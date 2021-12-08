// 1

let i = 0,
j=35;

 while (i<50) {
i++;
console.log(i);
} 

for (j = 35; j >= 8; j--){
    console.log(j);
}

// 2

/* let i = 90;

while (i>11){
    i--;
    document.write(i + `<br>`)
} */

// 3

/* let a = 100,
sum = 0;

for (let i = 0; i <=100; i++) {
    sum += i;
    console.log(sum);
} */

// 4

/* let a = 5,
sum = 0;

for (let i = 1; i <= a; i++) {
    sum = 0;
    for (let j = 1; j <= i; j++) {
        sum += j;
    }
    console.log(sum)
} */

// 5

/* let i=6;

while (i<=56) {
    i++;
    if (i % 2 == 0) console.log(i);
} */


/* for (let i = 8; i <= 56; i++) {
    if (i % 2 == 0) console.log(i);
} */

// 6

/* for (let i = 2; i <= 10; i++){
    document.write(`<br>`)
    for(let j = 1; j <= 9; j++){
        document.write(i + "*" + j + "=" + (i*j) + `<br>`)
    }
} */

// 7
/* let num = 0;
for (let n = 1000; n > 50;) {
    n=n/2;
    num++;
    if(n<50) break;
    document.write(n + `<br>`)
}
document.write(num) */

// 8

/* let count = 0,
sum = 0,
inp;
while(true){
    inp=prompt('введите число:');
    if(inp=='0' || inp=='') break;
    if(!Number.parseInt(inp)){
        alert('ошибка ввода');
    } else {
        count++;
        sum+=Number.parseInt(inp);
    }
}
alert('общая сумма = ' + sum);
alert('среднее арифметическое = ' + sum / count); */

// 9

/* let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57',
num = '',
min,
max;
for (let i = 0; i < str.length; i++) {
    num += str[i];
    if (+str[i] && !+str[i+1]) {
        if (typeof min !== 'number' || num < +min) min = +num; 
        if (typeof max !== 'number' || num > +max) max = +num; num = ''; 
    }
}

console.log('Min:', min, 'Max:', max)  */

// 10

/* let n=123;
let sum=0,coun=0;
let str="";
while(n!=0){
str+=(n%10).toString();
coun++;
sum+=n%10;
n-=n%10;
n/=10;
}
for (let i = str.length-1; i >=0; i--) {
console.log(str[i]);
}
console.log("Кол-во цифр: "+coun);
console.log("Сумма цифр: "+sum);
console.log(str); */