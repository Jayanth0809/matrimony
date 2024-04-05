
import './bride.css'


function Bride(){

    return(
        <div className="Bride">
        <div className="header">
            <nav>
            <a href="#" className="title">
                <h1>Online Matrimony</h1>
            </a>
            <ul className="main">
                <li><a href="/">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            </nav>
        </div>
      
        <div className="card">
            <img src="/Bride (1).jpg" alt="Bride1" />
            <div className="card-content">
            <h1>Deepa Allam</h1>
            <p>Age: 25 <br /><br /> Mobile no.: +91 9968595644 <br /><br /> Job: Developer in well tech organization <br /><br /> Hobbies: watching movies, cooking, and video games <br /></p>
            <div className="row">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-instagram"></i></a>
                <a href="#"><i className="fa fa-youtube"></i></a>
                <a href="#"><i className="fa fa-whatsapp"></i></a>
            </div>
            </div>
        </div>
      
        <div className="card">
            <img src="/Bride (2).jpg" alt="Bride2" />
            <div className="card-content">
            <h1>Santhoshi Chintha</h1>
            <p>Age: 26 <br /><br /> Mobile no.: +91 9988877677 <br /><br /> Job: Tester in mangrow organization <br /><br /> Hobbies: watching movies, cooking, and make friends <br /></p>
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
    )
}

export default Bride