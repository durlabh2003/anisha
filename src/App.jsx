import React from 'react';
import './ProfileCard.css';

const App = () => {
  return (
    <div className="profile-card">
      <div className="header">
        <img src="src\assets\Profile.png" alt="Profile Avatar" className="avatar" />
        <h2>Anisha Agarwal</h2>
        <p>Founder & Stylist at Studio Allspice</p>
        <div className="contact">
          <div className="item">
            <span>9588948479</span>
            <a href="tel:+919588948479">Call</a>
          </div>
          <div className="item">
            <span>studioallspice.in@gmail.com</span>
            <a href="mailto:studioallspice.in@gmail.com">Email</a>
          </div>
        </div>
      </div>

      <div className="section">
        <h3>About Priya Gupta</h3>
        <p>A multi-set studio for rentals, all types of photo and video shoots, workshops and styling. Get end-to-end support or customisation along with the space!</p>
      </div>

      <div className="section">
        <h3>Company’s Portfolio</h3>
        <a href="https://firebasestorage.googleapis.com/v0/b/tapinfi-web-23914.firebasestorage.app/o/User'sDocs%2FAnishaAgarwal%2FStudio%20Allspice.pdf?alt=media&token=57937225-c8db-473e-a9b8-658d0485a513" className="portfolio">Company Brochure</a>
      </div>

      <div className="section">
        <h3>Social Links</h3>
        <div className="social">
          <a href="https://maps.app.goo.gl/fYkemZ1Gg8SfJJJm6?g_st=com.google.maps.preview.copy"><img src="src\assets\Location.png" alt="Location" /></a>
          <a href="https://www.instagram.com/studioallspice?igsh=MTk0bmZrOXR1NDE0MA%3D%3D&utm_source=qr"><img src="src\assets\Instagram.png" alt="Instagram" /></a>
          <a href="https://studioallspice.com/"><img src="src\assets\World-wide-web.png" alt="Website" /></a>
        </div>
      </div>

      <div className="footer">
        Powered by : <span><a href="wwww.tapinfi.com">Tapinfi Solutions Pvt Ltd</a></span>
      </div>
    </div>
  );
};

export default App;