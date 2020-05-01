import React from "react";
import styled from "styled-components";
import Videos from "./video";
import Company from "./company";
import Section from "../../../Components/Section";
import Collection from "../../Collection/index"

const Container = styled.div`
    height : 100%;
    padding: 30px;
`;
const List = styled.ul`
    display: flex;
`
const Item = styled.li`
    margin-right: 10px;
    text-align: center;
    border-bottom:3px solid ${props => props.selected ? "green" : "transparent"};
    color: ${props => props.selected ? "green" : "white"};
    transition: border-bottom, color .5s ease-in-out;
`;


const Tabs = ({ result }) => (
<Container>
        <List>
            <Item selected={0} >
                company
            </Item>
            <Item selected={1}>
                video
            </Item>
            <Item selected={1}>
                collection
            </Item>
        </List>
        {result.belongs_to_collection && (<Collection result={result.belongs_to_collection} />)}
        {result.videos && (<Videos result={result} />)}
        {result.production_companies && result.production_companies.length > 0 && ( 
                    <Section title="production_companies">{
                        result.production_companies.map(company => <Company
                        key={company.id}
                        id={company.id}
                        name={company.name}
                        imageUrl={company.logo_path}/>)
        }</Section>)}
    </Container>
)
export default Tabs