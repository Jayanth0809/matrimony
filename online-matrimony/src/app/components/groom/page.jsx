
import './groom.css'


export default function Groom(){


    return(
        <div className="Groom">
      <div className="header">
        <nav>
          <a href="#" className="title">
            <h1>Online Matrimony</h1>
          </a>
          <ul className="main">
            <li><a href="/  ">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
      
      <div className="card">
        <img src="/Groom1.jpg" alt="Groom1" />
        <div className="card-content">
          <h1>Harish Bunga</h1>
          <p>Age: 27 <br /><br /> Mobile no.: +91 9848012929 <br /><br /> Job: UI&UX designer in UML organization <br /><br /> Hobbies: watching movies, playing cricket, and video games <br /></p>
          <div className="row">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-youtube"></i></a>
            <a href="#"><i className="fa fa-whatsapp"></i></a>
          </div>
        </div>
      </div>


      <div className="card">
        <img src="/Groom2.jpg" alt="Groom2" />
        <div className="card-content">
          <h1>Srinivas Kumba</h1>
          <p>Age: 28 <br /><br /> Mobile no.: +91 8897458225 <br /><br /> Job: Tester in congibot organization <br /><br /> Hobbies: watching movies, playing cricket, and book reading <br /></p>
          <div className="row">
            <a href="#"><i className="fa fa-facebook"></i></a>
            <a href="#"><i className="fa fa-instagram"></i></a>
            <a href="#"><i className="fa fa-youtube"></i></a>
            <a href="#"><i className="fa fa-whatsapp"></i></a>
          </div>
        </div>
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
    );
}

