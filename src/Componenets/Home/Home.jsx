import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import './Home.css'
function Home() {
  return (
    <>
      <div className="fullscreen-bg"></div>

        <div className="m-3 fw-bold fs-5 text-secondary">TOP PICKS</div>
      <div className="container-fluid pt-3 bg-light text-center ">
        <div className="row p-2 gap-5 d-flex justify-content-center">
          <div className="col-md-3">
            <Link to="/efiling" className="text-decoration-none">
              <div className="card shadow bg-light text-dark border border-dark p-3">
                <img
                  className="card-image-top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYfjfwChyuT8LxMzAxede28TsHDTlJVqdlzA&s"
                  alt=""
                />
                <h5 className="card-title">e Filing</h5>
                <p className="card-text">File cases easily ...</p>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/ecommitee" className="text-decoration-none">
              <div className="card bg-light text-dark border border-dark p-3">
                <img
                  className="card-image-top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKi5lknrw7SIwZ01RQRqyvtXz2bFxrUsGVpA&s"
                  alt=""
                />
                <h5 className="card-title">e Committee</h5>
                <p className="card-text">File cases easily ...</p>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/status" className="text-decoration-none">
              <div className="card bg-light text-secondary border border-dark btn p-3">
                <img
                  className="card-image-top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTehXRqt5CJ24R8uMrI06RvxZ6rRYsYo1qvzg&s"
                  alt=""
                />
                <h5 className="card-title">Status</h5>
                <p className="card-text">Check status easily ...</p>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/status" className="text-decoration-none">
              <div className="card bg-light text-secondary border border-dark btn p-3">
                <img
                  className="card-image-top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt5ryBDA_Ow-wPDGgsRGegarWjLzN763rTlQ&s"
                  alt=""
                />
                <h5 className="card-title">Status</h5>
                <p className="card-text">Check status easily ...</p>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/status" className="text-decoration-none">
              <div className="card bg-light text-secondary border border-dark btn p-3">
                <img
                  className="card-image-top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2DbbbXHV86ZqzUvJlVH1i74-Ub2nt2RpZQ&s"
                  alt=""
                />
                <h5 className="card-title">Status</h5>
                <p className="card-text">Check status easily ...</p>
              </div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/status" className="text-decoration-none">
              <div className="card bg-light text-secondary border border-dark btn p-3">
                <img
                  className="card-image-top"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX2DbbbXHV86ZqzUvJlVH1i74-Ub2nt2RpZQ&s"
                  alt=""
                />
                <h5 className="card-title">Status</h5>
                <p className="card-text">Check status easily ...</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
