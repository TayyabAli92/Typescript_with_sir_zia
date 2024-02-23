// Question #15
let guest_list: string[] = ['Tayyab', 'Sibtain', 'Javed'];
for(let i=0; i<guest_list.length; i++){
    console.log(`Respect Sir/Madam ` + guest_list[i] + ',\nwe invited you on dinner tomorrow.\n\nThank You');
}
let not_person: string = 'Tayyab';
let new_guest: string = 'Abdullha';
guest_list[2] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log(`Respect Sir/Madam ` + guest_list[i] + ',\nwe invited you on dinner tomorrow.\n\nThank You');
}
console.log(`The person who is not a guest, ${not_person}, is not in the list.`);