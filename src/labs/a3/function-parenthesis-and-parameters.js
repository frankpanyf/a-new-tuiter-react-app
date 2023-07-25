function FunctionParenthesisAndParameters() {
  const square = a => a * a;
  const plusOne = a => a + 1;

  const twoSquared = square(2);
  const threePlusOne = plusOne(3);

  return (
      <>
        <h3>Functions with Implied Return and Single Parameter</h3>
        twoSquared = {twoSquared}<br />
        square(2) = {square(2)}<br />
        threePlusOne = {threePlusOne}<br />
        plusOne(3) = {plusOne(3)}<br />
      </>
  );
}

export default FunctionParenthesisAndParameters;
