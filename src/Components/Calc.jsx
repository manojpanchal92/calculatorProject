import React, { useState } from 'react';
import './Cal.css';

function Calc() {
    const [input, setInput] = useState('');

    const handleClick = parameter => {

        if (parameter === "%") {
            // Evaluate percentage
            try {
                const percentageResult = eval(input) / 100;
                setInput(percentageResult.toString());
            } catch (error) {
                setInput("Error");
            }
        } else {
            // regular number/operator clicks
            setInput(prevInput => prevInput + parameter);
        }
    };


    const handleResult = () => {
        try {
            const result = eval(input);
            setInput(result.toString());
        } catch (error) {
            setInput('Error');
        }
    };

    const handleClear = () => {
        setInput('');
    };

    const handleDelete = () => {
        setInput(prevInput => prevInput.slice(0, -1));
    };

    return (
        <div>

            <h1>Calculator</h1>
            
            <div className='mainContainer'>

                <div className='calculator'>

                    <input type='text' id='screen' value={input} readOnly />

                    <div className='btnContainer'>
                        <button onClick={handleClear} className='button'>
                            AC
                        </button>
                        <button onClick={handleDelete} className='button'>
                            DEL
                        </button>
                        <button onClick={() => handleClick('%')} className='button'>
                            %
                        </button>
                        <button onClick={() => handleClick('/')} className='button'>
                            /
                        </button>

                        <button onClick={() => handleClick('7')} className='button'>
                            7
                        </button>
                        <button onClick={() => handleClick('8')} className='button'>
                            8
                        </button>
                        <button onClick={() => handleClick('9')} className='button'>
                            9
                        </button>
                        <button onClick={() => handleClick('*')} className='button'>
                            *
                        </button>

                        <button onClick={() => handleClick('4')} className='button'>
                            4
                        </button>
                        <button onClick={() => handleClick('5')} className='button'>
                            5
                        </button>
                        <button onClick={() => handleClick('6')} className='button'>
                            6
                        </button>
                        <button onClick={() => handleClick('-')} className='button'>
                            -
                        </button>

                        <button onClick={() => handleClick('1')} className='button'>
                            1
                        </button>
                        <button onClick={() => handleClick('2')} className='button'>
                            2
                        </button>
                        <button onClick={() => handleClick('3')} className='button'>
                            3
                        </button>
                        <button onClick={() => handleClick('+')} className='button'>
                            +
                        </button>

                        <button onClick={() => handleClick('00')} className='button'>
                            00
                        </button>
                        <button onClick={() => handleClick('0')} className='button'>
                            0
                        </button>
                        <button onClick={() => handleClick('.')} className='button'>
                            .
                        </button>

                        <button type='button' className='button orange' onClick={handleResult}>
                            =
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Calc;
