


function myFunction(){
    var inputDegreeValue = document.querySelector("#inputtemp").value;
    var inputDegree = document.querySelector("#option1").value;
    var conversionDegreeType = document.querySelector("#option2") .value;
    var resultTemp;
    switch(inputDegree){
        case 'C':
           resultTemp = cTo(inputDegreeValue,conversionDegreeType);
        break;
        case 'F':
            resultTemp = fTo(inputDegreeValue,conversionDegreeType);
        break;
        case 'K':
            resultTemp = kTo(inputDegreeValue,conversionDegreeType);
        break;
    }
    var result = resultTemp + conversionDegreeType;
    document.querySelector("#tempResult").innerHTML = result;

}

function fTo(inputDegreeValue, conversionDegreeType) {

   let temperature = '';
 
   switch (conversionDegreeType) {
     case 'F':
       temperature = inputDegreeValue;
       break;
     case 'C':
       temperature = eval((inputDegreeValue - 32) * (5 / 9));
       break;
     case 'K':
 
       temperature = eval((inputDegreeValue + 459.67) * (5 / 9));
       break;
 
   }
   return temperature;
 }
 function cTo(inputDegreeValue, conversionDegreeType) {

   let temperature = '';
 
   switch (conversionDegreeType) {
 
     case 'C':
       temperature = inputDegreeValue;
       break;
     case 'F':
       temperature = eval((inputDegreeValue * (9 / 5)) + 32);
       break;
     case 'K':
       temperature = eval(inputDegreeValue + 273.15);
       break;
 
   }
 
   return temperature;
 }
 function kTo(inputDegreeValue, conversionDegreeType) {

   let temperature = '';
   
   switch (conversionDegreeType) {
     case 'K':
       temperature = inputDegreeValue;
       break;
     case 'F':
       temperature = eval((inputDegreeValue - 273.15) * (9 / 5) + 32);
       break;
     case 'C':
       temperature = eval((inputDegreeValue - 273.15));
       break;
   
   }
   return temperature;
   }