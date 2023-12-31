import React from 'react';

function FilterFunction() {
  let numberArray1 = [1, 2, 4, 5, 6];

  const numbersGreaterThan2 = numberArray1.filter(a => a > 2);
  const evenNumbers = numberArray1.filter(a => a % 2 === 0);
  const oddNumbers = numberArray1.filter(a => a % 2 !== 0);

  return (
      <div>
        <h3>Filter Function</h3>
        <p>numbersGreaterThan2 = {numbersGreaterThan2.join(", ")}</p>
        <p>evenNumbers = {evenNumbers.join(", ")}</p>
        <p>oddNumbers = {oddNumbers.join(", ")}</p>
      </div>
  );
}

export default FilterFunction;
