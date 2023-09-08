

import { Link, Outlet } from "react-router-dom";


const Home = () => {
    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col  ">
      
          {/* Page content here */}
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side  ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 h-full bg-[#8296b1] text-base-content font-bold">
            {/* Sidebar content here */}
                  <>
                    <li className="hover:bg-[#b2c9e6] p-1 rounded-xl">
                      <Link to="createTeam"> Create Team </Link>
                    </li>
                  <li>
                  <Link to='createTask' className="hover:bg-[#b2c9e6]  rounded-xl me-2">Create</Link>
                  </li>
                    {/* <li className="hover:bg-[#b2c9e6] p-1 rounded-xl">
                      
                    </li> */}
                    <li className="hover:bg-[#b2c9e6] p-1 rounded-xl">
                      <Link to="task">Task</Link>
                    </li>
                    <li className="hover:bg-[#b2c9e6] p-1 rounded-xl">
                      <Link to=""> Complete or In Progress</Link>
                    </li>
                  </>
              
             <div className="divider"></div>
          
                   
          </ul>
        
        </div>
      </div>
    );
};

export default Home;