import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import scav from '../images/design-principles-scavenger-hunt.jpg'

const WritingExamples = () => (
  <Layout>
    <Link to="/"><i class="fa fa-home" aria-hidden="true"></i></Link>
    <br></br>
    <br></br>

    <h1>Writing Examples</h1>
    <p>Below are some examples of Benjamin Kleeman's writing and presentation skills -- business, technical, and otherwise.</p>
    
    <div>
      <h2><a href="https://docs.google.com/presentation/d/1aghTLAdN-iOSCPbw0XcCUj4KGrBZNEmQQ44jVWvp4uQ/edit?usp=sharing" target="_blank">Design Principles Scavenger Hunt</a></h2>
      <img src={scav}></img>
      <p>A PowerPoint presentation highlighting knowledge of Interaction Design principles, as specified by Don Norman in <i>The Design of Everyday Things</i>.</p>
    </div>
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WritingExamples