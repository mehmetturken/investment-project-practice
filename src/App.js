import React, { useState } from 'react';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Table from './components/Table/Table';

function App() {

  const [userInput, setUserInput] = useState(null);


  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = []; // per-year results
  if (userInput) {

    let currentSavings = +userInput['current-savings'];
    const yearlyContribution = +userInput['yearly-contribution'];
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

  }

  return (
    <div>
      <Header />

      <Form calculate={calculateHandler}></Form>

      {userInput && <Table data={yearlyData} initialInvestment={userInput['current-savings']}></Table>}
      {!userInput && <p style={{ textAlign: 'center' }}>There is nothing to calculate!</p>}
    </div>
  );
}

export default App;
