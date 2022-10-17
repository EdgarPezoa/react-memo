import React, { useMemo } from 'react';
import { getRandomColor } from './Memo.utils';

export interface IChildWithMemoProps{}
const ChildWithMemo:React.FC<IChildWithMemoProps> = () => {
    const color = useMemo(() => getRandomColor(), []);
    return (
        <div style={{border:`2px solid ${color}`,width:"fit-content", padding:"10px", margin:"10px"}}>
            Memo Component
        </div>
    )
};

export default ChildWithMemo;