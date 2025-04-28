import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({services}) => {
      const {_id, title, img, price } = services;
      return (
            <div className="card bg-base-100 w-96 shadow-sm">
            <figure className="px-10 pt-10">
              <img
                src={img}
                alt="Shoes"
                className="rounded-xl " />
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-[16px] font-bold">{title}</h2>
            
             <div className="flex items-center"> <p className="text-[#FF3811] text-[11px] font-semibold">Price: {price}</p>
             <Link to={`/checkout/${_id}`}> <FaArrowRight className="text-[#FF3811] text-[10px] font-semibold"></FaArrowRight></Link>
            </div>
             
            </div>
          </div>
      );
};

export default ServiceCard;