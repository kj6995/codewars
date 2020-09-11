var humanYearsCatYearsDogYears = (humanYears) => {
  let catYears = humanYears > 2 ? 15+9+(humanYears-2)*4 : (humanYears===2 ? 24 : 15);
  let dogYears = humanYears > 2 ? 15+9+(humanYears-2)*5 : (humanYears===2 ? 24 : 15);
  return [humanYears,catYears,dogYears];
}