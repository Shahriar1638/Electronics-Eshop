import { useState,useContext, useEffect } from "react";
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import { BsPersonCircle,BsFillBrightnessHighFill,BsFillMoonFill } from "react-icons/bs";
import { Link,NavLink } from "react-router-dom";
import { AuthContext } from "../../contextProvider/AuthProvider";
import logo from "../../assets/logo.png";
const Navbar = () => {
    const [email,setEmail] = useState(null)
    const [theme , setTheme] = useState("light")
    const [open, setOpen] = useState(false)
    const { user, logOut } = useContext(AuthContext)
    useEffect(() => {
        if (user) {
          setEmail(user.email);
        }
      }, [user]);
    // const email = user.email
    useEffect(()=>{
        document.querySelector("html").setAttribute("data-theme",theme)
    },[theme])
    const handleLightDark = () =>{
        if (theme==="light"){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    } 
    const handleLogOut = () =>{
        logOut()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.error(error);
        })
    }  
    const Options = 
    <>
        <li className="text-lg text-white font-semibold"><NavLink to="/" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-[#8C86FF]" : ""}>Home</NavLink></li>
        <li className="text-lg text-white font-semibold"><NavLink to='/addproduct' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-[#8C86FF]" : ""}>Add Product</NavLink></li>
        <li className="text-lg text-white font-semibold"><NavLink to={`/cart/${email}`} className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-[#8C86FF]" : ""}>My Cart</NavLink></li>
        <li className={'text-lg text-white font-semibold'}><NavLink to='/login' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-[#8C86FF]" : ""}>Login</NavLink></li>
        <li className="text-3xl  font-extrabold" onClick={handleLightDark}>{theme==="light"? <BsFillBrightnessHighFill className="text-[#d1c73a]"></BsFillBrightnessHighFill>:<BsFillMoonFill className="text-[#bac6d5]"></BsFillMoonFill>}</li>
    </>
    
    return (
        <nav className="flex flex-row h-24 justify-between items-center px-4 md:px-8">
            {/* When device is larger or equal to mid size device logo below will show left */}
            <div className="absolute -z-50 top-0 left-0 right-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7c05f2" fillOpacity="1" d="M0,160L48,138.7C96,117,192,75,288,85.3C384,96,480,160,576,160C672,160,768,96,864,74.7C960,53,1056,75,1152,85.3C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </div>
            <div className="hidden md:block">
                <img className="w-full h-20 bg-white px-2 rounded-xl py-1" src={logo} alt="" />
            </div>
            
            <div>
                {/* Icon for drop down navbar */}
                <div className="md:hidden" onClick={()=> setOpen(!open)}>
                    {
                        open === true ? <AiOutlineClose className="text-4xl text-[#010326]"></AiOutlineClose> : <AiOutlineMenu className="text-4xl text-[#010326]"></AiOutlineMenu>
                    }   
                </div> 
                <div>
                    <ul className={`md:flex md:gap-8 duration-2000 items-center absolute md:static ${open? 'top-16 text-left left-2 text-white bg-[#101326] rounded-md p-4': '-top-40 text-left left-2 '}`}>
                        {Options}
                    </ul>          
                </div>          
            </div>
            {/* When it is mid size device or below , Logo at center will be visible */}
            <div className="md:hidden">
                <img className="w-full h-16 bg-white px-2 rounded-xl py-1" src={logo} alt="" />
            </div>
            {/* User name of navbar */}
            <div className="flex flex-row items-center">
                {
                    user ? <>
                        <div className="flex flex-row items-center">
                            {
                                user.photoURL? <div className="avatar">
                                                    <div className="w-10 mr-4 rounded-full">
                                                            <img src={user.photoURL} />
                                                    </div>
                                                </div>:
                                                <BsPersonCircle className="text-4xl text-[#8C86FF] mr-4"></BsPersonCircle>
                                }
                                <span className="mr-4 text-xl text-white hidden md:block">{user.displayName}</span>
                            </div>                     
                            <a className="btn bg-[#010326] border-none text-white" onClick={handleLogOut}>Sign Out</a>
                        </>
                        :
                        <div className="flex flex-row items-center">
                                <BsPersonCircle className="text-4xl text-[#8C86FF] mr-4"></BsPersonCircle>
                                <Link className="btn bg-[#010326] border-none text-white font-semibold" to="/login">Log In</Link>
                        </div>                         
                    }
            </div>          
        </nav>
    );
};

export default Navbar;