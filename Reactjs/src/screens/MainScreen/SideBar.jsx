import React from 'react';
import Submenu from './Submenu';
import { SidebarData } from '../../Landingpage/Header/constant';
import { styled } from 'styled-components';
import { Container } from 'react-bootstrap';

const StyledSidebar = styled.div`
  background-color: #f8f9fa;
  border-right: 1px solid #dee2e6;
  height: 100%; 
  
  transition: transform 0.3s ease-in-out;  
`;
 
function SideBar({ open }) {
  return (
    <StyledSidebar>
      <Container fluid className={open ? '' : 'd-md-none'}>
        {SidebarData.map((item, index) => (
          <Submenu item={item} key={index} />
        ) || [])}
      </Container>
    </StyledSidebar>
  );
}

export default SideBar;
