import React, { useState } from 'react'


function Scorekeeper() {


    const [score, setScore] = useState(0);
    const [wickets, setWickets] = useState(0);

    function addOne(num) {
        setScore(score + num);
        console.log(score)
    }
    function addWickets() {
        setWickets(wickets + 1);
        console.log(wickets)
    }


    return (
        <div>
            <h1>Score Keeper</h1>
            <h1>Score: {score}/{wickets}</h1>
            <div className="button">
                <button onClick={() => addOne(1)}>1</button>
                <button onClick={() => addOne(2)}>2</button>
                <button onClick={() => addOne(3)}>3</button>
                <button onClick={() => addOne(4)}>4</button>
                <button onClick={() => addOne(5)}>5</button>
                <button onClick={() => addOne(6)}>6</button>
                <button onClick={addWickets}>Wicket</button>
            </div>
        </div>
    )
}

export default Scorekeeper
