import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer>
             <div class="contenthead">


<h4> About </h4>

<div class="subheading">

  <ul>
    <li>FAQS</li>
    <li>Privacy Policy</li>
    <li> Pricing, Delivery, Return and Refund Policy</li>
    <li>Terms and Conditions</li>
  </ul>
</div>
</div>


<div class="contenthead">

<h4> Help </h4>
<div class="subheading">
  <ul>
    <li> Contact Us</li>
    <li> About Us</li>
    <li> Pickup Points</li>
  </ul>
</div>

</div>

<div class="contenthead">

<h4> Get Social With Us</h4>

<div class="subheading1">
  <ul>
    <Link><Link href="" id="fb" class="footer-social"><i class="fa-brands fa-facebook fa-lg"></i></Link></Link>
    <Link><Link href="" id="tw" class="footer-social"><i class="fa-brands fa-twitter fa-lg"></i></Link></Link>
    <Link><Link href="" id="in" class="footer-social"><i class="fa-brands fa-instagram fa-lg"></i></Link></Link>
    <Link><Link href="" id="in" class="footer-social"><i class="fa-brands fa-youtube-square fa-lg"></i></Link></Link>
  </ul>
</div>


</div>
        </footer>
        
    )
}

export default Footer;