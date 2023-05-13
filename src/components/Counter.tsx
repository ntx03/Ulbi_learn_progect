import { useState } from "react";
import classes from './Counter.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <>
            <div className={classes.count}>{count}</div>
            <div className={classes.button__container}>
                <button className={classes.button} onClick={increment}>increment</button>
            </div>
        </>
    );
}

export default Counter;