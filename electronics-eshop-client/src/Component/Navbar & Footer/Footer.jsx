import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <div className="mt-52 relative">
      <div className="absolute -z-50 bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#7c05f2" fillOpacity="1" d="M0,96L26.7,106.7C53.3,117,107,139,160,128C213.3,117,267,75,320,80C373.3,85,427,139,480,133.3C533.3,128,587,64,640,37.3C693.3,11,747,21,800,42.7C853.3,64,907,96,960,96C1013.3,96,1067,64,1120,90.7C1173.3,117,1227,203,1280,202.7C1333.3,203,1387,117,1413,74.7L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
      </div>
      <footer className="footer p-10 text-base-content z-50">
        <aside>
          <img className="lg:ml-48 w-96 h-full bg-white px-2 rounded-xl py-1" src={logo} alt="" />
        </aside>
        <nav className="">
          <header className="text-xl font-semibold mb-1 text-[#FFFF00]">Company</header>
          <a className="link link-hover text-lg font-medium -mb-2 text-sky-400">About us</a>
          <a className="link link-hover text-lg font-medium -mb-2 text-sky-400">Contact</a>
          <a className="link link-hover text-lg font-medium -mb-2 text-sky-400">Jobs</a>
          <a className="link link-hover text-lg font-medium -mb-2 text-sky-400">Press kit</a>
        </nav>
        <nav>
          <header className="text-[#FFFF00] text-xl font-semibold mb-1">Legal</header>
          <a className="link link-hover text-lg font-medium -mb-2 text-sky-400">Terms of use</a>
          <a className="link link-hover text-lg font-medium -mb-2 text-sky-400">Privacy policy</a>
          <a className="link link-hover text-lg font-medium -mb-2 text-sky-400">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
