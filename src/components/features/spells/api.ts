import { ISpell, ISpellDescription } from './types';

export const fetchAllSpell = async (): Promise<ISpell[]> => {
  const spellData = await fetch('https://www.dnd5eapi.co/api/spells');
  const spellJson = await spellData.json();
  return spellJson.results;
};

export const fetchSpellByIndex = (index: string) => {
  return async (): Promise<ISpellDescription> => {
    const spellDesc = await fetch(
      `https://www.dnd5eapi.co/api/spells/${index}`
    );
    const spellDescJson = await spellDesc.json();
    return spellDescJson;
  };
};
