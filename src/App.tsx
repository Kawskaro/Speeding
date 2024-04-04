import { faker } from '@faker-js/faker';
import RestartButton from './components/restartbutton';
import Results from './components/Results';
import UserTyping from './components/UserTyping';


const App = ()  =>  {
  const fakeCode = generateFakeCode();
  return (
    <>
      <CountdownTimer timeLeft={30} />
      <WordsContainer>
        <FakeCode generateFakeCode={fakeCode} />
        <UserTyping className="absolute inset-0" userInput={fakeCode} /> 
      </WordsContainer>
      <RestartButton 
        className=" mx-auto mt-10 text-slate-500"     
        onRestart={() => null}  
        />
        <Results
          className="mt-10"
          errors={10}
          accuracyPercentage={100}
          total={200}
          />
    </>
  );
};
const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative max-w-xl mt-3 text-3xl leading-relaxed break-all">{children}</div>
  );
}
const FakeCode = ({generateFakeCode}:{generateFakeCode: string}) => {
  return <div  className=' text-slate-500' >{generateFakeCode}</div>
}

const CountdownTimer = ({timeLeft}:{timeLeft: number}) => {
  return <h2  className='text-primary-400 font-medium' >Time: {timeLeft}</h2>
}

function generateFakeCode() {
  const functionName = faker.random.word();
  const variableName1 = faker.random.word();
  const variableName2 = faker.random.word();
  const variableName3 = faker.random.word();
  const method = faker.random.word();
  const condition = faker.random.word();
  const loopVariable = faker.random.word();
  const stringValue = faker.random.words(5);
  return `function ${functionName}(${variableName1}, ${variableName2}) {
    const ${variableName1} = "${stringValue}";
    let ${variableName3} = ${variableName1}.${method}(${variableName2});
    if (${variableName3} > ${condition}) {
      for (let ${loopVariable} = 0; ${loopVariable} < ${variableName3}.length; ${loopVariable}++) {
        console.log(${variableName3}[${loopVariable}]);
      }
    } else {
      console.log(${variableName3});
    }
  }`;
}
export default App;