import SearchInput from '../../components/ui/SearchInput';
import {
  SpellCard,
  SpellCardContainer,
  SpellFilter,
} from '../../components/features/spells';

const Favourites = () => {
  return (
    <div>
      <div className="max-w-[500px]">
        <SearchInput />
      </div>

      <SpellFilter>
        <SpellFilter.Name>You favourite spells</SpellFilter.Name>
        <SpellFilter.LevelSelect />
      </SpellFilter>
      <SpellCardContainer>
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

export default Favourites;
