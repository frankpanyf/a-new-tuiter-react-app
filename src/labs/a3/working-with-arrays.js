import ArrayIndexAndLength from './array-index-and-length';
import AddingAndRemovingDataToFromArrays
  from "./adding-and-removing-data-to-from-arrays";
import ForLoops from "./for-loops";
import MapFunction from "./map-function";
import JsonStringifyExample from "./json-stringify";
import FindFunction from "./find-function";
import FindIndexFunction from "./find-index";
import FilterFunction from "./filter-function";
function WorkingWithArrays() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ['string1', 'string2'];
  let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1
  ];

  return (
      <div>
        <h3>Working With Arrays</h3>
        <p>numberArray1: {numberArray1.toString()}</p>
        <p>stringArray1: {stringArray1.toString()}</p>
        <p>variableArray1: {JSON.stringify(variableArray1)}</p>
        <ArrayIndexAndLength />
        <AddingAndRemovingDataToFromArrays/>
        <ForLoops/>
        <MapFunction/>
        <JsonStringifyExample/>
        <FindFunction/>
        <FindIndexFunction/>
        <FilterFunction/>
      </div>
  );
}

export default WorkingWithArrays;
