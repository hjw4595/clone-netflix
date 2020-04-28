import React from "react";
import {Link, withRouter} from "react-router-dom"
import styled from "styled-components";

const List = styled.ul`
    display: flex;
`
const Item = styled.li`
    width: 80px;
    height: 50px;
    text-align: center;
    border-bottom:3px solid ${props => props.selected ? "green" : "transparent"};
    color: ${props => props.selected ? "green" : "white"};
    transition: border-bottom, color .5s ease-in-out;
`;
const Navbar = styled.header`
    font-size: 18px;
    color: white;
    top: 0;
    left: 0; width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: rgba(20, 20, 20, 0.8);
`;

const Hlink = styled(Link)`
    height: 50px;
    display: flex ;
    align-items: center;
    justify-content: center;
`;
export default withRouter(({location : {pathname} }) => (
    <Navbar> 
        {console.log(pathname)}
        <List>
            <Item selected = {pathname ==="/tv"}>
                <Hlink to={`${pathname}/company`}>company</Hlink>
            </Item>
            <Item selected ={pathname ==="/tv"}>
                <Hlink to={`${pathname}/video`}>video</Hlink>
            </Item>
            <Item selected ={pathname ==="/Search"}>
                <Hlink to={`${pathname}/cell`}>cell</Hlink>
            </Item>
        </List>
    </Navbar>
    )
)