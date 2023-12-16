import welcomeImg from "../assets/3394897.jpg"

const Welcome = () => {
    return (
        <div className="flex flex-[70%] px-11 flex-col justify-center items-center">
            <img className="w-full h-[70vh]" src={welcomeImg} alt="" />
        </div>
    );
};

export default Welcome;