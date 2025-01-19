import Navbar from './components/Navbar/navbar'
import Home from './components/Home/home'
// import './App.css'

function App({customComponent: CustomCompoent}) {
  return (
    <div>
      <Navbar/>
      {CustomCompoent && <CustomCompoent/>}
    </div>
  );
}

export default App;
