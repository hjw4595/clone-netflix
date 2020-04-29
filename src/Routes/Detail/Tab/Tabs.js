import React from "react";
import styled from "styled-components";
import Videos from "./video";
import Company from "./company";
import Section from "../../../Components/Section";

const Container = styled.div``;


const Tabs = ({result, loading, error}) => (
<Container>
    <Videos result={result}></Videos>
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