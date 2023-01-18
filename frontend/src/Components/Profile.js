import React from 'react'
import "../Styles/Profile.css"
import '../assets/portrait.jpg';
const Profile = () => {
  return (
    <div>
      <div className="body">
        <div className="card-container">
          <img
            className="round"
            src="portrait.jpg"
            alt="user"
          />
          <h3>email</h3>
          <h6>New York</h6>
          <p>
           j'ai beaucoup passioneé de jardinage <br /> Agriculteur
          </p>
          <div className="buttons">
            <button className="primary">Message</button>
            <button className="primary ghost">Following</button>
          </div>
          <div className="skills">
            <h6>Skills</h6>
            <ul>
              <li>Multiplication végètale</li>
              <li>fertilisation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
