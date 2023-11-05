/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";

import "./hero.css";
import { Link } from "react-scroll";

const features = [
  {
    id: 1,
    title: "High-Definition Live Imaging",
    desc: "Experience the depths like never before with a live HD camera and advanced lighting system, providing crystal-clear visuals for wired communication. Immerse yourself in the underwater world in real-time.",
    img: "/Live.png",
  },
  {
    id: 2,
    title: "Precision Control with 5 Degrees of Freedom",
    desc: "Our ROV boasts 5 Degrees of Freedom (5-DoF) through a vectored thruster configuration, allowing precise maneuverability in every direction. Explore underwater environments with ease and agility",
    img: "/Precision.png",
  },
  {
    id: 3,
    title: "Powerful Propulsion",
    desc: "Equipped with six high-performance 130W motors, each delivering 1.6 kg of thrust, our ROV ensures efficient propulsion and rapid response to your commands. Traverse currents and conquer underwater challenges effortlessly.",
    img: "/pp1.png",
  },
  {
    id: 4,
    title: "Modular Expandability",
    desc: "Designed with a modular frame, our ROV allows for easy customization and expandability. Adapt the system to meet your specific exploration needs and integrate additional sensors or equipment seamlessly.",
    img: "/SCALABILITY.png",
  },
  {
    id: 5,
    title: "Intuitive Controller Software",
    desc: "Our integrated controller software draws inspiration from industry-leading solutions like Ardusub, Ardupilot, and QGroundControl. Enjoy user-friendly interfaces and robust functionality for seamless operation.",
    img: "/CONTROLLER SOFTWARE.png",
  },
  {
    id: 6,
    title: "Multimodal Communication Options",
    desc: "Choose the communication method that suits your mission best. Whether it's Li-Fi for high-speed wireless tasks, UART for versatile connectivity, or Ethernet for extended reach and high data transfer rate, our ROV offers flexible communication solutions.",
    img: "/multimodal1.png",
  },
  {
    id: 7,
    title: "Object Mapping and Identification",
    desc: "Utilize advanced sensors, including an IMU and depth sensor, along with a barcode scanner, to map and identify underwater objects accurately. Enhance your research, inspection, and exploration capabilities.",
    img: "obj mapping.png",
  },
  {
    id: 8,
    title: "Streamlined Design",
    desc: "Our ROV's streamlined frame minimizes drag, ensuring optimal maneuverability and efficiency. Glide through the water with grace and precision.",
    img: "/streamline2.png",
  },
];

const Hero3 = () => {
  return (
    <div className="text-color-white">
      <div className="bg-dm">
        <header className="sticky top-0 z-50">{/* <NavBar/> */}</header>
        <main>
          <section id="home" className="relative">
            <div className="container py-44">
              <div className="z-20 mt-9 flex flex-col items-center md:flex-row">
                <div className="mb-12 text-center md:w-1/2 md:pr-10 md:text-left">
                  <h1 className="title mb-4 mt-3 font-wendy-one">
                    “Explore the secrets of underwater world with WanderSub”
                  </h1>
                  <p className="mb-10 font-wendy-one leading-relaxed">
                    WanderSub is a state-of-the-art underwater remotely operated
                    vehicle (ROV)
                  </p>
                  <a href="/auth/signin">
                    <button className="btn">Explore Now</button>
                  </a>
                </div>
                <div className="mb-12 text-center md:w-1/2 md:pr-10 md:text-left"></div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <div className="flex flex-col items-center justify-center bg-gray-100 font-montserrat text-black">
        <div className="flex w-full flex-col items-center p-8 pb-0  ">
          <h2 className="p-4 pb-3 text-center text-3xl font-bold ">Vision</h2>
          <div className="self-center">
            <p className="max-w-2xl text-center text-xl  text-black">
              "To unlock the mysteries of the world beneath the waves and
              empower humanity to explore, understand, and protect our planet's
              underwater realms through cutting-edge ROV technology."
            </p>
          </div>
          <h2 className="mt-2 p-4 pb-0 text-center text-3xl font-bold ">
            Mission
          </h2>
          <div className="grid  gap-3 p-8 pt-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            <div
              className=" rounded-lg  p-4 shadow-md"
              style={{
                background:
                  "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
              }}
            >
              <div className="mb-2 text-xl font-bold ">
                Innovative ROV Solutions
              </div>
              <div className="text-md leading-tight">
                Develop state-of-the-art remotely operated vehicles (ROVs)
                equipped with advanced sensors and communication systems to
                enable safe and efficient exploration of underwater
                environments.
              </div>
            </div>

            <div
              className=" rounded-lg  p-4 shadow-md"
              style={{
                background:
                  "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
              }}
            >
              <div className="mb-2 text-xl font-bold">
                Environmental Conservation
              </div>
              <div className="text-md leading-tight">
                Utilize our technology to support scientific research,
                conservation efforts, and sustainable practices in ocean and
                freshwater ecosystems.
              </div>
            </div>
            <div
              className=" rounded-lg  p-4 shadow-md"
              style={{
                background:
                  "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
              }}
            >
              <div className="mb-2 text-xl font-bold ">
                Education and Outreach
              </div>
              <div className="text-md leading-tight">
                Foster a deeper connection between people and the underwater
                world by providing educational resources and engaging the public
                in underwater exploration.
              </div>
            </div>
            <div
              className=" rounded-lg  p-4 shadow-md"
              style={{
                background:
                  "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
              }}
            >
              <div className="mb-2 text-xl font-bold ">
                Industry Collaboration
              </div>
              <div className="text-md leading-tight">
                Collaborate with industries such as marine biology, offshore
                energy, and underwater archaeology to provide ROV solutions that
                meet their specific needs.
              </div>
            </div>
            <div
              className=" rounded-lg  p-4 shadow-md"
              style={{
                background:
                  "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
              }}
            >
              <div className="mb-2 text-xl font-bold ">
                Safety and Efficiency
              </div>
              <div className="text-md leading-tight">
                Prioritize the safety of our equipment and operators while
                maximizing the efficiency of underwater missions.
              </div>
            </div>
            <div
              className=" rounded-lg  p-4 shadow-md"
              style={{
                background:
                  "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
              }}
            >
              <div className="mb-2 text-xl font-bold ">Global Impact</div>
              <div className="text-md leading-tight">
                Extend our reach to contribute to international efforts to
                preserve and protect the world's oceans and freshwater bodies.
              </div>
            </div>
            <div
              className=" rounded-lg  p-4 shadow-md"
              style={{
                background:
                  "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
              }}
            >
              <div className="mb-2 text-xl font-bold ">
                Inclusive Exploration
              </div>
              <div className="text-md leading-tight">
                Promote diversity and inclusion in the field of underwater
                exploration, ensuring that all voices and perspectives are
                heard.
              </div>
            </div>
            <div
              className=" rounded-lg  p-4 shadow-md"
              style={{
                background:
                  "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
              }}
            >
              <div className="mb-2 text-xl font-bold ">
                Continuous Innovation
              </div>
              <div className="text-md leading-tight">
                Stay at the forefront of ROV technology through ongoing research
                and development, adapting to emerging challenges and
                opportunities in underwater exploration.
              </div>
            </div>
            <div className=" rounded-lg  p-4" style={{}}></div>
            <div
              className="    rounded-lg  p-4 shadow-md"
              style={{
                background:
                  "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
              }}
            >
              <div className="mb-2 text-xl font-bold ">Economic Growth</div>
              <div className="text-md leading-tight">
                Drive economic growth by providing ROV services and solutions
                that benefit industries and research organizations worldwide.
              </div>
            </div>
            <div
              className="viscard rounded-lg   p-4 shadow-md"
              style={{
                background:
                  "linear-gradient(0deg, rgba(184, 184, 184, 0.27), rgba(184, 184, 184, 0.27))",
              }}
            >
              <div className="mb-2 text-xl font-bold ">
                Customer Satisfaction
              </div>
              <div className="text-md leading-tight">
                Stay at the forefront of ROV technology through ongoing research
                and development, adapting to emerging challenges and
                opportunities in underwater exploration.
              </div>
            </div>
          </div>
        </div>

        <h2 className=" features  mt-3 flex items-center justify-center pt-0 text-3xl font-bold ">
          Features
        </h2>
        <p className="ml-6 mr-6 flex w-full  max-w-2xl flex-col  items-center text-center  text-xl  text-black ">
          Introducing our cutting-edge underwater Remotely Operated Vehicle
          (ROV), designed for unparalleled exploration beneath the waves:
        </p>
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`flex p-8 font-montserrat ${
              index % 2 === 1 ? "flex-row" : "flex-row-reverse"
            } my-8 items-center`}
          >
            <div className=" h-4 w-full rounded object-cover object-center md:w-1/3 lg:h-auto lg:w-1/2 lg:pl-10 lg:pr-10">
              <img
                src={feature.img}
                alt={feature.title}
                className="mx-auto rounded-3xl md:mx-0"
              />
            </div>
            <div
              className={`mt-6 w-1/2 w-full md:w-2/3 lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10 lg:pr-10  ${
                index % 2 === 1 ? "text-right" : "text-left"
              } mx-auto md:mx-0`}
            >
              <h3 className="py-4 text-2xl font-semibold ">{feature.title}</h3>
              <p className="text-lg leading-relaxed ">{feature.desc}</p>
            </div>
          </div>
        ))}

        <p className="ml-6 mr-6 flex w-full max-w-2xl flex-col items-center p-8 text-center text-xl text-black ">
          Unleash the potential of underwater exploration with our
          state-of-the-art ROV, setting new standards for versatility,
          performance, and imaging quality in the world beneath the surface.
          Explore, discover, and document the mysteries of the deep with
          confidence.
        </p>
      </div>
    </div>
  );
};

export default Hero3;
