// import {motion} from "framer-motion"
import banner from '../assets/banner.jpg'
const Banner = () => {
    return (
        <div id="home" className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16 text-white text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Mst. Atia Fairuj</h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Junior Developer</span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-white">I believe that the best user experiences are born from a seamless blend of design and functionality. My approach to frontend development is deeply rooted in understanding the user’s perspective and translating that into intuitive interfaces. I strive to write clean, maintainable code and am committed to continuous learning and improvement to stay abreast of the latest industry trends and technologies.</p>
                        <a href="https://drive.google.com/file/d/1RdjV0tOHrtzZGLb8FfvQvpzrNS4ox76d/view?usp=sharing" target="_blank" download="YourName-CV.pdf" className="px-4 py-2 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-white rounded-lg hover:bg-blue-700">
                            Download CV
                        </a>

                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <img src={banner} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;