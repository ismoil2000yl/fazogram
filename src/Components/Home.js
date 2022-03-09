import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {NavLink} from 'react-router-dom';

function Home(){

const ToastStop = () => toast.error("Telefon raqamingizni kiriting...!")

function startBtn(){
    ToastStop()
}

    return(
        <div className='App'>
                <div className='fs'>
            <section>
              <div className='text-menu'>
                <div id='f'><b>F</b></div>
                <div className='a'>a</div>
                <div className='a'>z</div>
                <div className='a'>o</div>
                <div>g</div>
                <div>r</div>
                <div>a</div>
                <div>m</div>
              </div>
            </section>
            <NavLink to={'/start'}><button onClick={startBtn} className='text-center sign-in'>Start</button></NavLink>
            <ToastContainer/>
            </div>
        </div>
    )
}

export default Home