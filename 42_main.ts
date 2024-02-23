// Question #42
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = `the Great ${magicians[i]}`;
    }
  }
  
  const magicians: string[] = ['Magician 1', 'Magician 2', 'Magician 3'];
  
  make_great(magicians);
  show_magicians(magicians);