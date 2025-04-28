import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
      const [services, setServices] = useState([]);
      useEffect(() =>{
            fetch('http://localhost:13000/server')
            .then(res => res.json())
            .then(data => setServices(data))
      } ,[])
      return (
            <div>
                  <div className="text-center mt-4 max-w-2xl mx-auto space-y-2">
                        <h3 className="text-[#FF3811] text-2xl font-bold">Services</h3>
                        <h2 className="text-5xl font-semibold "> Our Service Area</h2>
                        <p className="font-semibold text-zinc-400">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                       {
                        services.map(services => <ServiceCard key={services._id} services={services} ></ServiceCard>)
                       }
                  </div>
            </div>
      );
};

export default Services;