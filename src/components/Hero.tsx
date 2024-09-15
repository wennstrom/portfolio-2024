import Coder from '../assets/coder.png';

const Hero = () => {
    return (
        <div className="flex jusify-center items-center mt-6 col w-full" id="hero">
            <div className="flex  w-4/6 flex-col">
                <h1 className="text-4xl pb-2">Fullstack Developer</h1>
                <p>
                    I'm a fullstack developer that likes to code websites and solve backend problems.
                    <br />
                    Feel free to contact me about any work opportunities
                    <br />
                    <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Contact me</button>
                    <button className='mt-4 bg-white hover:bg-blue-500 text-blue-500 hover:text-white font-bold py-2 px-4 rounded ml-2'>My Projects</button>
                </p>
            </div>
            <div className="flex w-2/6 p-4">
                <img src={Coder} />
            </div>
        </div>

    )
}

export default Hero;