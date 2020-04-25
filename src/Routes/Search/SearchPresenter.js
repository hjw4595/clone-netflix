import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loading from "../../Components/Loader"
const Container = styled.div`
    padding : 0 10px;
`;

const SearchPresenter = ({ movieResults, tvResults, searchTerm, loading, error }) => 
   loading? <Loading></Loading> : <Container>
    <input />
    {searchTerm && searchTerm.length > 0 && (<Section title="Search - Term">
      {searchTerm}
    </Section>)}
    {movieResults && movieResults.length > 0 && (<Section title="Search movie result">
      {movieResults.map(movieResults => movieResults.title)}
    </Section>)}
    {tvResults && tvResults.length > 0 && (<Section title="Search Tv-show result">
      {tvResults.map(tvResults => tvResults.title)}
    </Section>)}
</Container> 

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default SearchPresenter;