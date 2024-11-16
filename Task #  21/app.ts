/*Task # 21 : They think of something you could store in a TypeScript Object. Write a program that creates 
Objects containing these items.*/

interface type {
    Name:string, Age:number, Profession:string
}
let OBJ:type = {Name:'Farooq', Age:99 , Profession:'Teacher'};

console.log('\n Object Containing Information About ME : \n');
console.log(`My Name is: ${OBJ.Name}`);
console.log(`I am ${OBJ.Age} Year Old`);
console.log(`I am a ${OBJ.Profession}`);
