import SearchInput from '../../components/ui/SearchInput';
import {
  SpellCard,
  SpellCardContainer,
  SpellFilter,
} from '../../components/features/spells';

import useFavouriteSpellsStore from '../../components/features/spells/store/useFavouriteSpells.store';
import useSpellFilterByNameAndIndex from '../../components/features/spells/hooks/useSpellFilterByNameAndIndex';

const Favourites = () => {
  const { spells } = useFavouriteSpellsStore();
  const { filteredDataByNameAndIndex, setSpellLevel, setSpellName } =
    useSpellFilterByNameAndIndex(spells);

  return (
    <div>
      <div className="max-w-[500px]">
        <SearchInput
          disabled={spells.length === 0}
          inputValueChangeHandle={value => {
            setSpellName(value);
          }}
        />
      </div>

      <SpellFilter>
        <SpellFilter.Name>You favourite spells</SpellFilter.Name>
        <SpellFilter.LevelSelect
          onChangeHandle={value => {
            setSpellLevel(parseInt(value));
          }}
        />
      </SpellFilter>

      {spells.length === 0 && <p className="text-sm">No spells</p>}

      <SpellCardContainer>
        {filteredDataByNameAndIndex.map(spellData => (
          <SpellCard key={spellData.name} {...spellData} />
        ))}
      </SpellCardContainer>
    </div>
  );
};

export default Favourites;
