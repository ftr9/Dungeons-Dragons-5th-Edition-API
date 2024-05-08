import { create } from 'zustand';
import { ISpell } from '../types';

interface IUseFavouriteSpellsStore {
  spells: ISpell[];
  addSpellsToFavourite: (spell: ISpell) => void;
  removeSpellsFromFavourite: (index: string) => void;
}

const getFavouriteSpellsFromLocalStorage = (): ISpell[] => {
  const favouriteSpells = localStorage.getItem('favourite-spells');
  if (favouriteSpells) {
    const parsedSpells = JSON.parse(favouriteSpells);
    return parsedSpells;
  }
  return [];
};

const useFavouriteSpellsStore = create<IUseFavouriteSpellsStore>(set => {
  return {
    spells: getFavouriteSpellsFromLocalStorage(),
    addSpellsToFavourite: spell => {
      set(prevSpells => {
        const newSpells = { ...prevSpells };

        //1) push to spells
        newSpells.spells.push(spell);

        //2) update local storage
        localStorage.setItem(
          'favourite-spells',
          JSON.stringify(newSpells.spells)
        );
        return newSpells;
      });
    },
    removeSpellsFromFavourite: index => {
      set(prevSpells => {
        const newSpells = { ...prevSpells };

        //1)remove spells by filter
        newSpells.spells = newSpells.spells.filter(
          spell => spell.index !== index
        );

        //2)update the local storage
        localStorage.setItem(
          'favourite-spells',
          JSON.stringify(newSpells.spells)
        );

        return newSpells;
      });
    },
  };
});

export default useFavouriteSpellsStore;
