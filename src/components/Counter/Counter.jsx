import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, decrementByAmount, increment, incrementByAmount } from "../../redux/slices/counterSlice";

export function Counter() {
    const [incrementValue, setIncrementValue] = useState(0);
    const [decrementValue, setDecrementValue] = useState(0);
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>

                <input type="number" value={incrementValue} onChange={(e) => setIncrementValue(+e.target.value)} />

                <button
                    aria-label="Increment by amount"
                    onClick={() => dispatch(incrementByAmount(incrementValue))}
                >
                    Increment by amount
                </button>

                <input type="number" value={decrementValue} onChange={(e) => setDecrementValue(+e.target.value)} />

                <button
                    aria-label="Increment by amount"
                    onClick={() => dispatch(decrementByAmount(decrementValue))}
                >
                    Decrement by amount
                </button>
            </div>
        </div>
    );
}
