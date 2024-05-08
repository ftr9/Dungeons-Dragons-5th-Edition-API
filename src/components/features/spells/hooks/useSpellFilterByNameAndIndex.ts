import { ISpell } from '../types';
import { useState } from 'react';

const useSpellFilterByNameAndIndex = (data: ISpell[]) => {
  const [spellName, setSpellName] = useState('');
  const [spellLevel, setSpellLevel] = useState(-1);

  //1) first filter all spells by name
  const filteredDataByName = data.filter(spellData => {
    //indicates no name is entered in search input
    if (spellName.length === 0) {
      return true;
    }

    return spellData.name.toLowerCase().startsWith(spellName.toLowerCase());
  });

  //2) second filter spells by level
  const filteredDataByIndex = filteredDataByName.filter(spellDataByName => {
    //indicates all levels are selecte
    if (spellLevel === -1) {
      return true;
    }

    return spellDataByName.level === spellLevel;
  });

  //3) just for clarity
  const filteredDataByNameAndIndex = filteredDataByIndex;

  return {
    setSpellLevel,
    setSpellName,
    filteredDataByNameAndIndex,
  };
};

export default useSpellFilterByNameAndIndex;
