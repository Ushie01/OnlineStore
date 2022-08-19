import React from 'react'
import LogoFacebook from '../assets/logo-facebook.svg'
import LogoTwitter from '../assets/logo-twitter.svg'
import LogoInstagram from '../assets/logo-instagram.svg'
import Call from '../assets/call.svg'
import Help from '../assets/help.svg'


const Footer = () => {
  return (
    <div>
      {/* <!-- Footer --> */}


<div className="container-fluid">
    <div className="row fooTTer">
    <div className="socialMedia footter1">
      <p className="upSocial">Euphurya Brand</p>
						<p className="lowerSocial">
							<img src={LogoFacebook} className="img-fluid faceBook" alt="" />
							<img src={LogoTwitter} className="img-fluid twiTTer" alt="" />
							<img src={LogoInstagram} className="img-fluid instaGram" alt="" />
						</p>
						<p className="upP">
							Euphorya is an independent online retailer offering variety of
							products ranging from branded products, stock from other retailers
							to its own label ‘T5S’.
						</p>
    </div>
    <div className="conTactUs footter1">
		<p className="contc">Contact Us</p>
			<div className="addr1">
				<p><img src= {Call} alt="" className="tactUs " /></p>
				<p className="address">Ikeja Lagos, Nigeria</p>
				<p className="address">e-mail:euphurya.brand@gmail.com</p>
				<p className="address">www.euphuryabrand</p>
			</div>
	</div>
    <div className="helpSupport footter1">
		<p className="helpS">Help & Support</p>
			<div className="divv">
				<p><img src={Help} alt="" className="tactUs " /></p>
				<p className="hel">Frequently ask question</p>
				<p className="hel">delivery</p>
				<p className="hel">privacy and policy</p>
				<p className="hel">terms and condition</p>
			</div>
	</div>
    <div className="subcription footter1"><p className="suB">Subscribe:</p>
		<p className="eMail"><input type="text" placeholder="e-mail" /></p></div>
  </div>
  </div>
</div>
  )
}

export default Footer
