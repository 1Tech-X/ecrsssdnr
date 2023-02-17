import React,{useState, useCallback} from 'react'
import Header from '../Header/Header'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import Footer from '../Footer/Footer'
import CustomBreadCumb from '../CustomBreadCumb/CustomBreadCumb'
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photoData } from './PhotoData'
import { Container } from 'react-bootstrap'
import './PageStyle.css';
const PhotoGallery = () => {
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

   
  return (
    <div className='gallery'>
        <Header />
        <NavbarMenu />
        <CustomBreadCumb breadname="Gallery" />
        <div className='d-flex justify-content-center'>
        <h1 className='text-center mt-3 mb-3'>School <span className='underline'>Image Gallery</span></h1>
        </div>
        
        <Container>
        <Gallery photos={photoData} onClick={openLightbox} />
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
        </Container>
        <Footer />
    </div>
  )
}

export default PhotoGallery