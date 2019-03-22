import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AudioExamples = () => (
  <Layout>
    <Link to="/"><i class="fa fa-home" aria-hidden="true"></i></Link>
    <br></br>
    <br></br>

    <h1>Audio Examples</h1>
    <p>Below are some examples of Benjamin Kleeman's audio skills -- writing, performing, recording, and producing.</p>
    
    <div>
      <h2><a href="https://thewaysofteaandfailure.bandcamp.com/" target="_blank">The Ways of Tea and Failure</a></h2>
      <h5>2016 - Present</h5>
      <a href="https://thewaysofteaandfailure.bandcamp.com/" target="_blank"><img src="https://f4.bcbits.com/img/a2805234254_2.jpg" style={{ height: `13rem`, width: `13rem` }}></img></a>
      <p>A solo electronic music project that began in 2016 when Benjamin first began working with synthesizers in a DAW.</p>
    </div>

    <div>
      <h2><a href="https://hexeddecimal.bandcamp.com/releases" target="_blank">Hexed Decimal - Spectral Embrace</a></h2>
      <h5>2018</h5>
      <a href="https://hexeddecimal.bandcamp.com/releases" target="_blank"><img src="https://f4.bcbits.com/img/a0407812987_16.jpg/" style={{ height: `13rem`, width: `13rem` }}></img></a>
      <p>An all analog song stylized as a classic video game score.</p>
    </div>
    
    
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AudioExamples