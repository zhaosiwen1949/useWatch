import { useEffect } from 'react';

export default function useWatch() {
    const watchValueCallback = (getFn) => { state.getValue = getFn };
    const useWatchValue = (...args) => {
        if(!state.getValue) {
            state.getValue = () => [...args];
        }
        useEffect(() => {
            watchValueCallback(() => [...args]);
        }, [...args]);
    };

    const state = {
        getValue: null,
        watchValue: useWatchValue,
    }
    return state;
};
