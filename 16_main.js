// Question #16
var guest_list = ['Tayyab', 'Sibtain', 'Javed'];
var not_person = 'Tayyab';
var new_guest = 'Abdullha';
guest_list[2] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respect Sir/Madam " + guest_list[i] + ',\nwe invited you on dinner tomorrow.\nThank You\n');
}
guest_list.unshift('Rizwan', 'Imran', 'Kamran');
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respect Sir/Madam " + guest_list[i] + ',\nwe invited you on dinner tomorrow. we found big table so we decide to invite 3 more guest\nThank You\n');
}
