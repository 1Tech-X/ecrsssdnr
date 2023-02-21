import React,{useState, useEffect} from 'react'
import Header from '../Header/Header'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Footer from '../Footer/Footer'
import CustomBreadCumb from '../CustomBreadCumb/CustomBreadCumb'
import { Container } from 'react-bootstrap'
import Iframe from 'react-iframe'
import {useParams} from 'react-router-dom';
import axios from 'axios'
const Notice = () => {
    const [GetData, SetPost] = useState([]);
    const {id}  = useParams();
    useEffect(() => {
      const fetchPosts = async () =>{
       
        const res = await axios.get(`https://ecrsssdnr.in/admin/getpdf?id=${id}`);
        SetPost(res.data)
        setIsLoading(false)
      }
      fetchPosts();
    })

    const [isLoading, setIsLoading] = useState(true);
  
    const Loader = ({isLoading}) => {
        if(!isLoading) return null;
        return (
          <div id="loader" className="d-flex justify-content-center align-items-center flex-column">
            <img src="https://react-pdf.org/images/logo.png" alt="loader" className="mb-5 App-logo" />
            <p>Loading...</p>
          </div>
        )
      }
  return (
    <div>
       <Header />
        <NavbarMenu />
        <CustomBreadCumb breadname="School Notice" />
        <Container>
        <Loader isLoading={isLoading} />
        {GetData.map((item)=>{return(
        <div className='d-flex justify-content-center'>
        <Iframe url={item.pdf}
        width="80%"
        height="700px"
        id=""
        className="mt-3 mb-3"
        display="block"
        position="relative"/>
        </div>
      )})}
        </Container>
        <Footer/>
    </div>
  )
}

export default Notice