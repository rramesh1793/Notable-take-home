let inputTxt = `Patient presents today with several issues. Number one BMI has increased by 10% since their last visit. Number next patient reports experiencing dizziness several times in the last two
weeks. Number next patient has a persistent cough that hasn’t improved for last 4 weeks. Number next patient is taking drug number five several times a week`

function textTransformation(inputTxt) {

  if (!inputTxt.length) return '';
  if (typeof inputTxt !== 'string') 
    return 'Not a string. Invalid input.';

  const obj = {
    'one': 1, 'two': 2, 'three': 3,'four': 4,'five': 5,'six': 6, 'seven': 7, 'eight': 8,'nine': 9
  };
  
  let txtOrder = str.split('. '); 
  let count = 0;

  for (let i = 0; i < txtOrder.length; i += 1) {
    if (txtOrder[i].startsWith('Number')) {
        let newLine = txtOrder[i].split(' ');
        newLine.shift();
        
        if (obj[newLine[0]]) {
          let number = obj[newLine[0]];
          newLine[0] = `${number}.`;
        } 
        else {
          count += 1;
          newLine[0] = `${count}.`;
        }
      newLine[1] = toUpperFirst(newLine[1]);
      txtOrder[i] = newLine.join(' ');
    } 
  }
  return txtOrder.join(". \n");
}

function toUpperFirst(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

console.log(textTransformation(inputTxt)) 


---------


let inputTxt = `Patient presents today with several issues. Number one BMI has increased by 10% since their last visit. Number next patient reports experiencing dizziness several times in the last two
weeks. Number next patient has a persistent cough that hasn’t improved for last 4 weeks. Number next patient is taking drug number five several times a week`

function textTransformation(inputTxt) {

  if (!inputTxt.length) return '';
  if (typeof inputTxt !== 'string') 
    return 'Not a string. Invalid input.';

  const obj = {
    'one': 1, 'two': 2, 'three': 3,'four': 4,'five': 5,'six': 6, 'seven': 7, 'eight': 8,'nine': 9
  };
  
  let txtOrder = str.split('. '); 
  let count = 0;

  for (let i = 0; i < txtOrder.length; i += 1) {
    if (txtOrder[i].startsWith('Number')) {
        let newLine = txtOrder[i].split(' ');
        newLine.shift();
        
        if (obj[newLine[0]]) {
          let number = obj[newLine[0]];
          newLine[0] = `${number}.`;
        } 
        else {
          count += 1;
          newLine[0] = `${count}.`;
        }
      newLine[1] = toUpperFirst(newLine[1]);
      txtOrder[i] = newLine.join(' ');
    } 
  }
  return txtOrder.join(". \n");
}

function toUpperFirst(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

console.log(textTransformation(inputTxt)) 
