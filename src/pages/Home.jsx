import React from 'react';
import ProfileImg from '../assets/profile.png'

const Home = () => {
    return (
        <div className='container mx-32 px-32'>
            <div className="flex flex-col mt-5">
                <img
                    src={ProfileImg}
                    alt="Profile Picture"
                    className="w-20 h-20 md:w-40 md:h-40 rounded-full mb-2 md:mb-4"
                />
                <h1 className="text-2xl md:text-4xl font-bold">Badrudin</h1>
            </div>
            <div >
                <p className="px-12 mt-5 mr-32 sm:px-8 md:px-0">
                    Hii there! Welcome to my profile. Nice to meet you. My name is Badrudin. I'm a Tech Enthusiast with a strong passion for backend, operating system, and DevOps practices. I'm constantly exploring new technologies and methodologies to expand my skill set and solve problems in the world of technology as a professional developer. I'm currently learning machine learning and AI technology.                    </p>
            </div>
        </div>
    );
};

export default Home;
