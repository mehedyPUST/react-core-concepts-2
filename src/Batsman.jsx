import { useState } from "react"

export default function Batsman() {
    const [runs, setRuns] = useState(0);
    const [sixes, setSixes] = useState(0);
    const handleSingle = () => {
        const updateRuns = runs + 1;
        setRuns(updateRuns);
    }

    const handleSix = () => {
        const updateSixes = sixes + 1;
        const updateRuns = runs + 6;
        setRuns(updateRuns);
        setSixes(updateSixes);
    }

    const handleFour = () => {
        const updateRuns = runs + 4;
        setRuns(updateRuns);
    }
    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            <p>Six: {sixes}</p>
            {
                runs >= 50 && <p> You Scored : 50</p>
            }
            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    )
}