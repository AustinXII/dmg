import {Stat} from '../stats';
import {toID} from '../util';

export const NATURES: {[name: string]: [Stat?, Stat?]} = {
  'Adamant': ['atk', 'spa'],
  'Bashful': [undefined, undefined],
  'Bold': ['def', 'atk'],
  'Brave': ['atk', 'spe'],
  'Calm': ['spd', 'atk'],
  'Careful': ['spd', 'spa'],
  'Docile': [undefined, undefined],
  'Gentle': ['spd', 'def'],
  'Hardy': [undefined, undefined],
  'Hasty': ['spe', 'def'],
  'Impish': ['def', 'spa'],
  'Jolly': ['spe', 'spa'],
  'Lax': ['def', 'spd'],
  'Lonely': ['atk', 'def'],
  'Mild': ['spa', 'def'],
  'Modest': ['spa', 'atk'],
  'Naive': ['spe', 'spd'],
  'Naughty': ['atk', 'spd'],
  'Quiet': ['spa', 'spe'],
  'Quirky': [undefined, undefined],
  'Rash': ['spa', 'spd'],
  'Relaxed': ['def', 'spe'],
  'Sassy': ['spd', 'spe'],
  'Serious': [undefined, undefined],
  'Timid': ['spe', 'atk']
};

export const NATURES_BY_ID: {[id: string]: string} = {};
for (const n of Object.keys(NATURES)) {
  NATURES_BY_ID[toID(n)] = n;
}
