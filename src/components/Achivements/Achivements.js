import React from 'react'
import { Link } from 'react-router-dom'
import './Achivements.css'
const Achivements = () => {
  return (
<div className='achivement-main'>
  
  <section className="a-section">
    <div class="left">
      <h1>Scholarships.<br></br>Honor Roll  <br></br><span>inclusion for high grades.</span></h1>
      <p>Awards won for specific activities or subjects (i.e., Most Valuable Player (MVP), Fine Art Award)</p>
      <Link to='/'>See more</Link>
    </div>
    <div className="right">
      <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
    </div>
  </section>      


    </div>
  )
}

export default Achivements