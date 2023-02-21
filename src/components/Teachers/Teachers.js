import React,{useState, useEffect} from 'react'
import './Teachers.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Teachers = () => {
    const [GetData, SetPost] = useState([]);
    useEffect(() => {
  
      const fetchPosts = async () =>{
        const res = await axios.get("https://ecrsssdnr.in/admin/teacherapi",{params:{
            per_page:4
          }});
        SetPost(res.data)
      }
      fetchPosts();
    });
  return (
    <div className='teacherbg'>
         <section className="team" id="team">
        <div className="container text-center">
            <h2>Our
                <span> Teachers</span></h2>
            <p>Here are school techer'sprofile
                <br></br>They are highly professional teachers of our school</p>
            <div className="row">
                {GetData.map((item)=>{return(
                <div className="col-lg-3 col-md-6">
                    <div className="box">
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
    </div>
  )
}

export default Teachers