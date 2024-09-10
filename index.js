import { argv } from 'node:process';
import randomColor from 'randomcolor';
import chalk from 'chalk';

// the pattern that needs to be colored
const createPattern = (borderColor, hexOfColor) => `
${borderColor('#'.repeat(34))}
${borderColor('#'.repeat(34))}
${borderColor('#'.repeat(34))}
${borderColor('#'.repeat(3)) + ' '.repeat(28) + borderColor('#'.repeat(3))}
${borderColor('#'.repeat(3)) + ' '.repeat(7) + chalk.bgHex(hexOfColor).white(` ${hexOfColor} `) + ' '.repeat(12) + borderColor('#'.repeat(3))}
${borderColor('#'.repeat(3)) + ' '.repeat(28) + borderColor('#'.repeat(3))}
${borderColor('#'.repeat(34))}
${borderColor('#'.repeat(34))}
${borderColor('#'.repeat(34))}
`;

// Checking for input
if (argv.length < 3) {
  // if no input generating random color
  const randColor = randomColor();
  console.log('No input provided. Generating a random color');
  const colorChalk = chalk.bgHex(randColor);
  // Coloring the pattern with the random color and HEX
  console.log(createPattern(colorChalk, randColor));
}
// accepting user input, starting index 2 for hue and 3 for luminosity
else {
  const hue = argv[2];
  const luminosity = argv[3] || 'light';

  // Generate a HEX color based on user input
  const hexOfColor = randomColor({ luminosity, hue });
  const borderColor = chalk.bgHex(hexOfColor);
  // color the pattern with the generated color and HEX value
  console.log(createPattern(borderColor, hexOfColor));
}
