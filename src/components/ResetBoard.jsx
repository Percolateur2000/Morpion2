/* eslint-disable react/prop-types */
import './resetboard.css';

const ResetBoard = ({resetBoard}) => {
    return (
        <button className='reset' onClick={resetBoard}>Reset the game</button>
    );
};

export default ResetBoard;