"use client";

import { Input } from "@heroui/react";  // শুধু Input ইম্পোর্ট করুন
import Allcrouse from './Allcrouse';
import { useState, useEffect } from "react";

const Coursepage = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await fetch('/Data.json');
                
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                
                const jsonData = await res.json();
                setData(jsonData);
                setFilteredData(jsonData);
            } catch (err) {
                console.error('Error fetching data:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        
        fetchData();
    }, []);

    const handleText = (e) => {
        e.preventDefault();
        const filtered = data.filter(course => 
            course.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredData(filtered);
    };

    if (loading) {
        return (
            <div className='space-y-5 m-2 container mx-auto px-3'>
                <h4 className='text-2xl font-bold'>All courses</h4>
                <div className="text-center py-10">
                    <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                    <p className="mt-2">Loading courses...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className='space-y-5 m-2 container mx-auto px-3'>
                <h4 className='text-2xl font-bold'>All courses</h4>
                <div className="text-center py-10 text-red-500">
                    <p>Error loading courses: {error}</p>
                    <button 
                        onClick={() => window.location.reload()} 
                        className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-xl"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className='space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-7 m-2 sm:m-3 md:m-3 lg:m-3 container mx-auto px-3 sm:px-4 md:px-5 lg:px-5'>
            <h4 className='text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold'>
                All courses ({filteredData.length})
            </h4>
            
            <form onSubmit={handleText} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-2">
                <Input 
                    className="w-full sm:max-w-64"
                    placeholder="Search courses" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    size="lg"
                    variant="bordered"
                />
                <button 
                    type="submit" 
                    className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition w-full sm:w-auto"
                >
                    Search
                </button>
            </form>
            
            {filteredData.length === 0 ? (
                <div className="text-center py-10">
                    <p className="text-gray-500">No courses found matching {searchTerm}</p>
                </div>
            ) : (
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7'>
                    {
                        filteredData.map(G => <Allcrouse key={G.id} G={G} />)
                    }
                </div>
            )}
        </div>
    );
};

export default Coursepage;