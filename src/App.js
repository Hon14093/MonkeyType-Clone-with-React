import './App.css';
import MTheader from './Components/MTheader';
import MTmain from './Components/MTmain';
import MTfooter from './Components/MTfooter';

function App() {
    return (
        <div id='app' className='wide125'>
            <div className='contentWrapper wide125'>
                <header className='text-white font-mT'>
                    <MTheader />
                </header>

                <main className='typingMain text-white font-mT'>
                    <MTmain />
                </main>
                
                <footer>
                    <MTfooter />
                </footer>
            </div>
        </div>
    );
}

export default App;
