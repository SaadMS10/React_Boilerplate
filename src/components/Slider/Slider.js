import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Slider.scss"
import deliver from "../../assets/images/delivery.png";
import track from "../../assets/images/track.png";
import sale from "../../assets/images/sale.png";
import payment from "../../assets/images/payment.png";
import headset from "../../assets/images/headset.png";
import hand from "../../assets/images/hand.png";
import returnpolicy from "../../assets/images/returnpolicy.png";
const Slide = () => {
  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={true}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 4,
            partialVisibilityGutter: 0,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div className="car">
          <img src={deliver} />
          <h3>Free Shipping Worldwide</h3>
        </div>
        <div className="car">
          <img src={hand} />
          <h3>Easy Return Policy</h3>
        </div>
        <div className="car">
          <img src={returnpolicy} />
          <h3>7 Day Exchange Policy</h3>
        </div>
        <div className="car">
          <img src={sale} />
          <h3>Weekend Discount Coupon</h3>
        </div>
        <div className="car">
          <img src={payment} />
          <h3>Secure Payments Methods</h3>
        </div>
        <div className="car">
          <img src={track} />
          <h3>Track Your Order</h3>
        </div>
        <div className="car">
          <img src={headset} />
          <h3>24/7 Customer Support</h3>
        </div>
      </Carousel>
    </>
  );
};
export default Slide;
