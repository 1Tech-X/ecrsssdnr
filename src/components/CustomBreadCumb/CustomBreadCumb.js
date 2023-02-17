import React from 'react'
import { Link } from 'react-router-dom'
import './CustomBreadCumb.css';
const CustomBreadCumb = (props) => {
  const breadname= props.breadname;
  return (
<div class="bcca-breadcrumb">
  <div class="bcca-breadcrumb-item" >{breadname}</div>
  <div class="bcca-breadcrumb-item" ><Link to="/">Home</Link></div>
</div>
  )
}

export default CustomBreadCumb