// Question #37
function make_shirt(size: string = 'large', message: string = 'I love TypeScript'): void {
    console.log(`The size of the shirt is ${size} and the message printed on it is "${message}".`)
  }
  
  make_shirt()
  make_shirt('medium')
  make_shirt('small', 'Hello, World!') 