import React, {useState, useEffect} from 'react'
import Header from '../Header/Header'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Footer from '../Footer/Footer'
import CustomBreadCumb from '../CustomBreadCumb/CustomBreadCumb'
import axios from 'axios'
import { Link } from 'react-router-dom'
const Faculty = () => {
    const [GetData, SetPost] = useState([]);
    useEffect(() => {
  
      const fetchPosts = async () =>{
        const res = await axios.get("https://ecrsssdnr.in/admin/allteachersapi");
        SetPost(res.data)
      }
      fetchPosts();
    });
  return (
    <div>
     <Header />
        <NavbarMenu />
        <CustomBreadCumb breadname="Faculty" />
        <section className="team" id="team">
        <div className="container text-center">
            <h2 className='text-dark'>Our
                <span className='text-danger'> Teachers</span></h2>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                <br></br>incididunt ut labore et dolore magna aliqua.</p> */}
            <div className="row">
            {GetData.map((item)=>{return(
                <div className="col-lg-3 col-md-6 mt-4">
                    <div className="box ">
                        <div className="image">
                            <img src={item.img} alt="team" className="img-fluid" />
                            <div className="social-icons">
                                <Link to="#"><i className="fas fa-eye"></i> View</Link>
                               
                            </div>
                            <div className="overlay"></div>
                        </div>
                        <h3>{item.name}</h3>
                        <h4>{item.profession}</h4>
                    </div>
                </div>
                )})}
            </div>
        </div>
    </section>
        <Footer />
    </div>
  )
}

export default Faculty