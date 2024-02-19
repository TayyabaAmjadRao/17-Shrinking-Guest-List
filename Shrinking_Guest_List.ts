import { Console } from "console";

let Guest_list :Array<string> = [
    "Kamran Tessori",
    "Zia Khan",
    "Daniyal Nagori",
];

let absent_Guest:  string = "Kamran Tessori"
console.log(`${absent_Guest} is not coming in party.`)

let new_Guest: string = "Jdc"
let indexOfabsent_Guest: number = Guest_list.indexOf(absent_Guest)
//console.log(indexOfabsent_Guest)

if (indexOfabsent_Guest !== -1)
{
    Guest_list[indexOfabsent_Guest] = new_Guest
}
//console.log(Guest_list[2])

console.log("new_Invitation")
Guest_list.forEach(
    (Guest:string) =>{
        console.log(`Dear Mr ,${Guest},you are invited in party.`)
    
    }
)
{
for(let Guest of Guest_list)
    console.log(`Hello, ${Guest}, we founf a bigger table for party.`);
    
}

let newGuestInStart: string = "Sir khan"
Guest_list.unshift(newGuestInStart)
//console.log(Guest_list)

let newGuestInMid: string = "Sir Maliq"
let midIndex: number = Math.floor(Guest_list.length/2)
Guest_list.splice(midIndex, 0, newGuestInMid)
//Console.log(Guest_list)

let newGuestAtEnd:string = "Sir Jutt"
Guest_list.push(newGuestAtEnd) 
//console.log(Guest_list)

console.log("New set of invitation messages:");

for(let Guest of Guest_list)
{
    console.log(`Dear Mr., ${Guest} you are invited in party.`)
    
}
console.log(Guest_list)

console.log(`I can invite only two people for dinner`)

while(Guest_list.length > 2){
    let removeGuest = Guest_list.pop()
    console.log(`Sorry , ${removeGuest}, i can not invite you in dinner`);
}

for(let Guest of Guest_list){
    console.log(`Hello, ${Guest}, you are still invited in party.`)
}

Guest_list.pop()
Guest_list.pop()

console.log(`Guest list after party`, Guest_list)