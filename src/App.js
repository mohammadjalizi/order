import Expenses from './Componenet/Expenses';
import './App.css';


function App() {
  const expens=[
{title:" tv ",amounth:39.68, data:new Date(202,2,2)},
{title:" car red",amounth:68, data:new Date(202,2,2)},
{title:" car insurance",amounth:394.68, data:new Date(202,2,2)},

  ]
  return (
    <div className="App">
<p>lest start</p>
<Expenses items={expens}/>
    </div>
  );
}

export default App;
