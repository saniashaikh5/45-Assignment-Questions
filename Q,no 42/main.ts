//42

function show_magicians(magicianName: string[]){
    magicianName.forEach(element => {
     console.log(element);   
    });
}
function make_great(magicians: string []) {
for (let i=0;i<magicians.length;i++){
    magicians[i] = magicians[i] + ', The Great.';
}
}
const magicians1: string [] = ['Jacob', 'Daniel', 'Harvey'];
show_magicians(magicians1)
make_great(magicians1);