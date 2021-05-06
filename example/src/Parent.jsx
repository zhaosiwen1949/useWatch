import React, { useCallback } from 'react';
import useWatch from './useWatch';
import Children from './Children';

export default function Parent () {
    const state1 = useWatch();
    const state2 = useWatch();
    const state3 = useWatch();
    
    const handleSubmit = useCallback(() => {
        console.log("第一个是：", state1.getValue());
        console.log("第二个是：", state2.getValue());
        console.log("第三个是：", state3.getValue());
    }, [state1, state2, state3])

    return (
        <>
            <Children name={'第一个：'} onWatch={state1.watchValue} />
            <Children name={'第二个：'} onWatch={state2.watchValue} />
            <Children name={'第三个：'} onWatch={state3.watchValue} />
            <button onClick={handleSubmit} >保存</button>
        </>
    )
}