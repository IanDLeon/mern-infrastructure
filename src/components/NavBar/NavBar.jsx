import './NavBar.css'
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'



export default function NavBar({ user, setUser }) { 
  // Add the following gunction to log out
  function handleLogOut(){
   // Delegate to the users-service module
   userService.logOut()
   // update state will also cause a re-render
   setUser(null)  
}
  return (
     <nav>
       <Link to="/orders">Order History</Link>
       &nbsp; | &nbsp;
       <Link to="/orders/new">New Order</Link>
       &nbsp; | &nbsp;
       Welcome, { user.name }
       &nbsp;&nbsp;
       <Link to="" onClick={handleLogOut}>Log Out</Link>
     </nav>
   );
 }
 