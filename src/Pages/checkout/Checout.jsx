import { useLoaderData } from "react-router-dom";

const Checout = () => {
      const service = useLoaderData();
      const {title, _id, price} = service;
      const handleCheckout = event =>{
            event.preventDefault();
            const form = event.target;
            const name = form.name.value;
            const date = form.date.value;
            const email = form.email.value;
            const order = {
                  customerName : name,
                  email,
                  date,
                  service:_id,
                  price: price
            }
            console.log(order);

      }
      return (
            <div className="mt-10">
                  <h2 className="text-center text-3xl font-bold"> {title} </h2>

                  <form onSubmit={handleCheckout}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 ">
                
                
         <div className=" ">
        
          <input type="text" name="name" className="input w-full" placeholder="Service Name" />
          
         </div>
         <div>
         
         <input type="date" name="date" className="input w-full" placeholder="Service Price" />
         </div>
         
        
          <div>
         
          <input type="email" name="email" className="input w-full" placeholder="Text here" />
          
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