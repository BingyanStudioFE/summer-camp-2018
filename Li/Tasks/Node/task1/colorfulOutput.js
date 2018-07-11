const colors = require('colors');
console.log('Geek is the new sexy!'.rainbow);
console.log('First some yellow text'.yellow);
console.log('Underline that text'.yellow.underline);
console.log('Make it bold and red'.red.bold);
console.log(('Double Raindows All Day Long').rainbow);
console.log('Drop the bass'.trap);
console.log('DROP THE RAINBOW BASS'.trap.rainbow);
console.log('Chains are also cool.'.bold.italic.underline.red);
console.log('So '.green + 'are'.underline + ' ' + 'inverse'.inverse
  + ' styles! '.yellow.bold);
console.log('Zebras are so fun!'.zebra);
console.log('This is ' + 'not'.strikethrough + ' fun.');
console.log('Background color attack!'.black.bgWhite);
console.log('Use random styles on everything!'.random);
console.log('America, Heck Yeah!'.america);
console.log('Setting themes is useful');
console.log('Generic logging theme as JSON'.green.bold.underline);
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red',
});
console.log('this is an error'.error);
console.log('this is a warning'.warn);
console.log('this is an input'.input);
console.log('Generic logging theme as file'.green.bold.underline);
console.log('this is an error'.error);
console.log('this is a warning'.warn);
console.log('this is an input'.input);