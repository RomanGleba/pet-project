import { useState } from 'react'
import './counter.css'

export const Counter = () => {
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <button onClick={() => setCounter(prev => prev + 1)}>
                Count: {counter}
            </button>
        </div>
    )
}


