#!/usr/bin/node

export default function getSumOfHoods(
  initialNumber,
  expansion1989,
  expansion2019
) {
  if (expansion1989 === undefined)
    return (
      initialNumber +
      (expansion1989 === undefined ? 89 : 0) +
      (expansion2019 === undefined ? 19 : 0)
    );
}
