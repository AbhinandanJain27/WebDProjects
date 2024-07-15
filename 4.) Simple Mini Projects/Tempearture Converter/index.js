const convertToCelcius = (userInputValue) => `${(((userInputValue-32)*5)/9).toFixed(2)} C`;

const convertToFarhenite = (userInputValue) => `${((userInputValue*9/5)+32).toFixed(2)} F`;

const convertTemperature = (e)=>{

  if (e[1].selectedOptions[0].value == "farhenite") {
    $("#result")[0].value = convertToCelcius(e[0].value);
  }else{
    $("#result")[0].value = convertToFarhenite(e[0].value);
  }
  
};