import { CatAppearance } from './cat.interface';

import * as tinycolor from 'tinycolor2';

const EYE_COLORS = ['#fff2a0', '#75DAF2', '#ABDB42'];
const FUR_BASE_COLORS = ['#808099', '#2D2E30', '#EFC375', '#EDE9D9'];

function cssHex(color: number) {
  return `#${color.toString(16).padStart(6, '0')}`;
}

function eyeColor() {
  const adjustment = (Math.floor(Math.random() * 20));
  const baseColor = tinycolor(EYE_COLORS[Math.floor(Math.random() * EYE_COLORS.length)]);
  const adjustFn = Math.random() > 0.5 ? baseColor.darken : baseColor.lighten;
  return {
    eyeIris: adjustFn.call(baseColor, adjustment).toString(),
    eyePupil: null,
  }
}

function furColor() {
  const adjustment = (Math.floor(Math.random() * 15));
  const baseColor = tinycolor(FUR_BASE_COLORS[Math.floor(Math.random() * FUR_BASE_COLORS.length)]);
  const adjustFn = Math.random() > 0.5 ? baseColor.darken : baseColor.lighten;
  return {
    furBase: adjustFn.call(baseColor, adjustment).toString(),
  }
}

export function makeRandomCat(): CatAppearance {
  return {
    innerEar: cssHex(0x808099),
    ...furColor(),
    ...eyeColor(),
  };
}
