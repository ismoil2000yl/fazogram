import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import Start from './Components/Start';
import SignIn from './Components/Sign-in';
import Fazogram from './Components/Fazogram';
import Security from './Components/Security';
import { createContext, useState } from 'react';

export const MyContext = createContext()

function App() {

//   const [information, setInformation] = useState({
//     phoneNumber:pNumber,
//     firstName:'',
//     lastName:''
//   })
//   const [pNumber, setPNumber] = useState()

// // function importPhone(phone){
// //   let a = {...information}
// //   a.phoneNumber=phone
// //   setInformation(a)
// //   console.log(phone)
// // }

function importPhone(phone){
  // setPNumber(phone)
  // console.log(information)
}

  return (
    <MyContext.Provider value={{importPhone:importPhone}}>
    <div className="index">
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <Home/>
          </div>
        </div>
      </div>
      <Routes>
        <Route path={'/start'} element={<Start/>}/>
        <Route path='/Sign-in' element={<SignIn/>}/>
        <Route path='/Fazogram' element={<Fazogram/>}/>
        <Route path='/Security' element={<Security/>}/>
      </Routes>
    </div>
    </MyContext.Provider>
  );
}

export default App;
