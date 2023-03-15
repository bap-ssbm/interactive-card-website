import React, { useState } from "react";
import Completed from "./Complete";
import CardExample from "./CardExample";
import Form from "./Form";


function App() {



    let [completedStatus, changeStatus] = useState(false);
    let [userSubmitted, changeSubmit] = useState(false);


    let [name, changeName] = useState(["Jane Appleseed", false, true]); //first false -> checks if it's empty returns true if not empty -> second false -> checks if theres a letter returns false if there is 
    let [cardNumber, changeCardNumber] = useState(["0000 0000 0000 0000", false, true]);
    let [month, changeMonth] = useState(["00", false, true]);
    let [year, changeYear] = useState(["00", false, true]);
    let [cvc, changeCvc] = useState(["000", false, true]);

    



    function catchChange(event) {
        changeSubmit(false);
        let newInfo = [event.target.value, event.target.value.length === 0?false:true, /[A-Za-z]/.test(event.target.value)?false:true];
        const name = event.target.name;
         //if length of character = 0, change error to true

        console.log(newInfo[2]);
        

        switch (name) {
            case "name":
                changeName(newInfo);
                break;
            case "cardNumber":
                const noSpace = newInfo[0].replace(/ /g, '');
                if(newInfo[0].length < 19){
                    if (event.nativeEvent.inputType === "deleteContentBackward") {
                        newInfo[0] = newInfo[0].slice(0, -1);
                    } else {
                        newInfo[0]= noSpace.replace(/(.{4})/g, "$1 ");
                    }
                }
                changeCardNumber(newInfo);
                break;
            case "month":
                changeMonth(newInfo);
                break;
            case "year":
                changeYear(newInfo);
                break;
            case "cvc":
                changeCvc(newInfo);
                break;
            default:
                break;
        }
    }


    function confirmChange(event) {
        changeSubmit(true);
        event.preventDefault();

        if (name[1]&&cardNumber[1]&&month[1]&&year[1]&&cvc[1]&&cardNumber[2]&&month[2]&&year[2]&&cvc[2]){
            changeStatus(completedStatus ? false : true);
            console.log("passed");
        }else{
            changeStatus(false);
            console.log("didnt pass");
        }
    }

    return (
        <main>
            <CardExample
                name={name[0]}
                cardNumber={cardNumber[0]}
                month={month[0]}
                year={year[0]}
                cvc={cvc[0]}
 
            />
            {!completedStatus ? <Form
                name={name}
                number={cardNumber}
                month={month}
                year={year}
                cvc={cvc}
                confirmation={confirmChange}
                changeCard={catchChange}
                submitted={userSubmitted}
            /> : <Completed confirmation={confirmChange} />}
        </main>
    );
}

export default App;