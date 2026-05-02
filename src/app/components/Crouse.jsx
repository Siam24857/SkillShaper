import Cartpage from "./Cart";
 

const Crouse = async () => {
  const res = await fetch('http://localhost:3000/Data.json')
  const data = await res.json()
  
   

  return (
    <div className="space-y-4 mt-4">
      <h3 className='text-3xl font-bold m-5'>Popular Courses</h3>
       
        
        <div className="grid grid-cols-3 gap-5">
      {
         data.slice(0, 3).map(d => ( <Cartpage key={d.id} d={d} />))
      }
      </div>
      
    </div>
  );
};

export default Crouse;