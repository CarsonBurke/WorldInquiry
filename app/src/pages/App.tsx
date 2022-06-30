import React from 'react'
import logo from '../images/logo.png'
import stock1 from '../images/stock1.jpg'
import './app.css'
import { Navbar } from '../components/Navbar'
import { InquiryDisplay } from '../components/InquiryDisplay'
import { inquiries } from '../config'

function generateInquiries() {

  const inquiryEls = []

  for (const inquiry of inquiries) {
    inquiryEls.push(<InquiryDisplay title={inquiry.title} thumbnailSRC={inquiry.thumbnailSRC} text={inquiry.text} />)
  }

  return inquiryEls
}

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <section className='container heroParent parallaxifyBg'>
          
            <header className="heroTopper">
              <img src={logo} alt="" className="heroIcon animate floatUp" />
              <h1 className="headerMassive animate floatUp" data-time='0.7'>WorldInquiry</h1>
            </header>

            <p className="text heroText textCenter animate floatUp" data-time='0.9'>
              WorldInquiry is a platform for sharing information through articles. To start exploring inquiries, do some action that I haven't yet decided upon. By the way
            </p>

            <div className="row seperateContents">

            <a href="#" className="button BGSecondary animate floatUp" data-time='0.9'>Login</a>
            <a href="#" className="button BGMain animate floatUp" data-time='0.9'>Get started</a>

            </div>

        </section>
        <section className='container BGSecondary' id='getStarted'>
          
          <div className="blockParent BGPrimary animate floatUp">

              <h3 className="headerBig textCenter">About WorldInquiry</h3>

              <p className="text textCenter">This is some information about WorldInquiry</p>

              <img src={stock1} alt="" className="blockImage" />

          </div>
        </section>
        <section className='container row flexWrap flexCenter'>
          {generateInquiries()}
          </section>
      </main>
    </div>
  )
}