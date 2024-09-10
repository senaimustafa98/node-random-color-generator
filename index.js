import colorString from 'color-string';
import chalk from 'chalk';
import {closest, distance, rgbToHex} from 'color-2-name';

const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

const hexColor = randomHexColorCode();
console.log(colorName(hexColor));
