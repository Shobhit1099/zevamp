import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Row, Col } from "antd";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation } from "swiper";
import Testimonial from "../testimonial";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpeg";
import user3 from "../../assets/images/users/user3.jpeg";
import { useMediaQuery } from "react-responsive";

SwiperCore.use([Navigation]);

export default function SwiperCard() {
  const isTooSmall = useMediaQuery({ query: "(max-width: 576px)" });
  const isTooMuchSmall = useMediaQuery({ query: "(max-width: 476px)" });
  const isSmallest = useMediaQuery({ query: "(max-width: 400px)" });
  const [items, setItems] = useState()
  
  useEffect(() => {
    fetch("https://zevamp.herokuapp.com/home")
      .then((res) => res.json())
      .then((data) => setItems(data));
  });

  return (
    <Row>
      <Swiper
        style={{ padding: "5px 0px" }}
        centeredSlides
        slidesPerView={
          isTooSmall ? (isTooMuchSmall ? (isSmallest ? 1.3 : 1.5) : 1.8) : 2
        }
        initialSlide="1"
        spaceBetween={isTooMuchSmall ? (isSmallest ? 20 : 30) : 40}
        className="mySwiper"
      >
        {items && items.testimonials.map((item) => {
          return (
            <Col>
              <SwiperSlide>
                <Testimonial
                  image={item.img}
                  name={item.uname}
                  data={item.review}
                  rate={item.rate}
                />
              </SwiperSlide>
            </Col>
          );
        })}
      </Swiper>
    </Row>
  );
}
