function AddingAndRemovingDataToFromArrays() {
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ['string1', 'string2'];


  numberArray1.push(6);
  stringArray1.push('string3');


  numberArray1.splice(2, 1);
  stringArray1.splice(1, 1);

  return (
      <div>
        <h3>Adding And Removing Data To/From Arrays</h3>
        <p>numberArray1: {numberArray1.toString()}</p>
        <p>stringArray1: {stringArray1.toString()}</p>
      </div>
  );
}

export default AddingAndRemovingDataToFromArrays;
