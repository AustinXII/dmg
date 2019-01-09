import {NATURES} from './data/natures';

export const HP: Stat = 'hp';
export const ATK: Stat = 'atk';
export const DEF: Stat = 'def';
export const SPA: Stat = 'spa';
export const SPD: Stat = 'spd';
export const SPE: Stat = 'spe';
export const SPC: Stat = 'spc';

const RBY: Stat[] = [HP, ATK, DEF, SPC, SPE];
const GSC: Stat[] = [HP, ATK, DEF, SPA, SPD, SPE];
const ADV: Stat[] = GSC;
const DPP: Stat[] = GSC;
const BW: Stat[] = GSC;
const XY: Stat[] = GSC;
const SM: Stat[] = GSC;

export const STATS: Stat[][] = [[], RBY, GSC, ADV, DPP, BW, XY, SM];

export function display(stat: Stat) {
  switch (stat) {
    case HP:
      return 'HP';
    case ATK:
      return 'Atk';
    case DEF:
      return 'Def';
    case SPA:
      return 'SpA';
    case SPD:
      return 'SpD';
    case SPE:
      return 'Spe';
    case SPC:
      return 'Spc';
    default:
      throw new Error('unknown stat ' + stat);
  }
}

function calcStatRBYFromDV(
    stat: Stat, base: number, dv: number, level: number) {
  if (stat === HP) {
    return Math.floor(((base + dv) * 2 + 63) * level / 100) + level + 10;
  } else {
    return Math.floor(((base + dv) * 2 + 63) * level / 100) + 5;
  }
}

function calcStatADV(
    stat: Stat, base: number, iv: number, ev: number, level: number,
    nature?: string) {
  if (stat === HP) {
    return base === 1 ?
        base :
        Math.floor((base * 2 + iv + Math.floor(ev / 4)) * level / 100) + level +
            10;
  } else {
    const mods: [Stat?, Stat?] = nature ? NATURES[nature] : [undefined, undefined];
    let n: number;
    if (mods) {
      n = (mods[0] === stat ? 1.1 : mods[1] === stat ? 0.9 : 1);
    } else {
      n = 1;
    }

    return Math.floor(
        (Math.floor((base * 2 + iv + Math.floor(ev / 4)) * level / 100) + 5) *
        n);
  }
}

function calcStatRBY(
    stat: Stat, base: number, iv: number, ev: number, level: number,
    nature?: string) {
  return calcStatRBYFromDV(stat, base, IVToDV(iv), level);
}

function calcStat0(
    stat: Stat, base: number, iv: number, ev: number, level: number,
    nature?: string) {
  return 0;
}

export function getHPDV(
    ivs: {atk: number, def: number, spe: number, spc: number}) {
  return (IVToDV(ivs.atk) % 2) * 8 + (IVToDV(ivs.def) % 2) * 4 +
      (IVToDV(ivs.spe) % 2) * 2 + (IVToDV(ivs.spc) % 2);
}

export function IVToDV(iv: number) {
  return Math.floor(iv / 2);
}

export function DVToIV(dv: number) {
  return dv * 2 + 1;
}

export const CALC_STAT = [
  calcStat0, calcStatRBY, calcStatRBY, calcStatADV, calcStatADV, calcStatADV,
  calcStatADV, calcStatADV
];
