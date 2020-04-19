import React from "react";
import {Link} from "react-router-dom"
import styled from "styled-components";

const List = styled.ul`
    display: flex;
`
const Item = styled.li`
    width: 80px;
    height: 50px;
    text-align: center;
`
const Header = styled.header`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    background-color: rgba(20, 20, 20, 0.8);
    z-index: 10;
    box-shadow: 0px 1px 5px 2px rgba(255, 255, 255, 0.8);
`;

const Hlink = styled(Link)`
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export default () => (
    <Header>
        <List>
            <Item>
                <Hlink to="/">Movies</Hlink>
            </Item>
            <Item>
                <Hlink to="/TV">TV</Hlink>
            </Item>
            <Item>
                <Hlink to="/Search">Search</Hlink>
            </Item>
        </List>
    </Header>
    )