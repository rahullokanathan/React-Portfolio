import React from 'react'
import {Project} from './Project'

export const Projects = () => {
    return (
        <>
           
           <div className='container'>
        <div class="text-divider"><h3 className='text-center mb-4' id='projectpage' style={{border:"1px solid silver",padding:'15px'}}>Projects</h3></div>
            <div className='row'>
          
        <Project 
        image={`https://analyticsindiamag.com/wp-content/uploads/2020/09/e-com-tech-stack.jpg` }
        title={'E-Commerce App'}
        about={'This app contains multiple features like authentication where we can register a user and be able to shop and test dummy payment via paypal sandbox account'}
        skills={'React.js, Redux, Node.js, Express.js, MongoDB '}
        live={`https://ecommerce-react-app.vercel.app/`}
        code={`https://github.com/rahullokanathan/E-Commerce-App`}
        rel="noreferrer" />
        <br/>
        <Project 
        image={`https://i.pcmag.com/imagery/articles/05DEKK8MiwN7Q0YcCqEaJVb-2..1569492447.jpg`}
        title={'Fitness Logger'}
        about={'The fitness tracker allows the user to create a workout where they enter various exercises associated to the workout. The data can then be analyzed with an included stats page that provides insights into the details of all their workouts.'}
        skills={'React.js, Redux, Node.js, Express.js, MongoDB '}
        live={`https://arcane-hollows-87215.herokuapp.com/`}
        code={`https://github.com/rahullokanathan/Fitness-Logger`}
        rel="noreferrer"/>
        <Project 
        image={`https://res.cloudinary.com/practicaldev/image/fetch/s--gRQn230T--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/yp8wc2eur6ewzoy7xslt.png`}
        title={'Chat Application'}
        about={'A Real Time Chat Application using React JS and authentication'}
        skills={'Javascript, Boostrap, Github Developer API, Html5, Css3, React JS'}
        live={`https://stoic-jang-319b51.netlify.app/`}
        code={`https://github.com/rahullokanathan/Chat-Application-`}
        rel="noreferrer" />


        <Project
        image={`https://cdn-media-1.freecodecamp.org/images/h3vEAG1S3y1zOfdLoqDiBEUtXhGTjbs8oBpj`} 
        title={'Pizza Delivery App'}
        about={'A simple front-end pizza store built using React,I did this project to get more comfortable with React,Node js,MongoDB.'}
        skills={'React.js, Redux, Node.js, Express.js, MongoDB '}
        live={`https://piza-delivery-shop.herokuapp.com/`}
        code={`https://github.com/rahullokanathan/Pizza-Delivery-App`}
        rel="noreferrer"
         />
        <Project
        image={`https://i.ytimg.com/vi/BiaIh1PeBwo/maxresdefault.jpg`}
        title={'Student-Mentor Database'}
        about={'A student-mentor app which updates the mentors and students.'}
        skills={'React.js, Bootstrap, Html5, Css3, NPM packages '}
        live={`https://student-mentor-pg.herokuapp.com/`}
        code={`https://github.com/rahullokanathan/Student-Mentor-Task`}
        rel="noreferrer" />
                </div>
        </div>
       
        </>
    )
}
