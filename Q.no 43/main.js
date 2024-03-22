var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function show_magicians(magicianNames) {
    magicianNames.forEach(function (name) {
        console.log(name);
    });
}
function make_great(magicians) {
    var newMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        newMagicians.push(magicians[i] + ', The Great.');
    }
    return newMagicians;
}
var magiciansOriginal = ['\nJacob', 'Daniel', 'Harvey'];
var magiciansWithGreat = make_great(__spreadArray([], magiciansOriginal, true));
show_magicians(magiciansOriginal);
show_magicians(magiciansWithGreat);
