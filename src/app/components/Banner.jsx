const Banner = () => {
    return (
        <div className="relative min-h-screen mt-5">
          
            <img
                src="https://t3.ftcdn.net/jpg/04/12/12/98/360_F_412129819_HaLS1MLvkJBPaBPMagPUOYm1SfAcaT7h.jpg"
                alt="Banner"
                className="absolute inset-0 w-full h-130 object-cover object-center"
            />
            
            {/* ওভারলে */}
            <div className="absolute inset-0  bg-opacity-50"></div>
            
            {/* কন্টেন্ট */}
            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <div className="text-center space-y-5 px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
                        Upgrade Your Skills Today
                    </h2>
                    <p className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-bold text-white drop-shadow-md">
                        Learn from Industry Experts
                    </p>
                    <button className="btn btn-primary px-4 py-2 text-sm sm:text-base">
                        Explore this  
                    </button>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;