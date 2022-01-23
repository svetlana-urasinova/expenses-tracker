import expenses from './data/expenses.js'
import Expenses from './components/expenses/Expenses/Expenses.js';

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          Let's get started!
        </h1>
      </header>
      <main>
        <Expenses data={expenses} />
      </main>
    </div>
  );
}

export default App;
