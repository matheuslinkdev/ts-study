interface Props {
  team: string;
  driver: string;
  num: number;
  finishedRace: boolean;
  finishPosition?: number;
}

class FormulaOneCar {
 
  private props: Props

  constructor(props: Props){
    this.props = props;
  }
}

const LeclercCarProps: Props = {
  team: "Ferrari",
  driver: "Charles Leclerc",
  num: 16,
  finishedRace: true,
  finishPosition: 5,
};

const LeclercCar = new FormulaOneCar(LeclercCarProps);

console.log(LeclercCar);