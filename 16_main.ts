// Question #16
let guest_list: string[] = ['Tayyab', 'Sibtain', 'Javed'];
let not_person: string = 'Tayyab';
let new_guest: string = 'Abdullha';
guest_list[2] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log(`Respect Sir/Madam ` + guest_list[i] + ',\nwe invited you on dinner tomorrow.\nThank You\n');
}
guest_list.unshift('Rizwan', 'Imran', 'Kamran');
for(let i=0; i<guest_list.length; i++) { 
    console.log(`Respect Sir/Madam ` + guest_list[i] + ',\nwe invited you on dinner tomorrow. we found big table so we decide to invite 3 more guest\nThank You\n');
}