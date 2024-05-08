import SearchInput from '../../components/ui/SearchInput';
import {
  SpellCard,
  SpellCardContainer,
  SpellFilter,
} from '../../components/features/spells';
import { useState } from 'react';

const SpellsList = () => {
  const [spellName, setSpellName] = useState('');
  const [spellLevel, setSpellLevel] = useState(-1);

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
            inputValueChangeHandle={value => {
              console.log(value);
            }}
          />
        </div>
      </div>

      <SpellFilter>
        <SpellFilter.Name>All Spells</SpellFilter.Name>
        <SpellFilter.LevelSelect />
      </SpellFilter>

      <SpellCardContainer>
        <SpellCard
          name="SpellCard"
          index="spell-card"
          level={1}
          isAddedToFavourite
        />
        <SpellCard
          name="SpellCard"
          index="spell-card"
          level={1}
          isAddedToFavourite
        />
        <SpellCard
          name="SpellCard"
          index="spell-card"
          level={1}
          isAddedToFavourite
        />
        <SpellCard
          name="SpellCard"
          index="spell-card"
          level={1}
          isAddedToFavourite
        />
        <SpellCard
          name="SpellCard"
          index="spell-card"
          level={1}
          isAddedToFavourite
        />
        <SpellCard
          name="SpellCard"
          index="spell-card"
          level={1}
          isAddedToFavourite
        />
        <SpellCard
          name="SpellCard"
          index="spell-card"
          level={1}
          isAddedToFavourite={false}
        />
      </SpellCardContainer>
    </div>
  );
};

export default SpellsList;
