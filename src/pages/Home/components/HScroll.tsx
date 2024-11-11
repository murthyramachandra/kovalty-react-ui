import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitType from 'split-type';

const HscrollBlock: React.FC = () => {
    const scroller = useRef<HTMLDivElement | null>(null);
    const skills = useRef<HTMLDivElement | null>(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 768px)');
    
        if (mediaQuery.matches) {
            const skillSet = gsap.utils.toArray(".skill-set") as HTMLElement[];
    
            gsap.to(skillSet, {
                xPercent: -40 * (skillSet.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: scroller.current,
                    start: "center center",
                    markers: true,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (skillSet.length - 1),
                    end: () => "+=" + scroller.current!.offsetWidth * skillSet.length
                }
            });
    
            const splitTypes = document.querySelectorAll<HTMLElement>('.hscrollBlockTitle');
            const splitTypesDes = document.querySelectorAll<HTMLElement>('.hscrollBlockDescription');
            
            splitTypes.forEach((char) => {
                const text = new SplitType(char);
    
                gsap.fromTo(text.chars,
                    {
                        scaleY: 0,
                        opacity: 0.5,
                        transformOrigin: 'top'
                    },
                    {
                        scaleY: 1,
                        opacity: 1,
                        ease: "slow",
                        duration: 5,
                        scrollTrigger: {
                            trigger: char,
                            start: 'top 80%',
                            end: 'bottom 82%',
                            scrub: true,
                            toggleActions: 'play play reverse reverse',
                            markers: true,
                        }
                    });
            });
            
            splitTypesDes.forEach((char) => {
                const text = new SplitType(char);
    
                gsap.fromTo(text.chars,
                    {
                        scaleY: 0,
                        transformOrigin: 'top'
                    },
                    {
                        scaleY: 1,
                        ease: "slow",
                        duration: 5,
                        scrollTrigger: {
                            trigger: char,
                            start: 'top 80%',
                            end: 'bottom 82%',
                            scrub: true,
                            toggleActions: 'play play reverse reverse',
                        }
                    });
            });
    
            // Clean up on unmount
            return () => {
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        }
    }, []);

    const services = [
        { title: "Managed Services", description: "Our consultants have in-depth knowledge and experience in the design, deployment and integration of management solutions for infrastructure.", img: "/assets/OurServicesCard2.png" },
        { title: "Development", description: "We offer an integrated professional team capable of identifying and engineering workflow to generate deliverables of quality, creation of custom software, end-to-end products, modules and components.", img: "/assets/OurServicesCard1.png" },
        { title: "Quality Assurance", description: "A primary purpose of testing is to identify software vulnerabilities in order to discover and repair any defects. Qrious provides the Manual Testing, Automated Testing and Performance Testing services.", img: "/assets/OurServicesCard3.png" },
        { title: "IT Recruiting", description: "We have long-term and short-term IT consulting needs. In addition to staffing, Qrious offers recruitment solutions to customers who need more than just providing opening candidates.", img: "/assets/OurServicesCard1.png" },
        { title: "Training", description: "As per the needs of the company, we provide training on the latest IT technologies and regions, and deploy trained professionals from new college grades to senior consultants.", img: "/assets/OurServicesCard2.png" }
      ];

    return (
        <div>
            <style>
                {`
                .blockDiv:hover {
                    transform: scale(1.02);
                    background-color: #36678A !important;
                    border: 1px solid #E3F2FD !important;
                    transition: 0.4s;
                    color: white;
                    z-index: 1;
                }

                .blockDiv:not(:hover) {
                    border: 1px solid black !important;
                    transform: scale(1);
                    background-color: #E3F2FD !important;
                    color: black;
                    transition: 0.7s;
                    z-index: 0;
                }

                @media(min-width:1025px){
                    .blockDiv{
                        height: 420px !important;
                        width: 300px !important;
                        padding: 10px !important;
                        transition: 0.6s;
                    }
                }
                @media(max-width:1024px){
                    .hscrollBlockTitle{
                        font-size: 28px !important;
                        padding: 15px !important;
                        transition: 0.5s;
                    }
                    .hscrollBlockDescription{
                        font-size: 16px !important;
                        padding: 15px !important;
                        transition: 0.8s;
                    }
                    .blockDiv{
                        height: 350px !important;
                        width:250px !important;
                        transition: 0.6s;
                    }
                }

                @media(max-width:780px){
                    #skills {
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)) !important;
                        gap: 5px;
                        justify-content: center;
                        height: auto;
                        transition: 0.5s;
                    }
                    
                    .blockDiv {
                        width: 30vw !important; /* Ensure the width spans the entire grid cell */
                        transition: 0.5s;
                    }

                    .hscrollBlockTitle{
                        font-size: 28px !important;
                        transition: 0.5s;
                    }
                    .hscrollBlockDescription{
                        font-size: 16px !important;
                        transition: 0.8s;
                    }
                }
                
                @media(max-width:600px){
                    .blockDiv{
                        width: 35vw !important;
                        height: 50vh !important;
                    }
                    .hscrollBlockTitle{
                        font-size: 28px !important;
                        transition: 0.5s;
                    }
                    .hscrollBlockDescription{
                        font-size: 16px !important;
                        transition: 0.8s;
                    }
                }
                @media(max-width:480px){
                    .hscrollOuterBlock section{
                        height: 55vh !important;
                    }
                    .blockDiv{
                        width: 80vw !important;
                        height: 44vh !important;
                    }
                    .hscrollBlockTitle{
                        font-size: 28px !important;
                    }
                    .hscrollBlockDescription{
                        font-size: 16px !important;
                    }
                }
                @media(max-width:380px){
                    .hscrollOuterBlock section{
                        height: 65vh !important;
                    }
                    .blockDiv{
                        height: 52vh !important;
                    }
                    .hscrollBlockTitle{
                        font-size: 28px !important;
                    }
                    .hscrollBlockDescription{
                        font-size: 16px !important;
                    }
                }
                `}
            </style>
            <div className="overflow-hidden flex items-center">
            <div className="overflow-hidden">
                <div
                    id="skills" 
                    ref={scroller} 
                    className="hscrollOuterBlock" 
                    style={{ display: 'flex', gap: "30px", margin: "20px" }}
                    >
                    {services.map((block, index) => (
                        <section key={index} ref={skills} className="skill-set px-10 w-screen h-[100vh] bg-transparent flex items-center z-50">
                        <div className="blockDiv" style={{ padding: "20px", display: "flex", flexDirection: "column", border: "1px solid black", borderRadius: "20px" }}>
                            <img src={block.img} alt={block.title} style={{ width: "100%", height: "auto", borderRadius: "15px", marginBottom: "10px" }} />
                            <div style={{ padding: "10px" }}>
                                <div className="hscrollBlockTitle" style={{ display: "flex", flexDirection: "column", fontSize: "20px"}}>
                                    <p>{block.title}</p>
                                </div>
                                <div className="hscrollBlockDescription" style={{ display: "flex", flexDirection: "column", fontSize: "16px"}}>
                                    <span>{block.description}</span>
                                </div>
                            </div>       
                        </div>
                        </section>
                    ))}
                    </div>
                </div>
        </div>
        </div>
    );
};

export default HscrollBlock;