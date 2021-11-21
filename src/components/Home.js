import React from 'react'
import Typewriter from 'typewriter-effect';
import { Navbar } from './Navbar';



export const Home = () =>
{
    return (
        <>
            <Navbar/>
            <div className='container home' id="home">
                <div className='row'>
                    <div className='col-md-4 col-sm-12 mx-auto ' data-aos="fade-right" id="hometext">

                        <h1>Hello 👋  ,</h1>
                        <h1> I'm Rahul </h1>
                        <h3>
                        {
                            <Typewriter

                                options={{
                                    strings: [`Full Stack Developer 💻`],
                                    autoStart: true,
                                    loop: true,
                                    cursorClassName: 'Typewriter__cursor',
                                    cursor: ''
                                }}

                            />
                        }
                        </h3>
                        <br/>
                        <a href='#contactus' className='btn btn-outline-success contact-button' style={{ borderRadius: "0px" }}>Get in Touch</a>
                    </div>
                    <div className='col-md-4 col-sm-12' data-aos="fade-left">
                       <img className='img-fluid'  src='https://media-exp1.licdn.com/dms/image/C5603AQHSubvZ72vs4A/profile-displayphoto-shrink_200_200/0/1611655807293?e=1642636800&v=beta&t=xJR54Mi3QK4nTMJnzQYYhSM9CcRHg7dmwaPa8c9UV-A' style={{width:"100%"}} alt='image'></img>
                   
                    </div>
                    <div className="col-md-2">

                    </div>
                </div>
            </div>
        </>
    )
}
