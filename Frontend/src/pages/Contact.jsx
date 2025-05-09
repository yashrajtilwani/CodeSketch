import React from 'react'
import Title from '../Components/Title'
import SubTitle from '../Components/SubTitle'
import { assets } from '../assets/frontend_assets/assets'
import Subscribe from '../Components/Subscribe'

function Contact() {
  return (
    <div>
        <div className='flex justify-center'>
            <Title text1={"Contact"} text2={"Us"} />
        </div>
        

        <div className='flex flex-col sm:flex-row items-center justify-around mb-28 gap-7 sm:gap-0'>
            <div className='w-full max-w-[480px] shadow-lg border border-gray-200 rounded overflow-hidden'>
                <img src={assets.contact} alt="about " />
            </div>
            <div className='text-md text-gray-600 flex flex-col items-around justify-around gap-3 sm:gap-5 text-md sm:text-base'>
                <SubTitle text1={"Our Location"} />
                <p>28 Chamunda Puri, Near BNP road, Dewas</p>

                <div>
                    <p>Email: yashrajtilwani73099@gmail.com</p>
                    <p>ph: +91 79878 77971</p>
                </div>
                

                <SubTitle text1={"Contribute at CodeSketch"} />   

                <a href="https://github.com/yashrajtilwani/CodeSketch" target="_blank" rel="noopener noreferrer">
                    <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all sm:w-1/2 duration-500 cursor-pointer"><strong>Contribute</strong></button>
                </a>

                <p>Learn more about our teams and job openings.</p>
            </div>
        </div>

        <Subscribe />
    </div>
  )
}

export default Contact