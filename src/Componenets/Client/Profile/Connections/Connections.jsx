import React from 'react';
import './Connections.css';

const Connections = () => {
  return (
    <div className="tab-pane fade" id="account-connections">
      <div className="card-body">
        <button type="button" className="btn btn-twitter">Connect to <strong>Twitter</strong></button>
      </div>
      <hr className="border-light m-0" />
      <div className="card-body">
        <h5 className="mb-2">
          <a href="javascript:void(0)" className="float-right text-muted text-tiny"><i className="ion ion-md-close"></i> Remove</a>
          <i className="ion ion-logo-google text-google"></i>
          You are connected to Google
        </h5>
        nmaxwell@mail.com
      </div>
      <hr className="border-light m-0" />
      <div className="card-body">
        <button type="button" className="btn btn-facebook">Connect to <strong>Facebook</strong></button>
      </div>
      <hr className="border-light m-0" />
      <div className="card-body">
        <button type="button" className="btn btn-instagram">Connect to <strong>Instagram</strong></button>
      </div>
    </div>
  );
};

export default Connections;
