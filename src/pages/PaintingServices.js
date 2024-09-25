import React from 'react';
import '../Painting.css';
import paintingImage from '../assets/image1.png';
import galary1Image from '../assets/industrialpainting.png';
import galary2Image from '../assets/governmentpainting.jpg';
import galary3Image from '../assets/hotelpainting.png';
import galary4Image from '../assets/warehouse.png';
import galary5Image from '../assets/heritage.png';
import galary6Image from '../assets/highrisepainting.png';
import galary7Image from '../assets/officepainting.png';
import galary8Image from '../assets/stratapainting.png';

export const PaintingServices = () => {

  
  return (
    <div className='container-1'>
<section className='painting-service'>
  <img src={paintingImage} alt="painting-service" />
  
</section>

<section>
<div className='painting'>
    <h1><span className="underline">Repainting</span> Services at APZ</h1>
    <p>At APZ, we follow a simple and efficient process to ensure that your painting project is completed on time and within budget. Our process includes:</p>
  </div>
  </section>

  <section class="service-gallery">
  <div class="image-container">
    <div class="image-box">
      <img src={galary1Image} alt="Industrial" />
      <div class="overlay">
        <h3>Industrial Painting</h3>
      </div>
    </div>
    <div class="image-box">
      <img src={galary2Image} alt="government" />
      <div class="overlay">
        <h3>Government Painting</h3>
      </div>
    </div>
    <div class="image-box">
      <img src={galary3Image} alt="Administration Buildings" />
      <div class="overlay">
        <h3>Hotel Painting</h3>
      </div>
    </div>
    <div class="image-box">
      <img src={galary4Image} alt="warehouse" />
      <div class="overlay">
        <h3>Warehouse Painting</h3>
      </div>
    </div>
    <div class="image-box">
      <img src={galary5Image} alt="Embassies" />
      <div class="overlay">
        <h3>Heritage Painting</h3>
      </div>
    </div>
    <div class="image-box">
      <img src={galary6Image} alt="Embassies" />
      <div class="overlay">
        <h3>High-Rise Painting</h3>
      </div>
    </div>
    <div class="image-box">
      <img src={galary7Image} alt="Embassies" />
      <div class="overlay">
        <h3>Office Painting</h3>
      </div>
    </div>
    <div class="image-box">
      <img src={galary8Image} alt="Embassies" />
      <div class="overlay">
        <h3>Strata Painting</h3>
      </div>
    </div>
  </div>
</section>

<section>
<div className='painting'>
    <h1><span className="underline">What</span> APZ Offers</h1>
    <p>Twenty-six years in the painting business means Facade Upgrade Specialists has a deep understanding of client needs. We know that providing a professional process – on time and on budget – is just as important as delivering a flawless final result.

Facade Upgrade Specialists works with building managers, Strata managers and owner’s corporation to ensure a hassle-free project that involves minimal stress and inconvenience for tenants and residents. We specialise in reviving multi-storey buildings for Strata government and commercial which include hospitals, sport stadiums, airports, industrial facilities as well as civil structures such as bridges and piers.

However challenging the job is, our team have the depth of engineering and technical experience to complete work safely in any difficult environment. We do not use subcontractors. Our dedicated staff manages every aspect of the entire job – from the initial consultation to final completion.

We also offer the latest in painting technology, together with rigorous processes and exemplary customer service</p>
  </div>
  </section>

  </div>
  )
}
export default PaintingServices;
