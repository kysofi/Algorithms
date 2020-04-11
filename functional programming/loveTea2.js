const prepareGreenTea = () => "greenTea";
const prepareBlackTea = () => "blackTea";

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

const tea4GreenTeam = getTea(prepareGreenTea, 27);
const tea4BlackTeam = getTea(prepareBlackTea, 13);

console.log(tea4GreenTeam, tea4BlackTeam);
