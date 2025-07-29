const operatorsArr = ["+","-","/","*","="];
let equation = [];

let currentEquation = 0;
resultDiv = document.getElementById("result");

function inputVerdi(n){
    /* If it's an operator */
    if(operatorsArr.indexOf(n)>-1){
        if(currentEquation == 2){
            switch(operatorType){
                case("+"):
                    equation[0] = (parseFloat(equation[0])+parseFloat(equation[2])).toFixed(2).replace(".00","");
                break;
                case("-"):
                    equation[0] = (parseFloat(equation[0])-parseFloat(equation[2])).toFixed(2).replace(".00","");
                break;
                case("/"):
                    if(equation[2] == "0"){
                        resultDiv.value = "(╯°□°)╯︵ ┻━┻";
                        equation[2] ="";
                        return 0;
                    }
                    else{
                    equation[0] = (parseFloat(equation[0])/parseFloat(equation[2])).toFixed(2).replace(".00","");
                    }
                break;
                case("*"):
                    equation[0] = (parseFloat(equation[0])*parseFloat(equation[2])).toFixed(2).replace(".00","");
                break;
            }
            equation.pop();
        }
        if(n=="=" && equation[1] == undefined){
            resultDiv.value = equation[currentEquation];
        }
        else{
        if(n == "=" && resultDiv.value != "(╯°□°)╯︵ ┻━┻"){
            console.log(1);
            equation.pop();
            resultDiv.value = equation.toString().replace(/,/g,"");
            currentEquation = 0;
        }else{
            console.log(2);
        currentEquation = 1;
        equation[currentEquation] = n;
        operatorType=n;
        }
        if(resultDiv.value != "(╯°□°)╯︵ ┻━┻"){
            console.log(3);
            resultDiv.value = equation.toString().replace(/,/g,"");
        }
        else{
            console.log(4);
            resultDiv.value = "Good one";
        }
    }
    }
    /* If it's a value or . */
    else{
            if(currentEquation == 1){
                currentEquation = 2;
            }
            if(equation[currentEquation] == undefined){
                equation[currentEquation] = n  
            }
            else if(n=="." && equation[currentEquation].indexOf(n)>-1){console.log(". already exists")}
            else{
                equation[currentEquation] = equation[currentEquation]+n;
            }
    }
    resultDiv.value = equation.toString().replace(/,/g,"");
}

function clearCalc(){
    currentEquation = 0;
    resultDiv.value = "";
    equation = [];
}