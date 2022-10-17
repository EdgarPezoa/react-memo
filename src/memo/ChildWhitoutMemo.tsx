import React from 'react';
import { getRandomColor } from './Memo.utils';

export interface IChildWhitoutMemoProps{}
const ChildWhitoutMemo:React.FC<IChildWhitoutMemoProps> = () => {
    const color = getRandomColor();
    return (
        <div style={{border:`2px solid ${color}`,width:"fit-content", padding:"10px", margin:"10px"}}>
            Normal Component
        </div>
    )
};

export default ChildWhitoutMemo;