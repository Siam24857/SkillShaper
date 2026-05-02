import Cartpage from "./Cart";

const Crouse = async () => {
  const res = await fetch("/Data.json", {
  cache: "no-store"
})
  const data = await res.json()
  
  return (
    <div className="space-y-4 mt-4 px-3 sm:px-4 md:px-5 lg:px-5">
      <h3 className='text-2xl sm:text-3xl md:text-3xl lg:text-3xl font-bold m-3 sm:m-4 md:m-5 lg:m-5'>
        Popular Courses
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-5 lg:gap-5">
        {
          data.slice(0, 3).map(d => ( <Cartpage key={d.id} d={d} />))
        }
      </div>
    </div>
  );
};

export default Crouse;