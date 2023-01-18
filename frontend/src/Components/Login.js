import React from 'react'
import { FaFacebookSquare, FaTwitterSquare, FaGoodreads } from "react-icons/fa";
import "../Styles/Login.css"
const Login = () => {
  return (
    <div className="body">
      <div className="container">
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card py-3 px-2">
              <p className="text-center mb-3 mt-2">SE CONNECTER AVEC</p>
              <div className="row mx-auto ">
                <div className="col-4">
                <a href='https://twitter.com/' target="_blanc" >
                  <FaTwitterSquare className="fab fa-twitter" />
                  </a>
                </div>
                <div className="col-4">
                <a href='https://www.facebook.com/' target='_blanc' >
                  <FaFacebookSquare className="fab fa-facebook" />
                  </a>
                </div>
                <div className="col-4">
                <a href='https://www.google.com/' target='_blanc'>
                  <FaGoodreads className="fab fa-google" />
                  </a>
                
                </div>
              </div>
              <div className="division">
                <div className="row">
                  <div className="col-3">
                    <div className="line l" />
                  </div>
                  <div className="col-3">
                    <div className="line r" />
                  </div>
                </div>
              </div>
              <form className="myform">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Mot de passe"
                    
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 col-12"></div>
                </div>
                <div className="form-group mt-3">
                  <button
                    type="button"
                    className="btn btn-block btn-primary btn-lg"
                    
                  >
                    <small>
                      <i className="far fa-user pr-2" />
                      Se connecter
                    </small>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
