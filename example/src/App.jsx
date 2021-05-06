import React, {useCallback} from 'react';
import Parent from './Parent';
import useWatch from './useWatch';

function App() {
  const state = useWatch();

  const handleSubmit = useCallback(() => {
    console.log("APP的输出是：", state.getValue());
  }, [state])

  return (
    <>
      <Parent onWatchState={state.watchState} />
      <button onClick={handleSubmit} >保存APP</button>
    </>
  )
}

export default App;
