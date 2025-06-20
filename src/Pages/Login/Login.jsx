import { Link, useLocation, 
  useNavigate
 } from 'react-router-dom';
import img from '../../assets/assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';

const Login = () => {
  const { signIn} = useContext(AuthContext);  
  const location = useLocation();
  const navigate = useNavigate()
  console.log(location)

      const handleLogin = event =>{
            event.preventDefault()
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
            

            signIn(email, password)
            .then(result =>{
              const loggedInUser= result.user;
              console.log(loggedInUser);
              const user = {email}
              // navigate(location?.state ? location?.state : '/')
              // ------------------------- get access token --------------------------------
              axios.post('http://localhost:13000/jwt',user,{
              withCredentials: true}
            )
              .then(res =>{
                console.log(res.data)
                if(res.data.success){
                   navigate(location?.state ? location?.state : '/')
                }
              })
              

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
      <h1 className="text-3xl font-bold text-center">Login</h1>
       <form onSubmit={handleLogin}>
             <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          
          <input className="btn bg-[#FF3811] mt-4 text-xl  text-white px-3" type="submit" value="Login" />
        </fieldset>
        </form>
        <p className='my-4 text-center'>New to Car Doctors <Link to="/SignUp" className='text-[#FF3811] font-bold' >Sign Up</Link></p>
      </div>
    </div>
  </div>
</div>
      );
};

export default Login;