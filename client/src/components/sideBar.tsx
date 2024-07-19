import { Link } from 'react-router-dom'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { MenuIcon } from 'lucide-react'
import { ModeToggle } from './mode-toggle'

export const SideBar = () => {
  return (
    <Sheet>
        <SheetTrigger><MenuIcon/></SheetTrigger>
        <SheetContent >
            <div className="flex flex-col gap-3  text-md font-semibold">
                <Link to="buy">Buy</Link>
                <Link to="rent">Rent</Link>
                <Link to="sell">Sell</Link>
                <Link to="help">Help</Link>  
                <Link to="advatise">Advatise</Link>
                <Link to="home_loan">Home Loan</Link>        
                <Link to="manage_rentals">Manage Rentals</Link>
            </div>
            <div className="">
                <ModeToggle/>
            </div>
        </SheetContent>
    </Sheet>
  )
}
