import { RxCross2 } from "react-icons/rx";

const BookingRow = ({booking, handleDelete,handleBookingConfirm}) => {
      const {_id,date,service,price,img,status} = booking;

     
      return (
            <tr>
            <th>
            <button onClick={() =>{handleDelete(_id)}} className="btn btn-circle bg-zinc-800 hover:bg-zinc-500 "><RxCross2 className="font-extrabold text-white text-2xl"></RxCross2>
 
</button>
             
            </th>
            <td>
              
                <div className="avatar">
                  <div className="rounded h-24 w-24">
                   {img && <img
                      src={img}
                      alt="Avatar Tailwind CSS Component" />}
                  </div>
                 
               
               
              </div>
            </td>
            <td>
            {service}
              
            </td>
            <td>{date} </td>
            <td>${price} </td>
            <th>
              {status === 'confirm' ? <span className="fond-bold text-primary" >Confirmed</span>
              : <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs"> please Confirm</button>}
            </th>
          </tr>
      );
};

export default BookingRow;