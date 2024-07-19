import { ConnectButton } from "@rainbow-me/rainbowkit";
import { SideBar } from "./sideBar";
import { ModeToggle } from "./mode-toggle";
import { Link } from "react-router-dom";
import {useAccount} from "wagmi"


const Navbar = () => {
  const {address} = useAccount();
  return (
    <div className="flex justify-between items-center p-2">
      <div className="flex gap-3 max-sm:hidden text-md font-semibold w-[40%]">
        <Link to="buy">Buy</Link>
        <Link to="rent">Rent</Link>
        <Link to="sell">Sell</Link>
        <Link to="home_loan">Home Loan</Link>        
      </div>
      <div className=" w-[20%] p-5">
        <span className="text-2xl font-bold">GA-RWA</span>
      </div>
      <div className="flex items-center gap-3  w-[40%] justify-end ">
      {!address && 
        <div className="flex gap-3 max-sm:hidden text-md font-semibold">
          <Link to="manage_rentals">Manage Rentals</Link>
          <Link to="advatise">Advatise</Link>
          <Link to="help">Help</Link>  
            
        </div>
        }
        <ConnectButton label="Connect"/>
        <div className="mr-3 flex items-center gap-5 max-sm:hidden">
          <ModeToggle/>
        </div>
         
        <div className="sm:hidden ml-3 flex items-center gap-5"> 
          <SideBar/>
        </div>
      </div>
      
     
    </div>
  )
}

export default Navbar