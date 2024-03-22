//42
function show_magicians(magicianName) {
    magicianName.forEach(function (element) {
        console.log(element);
    });
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ', The Great.';
    }
}
var magicians1 = ['Jacob', 'Daniel', 'Harvey'];
show_magicians(magicians1);
make_great(magicians1);
