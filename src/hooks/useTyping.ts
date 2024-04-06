import { useCallback, useEffect, useState, useRef } from "react"

const isKeyboardCodeAlowed = (code: string) => {
    const allowedKeys = [
        "Key", "Digit", "Backspace", "Space", 
        "BracketLeft", "BracketRight", "ParenLeft", "ParenRight",
        "Semicolon", "Equal", "Comma", "Minus", "Period", "Slash", "Backquote",
        "IntlBackslash", "Quote", "Backslash"
    ];
    return allowedKeys.some(key => code.startsWith(key));
}

const useTyping = (enabled: boolean) => {
    const [cursor, setCursor] = useState(0);
    const [typed, setTyped] = useState<string>("");
    const totalTyped = useRef(0);

    const keyDownHandler = useCallback(({key, code}: KeyboardEvent) => {
        if (!enabled || !isKeyboardCodeAlowed(code)) {
            return;
        }
        switch (key) {
            case "Backspace":
                setTyped((prev) => prev.slice(0, -1));
                setCursor(cursor -1 );
                totalTyped.current -= 1;
                break;
            default:
                setTyped((prev) => prev.concat(key));
                setCursor(cursor + 1);
                totalTyped.current += 1;
        }
    },
    [cursor, enabled]
    );

    const clearTyped = useCallback(() => {
        setTyped("");
        setCursor(0);
      }, []);
    
      const resetTotalTyped = useCallback(() => {
        totalTyped.current = 0;
      }, []);


    useEffect(() => {
            window.addEventListener("keydown", keyDownHandler);
        return () => {
            window.removeEventListener("keydown", keyDownHandler);
        };
    }, [keyDownHandler]);
    return {
        typed, cursor, clearTyped, resetTotalTyped , totalTyped: totalTyped.current,    
    };
};

export default useTyping;