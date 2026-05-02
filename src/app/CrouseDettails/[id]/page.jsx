import Link from "next/link";

const Dettailkspage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch('http://localhost:3000/Data.json')
    const data = await res.json()
    const course = data.find(course => course.id === parseInt(id));

    return (
        
        <div className="min-h-screen py-12 px-4">
             
            <div className="max-w-6xl mx-auto">
               
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                    <div className="grid md:grid-cols-2">
                    
                        <div className="relative h-80 md:h-full">
                           <img className="w-full h-full object-cover" 
                           src={course.image}
                           alt="name"
                           /> 
                           
                            <div className="absolute top-6 left-6">
                                <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-blue-700 text-sm font-semibold rounded-full shadow-lg">
                                    {course.category}
                                </span>
                            </div>
                            
                            <div className="absolute bottom-6 left-6">
                                <span className="px-4 py-2 bg-green-500 text-white text-sm font-semibold rounded-full shadow-lg flex items-center gap-2">
                                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                                    {course.level}
                                </span>
                            </div>
                        </div>
 
                        <div className="p-8 md:p-10">
                            
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                                {course.title}
                            </h1>
                            
                            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                    {course.instructor.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Course Instructor</p>
                                    <p className="font-semibold text-gray-900">{course.instructor}</p>
                                </div>
                            </div>

                            <p className="text-gray-600 leading-relaxed mb-6">
                                {course.description}
                            </p>

                            <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-blue-50 rounded-2xl">
                                
                                <div className="text-center">
                                    <div className="text-2xl mb-1"></div>
                                    <div className="text-sm font-semibold text-gray-900">{course.duration}</div>
                                    <div className="text-xs text-gray-500">Total Duration</div>
                                </div>
                                
                                <div className="text-center">
                                    <div className="text-2xl mb-1"></div>
                                    <div className="text-sm font-semibold text-gray-900">{course.rating} / 5.0</div>
                                    <div className="text-xs text-gray-500">Student Rating</div>
                                </div>
                                
                                <div className="text-center">
                                    <div className="text-2xl mb-1"></div>
                                    <div className="text-sm font-semibold text-gray-900">{course.level}</div>
                                    <div className="text-xs text-gray-500">Difficulty</div>
                                </div>
                            </div>

                    
                            <div className="space-y-2 mb-6">
                                <h3 className="font-semibold text-gray-900 mb-3">What You ll Learn:</h3>
                                <div className="grid grid-cols-1 gap-2">
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="text-green-500">✓</span>
                                        <span>Python fundamentals & syntax</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="text-green-500">✓</span>
                                        <span>Hands-on coding exercises</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="text-green-500">✓</span>
                                        <span>Build real-world projects</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <span className="text-green-500">✓</span>
                                        <span>Certificate of completion</span>
                                    </div>
                                </div>
                            </div>
 
                            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-gray-100">
                                <div className="flex-1">
                                    <div className="flex items-baseline gap-2 justify-center sm:justify-start">
                                         
                                    </div>
                                    <p className="text-xs text-gray-500 text-center sm:text-left mt-1">
                                        Limited time offer
                                    </p>
                                </div>
                                
                               <Link href={"/"}> <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                                     back to Home
                                </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

          
                <div className="mt-8 grid md:grid-cols-3 gap-6">
                    
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="text-3xl mb-3"></div>
                        <h3 className="font-semibold text-gray-900 mb-2">Full Access</h3>
                        <p className="text-sm text-gray-600">Get lifetime access to all course materials and future updates</p>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="text-3xl mb-3"></div>
                        <h3 className="font-semibold text-gray-900 mb-2">Support Included</h3>
                        <p className="text-sm text-gray-600">24/7 instructor support and student community access</p>
                    </div>
                    
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                        <div className="text-3xl mb-3"></div>
                        <h3 className="font-semibold text-gray-900 mb-2">Certificate</h3>
                        <p className="text-sm text-gray-600">Earn a verified certificate upon course completion</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dettailkspage;