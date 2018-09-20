module.exports = function longestConsecutiveLength(array) {
  array = array.sort((a, b) => { return a - b; })
  let counter = 0;
  let sequenceLength = [];
  for(let i = 0; i < array.length; i++) {
  	if(array[i] == array[i + 1]) {
  		delete array[i];
  	} else if(array[i+1] == array[i] + 1) {
  		counter++;
  	} else {
  		sequenceLength.push(counter + 1);
  		counter = 0;
  	}
  }
  return  ~~Math.max(...sequenceLength);
}
