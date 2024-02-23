// Question #43
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  function make_great(magicians: string[]): string[] {
    const modifiedMagicians: string[] = [];
  
    for (let magician of magicians) {
      modifiedMagicians.push(`the Great ${magician}`);
    }
  
    return modifiedMagicians;
  }
  
  const magicians: string[] = ['Magician 1', 'Magician 2', 'Magician 3'];
  
  const modifiedMagicians = make_great([...magicians]);
  show_magicians(magicians);
  show_magicians(modifiedMagicians);