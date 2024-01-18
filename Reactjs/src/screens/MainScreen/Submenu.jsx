import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const SidebarLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
 
`;

const DropdownLink = styled(Link)`
display: flex;
align-items: center;
  color: black;
  font-weight:bold;
  text-decoration: none;
  font-size: 14px;
  height: 40px;
   padding:10px;

  @media screen and (max-width: 768px) {
    padding: 5px;
    font-size:14px; /* Adjust padding for smaller screens */
  }
  &:hover {
    background-color:white; 
    border-radius:10px;
  }
`;

const SideLink = styled.div`
color: black;
  transition: background-color 0.3s ease-in-out;
  padding:10px;
  border-radius:10px;
  
  &:hover {
    background-color: #F4C2C2; 
  }

`

function Submenu({ item }) {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => {
    
    setSubnav(!subnav);
  };
  return (
    <SideLink  >
      <SidebarLink className="d-flex justify-content-between" to={item.path} onClick={item.subNav && showSubnav}>
        <span>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </span>
        <span className='mt-1'> 
          {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
        </span>
        </SidebarLink>
        {subnav &&
          item.subNav.map((subItem, index) => (
            <DropdownLink to={subItem.path} key={index}>
            {subItem.icon}
              <SidebarLabel>{subItem.title}</SidebarLabel>
             
            </DropdownLink>
          ))}
     
    </SideLink>
  );
}

export default Submenu;
