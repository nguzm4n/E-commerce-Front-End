import React from 'react';
import '../Styles/Home/Home.css';
import Footer from '../Home/Footer';
import { IoDocumentText } from "react-icons/io5";
import '../Styles/Home/About.css';
import { SiFlask } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

const About = () => {
  return (
    <div>
      {/* Título de la página */}
      <div className='container-fluid d-flex justify-content-center bg-black text-white'>
        <div className="row">
          <div className="col-md-12 pt-5 pb-5 text-center titulo">
            <h1 className='about-header '><span style={{ color: "#ffc107" }}>A</span>bout This <span style={{ color: "#ffc107" }}>W</span>ebsite  <IoDocumentText style={{ color: "#ffc107" }} /></h1>
          </div>
        </div>
      </div>

      {/* Proyecto */}
      <div className="container-fluid bg-secondary text-white">
        <div className="row">
          <div className='col-lg-12 d-flex justify-content-center my-5 '>
            <div className='text-start mx-5 my-5' style={{ maxWidth: '60vw' }}>
              <h1 className='about-text about-text-title' style={{ color: "#ffc107" }}>PROJECT OVERVIEW</h1>
              <p className='about-text'>
                This E-Commerce Project was developed as a comprehensive demonstration of full-stack development skills.
                The website not only showcases user authentication and payment integration but also presents a complete user experience
                from product browsing to a secure checkout. The focus was on creating a seamless and responsive shopping platform.
              </p>
              <p className='about-text'>
                The project also allowed me to explore the optimization of database queries and improve the website's performance under different loads.
                It includes dynamic features like real-time product updates and inventory management, ensuring the site remains functional and up-to-date.
              </p>
            </div>
           
          </div>
        </div>
      </div>

      {/* Tecnologías */}
      <div className="container-fluid bg-black text-white">
        <div className="row">
          <div className='col-md-12 d-flex justify-content-end  mt-2 align-items-center'>
          <div className='ml-auto mr-auto'>
              <FaReact size={200} />
            </div>
            <div className='text-start mx-5 my-5' style={{ width: '50vw' }}>
              <h1 className='about-text about-text-title' style={{ color: "#ffc107" }}>TECHNOLOGIES</h1>
              <p className='about-text'>
                Built using the React framework for the frontend, the site ensures a dynamic and user-friendly interface. On the backend, Flask powers the API,
                managing tasks like user authentication, product handling, and payment processing. The integration of SQLAlchemy ensures efficient database management,
                while JWT (JSON Web Tokens) secures user sessions.
              </p>
              <p className='about-text'>
                Additional technologies like PayPal API for payment integration and UUID for generating unique identifiers for products and users make this project
                scalable and secure.
              </p>
            </div>
           
          </div>
        </div>
      </div>

      {/* Funcionalidades */}
      <div className="container-fluid bg-secondary text-white">
        <div className="row">
          <div className='col-md-12 d-flex justify-content-start mt-2 align-items-center'>
            <div className='text-start mx-5 my-5 ' style={{ width: '50vw' }}>
              <h1 className='about-text about-text-title' style={{ color: "#ffc107" }}>KEY FEATURES</h1>
              <ul className='about-text' style={{  paddingLeft: 0 }}>
                <li>User authentication using secure JWT tokens</li>
                <li>Responsive and intuitive user interface</li>
                <li>Product browsing with search and filter functionalities</li>
                <li>Shopping cart and order management</li>
                <li>Payment processing via PayPal integration</li>
                <li>Admin panel for managing products, orders, and users</li>
                <li>Real-time inventory and stock management</li>
              </ul>
            </div>
            <div className='ml-auto mr-auto'>
              <SiFlask size={200}/>
              
            </div>
          </div>
        </div>
      </div>

      {/* Desafíos */}
      <div className="container-fluid bg-black text-white">
        <div className="row">
          <div className='col-md-12 d-flex justify-content-end mt-2 align-items-center'>
          <div className='ml-auto mr-auto'>
              
              <FaCcPaypal size={200}  />
            </div>
            <div className='text-start mx-5 my-5' style={{ width: '40vw' }}>
              <h1 className='about-text about-text-title' style={{ color: "#ffc107" }}>PROJECT CHALLENGES</h1>
              <p className='about-text'>
                Integrating a payment gateway like PayPal was one of the major challenges, requiring attention to detail to ensure secure and smooth transactions.
                Another challenge was managing user authentication across multiple sessions and devices, which required careful handling of tokens and session data.
              </p>
              <p className='about-text'>
                Moreover, scaling the application for real-time data handling, especially in the context of inventory management, posed some interesting
                problems that required optimizing database queries and implementing caching mechanisms.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Aprendizajes */}
      <div className="container-fluid bg-secondary text-white">
        <div className="row">
          <div className='col-md-12 d-flex justify-content-start mt-2 align-items-center'>
            <div className='text-start mx-5 my-5' style={{ width: '40vw' }}>
              <h1 className='about-text about-text-title' style={{ color: "#ffc107" }}>LEARNING OUTCOMES</h1>
              <p className='about-text'>
                This project not only solidified my understanding of full-stack development but also pushed me to learn more about backend optimization and API
                integration. I deepened my knowledge of working with external APIs, such as PayPal, and explored ways to handle real-time data effectively.
              </p>
              <p className='about-text'>
                Additionally, I improved my skills in managing user sessions securely and ensuring that the application could scale efficiently. These experiences
                have equipped me to handle more complex projects in the future.
              </p>
            </div>
            <div className='ml-auto mr-auto'>
              
              <FaCode size={200}  />
            </div>
          </div>
        </div>
      </div>

      {/* Bloque de "Developed By" */}
      <div className='container-fluid bg-black text-white '>
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center my-5">
            <div className='text-center'>
              <h1 className='about-text text-warning about-text-title'>DEVELOPER</h1>
              <h2 className='about-text'>Nicolás Guzmán</h2>
              <p className='about-text'>
                A passionate full-stack developer with expertise in building secure and scalable web applications.
                This project reflects my commitment to learning new technologies and applying them to create practical, real-world solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
