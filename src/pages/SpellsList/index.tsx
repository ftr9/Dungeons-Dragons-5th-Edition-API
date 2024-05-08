import SearchInput from '../../components/ui/SearchInput';
import {
  SpellCard,
  SpellCardContainer,
  SpellFilter,
} from '../../components/features/spells';

const SpellsList = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-[900] text-secondary">
          Mystic Codex: Unravel the Secrets of Spells
        </h1>
        <p className="mt-1">Your Comprehensive Spellbook Companion</p>
        <div className="max-w-[400px]">
          <SearchInput />
        </div>
      </div>

      <SpellFilter>
        <SpellFilter.Name>All Spells</SpellFilter.Name>
        <SpellFilter.LevelSelect />
      </SpellFilter>

      <SpellCardContainer>
        <SpellCard />
        <SpellCard />
        <SpellCard />
        <SpellCard />
        <SpellCard />
        <SpellCard />
        <SpellCard />
        <SpellCard />
        <SpellCard />
      </SpellCardContainer>
    </div>
  );
};

export default SpellsList;
