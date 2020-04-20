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
    transition: border-bottom .5s ease-in-out;
`;
const Header = styled.header`
    color: white;
    position: fixed;
    top: 0;
    left: 0; width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: rgba(20, 20, 20, 0.8);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(0, 150, 150, 0.8);
`;

const Hlink = styled(Link)`
    height: 50px;
    display: flex ;
    align-items: center;
    justify-content: center;
`;
export default withRouter(({location : {pathname} }) => (
    <Header> 
        <List>
            <Item selected ={pathname ==="/"}> 
                <Hlink to="/">Movies</Hlink>
            </Item>
            <Item selected ={pathname ==="/TV"}>
                <Hlink to="/TV">TV</Hlink>
            </Item>
            <Item selected ={pathname ==="/Search"}>
                <Hlink to="/Search">Search</Hlink>
            </Item>
        </List>
    </Header>
    )
)