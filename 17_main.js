// Question #17
var guest_list = ['Tayyab', 'Sibtain', 'Javed'];
var not_person = 'Tayyab';
var new_guest = 'Abdullha';
guest_list[2] = new_guest;
guest_list.unshift('Rizwan', 'Imran', 'Kamran');
console.log("\nUnfortunately we can not arrange big table , Only two poeple allow.");
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Sorry Sir/Madam ".concat(remove_guest, " you are not invited for dinner."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respect Sir/Madam " + guest_list[i] + ',\nYes you are still on tomorrow dinner\nThank You\n');
}
guest_list.splice(0, 2);
console.log(guest_list);
