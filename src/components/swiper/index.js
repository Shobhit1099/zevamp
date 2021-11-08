import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Row, Col } from "antd";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import SwiperCore, { Navigation } from "swiper";
import Testimonial from "../testimonial";
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.png";
import { useMediaQuery } from "react-responsive";

SwiperCore.use([Navigation]);

export default function SwiperCard() {
  const isTooSmall = useMediaQuery({ query: "(max-width: 600px)" });
  return (
    <Row>
      <Swiper
        centeredSlides
        slidesPerView={isTooSmall ? 1 : 2}
        initialSlide="1"
        spaceBetween={40}
        navigation={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <Col>
          <SwiperSlide>
            <Testimonial image={user3} name="Sachin Kaul" />
          </SwiperSlide>
        </Col>
        <Col>
          <SwiperSlide>
            <Testimonial image={user2} name="Shivakant" />
          </SwiperSlide>
        </Col>
        <Col>
          <SwiperSlide>
            <Testimonial image={user1} name="Shreya" />
          </SwiperSlide>
        </Col>
      </Swiper>
    </Row>
  );
}
