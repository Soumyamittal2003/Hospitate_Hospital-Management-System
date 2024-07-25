import React from 'react'

const Hero = ({title,imageUrl}) => {
  return (
    <div className='hero container'>
       <div className="banner">
        <h1>{title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id unde modi mollitia similique! Dignissimos veniam soluta cumque eius sint eveniet, recusandae nisi sunt iusto sapiente assumenda quo repellat totam asperiores.</p>

        </div> 
        <div className="banner">
            <img src={imageUrl} alt="hero" className='animated-image' />
            <span>
                <img src="Vector.png" alt="vector" />
            </span>
        </div>
    </div>
  )
}

export default Hero