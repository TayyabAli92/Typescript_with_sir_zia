// Question #15
var guest_list = ['Tayyab', 'Sibtain', 'Javed'];
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respect Sir/Madam " + guest_list[i] + ',\nwe invited you on dinner tomorrow.\n\nThank You');
}
var not_person = 'Tayyab';
var new_guest = 'Abdullha';
guest_list[2] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respect Sir/Madam " + guest_list[i] + ',\nwe invited you on dinner tomorrow.\n\nThank You');
}
console.log("The person who is not a guest, ".concat(not_person, ", is not in the list."));
