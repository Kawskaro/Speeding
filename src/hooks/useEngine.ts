import { useState } from 'react';
import useWords from './useWords';
import useCountDownTimer from './useCountDownTimer';
import useTyping from './useTyping';

export type State = "start" | "run" | "finish"; 

const NUMBER_OF_WORDS = 12;
const COUNTDOWN_SECONDS = 30;

const useEngine = () => {
    const [state, setState] = useState<State>("start");
    const { fakeCode, updatefakeCode } = useWords(NUMBER_OF_WORDS);
    const { timeLeft, startCountDown, resetCountDown } = useCountDownTimer(COUNTDOWN_SECONDS);
        useCountDownTimer(COUNTDOWN_SECONDS); 
        const { typed, cursor , clearTyped, resetTotalTyped, totalTyped } = useTyping(state !== "finish");
    return { state, fakeCode , timeLeft , typed};
};

export default useEngine;