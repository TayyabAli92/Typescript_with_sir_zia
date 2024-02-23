// Question #18
let placesToVisit: string[] = ['Tokyo', 'Pakistan', 'America', 'China', 'Japan'];
console.log("Orignal order:", placesToVisit);
console.log("Alphabetical order: ", [...placesToVisit].sort());
console.log("Orignal order after sorting:", placesToVisit);
console.log("Reverse aplhabetical order:", [...placesToVisit].sort().reverse());
console.log("Orignal order after reverse sorting:", placesToVisit);
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
placesToVisit.sort();
console.log("Sorted in alphabetical order: ", placesToVisit);
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order: ", placesToVisit);