import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Checout = () => {
      const service = useLoaderData();
      console.log(service)
      const {title, _id, price, img,} = service;
      const {user} = useContext(AuthContext);
      const handleCheckout = event =>{
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const date = form.date.value;
            const email = user?.email;
            const booking = {
                  customerName : name,
                  email,
                  img,
                  date,
                  service: title,
                  service_id:_id,
                  price: price
            }
            console.log(booking);
            fetch('http://localhost:13000/bookings',{
                  method: 'POST',
                  headers:{
                        'content-type' : 'application/json'

                  },
                  body: JSON.stringify(booking)

            })
            .then(res => res.json())
            .then(data =>{
            console.log(data);
            if(data.insertedId){
                  alert('service book successfully')
            }

            })

      }
      return (
            <div className="mt-10">
                  <h2 className="text-center text-3xl font-bold"> {title} </h2>

                  <form onSubmit={handleCheckout}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 ">
                
                
         <div className=" ">
        
          <input type="text" name="name" defaultValue={user?.displayName} className="input w-full" placeholder="Service Name" />
          
         </div>
         <div>
         
         <input type="date" name="date" className="input w-full" placeholder="Service Price" />
         </div>
         
        
          <div>
         
          <input type="text" name="email" className="input w-full" defaultValue={user?.email} placeholder="email"  />
          
          </div>
          <div>
         
          <input type="text" defaultValue={'$'+ price} className="input w-full" placeholder="Service Type" />
         
          </div>
        
        
      </div>
      
      <div className="my-6">
            <input  className="btn btn-neutral bg-[#FF3811]  border-[#FF3811] w-full" type="submit" value="Order Confirm" />
      </div>
                
                  </form>
                
                 
      
    </div>
 
      );
};

export default Checout;