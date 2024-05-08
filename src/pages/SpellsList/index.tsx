import SearchInput from '../../components/ui/SearchInput';
import {
  SpellCard,
  SpellCardContainer,
  SpellFilter,
} from '../../components/features/spells';
import { useQuery } from '@tanstack/react-query';
import { fetchAllSpell } from '../../components/features/spells/api';
import Loading from '../../components/ui/Loading';
import useSpellFilterByNameAndIndex from '../../components/features/spells/hooks/useSpellFilterByNameAndIndex';

const SpellsList = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['all-spells'],
    queryFn: fetchAllSpell,
  });

  const { filteredDataByNameAndIndex, setSpellLevel, setSpellName } =
    useSpellFilterByNameAndIndex(data ? data : []);

  const levelSelectHandle = (value: string) => {
    setSpellLevel(parseInt(value));
  };

  const inputChangeHandle = (value: string) => {
    setSpellName(value);
  };

  if (isPending) {
    return <Loading />;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <div>
      <div>
        <h1 className="text-3xl font-[900] text-secondary">
          Mystic Codex: Unravel the Secrets of Spells
        </h1>
        <p className="mt-1">Your Comprehensive Spellbook Companion</p>
        <div className="max-w-[400px]">
          <SearchInput
            disabled={false}
            inputValueChangeHandle={inputChangeHandle}
          />
        </div>
      </div>

      <SpellFilter>
        <SpellFilter.Name>All Spells</SpellFilter.Name>
        <SpellFilter.LevelSelect onChangeHandle={levelSelectHandle} />
      </SpellFilter>

      {filteredDataByNameAndIndex.length === 0 ? (
        <p>No spells !!</p>
      ) : (
        <SpellCardContainer>
          {filteredDataByNameAndIndex.map(spell => (
            <SpellCard key={spell.name} {...spell} />
          ))}
        </SpellCardContainer>
      )}
    </div>
  );
};

export default SpellsList;
