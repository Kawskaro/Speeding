import { faker } from "@faker-js/faker";
import { useCallback, useState } from "react";

const generateWords = (count: number) => {
    return faker.random.words(count).toLowerCase();
};

const useWords = (count: number) => {
    const [fakeCode, setfakeCode] = useState<string>(generateWords(count));

    const updatefakeCode = useCallback(() => {
        setfakeCode(generateWords(count));
    }, [count]);

    return { fakeCode, updatefakeCode };
};

export default useWords;