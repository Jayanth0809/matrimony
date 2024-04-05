import Image from "next/image";
import  "./page.module.css";
import Groom from "./components/groom/page";
import Bride from "./components/bride/page";;



export default function Mainpage(){
  
  const handleClick = () => {
    // Handle button click logic here
    console.log('Button clicked!');
  };

  return(
     <div className="body">
        <header>
          <nav>
            <a href="#" className="title">
              <h1>Online Matrimony</h1>
            </a>
            <ul className="main">
              <li><a href="/">Home</a></li>
              <li><a href="/About">About</a></li>
              <li><a href="/Contact">Contact</a></li>
              <li><a href="/components/login">Login</a></li>
            </ul>
          </nav>
        </header>
    
        <h2>Click on your interest</h2>
    
    <div className="category">
      <a href="/components/groom">
      <img src="/man.png" alt="manlogo" style={{ width: '40%' }} />
      <p>Groom</p>
      </a>
      <a href="/components/bride">
      <img src="/woman.png" alt="womanlogo" style={{ width: '40%' }} />
      <p>Bride</p>
      </a>
    </div>
    
    <footer>
      <div className="footer">
        <div className="row">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
          <a href="#"><i className="fa fa-youtube"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
        </div>
        <div className="row">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Gmail</a></li>
            <li><a href="#">More</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
  )
}
