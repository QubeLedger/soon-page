import qube from "./images/QubeLogo.PNG"
import button from "./images/qubebutton.PNG"
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="header">
                <img className="qubeLogo" src={qube}></img>
            </div>
            <div className="container">
                <div className="containerHeader">
                    <a>Decentralized Finance</a>
                    <p className="txtHeader">for the Masses</p>
                </div>
                <div className="containerMain">
                    <a>Qube is blockchain ecosystem of algorithmic stablecoins powering decentralized finance for everyone.</a>
                </div>
                <div className="containerFooter">
                    <img className="button" src={button}></img>
                </div>
            </div>
        </div>
    );
}

export default App;
