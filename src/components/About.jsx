import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (aboutRef.current) {
        const topPos = aboutRef.current.getBoundingClientRect().top;
        const isVisible = topPos < window.innerHeight - 100;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="about1"
      className={classNames("p-4 md:p-0", {
        "animate-left-to-right": isVisible,
      })}
      ref={aboutRef}
    >
      <div
        className="flex flex-col md:flex-row justify-evenly items-center m-7"
        id="about"
      >
        <div className="max-w-lg bg-white p-10 rounded-lg md:mr-10 md:mb-0 mb-10">
          <h2 className="font-medium text-xl text-center mb-5">What is ERP?</h2>
          <p className="text-lg font-serif">
            ERP stands for enterprise resource planning, but what does ERP mean?
            The simplest way to define ERP is to think about all the core
            business processes needed to run a company: finance, HR,
            manufacturing, supply chain, services, procurement, and others. At
            its most basic level, ERP helps to efficiently manage all these
            processes in an integrated system. It is often referred to as the
            system of record of the organisation.
            <br />
            <br />
            Yet today’s ERP systems are anything but basic and have little
            resemblance to the ERP of decades ago. They are now delivered via
            the cloud and use the latest technologies – such as artificial
            intelligence (AI) and machine learning – to provide intelligent
            automation, greater efficiency, and instant insight across the
            business. Modern cloud ERP software also connects internal
            operations with business partners and networks around the world,
            giving companies the collaboration, agility, and speed they need to
            be competitive today.
          </p>
        </div>
        <div className="md:h-96 w-lvh">
          <img src="./erp.webp" alt="ERP" className="w-full h-72 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default About;
