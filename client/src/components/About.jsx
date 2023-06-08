import React from 'react'
import BackgroundWelcome  from '../assets/BackgroundWelcome.jpg'

const About = () => {
    return (
            <div >
            <div className='container' style={{display:'flex', justifyContent:'center', alignItem:'center'}}>
            <img src={BackgroundWelcome} className='aboutimg' alt='login' style={{width:'500px', height:'500px'}} />
                <div style={{marginTop:'200px'}} >
                    <h2>About</h2>
                    <span className='line'></span>
                    <p style={{width:'400px', height:'400px', margin:'20px' }}>I am John Doe, 
                    a senior advisor for an independently owned financial planning company called Intense.</p>
                </div>
            </div>
        </div>
    )
}

export default About