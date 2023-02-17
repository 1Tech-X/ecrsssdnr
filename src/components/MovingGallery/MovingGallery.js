import React,{useCallback, useState} from 'react'
import { Card } from 'react-bootstrap';
import { photoData } from '../Pages/PhotoData';
import Slider from "react-slick";
import Carousel, { Modal, ModalGateway } from "react-images";
import './MovingGallery.css';
const MovingGallery = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, {photoData, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoPlay:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div>
<h2 className='ms-3 mb-3 mt-3 ' style={{textDecoration:"underline"}}>School Gallery</h2>
<Slider {...settings} >
{photoData.map(index => (
    <Card className='p-2 rounded-0 shadow mb-3' >
        <Card.Img src={index.src} className='img-fluid rounded-0 movingcard' onClick={openLightbox}  />
        <Card.Body>
            <Card.Title className='text-center'>Schools</Card.Title>
            <Card.Text className='text-center text-muted'>School Front</Card.Text>
      
        </Card.Body>
    </Card>   
     ))}  
   
 </Slider>
 <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photoData.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  )
}

export default MovingGallery