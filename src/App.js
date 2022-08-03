import Expensitem from './Componenet/Expensitem';
import './App.css';

function App() {
  const expens=[
{title:" tv ",amounth:39.68, data:new Date(202,2,2)},
{title:" car red",amounth:68, data:new Date(202,2,2)},
{title:" car insurance",amounth:394.68, data:new Date(202,2,2)},

  ]
  return (
    <div className="App">
<Expensitem
 title={expens[0].title} 
 amounth={expens[0].amounth} 
 data={expens[0].data}/>
<Expensitem
 title={expens[1].title} 
 amounth={expens[1].amounth} 
 data={expens[1].data}/>
<Expensitem
 title={expens[2].title} 
 amounth={expens[2].amounth} 
 data={expens[2].data}/>

    </div>
  );
}

export default App;
