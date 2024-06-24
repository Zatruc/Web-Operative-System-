import React from 'react';

const StartButton = ({ onClick }) => (
    <button onClick={onClick} className="start-button bg-blue-500 text-white p-2 rounded">
        Inicio
    </button>
);

export default StartButton;
