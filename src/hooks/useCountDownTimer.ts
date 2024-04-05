import { useCallback, useEffect, useRef, useState } from "react";

const useCountDownTimer = (seconds: number) => {
    const [timeLeft, setTimeLeft] = useState(seconds);
    const intervalRef = useRef<NodeJS.Timer | null>(null);

    const startCountDown = useCallback(() => {
        console.log("startCountDown");

        intervalRef.current = setInterval(() => {
            setTimeLeft((timeLeft) => - 1);
        }, 1000);
          
    }, [setTimeLeft]);

    const resetCountDown = useCallback(() => {
        console.log("resetCountDown");
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        setTimeLeft(seconds);
    }, [seconds]);

    useEffect(() => {
        if (!timeLeft && intervalRef.current) {
            console.log("clearing timer");
            clearInterval(intervalRef.current);
        }
    }, [timeLeft, intervalRef]);

    return { timeLeft, startCountDown, resetCountDown, };
};
export default useCountDownTimer;