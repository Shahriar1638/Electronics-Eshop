import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contextProvider/AuthProvider";
import swal from 'sweetalert';
import Gicon from "../../assets/google.png"
const Registration = () => {
    const {createUser,signInWithGoogle} = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const password = form.get('password')
        const name = form.get('name')
        const email = form.get('email')
        // eslint-disable-next-line no-unused-vars
        const photo = form.get('photoURL')
        //Create user in firebase
        if (password.length<6){
            swal("Ooops...!", "Password has to be 6 character long", "error");
            return
        }
        else if (!/[A-Z]/.test(password)) {
            swal("Ooops...!", "Password must contain at least one capital letter.", "error");
            return 
        }
        // eslint-disable-next-line no-useless-escape
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            swal("Ooops...!", "Password must contain at least one special character", "error");
            return 
        }else{
            createUser(email, password)
            .then(result => {
                console.log(result.user)             
                updateProfile(result.user, {
                    displayName:name,
                    photoURL: photo
                })
                swal("SuccessFully Registered", "Your registration is done. Logging In.", "success");
            })
            .catch(error => {
                console.error(error);
                swal("Ooops...!", "Account already exist", "error");
            })
        }
    }
    //google sign in
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
            swal("Welcome!", "Successfully logged in", "success");
        })
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div className="max-w-7xl mx-auto my-40">
            <div className="p-10 my-6 border-y-2 border-solid border-[#7c05f2] rounded-xl">           
                <form onSubmit={handleRegister}>
                    <h2 className="text-3xl mb-8 text-left font-semibold ">Register your account</h2>
                    <h1 className="mb-4 text-lg">Your Name</h1>
                    <input className="mb-4 rounded-lg px-6 py-3 w-3/5" type="name" name="name" id="011" placeholder="Enter name...." required/>
                    <h1 className="mb-4 text-lg">Your Photo URL</h1>
                    <input className="mb-4 rounded-lg px-6 py-3 w-3/5" type="name" name="photoURL" id="012" placeholder="Enter photo url...."/>
                    <h1 className="mb-4 text-lg">Your Email</h1>
                    <input className="mb-4 rounded-lg px-6 py-3 w-3/5" type="email" name="email" id="1" placeholder="Enter email..." required/>
                    <h1 className="mb-4 text-lg">Your Password</h1>
                    <input className="mb-4 rounded-lg px-6 py-3 w-3/5" type="password" name="password" id="2" placeholder="Enter password..." required/>
                    <input className="btn btn-primary text-white text-lg mb-4 w-3/5 bg-[#7c05f2] border-none" type="submit" name="" id="3" value="REGISTER"/>
                </form>             
                <p className="my-4 text-base font-medium">Already Have an Account?<Link to="/login"><span className="text-[#c55cf2] text-lg font-bold"> Login Now</span></Link> or</p> 
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
            </div>         
        </div>
    );
};

export default Registration;