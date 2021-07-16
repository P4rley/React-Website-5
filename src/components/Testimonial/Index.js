import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import {
  TestimonialContainer,
  TestimonialWrapper,
  TestimonialCard,
  TestimonialData,
  TestimonialImg,
  TestimonialProfile,
  TestimonialName,
  TestimonialJob,
  TestimonialDesc,
} from "./TestimonialElements";

import SwiperCore, { Pagination } from "swiper/core";

SwiperCore.use([Pagination]);

function Testimonial() {
  return (
    <>
      <TestimonialContainer id="testimonial">
        <TestimonialWrapper>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
          >
            <SwiperSlide>
              <TestimonialCard>
                <TestimonialData>
                  <TestimonialImg />
                  <TestimonialProfile>
                    <TestimonialName>Rebecca</TestimonialName>
                    <TestimonialJob>Owner of Hula-hula</TestimonialJob>
                  </TestimonialProfile>
                </TestimonialData>
                <TestimonialDesc>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  corporis rerum, ad repellat ducimus deleniti blanditiis qui
                  illum voluptatem beatae."
                </TestimonialDesc>
              </TestimonialCard>
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard>
                <TestimonialData>
                  <TestimonialImg />
                  <TestimonialProfile>
                    <TestimonialName>Rebecca</TestimonialName>
                    <TestimonialJob>Owner of Hula-hula</TestimonialJob>
                  </TestimonialProfile>
                </TestimonialData>
                <TestimonialDesc>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  corporis rerum, ad repellat ducimus deleniti blanditiis qui
                  illum voluptatem beatae."
                </TestimonialDesc>
              </TestimonialCard>
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard>
                <TestimonialData>
                  <TestimonialImg />
                  <TestimonialProfile>
                    <TestimonialName>Rebecca</TestimonialName>
                    <TestimonialJob>Owner of Hula-hula</TestimonialJob>
                  </TestimonialProfile>
                </TestimonialData>
                <TestimonialDesc>
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  corporis rerum, ad repellat ducimus deleniti blanditiis qui
                  illum voluptatem beatae."
                </TestimonialDesc>
              </TestimonialCard>
            </SwiperSlide>
          </Swiper>
        </TestimonialWrapper>
      </TestimonialContainer>
    </>
  );
}

export default Testimonial;
