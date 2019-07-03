// function isLandscape(width,height){
//     return (width>height);

    
  
// }


// console.log(isLandscape(1,2));


// function fizzBuzz(input){
//     if(typeof(input)!== 'number'){
//         return  ;
    
//     }
//     else{
//         if(input % 3 ===0 && input % 5 ===0 )
//         console.log( 'fizzBuzz');
//         else if(input % 3 ===0 && input % 5 !==0 )
//         console.log( 'fizz');
//         else if(input % 3 !==0 && input % 5 ===0 )
//         console.log( 'Buzz');
//         else 
//         console.log( 'input'+input);
//     }


// }

//  fizzBuzz(5);

// function chekSpeed (speed){
//      const speedLimit = 70;
//      const kmPerPoint = 5;
//     if(speed < speedLimit +kmPerPoint){
//     console.log('ok');
//     return;
//     }
    
//         const points =Math.floor((speed - speedLimit)/kmPerPoint);
  
//          if(points >= 12)
//          return 'Suspended';
//        else

//        return 'Points '+ points; 
     

// }

// chekSpeed(30) ;


// function showNumbers(limit){
// for(i=0 ; i<=limit;i++){
//    let massage =((i%2 ===0)?' EEVEN'  :' ODD' ) ;
//    console.log(i +massage);
// }

// }

//  showNumbers(10) ;

// let arg = ['1','2','3',undefined];
// function countTruthly(array){
//     let count= 0;
//     for(let param of array)
//     {
//      if(param)
//      count++;
//     }
//     return count;
// }

// console.log(countTruthly(arg));
// const movie = {
//     name :'dd',
//     rate : 3.5,
//     relaseYar:2018,
//     director:'b'
// }
// function  showProberties(ddd){
//     for (let d in ddd){
   
//       console.log(d,ddd[d]);
 
//     }
// }

// showProberties(movie) ;



// function sum(limit){
//   let sum = 0;
//  for(let i = 0 ;i <= limit ; i++){
//   if(i%3 === 0 )
//     sum += i;
//   if(i%5 === 0 )
//     sum += i;
   
//  }
//  return sum;
// }

// console.log(sum(10));


// function calculateGrade(marks){
 
//   let sum = 0;
//   for (let m of marks){
  
//     sum +=  m;
//   }
 
//   if (sum/marks.length <60)
//   return 'f';
//   if (sum/marks.length <70  )
//   return 'D';
//   if (sum/marks.length < 80 )
//   return 'c';
//   if (sum/marks.length < 79  )
//   return 'b';
//   return 'A';
 
// }

// const test = [80,80,50]

// console.log(calculateGrade(test));


// function showStars(rows){
// for(let row = 1 ; row<=rows;row++){
//   let pattern = '';
//   for (let i = 0 ; i<row;i++)
//    pattern +='*';
//   console.log(pattern);
// }

// }

// showStars(3);


//function showPrime(limit){
 // for (let number = 2;number<=limit ; number++){
   // if (showIsprime(number)) console.log(number);
//}
//function showIsprime (number){
  //let isPrime = true;
  //for (let factor = 2 ; factor<number ;factor++)
  //{
    //if(number%factor ===0){
  //  isPrime =false;
   // break;
  //}
//}
//if (isPrime) return true;
//}
//}
//showPrime(20);
 


// let Person = {
//   name : 'Ayman',
//   age : 33
// };

// console.log(Person);

// let SelectesColors = ['red', 'green' ];
// SelectesColors[2]= 5;
// console.log(SelectesColors.length);


// function great(Name1,Name2){

//   console.log('Hello ' + Name1+ ' '+ Name2);
// }

// great('Ayman','Abd El-Latief');


// function Square(number){
//   return number*number;
// }
// console.log(Square(2));
 


// let x = 10;

// x = x+ 1;

// console.log(x == '221');

// let a = 'red';
// let b = 'blue';


// let c = a;
//   a = b;
//   b = c;
// console.log(a);
// console.log(b);


// let hour = 10;

// if(hour >= 6  && hour < 12 )
//   console.log("Good morning")
// else if(hour >= 12 && hour < 18)
//   console.log("Good Afternoon")
// else
//   console.log("Good evening")


// let roule = 'Guest';

// switch (roule){

//   case 'Guest':
//     console.log(" Gust");
//     break;

//     case 'maderator':
//       console.log("maderator");
//       break;

//       default :
//       console.log("unkown user")

// }

// for (let i = 5; i >0 ; i--)
// {
//   if( i%2 !==0)console.log(i);
// }

// let i = 0 ;

// while(i<=5){

//   if(i % 2 !==0)console.log(i);
//   i++;
// }


// let x= 0;

// do{

// console.log(x);
//   x++;

// }while(x<5);

const person = {
  name : 'Ayman',
  age= 33
};

for (let key in person)
console.log(key);