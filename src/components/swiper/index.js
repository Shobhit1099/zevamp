import React from "react";
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
        <Col>
          <SwiperSlide>
            <Testimonial
              image={user1}
              name="Sachin Kaul"
              data="Would love to appreciate the idea that addresses some legit student/work life problems in self development and growth."
            />
          </SwiperSlide>
        </Col>
        <Col>
          <SwiperSlide>
            <Testimonial
              image={user2}
              name="Shivansh"
              data="When the pandemic is limiting socialization, a platform like this can help students and professionals to connect with each other and develop themselves without any restrictions. "
            />
          </SwiperSlide>
        </Col>
        <Col>
          <SwiperSlide>
            <Testimonial image={user3} name="Shreya" data="Amazing hour. A great utilization of the online platform." />
          </SwiperSlide>
        </Col>
      </Swiper>
    </Row>
  );
}
