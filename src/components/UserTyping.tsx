import Caret from "./caret";
import cn from "classnames";

const UserTyping = ({
    userInput,
    className,
    generateFakeCode,
}: {
    userInput: string;
    className?: string;
    generateFakeCode: string;
}) => {
    const typedCharacters = userInput.split("");
    return (
        <div className={className}>
            {typedCharacters.map((char, index) => {
                return ( 
                    <Character 
                        key={`${char}_${index}`} 
                        actual={char}
                        expected={generateFakeCode[index]}
                    />
              );
            })}            
            <Caret />
        </div>
    );
};

const Character = ({ actual, expected }: { actual: string, expected: string }) => {
    const isCorrect = actual === expected
    const isWhitespace = expected === " ";

    return (
        <span className={cn({
            "text-red-400": !isCorrect && !isWhitespace,
            "text-primary-400": isCorrect && !isWhitespace,
            "bg-red-500/50": isWhitespace && !isCorrect,
        })}
        >
            {expected}
        </span>
    );
};

export default UserTyping;