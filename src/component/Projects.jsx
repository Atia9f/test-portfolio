import project1 from '../assets/screencapture-assignment-11-19bd1-web-app-2024-05-24-14_55_03.png'
import project2 from '../assets/screencapture-assignment-12-58f27-web-app-2024-07-04-14_14_23.png'
const Projects = () => {
    return (
        <div id="projects" className="border-b border-neutral-900 pb-4">
            <h1 className="text-white text-center text-4xl my-20">Projects</h1>
            <div className="flex items-center justify-center gap-10">
                <div>
                    <img className='h-[300px] w-[200px]' src={project1} alt="" />
                </div>
                <div className='text-white'>
                    <p className='mb-4'>A food sharing platform! ShareBites aims to connect individuals or organizations with surplus
                        food to those in need within their community.
                        <ol className='my-2'>
                            <li>• The platform provides clear instructions for available food items.</li>
                            <li>• I have designed ShareBites with a user-friendly interface to make it easy for user</li>
                            <li>• User can search for a item easily by the name of food</li>
                        </ol>
                        <span className='font-bold mb-4'>Technologies</span>: React.js, Firebase, React Router, MongoDB, Express.js, JWT</p>
                    <a href="https://assignment-11-19bd1.web.app/" target='_blank' className="px-4 py-2 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-white rounded-lg hover:bg-blue-700">
                        Live Link
                    </a>

                </div>
            </div>
            <div className="flex items-center justify-center gap-10 mt-10">
                <div>
                    <img className='h-[300px] w-[200px]' src={project2} alt="" />
                </div>
                <div className='text-white'>
                    <p className='mb-4'>Web Application for Blood Donation where anyone can create an account and request blood.
                        <ol className='my-2'>
                            <li>• Role-based access control for Admin, Donor, and Volunteer.</li>
                            <li>• User authentication system by Firebase and JWT (JSON Web Token)</li>
                            <li>• User can search for a donor easily by selecting blood group, district, and upazila.</li>
                        </ol>
                        <span className='font-bold mb-4'>Technologies</span>: React.js, Firebase, React Router, MongoDB, Express.js, JWT</p>
                    <a href="https://assignment-12-58f27.web.app/" target='_blank' className="px-4 py-2 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 text-white rounded-lg hover:bg-blue-700">
                        Live Link
                    </a>

                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Projects;