import React from 'react';
import { homePageData } from "./constant";
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

const CardFooter = styled.div`
  background-color: rgba(121, 20, 145, 0.9);
  border-bottom-right-radius: 0.1rem;
  border-bottom-left-radius: 0.1rem;
  padding: 10px;
  min-height: 66px;
`;

const Count = styled.span`
  margin: -10px;
  background-color: rgba(198, 31, 89, 0.8);
  text-align: left;
  padding: 5px 15px;
  display: inline-flex;
  border-radius: 5px;
  float: right;
  color: #fff;
`;


const SidebarLink = styled(NavLink)`
  text-decoration: none;
  border-radius: 5px;
  display: block;
  overflow: hidden; /* Prevent overflow due to box-shadow */
  
  &:hover {
    .card {
      transform: translateY(-5px); /* Add a subtle lift effect */
      box-shadow: 0 0 10px rgba(121, 20, 145, 0.9);
    }
  }
`;
const Card = styled.div`
   border-radius: 0.1rem;
  padding: 10px;
  
  transition: transform 0.3s, box-shadow 0.3s; 
  &:hover {
    transform: translateY(-5px); /* Add a subtle lift effect */
    box-shadow: 0 5px 15px rgba(121, 20, 145, 0.5); 
  }
`;

function Home() {
  
  return (
    <div className='container-fluid content-row'>
      <div className='row mt-2'>
        {homePageData.map((home) => (
          <SidebarLink className='col-xl-3 col-lg-6  mb-4'>
            <Link to={home.url}>
              <Card className=" card h-100 mb-4 mb-xl-0 card-shadow">
                <img src={home.img} className="card-img-top h-100" alt="..." />
                <CardFooter className='card-body'>
                  <Count>{home.count}</Count>
                  <h5 style={{ fontSize: "18px", fontWeight: "700" }} className="text-white card-title ">{home.title}</h5>
                </CardFooter>
              </Card>
            </Link>
          </SidebarLink>
        ))}
      </div>
    </div>
  );
}

export default Home;
