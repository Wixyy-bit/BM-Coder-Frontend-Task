import React from 'react'

const Whowehelp = () => {

  const infos = [
            {
                title: "CANNABIES BRANDS",
            },
            {
                title: "CBD BRANDS",
            },
            {
                title: "REGULATED BRANDS",
            },
            {
                title: "DISPENSARY RETAIL",
            },
            {
                title: "DELIVERY RETAIL",
            },
            {
                title: "DISPENSARY & DELIVERY",
            },
        ]



  return (
    <div className='hero'>
        <img src="../src/assets/page2-BG.png" alt="" />
        <div className="hero-text">
            <h1> <br /> WHAT WE DO</h1>
            <p>Connecting cannabis, CBD, and alcohol businesses to consumer audiences-across devices, media channels, and at every stage of the digital buying journey</p>
        </div>
        <div className="info-card">
            {infos.map(function(info){
                return <div className='card'>
                    <h6>{info.title}</h6>
                </div>
            })}
        </div>
        <div className="view2">
          <h6>HOW WE DO IT</h6>
          <h1>ADVANCING DIGITAL <br /> ENGAGEMENT</h1>
          <p>Digital marketing innovation is not led by the heft of hardware or the speed of processing. Rather, MarTech is fueled by a few key macro forces and is in the hands of the data scientists, technologists, and marketers who have empowered curious consumers and pushed predictability to the backseat.</p>
          <p>This is the complex (and crowded) global marketing ecosystem where the nascent cannabis industry must compete.</p>
          <p>And this is exactly where MediaJel was born to play</p>
          <button>LEARN MORE <i class="ri-arrow-right-long-line"></i></button>
        </div>
    </div>
  )
}

export default Whowehelp