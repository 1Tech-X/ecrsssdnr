import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div>
        <section class="about-section">
        <div class="container">
            <div class="row">                
                <div class="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                    <div class="inner-column">
                        <div class="sec-title">
                            <span class="title">About School रेलवे स्कूल : </span>
                            <h2>अतीत और वर्तमान के आईने में</h2>
                        </div>
                        <div class="text">दानापुर मंडल में खगौल स्थित रेलवे स्कूल की स्थापना 14
था। प्रारम्भ में यह विद्यालय कलकत्ता विश्वविद्यालय से संबद्ध था।
नवम्बर, 1889 को हुई थी। उस समय यह विद्यालय E.I.R. के अधीन
 समिति पटना से संबद्ध हुआ। इस विद्यालय के सौ वर्ष पूरे होने पर
 कालांतर में यह पटना विश्वविद्यालय से तथा बिहार विद्यालय परीक्षा
रेलवे बोर्ड ने अपनी प्रसन्नता जाहिर करते हुए इसे इंटरमीडिएट स्तर
तक अपग्रेड कराने का आदेश पारित किया तथा बाद में इसे वरीय
 मंडल कार्मिक अधिकारी दानापुर ने इसे CBSE से संबद्धता दिलाने में
अपनी महती भूमिका निभाई। </div>
             
                        <div class="btn-box">
                            <Link to="/About-School" class="theme-btn btn-style-one">Read More</Link>
                        </div>
                    </div>
                </div>

                {/* Image Column */}
                <div class="image-column col-lg-6 col-md-12 col-sm-12">
                    <div class="inner-column wow fadeInLeft">
                      <div class="author-desc">
                        
                        <span>established in 2011</span>
                      </div>
                        <figure class="image-1"><Link to="/" class="lightbox-image" data-fancybox="images"><img src="images/about.jpg" alt="" className="img-fluid" /></Link></figure>
                     
                    </div>
                </div>
              
            </div>
        
        </div>
    </section>
    </div>
  )
}

export default About