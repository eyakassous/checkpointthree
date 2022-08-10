//import logo from './logo.svg';
import "./App.css";
import Head from "./Compnents/CustomNavbar.js";
import Slider from "./Compnents/CustomSlider.js";
import Formular from "./Compnents/CustomForm.js";
import Footer from "./Compnents/CustomFooter";

function App() {
  return (
   <div>
    <Head/>
    <br/>
   <Slider/>
   <Formular/>
   <br/><hr/>
   <Footer/>
   <br/> 
   </div>
  );
}


export default App;
