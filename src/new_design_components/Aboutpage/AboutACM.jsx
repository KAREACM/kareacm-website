import React from 'react'
import './../Aboutpage/AboutACM.css'
import globe1 from './../../../Athithya/src/Assets/Photos/globe 1.png'
import globe2 from './../../../Athithya/src/Assets/Photos/globe 2.png'
import globe3 from './../../../Athithya/src/Assets/Photos/globe 3.png'
import globe4 from './../../../Athithya/src/Assets/Photos/globe 4.png'




function AboutACM() {
    return (
        <>
            {/* content of about acm , globe img */}
            <div className='about-container2'>
                <div className="basic-container-style">
                    <div className="wrapper">
                        <div className='basic-heading-style'>
                            {/* <br /> */}
                            About ACM
                        </div>
                        <div className="basic-heading-underline-style"></div>
                    </div>
                    <br />
                    <div className="basic-content-style">The Association for Computing Machinery (ACM) stands at the forefront of
                        the computing world as world's largest educational and scientific
                        computing society</div>
                    <br />
                    <div className='basic-content-style'>With a rich history and an expansive network, ACM  is dedicated to advancing computing as a discipline and profession.  Through its commitment to research, education, and collaboration, ACM  serves as a vital hub for
                        connecting computing professionals, fostering  innovation, and promoting ethical practices.</div>
                </div>
                <div className='globe_right'>
                    <div className='globe_blur_right'>
                    </div>

                    <img className="globe1" src={globe1} alt="globeimg1" />
                </div>
                {/* content of about acm , globe img  */}

                {/* text - innovate  */}
            </div>
            <div className="container3">
                <div className='headings'>
                    {/* <br /> */}
                    Innovate...</div>
                <br />
                {/* text - innovate  */}

            </div>
            {/* content of about kare, globe img  */}

            <div className='about-container3'>
                <div className='globe_left'>
                    <div className='globe_blur_left'>
                    </div>

                    <img className="globe2" src={globe2} alt="globeimg2" />
                </div>


                <div className="basic-right-container-style pad-0">
                    <div className="wrapper">
                        <div className='basic-heading-style '>
                            <br />
                            About KARE
                        </div>
                        <div className="basic-heading-underline-style"></div>
                    </div>
                    <br />
                    <div className="basic-right-content-style">Built on academic excellence and innovation, Kalasalingam Academy of Research and Education
                        (KARE)offers a range of undergraduate, postgraduate, and doctoral programs.  Our campus is a hub of learning, ideas,
                        collaborations,
                        and cultural exchange. We embrace sportsmanship and create unforgettable experiences. </div>
                    {/* content of about kare, globe img */}

                </div>
                {/* text - achieve  */}

            </div>
            <div className="container4">
                <div className='headings'>
                    {/* <br /> */}
                    ...Achieve
                    {/* <br /> */}
                </div>
                {/* text - achieve  */}
            </div>
            {/* content of our aim , globe img */}

            <div className='about-container4'>
                <div className="basic-container-style ">
                    <div className="wrapper">
                        <div className='basic-heading-style'>
                            <br />
                            Our Aim
                        </div>
                        <div className="basic-heading-underline-style"></div>
                    </div>
                    <br />
                    <div className="basic-content-style">Our aim is to create a dynamic and collaborative space where technology
                        enthusiasts can come together to explore, learn, and innovate. Through  workshops, projects, and knowledge-sharing sessions,
                        we strive to  enhance our members technical skills
                        and foster a culture of continuous  learning.</div>
                    <br />
                </div>
                <div className='globe_right'>
                    <div className='globe_blur_right_2'>
                    </div>

                    <img className="globe3" src={globe3} alt="globeimg4" />
                </div>
                {/* content of our aim , globe img  */}

                {/* text - empower */}

            </div>
            <div className='container5'>
                <div className='headings'>
                    Empower...!
                </div>
                <br />
            </div>
            {/* text - empower  */}

            {/* content of our mission , globe img  */}

            <div className="about-container5">
                <div className='globe_left'>
                    <div className='globe_blur_left'>
                    </div>

                    <img className="globe4" src={globe4} alt="globeimg2" />
                </div>


                <div className="basic-right-container-style height">
                    <div className="wrapper">
                        <div className='basic-heading-style'>
                            {/* <br /> */}
                            Our Mission
                        </div>
                        <div className="basic-heading-underline-style"></div>
                    </div>
                    <br />
                    <div className="basic-right-content-style">Bridging academia and industry, we unite theory and application,
                        nurturing holistic professionals. Through teamwork, leadership, and  ethics, we develop individuals who grasp
                        work's broader impact, blending  technical prowess with a wider perspective for a more comprehensive  approach. </div>
                </div>

            </div>
            {/* content of our mission, globe img  */}


        </>


    )
}

export default AboutACM