function show_magicians(magicianNames: string[]) {
    magicianNames.forEach(name => {
        console.log(name);
    });
}

function make_great(magicians: string[]) {
    const newMagicians: string[] = [];

    for (let i = 0; i < magicians.length; i++) {
        newMagicians.push(magicians[i] + ', The Great.');
    }

    return newMagicians;
}

const magiciansOriginal: string[] = ['\nJacob', 'Daniel', 'Harvey'];
const magiciansWithGreat: string[] = make_great([...magiciansOriginal]);
show_magicians(magiciansOriginal); 
show_magicians(magiciansWithGreat);
