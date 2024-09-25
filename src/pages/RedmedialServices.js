import React from 'react';
import paintingImage from '../assets/headerimage.png';
import galary1Image from '../assets/industrialpainting.png';
import galary2Image from '../assets/governmentpainting.jpg';
import galary3Image from '../assets/hotelpainting.png';
import galary4Image from '../assets/warehouse.png';
import galary5Image from '../assets/heritage.png';
import galary6Image from '../assets/highrisepainting.png';
import galary7Image from '../assets/officepainting.png';
import galary8Image from '../assets/stratapainting.png';
import remedialImage from '../assets/painticon.png';
import remedial1Image from '../assets/facaderestore.png'
import scafoldImage from '../assets/scafolding.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrowelBricks } from '@fortawesome/free-solid-svg-icons';

export const RedmedialServices = () => {
  return (
    <div className='container-1'>
    <section className='painting-service'>
      <img src={paintingImage} alt="painting-service" />
      
    </section>
    
    <section>
    <div className='painting'>
        <h1><span className="underline">Remedial</span> Building Services Sydney</h1>
        <p>Structural integrity is important for <b>high-rise buildings in Sydney</b> due to the place’s unique weather and environmental makeup. At CPR Facade Upgrades, 
          we deliver various remedial services to ensure the effective provision of maintenance and <b>remedial works for high-rise buildings.</b> 
          From concrete cancer repair to façade restorations, our solution maintains value and functionality.</p>
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
        <h1><span className="underline">Get FREE Inspection</span>  & Quote For</h1>
      </div>
      </section>

      <section class="remedialpainting-services">
  <div class="remedialpainting-service-item">
    <div class="remedialpainting-icon">
      <img src={remedialImage} alt="Concrete Repairs Icon" />
    </div>
    <h3>Concrete Repairs</h3>
    <p>Concrete may be one of the basic building materials used in every residential and commercial structure, but with age, it wears down, spills, and suffers from concrete cancer. 
      Such issues shall be sorted promptly and effectively through our <b>concrete repair services.</b> We repair cracks to their original integrity, 
      preventing further damage. Our team is skilled at finding the source of concrete deterioration and providing a permanent solution to keep your building stable and safe.</p>
    <a href="/contact">Enquire Now</a>
  </div>

  <div class="remedialpainting-service-item">
    <div class="remedialpainting-icon">
      <img src={remedial1Image} alt="Facade Restoration Icon" />
    </div>
    <h3>Facade Restoration</h3>
    <p>Our <b>façade restorations</b> range from repairs to damaged cladding to replacing protective coatings. We also work on the improvement of the aesthetic qualities, as well as 
      increasing the strength of the residential building's exterior. This will be done using state-of-the-art materials and techniques so that your façade looks its absolute 
      best while being prepared for tomorrow.</p>
    <a href="/contact">Enquire Now</a>
  </div>

  <div class="remedialpainting-service-item">
    <div class="remedialpainting-icon">
    <FontAwesomeIcon icon={faTrowelBricks} size="5x" color='#2c7aca' />
    </div>
    <h3>Building Maintenance</h3>
    <p>Our maintenance services prolong the life of your building and ensure it functions at its best.</p>
    <a href="/contact">Enquire Now</a>
  </div>

  <div class="remedialpainting-service-item">
    <div class="remedialpainting-icon">
      <img src={scafoldImage} alt="Structural Building Repairs Icon" />
    </div>
    <h3>Structural Building Repairs</h3>
    <p>Our structural repair services ensure the safety and longevity of your building.</p>
    <a href="/contact">Enquire Now</a>
  </div>
</section>
</div>
  )
}
