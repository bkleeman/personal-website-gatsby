import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import giphy from '../images/giphy.jpg'

const SoftwareProjects = () => (
  <Layout>
    <Link to="/"><i class="fa fa-home" aria-hidden="true"></i></Link>
    <br></br>
    <br></br>
    <h1>Software Projects</h1>
    <p>Below are some of Benjamin Kleeman's software projects that highlight his various skills.</p>
   

    <div>
    <h2><a href="http://giphy-synths.surge.sh/" target="_blank">GIPHY Synth PWA</a></h2>
      <img src={giphy} alt="Capture" border="0"></img>
      <p>A Progressive Web App that automatically loads the newest uploads of GIFs tagged 'synthesizer' at Giphy.com via the GIPHYDevelopers API. Built with vanilla JavaScript and Bootstrap 4.0.0.</p>
    </div>
    
    <div>
    <h2><a href="https://github.com/bkleeman/web-audio-api-templates" target="_blank">Web Audio API Templates</a></h2>
      <p>A repository containing basic templates for browser-based synthesizer projects, using jQuery, jQuery UI, and Bootstrap 3.3.7. At the moment it consists of two monophonic synthesizer starter patches - one with a single oscillator, and another with three oscillators.</p> <p>They are both still in their infancy and have some bugs to be worked out, but if you need some structure to reference as you get started with a project, I encourage you to build from here. I have high hopes for the potential that lies within to use with future projects. </p>
    </div>
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SoftwareProjects