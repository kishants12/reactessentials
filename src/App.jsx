import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results';

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

const inputisValid = userInput.duration >= 1


  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput 
      userInput={userInput} 
      onChange={handleChange}
        />
      {!inputisValid && <p style={{color:'red', textAlign:'center'}}>Please enter a valid duration (1 or more)</p>}
     { inputisValid && <Results input={userInput} />}
    </>
  )
}

export default App
