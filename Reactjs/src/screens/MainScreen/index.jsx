import React, { useState } from 'react';
import SideBar from './SideBar';
import MainPage from './MainPage';
import Header from '../../Landingpage/Header';
import { styled } from 'styled-components';
import { Container } from 'react-bootstrap';
import Footer from '../../Landingpage/Footer';

const StyledContainer = styled(Container)`
  height: 100vh;
  padding:0px;
  margin:0px;
`;

function BaseLayout() {
  const [toggle, setToggle] = useState(true);

  const toggleSidebar = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <Header setToggle={toggleSidebar} />

      <StyledContainer fluid>
        <div  className={`${toggle ? 'toggled' : ''}`}>
          <div className='row gx-0' >
            <div className={toggle ? 'col-md-3' : 'd-none'}>
              <SideBar open={toggle} />
            </div>
            <div className={toggle ? 'col-md-9' : 'col-md-12' }>
              <MainPage />
            </div>
          </div>
        </div>
        <Footer/>
      </StyledContainer>
    
    </>
  );
}

export default BaseLayout;
