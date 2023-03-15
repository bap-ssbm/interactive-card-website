import React, { useState } from "react";



function MainForm(props) {


    function checkChars(item) {
        return (/[A-Za-z]/.test(item) ? <p className="error">Wrong format, numbers only</p> : null);
    }
    function checkEmpty() {
        console.log(props.number[1])
        return (<p className="error">Can't be blank</p>);
    }

    const errorStyle = {
        border: "1px solid hsl(0, 100%, 66%)"
    }

    return (
        <div className="section">
            <form className="right-container">
                <div className="container">
                    <div className="name-input inputs">
                        <label for="name">CARDHOLDER NAME</label><br />
                        <input
                            style={(props.submitted && !props.name[1]) ? errorStyle : null}
                            type="text"
                            name="name"
                            placeholder="e.g. Jane Appleseed"
                            onChange={props.changeCard}
                            value={props.name[1] ? props.name[0] : null} />
                        {(!(props.name[1]) && props.submitted) && checkEmpty()}
                    </div>

                    <div className="number-input inputs">
                        <label for="cardNumber">CARD NUMBER</label><br />
                        <input
                            style={((props.submitted && (!props.number[1] || !props.number[2])) || !props.number[2]) ? errorStyle : null}
                            value={props.number[1] ? props.number[0] : null}
                            type="text" name="cardNumber"
                            placeholder="e.g. 1234 5678 9123 0000"
                            onChange={props.changeCard}
                            maxLength="19" />
                        {checkChars(props.number[0])}
                        {(!(props.number[1]) && props.submitted) && checkEmpty()}
                    </div>


                    <div className="last-input inputs">
                        <div className="date-input">
                            <label for="date">EXP. DATE (MM/YY)</label><br />
                            <input
                                style={((props.submitted && (!props.month[1] || !props.month[2])) || !props.month[2]) ? errorStyle : null}
                                type="text"
                                name="month"
                                placeholder="MM"
                                onChange={props.changeCard}
                                maxLength="2"
                                value={props.month[1] ? props.month[0] : null} />
                            <input
                                style={((props.submitted && (!props.year[1] || !props.year[2])) || !props.year[2]) ? errorStyle : null}
                                type="text"
                                name="year"
                                placeholder="YY"
                                onChange={props.changeCard}
                                maxLength="2"
                                value={props.year[1] ? props.year[0] : null} />
                            {/[A-Za-z]/.test(props.month[0]) ? checkChars(props.month[0]) : checkChars(props.year[0])}
                            {((!props.month[1] || !props.year[1]) && props.submitted) && checkEmpty()}

                        </div>
                        <div>
                            <label for="date">CVC</label><br />
                            <input
                                style={((props.submitted && (!props.cvc[1] || !props.cvc[2])) || !props.cvc[2]) ? errorStyle : null}
                                type="text"
                                name="cvc"
                                placeholder="e.g. 123"
                                onChange={props.changeCard}
                                maxLength="3" value={props.cvc[1] ? props.cvc[0] : null} />
                            {checkChars(props.cvc[0])}
                            {(!(props.cvc[1]) && props.submitted) && checkEmpty()}
                        </div>

                    </div>

                    <button onClick={props.confirmation}>
                        Confirm
                    </button>
                </div>

            </form>
        </div>

    );
}

export default MainForm;