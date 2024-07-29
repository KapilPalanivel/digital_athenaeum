import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import './Home.css'

function Home() {
  return (
    <>
      <div className="fullscreen-bg"></div>

      <div className="m-3 fw-bold fs-5 text-secondary">TOP PICKS</div>
      <div className="container-fluid pt-3 bg-light text-center">
        <div className="row p-2 gap-5 d-flex justify-content-center">
          <div className="col-md-3">
            <Link to="/efiling" className="text-decoration-none">
              <div className="card shadow bg-light text-dark border border-dark p-3">
                <img
                  className="card-image-top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYfjfwChyuT8LxMzAxede28TsHDTlJVqdlzA&s"
                  alt="e Filing"
                />
                <h5 className="card-title">1984</h5>
                <p className="card-text">A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.</p>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/ecommitee" className="text-decoration-none">
              <div className="card bg-light text-dark border border-dark p-3">
                <img
                  className="card-image-top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKi5lknrw7SIwZ01RQRqyvtXz2bFxrUsGVpA&s"
                  alt="e Committee"
                />
                <h5 className="card-title">The Great Gatsby</h5>
                <p className="card-text">A novel set in the Jazz Age that tells the story of Jay Gatsby's unrequited love for Daisy Buchanan.</p>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/status" className="text-decoration-none">
              <div className="card bg-light text-secondary border border-dark p-3">
                <img
                  className="card-image-top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTehXRqt5CJ24R8uMrI06RvxZ6rRYsYo1qvzg&s"
                  alt="Status"
                />
                <h5 className="card-title">Moby-Dick</h5>
                <p className="card-text">An epic tale of the voyage of the  led by Captain Ahab, who is obsessed with revenge </p>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/status" className="text-decoration-none">
              <div className="card bg-light text-secondary border border-dark p-3">
                <img
                  className="card-image-top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt5ryBDA_Ow-wPDGgsRGegarWjLzN763rTlQ&s"
                  alt="Status"
                />
                <h5 className="card-title">Pride and Prejudice</h5>
                <p className="card-text">Pride and Prejudice follows Elizabeth Bennet as she deals with issues of manners, upbringing, morality, education, and marriage in the society of the landed gentry of the British Regency.</p>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/status" className="text-decoration-none">
              <div className="card bg-light text-secondary border border-dark p-3">
                <img
                  className="card-image-top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL8BkaBEt1ILfMxRfzF7WrA6PHUYjIcTS52Q&s"
                  alt="Status"
                />
                <h5 className="card-title">Ponniyin Selvan</h5>
                <p className="card-text">Ponniyin Selvan is a Tamil historical novel by Kalki Krishnamurthy, written in five volumes, that narrates the story of Arulmozhivarman, who later became Rajaraja Chola.</p>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/status" className="text-decoration-none">
              <div className="card bg-light text-secondary border border-dark p-3">
                <img
                  className="card-image-top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7kjcU0YPcXhUW3ehAN1oSKbLBGppTWhydMA&s"
                  alt="Status"
                />
                <h5 className="card-title">Thirukkural</h5>
                <p className="card-text">Thirukkural is a classic Tamil language text consisting of 1,330 couplets or Kurals. The text is divided into: Aram (virtue), Porul (wealth), and Inbam (love) it covers a wide range aspects.</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
  