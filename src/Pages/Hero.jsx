import React from 'react'


const Hero = () => {
    
    const infos = [
            {
                title: "WHO WE HELP",
                discription: "Purpose-built software platform to deliver superior digital marketing campagins for recreational cannabis and medical marijuana"
            },
            {
                title: "BRANDS",
                discription: "Providing regulated brands of all types and sizes with brand-building, multi-channel digital advertising across our exclusive network of safe,"
            },
            {
                title: "RETAILERS",
                discription: "Driving quality traffic and sales conversions, instore and online, with powerful and proprietary identify, behavioral, cross-device, and geospacial retargeting data and tools"
            },
        ]
    

  return (
    <div className='hero'>
        <img src="../src/assets/bg.png" alt="" />
        <div className="hero-text">
            <h1>CAPTIVATE AUDIENCES <br /> CULTIVATE CUSTOMERS</h1>
            <p>Create Meaningful consumers across every devices, media channel, and geography with custom-built SaaS solutions</p>
        </div>
        <div className="info-card">
            {infos.map(function(info){
                return <div className='card'>
                    <h4>{info.title}</h4>
                    <p>{info.discription}</p>
                </div>
            })}
        </div>
    </div>
  )
}

export default Hero