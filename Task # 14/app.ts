/*Task # 14 : Guest List: 
If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that 
includes at least three people you’d like to invite to dinner. Then use your list to print a message to 
each person, inviting them to dinner.*/

let Guest_List : string[] = [ "Farooq", "Arqum", "Ahmed" ];

for ( let i=0; i < Guest_List.length; i++){
    console.log(`Dear ${Guest_List[i]} : \n you are invited to dinner! \n`);
}
