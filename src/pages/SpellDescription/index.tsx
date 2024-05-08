import { fetchSpellByIndex } from '../../components/features/spells/api';
import { useQuery } from '@tanstack/react-query';

import BooleanValue from './components/BooleanValue';
import Description from './components/Description';
import Components from './components/Components';
import HigherLevel from './components/HigherLevel';
import OtherInfos from './components/OtherInfos';
import Classes from './components/Classes';
import Info from './components/Info';
import { useParams } from 'react-router-dom';
import Material from './components/Material';
import Loading from '../../components/ui/Loading';

const SpellDescription = () => {
  const params = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: [`spells/${params.index}`],
    queryFn: fetchSpellByIndex(params.index as string),
  });

  if (isPending) {
    return <Loading />;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  return (
    <div className=" md:w-[75%] mx-auto">
      <h1 className="text-secondary text-[24px] font-bold">{data.name}</h1>

      <div className="flex md:flex-row flex-col items-start mb-2 space-y-2 md:space-y-0 space-x-0 md:space-x-3  mt-2 flex-wrap">
        <BooleanValue name="Concentration" isPresent={data.concentration} />
        <BooleanValue name="cast in a 10-min ritual" isPresent={data.ritual} />
      </div>
      <Description data={data.desc} />
      <Components data={data.components} />
      <HigherLevel data={data.higher_level} />
      <OtherInfos>
        <Info name="Range" value={data.range} />
        <Info name="Level" value={data.level.toString()} />
        <Info name="School" value={data.school.name} />
        <Info name="Casting Time" value={data.casting_time} />
        <Info name="Duration" value={data.duration} />
      </OtherInfos>
      <Material data={data.material} />
      <Classes name="Classes" values={data.classes.map(el => el.name)} />
      <Classes name="Sub-Classes" values={data.subclasses.map(el => el.name)} />
    </div>
  );
};

export default SpellDescription;
