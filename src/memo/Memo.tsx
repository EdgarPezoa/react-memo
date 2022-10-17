import React, { useState } from 'react';
import ChildWhitoutMemo from './ChildWhitoutMemo';
import ChildWithMemo from './ChildWithMemo';
import './Memo.style.css'

export interface IMemoProps{}
const Memo:React.FC<IMemoProps> = () => {
    const [number, setNumber] = useState(0);

    const increment = () => {
        setNumber((oldNumber) => (oldNumber+1));
    };
    const decrement = () => {
        setNumber((oldNumber) => (oldNumber-1));
    };

    return (
        <div>
            <h1>React Memo</h1>
            <h3>Testing number {number}</h3>
            <div className='number-button'>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
            <div className='memo-child'>
                <ChildWithMemo />
                <ChildWhitoutMemo />
            </div>
        </div>
    )
};

export default Memo;