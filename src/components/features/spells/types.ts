export interface ISpell {
  index: string;
  name: string;
  level: number;
  url: string;
}

export interface ISpellDescription extends ISpell {
  concentration: false;
  ritual: false;
  desc: string[];
  components: string[];
  higher_level: string[];
  range: string;
  school: {
    index: string;
    name: string;
    url: string;
  };
  material: string;
  casting_time: string;
  classes: Omit<ISpell, 'level'>[];
  subclasses: Omit<ISpell, 'level'>[];
  duration: string;
}
