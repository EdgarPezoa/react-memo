import React from 'react';
import Memo from './memo/Memo';

export interface IAppProps{}
const App:React.FC<IAppProps> = () => {
    return (
        <Memo />
    )
};

export default App;