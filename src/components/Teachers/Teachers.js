import React from 'react'
import './Teachers.css';
import { Link } from 'react-router-dom';
const Teachers = () => {
  return (
    <div className='teacherbg'>
         <section className="team" id="team">
        <div className="container text-center">
            <h2>Our
                <span>  Teachers</span></h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                <br></br>incididunt ut labore et dolore magna aliqua.</p>
            <div className="row">
                
                <div className="col-lg-3 col-md-6">
                    <div className="box">
                        <div className="image">
                            <img src="https://studybird.in/wp-content/uploads/2018/09/TEACHER-875.jpg" alt="team" className="img-fluid" />
                            <div className="social-icons">
                                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                            <div className="overlay"></div>
                        </div>
                        <h3>Lorem Ipsum</h3>
                        <h4>Physics</h4>
                    </div>
                </div>
         
                <div className="col-lg-3 col-md-6">
                    <div className="box">
                        <div className="image">
                            <img src="https://marvel-b1-cdn.bc0a.com/f00000000026007/resilienteducator.com/wp-content/uploads/2017/03/physics-teacher.jpg" alt="team" className="img-fluid" />
                            <div className="social-icons">
                                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                            <div className="overlay"></div>
                        </div>
                        <h3>Lorem Ipsum</h3>
                        <h4>Maths</h4>
                    </div>
                </div>
              
                <div className="col-lg-3 col-md-6">
                    <div className="box">
                        <div className="image">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ77chREL247ZW5I_9i8rwtscEshlHVfFj8zlQfbSC5WGB3IgLFApF9taIv-ufkROAk6rM&usqp=CAU" alt="team" className="img-fluid" />
                            <div className="social-icons">
                                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                            <div className="overlay"></div>
                        </div>
                        <h3>Lorem Ipsum</h3>
                        <h4>Sciences</h4>
                    </div>
                </div>
        
                <div className="col-lg-3 col-md-6">
                    <div className="box">
                        <div className="image">
                            <img src="https://wp.scoopwhoop.com/wp-content/uploads/2017/09/59ae90b07c99885c215254f7_4b5b611d-d1be-4962-9e67-a156a967d9bb.jpg" alt="team" className="img-fluid" />
                            <div className="social-icons">
                                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                <Link to="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                            <div className="overlay"></div>
                        </div>
                        <h3>Lorem Ipsum</h3>
                        <h4>Hindi</h4>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Teachers