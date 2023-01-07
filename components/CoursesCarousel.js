/* eslint-disable @next/next/no-img-element */
// React
import { useState, useEffect } from "react";

// NextJS
import Link from "next/link";

// External Libraries
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper";

export default function CoursesCarousel({ courses }) {
    return (
        <>
            <Swiper
                slidesPerView={2}
                navigation={true}
                modules={[Navigation]}
                centeredSlides={true}
                className="h-80 hidden lg:block"
            >
                {courses.map((e, i) => {
                    return (
                        <SwiperSlide
                            key={i}
                            className="h-full flex items-center justify-center"
                        >
                            <div className="card w-full h-60 bg-slate-50 border-primary border-2">
                                <div className="card-head h-[100%] flex items-center justify-center bg-secondary">
                                    <h2 className="text-5xl mb-5 text-center text-white font-thin">
                                        {e.course_code}
                                    </h2>
                                </div>

                                <div className="h-[40%] p-8 card-body hidden">
                                    <h4 className="text-xl">{e.name}</h4>
                                    <div className="flex justify-end">
                                        <Link href={"/" + e.course_code}>
                                            <div className="bg-primary text-white p-3 btn">
                                                <ArrowForwardSharpIcon />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
            <Swiper
                slidesPerView={1}
                navigation={true}
                modules={[Navigation]}
                centeredSlides={true}
                className="h-80 lg:hidden"
            >
                {courses.map((e, i) => {
                    return (
                        <SwiperSlide
                            key={i}
                            className="h-full flex items-center justify-center"
                        >
                            <div className="card w-full h-60 bg-slate-50 border-primary border-2">
                                <div className="card-head h-[100%] flex items-center justify-center bg-secondary">
                                    <h2 className="text-5xl mb-5 text-center text-white">
                                        {e.course_code}
                                    </h2>
                                </div>

                                <div className="h-[40%] p-8 card-body hidden">
                                    <h4 className="text-xl">{e.name}</h4>
                                    <div className="flex justify-end">
                                        <div className="bg-primary text-white p-3 btn">
                                            <ArrowForwardSharpIcon />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}
