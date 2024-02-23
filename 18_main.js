var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Question #18
var placesToVisit = ['Tokyo', 'Pakistan', 'America', 'China', 'Japan'];
console.log("Orignal order:", placesToVisit);
console.log("Alphabetical order: ", __spreadArray([], placesToVisit, true).sort());
console.log("Orignal order after sorting:", placesToVisit);
console.log("Reverse aplhabetical order:", __spreadArray([], placesToVisit, true).sort().reverse());
console.log("Orignal order after reverse sorting:", placesToVisit);
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);
placesToVisit.reverse();
console.log("Back to original order:", placesToVisit);
placesToVisit.sort();
console.log("Sorted in alphabetical order: ", placesToVisit);
placesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("Sorted in reverse alphabetical order: ", placesToVisit);
