import { Link } from 'react-router-dom';
import img from '../../assets/assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
const SignUp = () => {
  const {  createUser} = useContext(AuthContext);


      const handleSignUp = event =>{
            event.preventDefault()
            const form = event.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            console.log(name,email,password)

            createUser(email,password)
            .then(result =>{
              const user = result.user;
              console.log(user)
            })
            .catch(error =>console.log(error))
            
          }
      return (
               <div className="hero bg-base-200 min-h-screen">
           <div className="hero-content flex-col lg:flex-row">
             <div className=" mr-12 w-1/2">
               <img src={img} alt="" />
             </div>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
               <div className="card-body">
               <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                <form onSubmit={handleSignUp}>
                      <fieldset className="fieldset">
                   <label className="label">Name</label>
                   <input type="name" name='name' className="input" placeholder="Name" />

                   <label className="label">Email</label>
                   <input type="email" name='email' className="input" placeholder="Email" />
                   <label className="label">Confirm Password</label>
                   <input type="password" name='password' className="input" placeholder="Password" />
                   <div><a className="link link-hover">Forgot password?</a></div>
                   
                   <input className="btn bg-[#FF3811] mt-4 text-xl  text-white px-3" type="submit" value="Sign Up" />
                 </fieldset>
                 </form>
                 <p className='my-4 text-center'>Already Have an Account<Link to="/Login" className='text-[#FF3811] font-bold' >Login</Link></p>
               </div>
             </div>
           </div>
         </div>
      );
};

export default SignUp;