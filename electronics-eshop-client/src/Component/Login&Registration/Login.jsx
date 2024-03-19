/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contextProvider/AuthProvider";
import Gicon from "../../assets/google.png"
import swal from 'sweetalert';
const Login = () => {
    const navigate = useNavigate()
    const [error , setError] = useState('')
    const [success, setSuccess] = useState('')
    const { signInUser, signInWithGoogle } = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        setError('')    
        setSuccess('')
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                setSuccess('SuccessFully Verified')
                e.target.reset()
                navigate('/')
            })
            .catch(error => {
                console.error(error);
                setError(error.code);
            })
    }
    //google sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
            swal("Welcome!", "Successfully logged in", "success");
            navigate('/')
        })
        .catch(error => {
            console.error(error);
            setError(error.code);
        })
    }
    return (
        <div className="px-6 my-52  border-x-4 border-solid border-[#7c05f2] rounded-xl">
            <h1 className="text-center my-10 text-5xl font-bold">Login your account</h1>
            <div className="hero my-12 bg-base-200">
                <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Email</span>
                        </label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="email" 
                            className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                    </div>
                    <div className="form-control mt-4">
                        <button className="btn btn-primary bg-[#7c05f2] border-none">Login</button>
                    </div>
                    {
                        error && <p className="text-red-700">{error}</p>
                    }
                    {
                        success && <p className="text-green-700">{success}</p>
                    }
                    
                    <p className="my-4 text-base font-medium">Dont Have Any Account?<Link to="/registration"><span className="text-[#c55cf2] font-bold"> Register</span></Link> or</p>
                    <div  onClick={handleGoogleSignIn} className="flex flex-row gap-3 my-4 items-center" style={{ cursor: 'pointer' }}>
                        <img className="h-8 w-8" src={Gicon} alt="" />
                        <p className="text-base font-medium">Sign in with 
                            <span className="text-[#4285F4] text-lg"> G</span>
                            <span className="text-[#DB4437] text-lg">O</span>
                            <span className="text-[#F4B400] text-lg">O</span>
                            <span className="text-[#4285F4] text-lg">G</span>
                            <span className="text-[#0F9D58] text-lg">L</span>
                            <span className="text-[#DB4437] text-lg">E</span>
                        </p>                
                    </div>
                </form>
            </div>
        </div>
               
    );
};

export default Login;