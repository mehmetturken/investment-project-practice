import React, { useState } from "react";
import style from './Form.module.css';

const Form = props => {

    const startingInputs = { 'current-savings': 10000, 'yearly-contribution': 2000, 'expected-return': 5, 'duration': 5 }

    const [userInput, setUserInput] = useState(startingInputs);

    const submitHandler = (e) => {
        e.preventDefault();

        props.calculate(userInput);
    }

    const resetHandler = () => {
        setUserInput(startingInputs);
    }

    const inputChangeHandler = (input, val) => {
        setUserInput((prevInput) => {
            return {
                ...prevInput,
                [input]: +val
            };
        });
        props.calculate(userInput);
    }

    return (
        <div>
            <form className={style.form} onSubmit={submitHandler}>
                <div className={style['input-group']}>
                    <p>
                        <label htmlFor="current-savings">Current Savings ($)</label>
                        <input onChange={(e) => inputChangeHandler('current-savings', e.target.value)} value={userInput["current-savings"]} type="number" id="current-savings" />
                    </p>
                    <p>
                        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                        <input onChange={(e) => inputChangeHandler('yearly-contribution', e.target.value)} value={userInput["yearly-contribution"]} type="number" id="yearly-contribution" />
                    </p>
                </div>
                <div className={style['input-group']}>
                    <p>
                        <label htmlFor="expected-return">
                            Expected Interest (%, per year)
                        </label>
                        <input onChange={(e) => inputChangeHandler('expected-return', e.target.value)} value={userInput["expected-return"]} type="number" id="expected-return" />
                    </p>
                    <p>
                        <label htmlFor="duration">Investment Duration (years)</label>
                        <input onChange={(e) => inputChangeHandler('duration', e.target.value)} value={userInput.duration} type="number" id="duration" />
                    </p>
                </div>
                <p className={style.actions}>
                    <button onClick={resetHandler} type="reset" className={style.buttonAlt}>
                        Reset
                    </button>
                    <button type="submit" className={style.button}>
                        Calculate
                    </button>
                </p>
            </form>
        </div>
    );
}

export default Form;