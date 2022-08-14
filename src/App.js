import Expenses from './Expenses/Expenses';
import './App.css'; 
  
import EXpensform from './NEwexpens/EXpemsform';


const App=(props)=> {
  const expens=[
{title:" tv ",amounth:39.68, data:new Date(202,2,2)},
{title:" car red",amounth:68, data:new Date(202,2,2)},
{title:" car insurance",amounth:394.68, data:new Date(202,2,2)},

  ]
  return (
    <div>

<EXpensform/>
<Expenses items={expens}/>


    </div>
  );
}

export default App;

 