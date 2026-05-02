const Banner = () => {
    return (
        <div>
            <div
                className="hero min-h-screen mt-8 h-50 md:70  "
                style={{
                    backgroundImage: "url(https://t3.ftcdn.net/jpg/04/12/12/98/360_F_412129819_HaLS1MLvkJBPaBPMagPUOYm1SfAcaT7h.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  
                    backgroundAttachment: "scroll",  
                }}
            >
             
                <div className="hero-overlay "></div>
                
                <div className="text-center space-y-5 px-4 relative z-10">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
                        Upgrade Your Skills Today
                    </h2>
                    <p className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-bold text-white drop-shadow-md">
                        Learn from Industry Experts
                    </p>
                    <button className="btn btn-active px-4 py-2 text-sm sm:text-base text-white">
                        Explore this
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;