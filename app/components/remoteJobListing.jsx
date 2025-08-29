"use client"

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useMediaQuery } from 'react-responsive';





const RemoteJobListings = () => {
    const jobs = [
        {
            category: "HR & Recruiting",
            company: "Reeds Groups",
            title: "Data Entry And Typing. - Custom Athlete Apparel",
            logo: "/logos/reeds.png", // Replace with real image path or placeholder
            posted: "3 days ago",
        },
        {
            category: "Legal & Compliance",
            company: "Latitude",
            title: "California Employment Attorney - Custom Athlete Apparel",
            logo: "/logos/latitude.png",
            posted: "3 days ago",
        },
        {
            category: "Writing, Editing & Content",
            company: "DataCamp",
            title: "Data Science Editor - Custom Athlete Apparel",
            logo: "/logos/datacamp.png",
            posted: "6 days ago",
        },
        {
            category: "Design & Creative",
            company: "Clutch Merchandise LLC",
            title: "Graphic Designer (VA) - Custom Athlete Apparel",
            logo: "/logos/clutch.png",
            posted: "19 hours ago",
        },
        {
            category: "Design & Creative",
            company: "Clutch Merchandise LLC",
            title: "Graphic Designer (VA) - Custom Athlete Apparel",
            logo: "/logos/clutch.png",
            posted: "19 hours ago",
        },
        {
            category: "Design & Creative",
            company: "Clutch Merchandise LLC",
            title: "Graphic Designer (VA) - Custom Athlete Apparel",
            logo: "/logos/clutch.png",
            posted: "19 hours ago",
        },
        {
            category: "Design & Creative",
            company: "Clutch Merchandise LLC",
            title: "Graphic Designer (VA) - Custom Athlete Apparel",
            logo: "/logos/clutch.png",
            posted: "19 hours ago",
        },
        {
            category: "Design & Creative",
            company: "Clutch Merchandise LLC",
            title: "Graphic Designer (VA) - Custom Athlete Apparel",
            logo: "/logos/clutch.png",
            posted: "19 hours ago",
        },
    ];




    // Helper to chunk the jobs into groups of 3 (or any number)
    const chunkArray = (arr, size) =>
        arr.reduce((acc, _, i) => {
            if (i % size === 0) acc.push(arr.slice(i, i + size));
            return acc;
        }, []);

    const isMobile = useMediaQuery({ maxWidth: 640 }); // Tailwind sm breakpoint
    const jobsPerSlide = isMobile ? 1 : 4;
    const jobChunks = chunkArray(jobs, jobsPerSlide);

    return (
        <section className="py-10 bg-white text-center">
            <h2 className="text-3xl font-bold mb-2">Recent</h2>
            <h3 className="bg-blue-500 text-white inline-block px-6 py-2 rounded text-xl font-semibold mb-6">
                Remote Job Listings
            </h3>

            <Carousel
                // showArrows={false}
                autoPlay
                infiniteLoop
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                interval={2000}
            >
                {jobChunks.map((chunk, i) => (
                    <div key={i} className="flex flex-wrap justify-center gap-6 px-4">
                        {chunk.map((job, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow border w-[85%] lg:w-full sm:w-[270px] text-left"
                            >
                                <div className="bg-blue-500 text-white font-bold text-sm px-4 py-2 flex justify-between items-center rounded-t">
                                    {job.category}
                                    <span>➔</span>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <img
                                            src={job.logo}
                                            alt={job.company}
                                            className="w-8 h-8 rounded-full object-cover"
                                        />
                                        <p className="font-medium">{job.company}</p>
                                    </div>
                                    <p className="font-semibold mb-4">{job.title}</p>
                                    <p className="text-sm text-blue-500 flex items-center gap-1">
                                        <span>🕒</span> {job.posted}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </Carousel>

            <button className="mt-3 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded">
                Show All Jobs
            </button>
        </section>
    );
}


export default RemoteJobListings;