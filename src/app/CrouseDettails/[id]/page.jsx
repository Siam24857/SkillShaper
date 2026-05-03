import Link from "next/link";
import courseData from "@/Data.json"; 

const Dettailkspage = async ({ params }) => {
    const { id } = await params;


   const data = courseData;
  const course = data.find(course => course.id === parseInt(id));
    return (
        
        <div className="min-h-screen py-8 sm:py-10 md:py-12 lg:py-12 px-3 sm:px-4 md:px-6 lg:px-8">
             
            <div className="max-w-6xl mx-auto">
               
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
                    <div className="grid md:grid-cols-2">
                    
                        <div className="relative h-64 sm:h-72 md:h-full">
                           <img className="w-full h-full object-cover" 
                           src={course.image}
                           alt={course.title}
                           /> 
                           
                            <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                                <span className="px-3 sm:px-4 py-1 sm:py-2 bg-white/90 backdrop-blur-sm text-blue-700 text-xs sm:text-sm font-semibold rounded-full shadow-lg">
                                    {course.category}
                                </span>
                            </div>
                            
                            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                                <span className="px-3 sm:px-4 py-1 sm:py-2 bg-green-500 text-white text-xs sm:text-sm font-semibold rounded-full shadow-lg flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></span>
                                    {course.level}
                                </span>
                            </div>
                        </div>
 
                        <div className="p-5 sm:p-6 md:p-8 lg:p-10">
                            
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                                {course.title}
                            </h1>
                            
                            <div className="flex items-center gap-3 mb-4 sm:mb-6 pb-4 border-b border-gray-100">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-base sm:text-lg shadow-lg">
                                    {course.instructor.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-xs sm:text-sm text-gray-500">Course Instructor</p>
                                    <p className="font-semibold text-sm sm:text-base text-gray-900">{course.instructor}</p>
                                </div>
                            </div>

                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                                {course.description}
                            </p>

                            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6 p-3 sm:p-4 bg-blue-50 rounded-2xl">
                                
                                <div className="text-center">
                                    <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">{course.duration}</div>
                                    <div className="text-xs text-gray-500">Duration</div>
                                </div>
                                
                                <div className="text-center">
                                    <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">{course.rating} / 5.0</div>
                                    <div className="text-xs text-gray-500">Rating</div>
                                </div>
                                
                                <div className="text-center">
                                    <div className="text-sm sm:text-base md:text-lg font-semibold text-gray-900">{course.level}</div>
                                    <div className="text-xs text-gray-500">Difficulty</div>
                                </div>
                            </div>

                    
                            <div className="space-y-2 mb-4 sm:mb-6">
                                <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">What You ll Learn:</h3>
                                <div className="grid grid-cols-1 gap-1 sm:gap-2">
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                                        <span className="text-green-500 text-sm sm:text-base">✓</span>
                                        <span>Python fundamentals & syntax</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                                        <span className="text-green-500 text-sm sm:text-base">✓</span>
                                        <span>Hands-on coding exercises</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                                        <span className="text-green-500 text-sm sm:text-base">✓</span>
                                        <span>Build real-world projects</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                                        <span className="text-green-500 text-sm sm:text-base">✓</span>
                                        <span>Certificate of completion</span>
                                    </div>
                                </div>
                            </div>
 
                            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-4 border-t border-gray-100">
                                <div className="flex-1">
                                    <p className="text-xs text-gray-500 text-center sm:text-left">
                                        Limited time offer
                                    </p>
                                </div>
                                
                               <Link href={"/"} className="w-full sm:w-auto"> 
                                   <button className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base">
                                       Back to Home
                                   </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

          
               
            </div>
        </div>
    );
};

export default Dettailkspage;