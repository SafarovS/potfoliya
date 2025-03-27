import React from "react";
import { Link } from "react-router-dom";
function Resume() {
  return (
    <>
      <div className="page-title" data-aos="fade">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Resume</h1>
                <p className="mb-0">In this section you can find information about my experience, skills, and projects I have worked on.</p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li className="current">Resume</li>
            </ol>
          </div>
        </nav>
      </div>
      <section id="resume" className="resume section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 className="resume-title">Sumary</h3>
              <div className="resume-item pb-0">
                <h4>Suhrob Safarov</h4>
                <p><em>Innovative and results-oriented developer with 3+ years of experience developing web applications and systems, taking into account the user experience from initial concept to final, optimized and efficient code writing. Excellent knowledge of frontend and backend technologies, focus on code quality and efficiency, ability to solve complex problems. Specialized in creating robust and scalable software solutions while strictly adhering to project deadlines.</em></p>
                <ul>
                  <li>Uzbekistan Karshi </li>
                  <li>(998) 290-7899</li>
                  <li>sukhrob2024@gmail.com</li>
                </ul>
              </div>
              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4> Radio Technician &amp; Radio and television repairman</h4>
                <h5>2015 - 2018</h5>
                <p><em>Kasan Vocational College , Uzbekistan , Kasan</em></p>
                <p>I studied programming languages ​​​​excellently at university, including many projects in the PHP programming language.</p>
              </div>
              <div className="resume-item">
                <h4>Bachelor of Technology &amp; Engineer Programmer</h4>
                <h5>2018 - 2022</h5>
                <p><em>Tashkent University of Information Technologies , Uzbekistan , Karshi</em></p>
                <p>I studied programming languages ​​​​excellently at university, including many projects in the PHP programming language.</p>
                <a href="https://drive.google.com/file/d/1nGsR8OB7GVblddBX7Ue1KvKs5dan2f9o/view?usp=sharing">Diplom</a>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Special teacher</h4>
                <h5>2022 - Present</h5>
                <p><em>Uzbekistan Kasan </em></p>
                <ul>
                  <li>Lead in the design, development, and implementation of programming curricula and software projects, ensuring both educational and practical applications.</li>
                  <li>Delegate tasks to students and development team members, providing mentorship and guidance on best coding practices and software architecture. </li>
                  <li>Supervise the assessment of coding assignments and software projects to ensure quality, efficiency, and problem-solving skills.</li>
                  <li>Oversee the efficient use of teaching and development resources, ensuring optimal learning outcomes and project success.</li>
                </ul>
              </div>
              <div className="resume-item">
                <h4>Freelancer</h4>
                <h5>2021 - Present</h5>
                <p><em>Remote work</em></p>
                <ul>
                  <li>Lead in the design, development, and implementation of custom software solutions and web applications for clients worldwide.</li>
                  <li>Manage multiple projects simultaneously, delegating tasks when necessary and providing expert guidance on software architecture and development strategies.</li>
                  <li>Supervise the assessment of project requirements, ensuring high-quality, efficient, and scalable solutions tailored to client needs.</li>
                  <li>Oversee the efficient use of time and resources, optimizing project budgets and meeting client deadlines with professionalism and precision.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume;