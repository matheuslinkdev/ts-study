var FormulaOneCar = /** @class */ (function () {
    function FormulaOneCar(props) {
        this.props = props;
    }
    return FormulaOneCar;
}());
var LeclercCarProps = {
    team: "Ferrari",
    driver: "Charles Leclerc",
    num: 16,
    finishedRace: true,
    finishPosition: 5,
};
var LeclercCar = new FormulaOneCar(LeclercCarProps);
console.log(LeclercCar);
