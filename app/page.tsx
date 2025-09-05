"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { Footer } from "./components/Footer";

// Stagger text animation component
const StaggerText = ({
  text,
  className,
  color = "text-gray-800",
}: {
  text: string;
  className?: string;
  color?: string;
}) => {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.02 * i,
        ease: "easeOut",
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hidden: {
      opacity: 0,
      y: 8,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className={`${className} ${color} max-w-6xl mx-auto`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 1 }}
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={child} className="inline-block mr-4">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function Home() {
  const [activeFrame, setActiveFrame] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [rotationDirection, setRotationDirection] = useState(1); // 1 for right, -1 for left

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      // Start fade out with rotation
      setTimeout(() => {
        setActiveFrame((prevFrame) => {
          const nextFrame = prevFrame >= 4 ? 1 : prevFrame + 1;
          return nextFrame;
        });

        // Toggle rotation direction for next transition
        setRotationDirection((prev) => (prev === 1 ? -1 : 1));

        // Start fade in
        setTimeout(() => {
          setIsTransitioning(false);
        }, 300); // Half of transition duration
      }, 300); // Half of transition duration
    }, 2000); // Increased interval for smoother experience

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col justify-center items-start">
      <section className="w-full h-full flex flex-col justify-center items-center min-h-screen">
        <main className="w-full h-full flex flex-col mt-auto">
          <div className="relative w-20 h-20 mx-auto mb-5">
            <Image
              src={`/frame${activeFrame}.png`}
              alt="hero"
              width={80}
              height={80}
              className={`absolute inset-0 transition-all duration-300 ease-in-out ${
                isTransitioning
                  ? `opacity-0 rotate-${rotationDirection === 1 ? "30" : "-30"}`
                  : "opacity-100 rotate-0"
              }`}
            />
          </div>
          <h1 className="md:text-[75px] text-xl font-bold text-center leading-none">
            Turn Network <br /> into Networth.
          </h1>
          <p className="md:text-xl text-xs font-normal text-center max-w-lg mx-auto text-gray-600 pt-5 pb-8">
            Stop collecting contacts. Start building collaborations. Let your
            network work for you, powered by AI.
          </p>
          <div className="w-full h-full flex flex-row justify-center items-center gap-3">
            <button className="bg-[#181818] px-4 font-medium py-2 text-white rounded-full md:text-base text-xs transition-all duration-300 hover:bg-[#2e2e2e] hover:text-[#fff]">
              Join for free
            </button>
            <button className="bg-[#fff] border-[1px] border-gray-200 pl-3 pr-2 font-medium py-2 text-black rounded-full md:text-base text-xs transition-all duration-300 hover:bg-[#f7f7f7] hover:text-[#000] flex flex-row items-center justify-center gap-2">
              How it works{" "}
              <b className="text-black bg-[#edededb8] rounded-full p-1">
                <FiArrowRight className="font-semibold" />
              </b>{" "}
            </button>
          </div>
        </main>
        <div className="w-full h-full flex flex-col justify-center items-center mt-auto mb-5">
          <h6 className="text-sm uppercase tracking-wide text-gray-500 font-medium">
            From Energy to Tech, We’ve Got You Covered
          </h6>
          <div className="w-full overflow-hidden py-10">
            <div className="flex animate-marquee whitespace-nowrap">
              <div className="flex items-center gap-10 text-lg">
                <span>Energy</span>
                <span className="text-gray-400">⬩</span>
                <span>Finance</span>
                <span className="text-gray-400">⬩</span>
                <span>Logistics</span>
                <span className="text-gray-400">⬩</span>
                <span>Technology</span>
                <span className="text-gray-400">⬩</span>
                <span>Consulting</span>
                <span className="text-gray-400">⬩</span>
                <span>Trade</span>
                <span className="text-gray-400">⬩</span>
                <span>Healthcare</span>
                <span className="text-gray-400">⬩</span>
                <span>Real Estate</span>
                <span className="text-gray-400">⬩</span>
                <span>Manufacturing</span>
                <span className="text-gray-400">⬩</span>
                <span>Banking</span>
                <span className="text-gray-400">⬩</span>
                <span>Legal Services</span>
                <span className="text-gray-400">⬩</span>
                <span>Education</span>
                <span className="text-gray-400">⬩</span>
                <span>Hospitality</span>
                <span className="text-gray-400">⬩</span>
                <span>Government & Policy</span>
              </div>
              <div className="flex items-center gap-20 text-lg ml-20">
                <span>Energy</span>
                <span className="text-gray-400">⬩</span>
                <span>Finance</span>
                <span className="text-gray-400">⬩</span>
                <span>Logistics</span>
                <span className="text-gray-400">⬩</span>
                <span>Technology</span>
                <span className="text-gray-400">⬩</span>
                <span>Consulting</span>
                <span className="text-gray-400">⬩</span>
                <span>Trade</span>
                <span className="text-gray-400">⬩</span>
                <span>Healthcare</span>
                <span className="text-gray-400">⬩</span>
                <span>Real Estate</span>
                <span className="text-gray-400">⬩</span>
                <span>Manufacturing</span>
                <span className="text-gray-400">⬩</span>
                <span>Banking</span>
                <span className="text-gray-400">⬩</span>
                <span>Legal Services</span>
                <span className="text-gray-400">⬩</span>
                <span>Education</span>
                <span className="text-gray-400">⬩</span>
                <span>Hospitality</span>
                <span className="text-gray-400">⬩</span>
                <span>Government & Policy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="text-section"
        className="w-full h-full flex flex-col justify-center items-center min-h-screen"
      >
                 <div className="w-full h-screen bg-black flex justify-center items-center">
           <StaggerText
             text="Ever wondered what if your network actually worked for you?"
             className="md:text-[75px] text-xl font-bold text-center leading-none"
             color="text-white"
           />
         </div>
         <div className="w-full h-screen bg-black flex justify-center items-center">
           <StaggerText
             text="What if finding the right partner was as easy as stating your goal?"
             className="md:text-[75px] text-xl font-bold text-center leading-none"
             color="text-white"
           />
         </div>
         <div className="w-full h-screen bg-black flex justify-center items-center">
           <StaggerText
             text="Is your network a list of names… or a source of opportunities?"
             className="md:text-[75px] text-xl font-bold text-center leading-none"
             color="text-white"
           />
         </div>
         <div className="w-full h-screen bg-black flex justify-center items-center">
           <StaggerText
             text="Why rely on chance when AI can unlock your network?"
             className="md:text-[75px] text-xl font-bold text-center leading-none"
             color="text-white"
           />
         </div>
      </section>

      <section className="w-full h-full flex flex-col justify-center items-center min-h-screen max-w-6xl mx-auto">
        <motion.div
          className="w-full h-full flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <h2 className="md:text-[55px] text-xl font-bold text-center leading-none">
            Wondering how it works?
          </h2>
          <h4 className="md:text-lg text-base font-bold text-center leading-none mt-5">
            No fluff, no noise — just three steps to unlock the power of your
            network.
          </h4>
        </motion.div>

        <motion.div
          className="w-full h-full grid grid-cols-3 gap-5 mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
              },
            },
          }}
        >
          <motion.div
            className="w-full h-full rounded-lg basis-1/3 flex flex-col justify-center items-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <Image
              src="/step1.jpg"
              alt="step1"
              width={500}
              height={500}
              className="w-full h-full max-w-[350px] max-h-[350px]"
            />
            <p className="md:text-lg text-base font-bold text-center leading-none mt-5">
              Enter your Linkedin network
            </p>
          </motion.div>

          <motion.div
            className="w-full h-full rounded-lg basis-1/3 flex flex-col justify-center items-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <Image
              src="/step1.jpg"
              alt="step1"
              width={500}
              height={500}
              className="w-full h-full max-w-[350px] max-h-[350px]"
            />
            <p className="md:text-lg text-base font-bold text-center leading-none mt-5">
              Define Your Mission
            </p>
          </motion.div>

          <motion.div
            className="w-full h-full rounded-lg basis-1/3 flex flex-col justify-center items-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            <Image
              src="/step1.jpg"
              alt="step1"
              width={500}
              height={500}
              className="w-full h-full max-w-[350px] max-h-[350px]"
            />
            <p className="md:text-lg text-base font-bold text-center leading-none mt-5">
              Get Smart Matches
            </p>
          </motion.div>
        </motion.div>
      </section>

             <section className="w-full h-full py-20">
         <div className="w-full overflow-hidden">
           {/* First strip - Roles & People - Left */}
           <div className="flex animate-marquee-left whitespace-nowrap mb-8">
             <div className="flex items-center gap-16 text-5xl font-semibold text-gray-800">
               <span>Advisors</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Investors</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Partners</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Clients</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Mentors</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Collaborators</span>
             </div>
             <div className="flex items-center gap-16 text-5xl font-semibold text-gray-800 ml-16">
               <span>Advisors</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Investors</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Partners</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Clients</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Mentors</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Collaborators</span>
             </div>
           </div>

           {/* Second strip - Outcomes & Value - Right */}
           <div className="flex animate-marquee-right whitespace-nowrap mb-8">
             <div className="flex items-center gap-16 text-5xl font-semibold text-gray-800">
               <span>Growth</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Trust</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Opportunities</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Expansion</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Impact</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Success</span>
             </div>
             <div className="flex items-center gap-16 text-5xl font-semibold text-gray-800 ml-16">
               <span>Growth</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Trust</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Opportunities</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Expansion</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Impact</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Success</span>
             </div>
           </div>

           {/* Third strip - Context & Reach - Left */}
           <div className="flex animate-marquee-left whitespace-nowrap">
             <div className="flex items-center gap-16 text-5xl font-semibold text-gray-800">
               <span>Global</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Local</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Industries</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Markets</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Communities</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Startups</span>
             </div>
             <div className="flex items-center gap-16 text-5xl font-semibold text-gray-800 ml-16">
               <span>Global</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Local</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Industries</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Markets</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Communities</span>
               <Image src="/step1.jpg" alt="separator" width={260} height={180} className="w-[260px] h-[180px] object-cover rounded-lg" />
               <span>Startups</span>
             </div>
           </div>
         </div>
       </section>
       
       <Footer />
    </div>
  );
}
