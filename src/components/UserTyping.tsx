import Caret from "./caret";

const UserTyping = ({
    userInput,
    className,
}: {
    userInput: string;
    className?: string;
}) => {
    const typedCharacters = userInput.split("");
    return (
        <div className={className}>
            {typedCharacters.map((char, index) => (
                <Character key={`${char}_${index}`} char={char}/> 
            ))}
            <Caret />
        </div>
    );
};

const Character = ({ char }: { char: string }) => {
    return <span className="text-primary-400">{char}</span>;
}

export default UserTyping;