import about from "../assets/about.jpg"
const About = () => {
    return (
        <div id="about" className="border-b border-neutral-900 pb-4">
            <h1 className="my-20 text-center text-4xl text-white">About <span className="text-neutral-500">Me</span></h1>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img className="rounded-2xl" src={about} alt="" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex items-center justify-center">
                        <p className="my-2 max-w-xl py-6 text-white">I am a passionate and detail-oriented Frontend Developer with a knack for creating dynamic, user-friendly websites and web applications. My journey in web development began 6 month ago, and since then, I have honed my skills in HTML, CSS, and JavaScript, alongside modern frameworks like React and Next.js.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;