import React from 'react'

function UserViews() {
  const style = {
    color: '#000'
  }
  
  return (
    <div>  
<div className="col-lg-12 pt-5 pb-5 bg-dark text-light">
  <div id="client-testimonial-carousel" className="carousel slide" data-ride="carousel" style={{minHight:'200px'}}>
    <div className="carousel-inner" role="listbox">
		{/* <!-- <div className="shopper"><h3 className="shoppers">What our shoppers are saying about us</h3></div> --> */}
      <div className="carousel-item active text-center p-4">
        <blockquote className="blockquote text-center">
          <p className="mb-0"><i className="fa fa-quote-left"></i> I'll like to commend your team on team on for the great customer service, you've definitely set the standard
          </p>
          <footer className="blockquote-footer pt-5"> Ola David (Lagos, Nigeria)</footer>
          {/* <!-- Client review stars --> */}
          {/* <!-- "fas fa-star" for a full star, "far fa-star" for an empty star, "far fa-star-half-alt" for a half star. --> */}
          <p className="client-review-stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
            <i className="far fa-star"></i>
          </p>
        </blockquote>
      </div>
      <div className="carousel-item text-center p-4">
        <blockquote className="blockquote text-center">
          <p className="mb-0"><i className="fa fa-quote-left"></i> Am so much in love with your Euphorya design, It so beautiful. i received it today. Thank you for delivering on time.
          </p>
          <footer className="blockquote-footer pt-5"> Chima Obilor (New York, USA)</footer>
          {/* <!-- Client review stars --> */}
          {/* <!-- "fas fa-star" for a full star, "far fa-star" for an empty star, "far fa-star-half-alt" for a half star. --> */}
          <p className="client-review-stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </p>
        </blockquote>
      </div>
      <div className="carousel-item text-center p-4">
        <blockquote className="blockquote text-center">
          <p className="mb-0"><i className="fa fa-quote-left"></i> I just received my Ecstasy wear i love it!! it fits to perfection
          </p>
          <footer className="blockquote-footer pt-5"> Nonso Ebuka (Onitsha, Anambra)</footer>
          {/* <!-- Client review stars --> */}
          {/* <!-- "fas fa-star" for a full star, "far fa-star" for an empty star, "far fa-star-half-alt" for a half star. --> */}
          <p className="client-review-stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
          </p>
        </blockquote>
      </div>
    </div>
    <ol className="carousel-indicators indicz">
      <li data-target="#client-testimonial-carousel" data-slide-to="0" className="active"></li>
      <li data-target="#client-testimonial-carousel" data-slide-to="1"></li>
      <li data-target="#client-testimonial-carousel" data-slide-to="2"></li>
    </ol>
  </div>
</div>
<div className="container-fluid">
  <div className="row instagram">
    <p className="miss" style={{marginTop:'60px'}}>don't miss that #StyleSteal</p>
    <p className="feed" style={style}>Shop our instagram feed</p>
    <button id="instaButton"> shop instagram </button>
  </div>
</div>

    </div>
  )
}

export default UserViews
