import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Section from "../../Components/Section";
import Loading from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
    padding : 0 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({ movieResults, tvResults, searchTerm, updateTerm, loading, error, handleSubmit }) => 
   loading ? <Helmet> <title>Search | Nomflix</title> </Helmet> :
    <Container>
   <Form onSubmit={handleSubmit}>
     <Input
       placeholder="Search Movies TV "
       value={searchTerm}
       onChange={updateTerm}
     />
   </Form>
   {loading ? (
     <Loading />
   ) : (
     <>
       {movieResults && movieResults.length > 0 && (
         <Section title="Movie Results">
           {movieResults.map(movie => (
             <Poster
             key={movie.id}
             id={movie.id}
             imageUrl={movie.poster_path}
             title={movie.original_title}
             rating={movie.vote_average}
             year={movie.release_date.substring(0, 4)}
             isMovie={true}
             />
           ))}
         </Section>
       )}
       {tvResults && tvResults.length > 0 && (
         <Section title="TV Show Results">
           {tvResults.map(tv => (
             <Poster
             key={tv.id}
             id={tv.id}
             imageUrl={tv.poster_path}
             title={tv.original_name}
             rating={tv.vote_average}
             year={tv.first_air_date}
           />
           ))}
         </Section>
       )}
        {error && <Message color="red" text={error} />}
        {tvResults && 
        movieResults &&
        tvResults.length === 0 &&
        movieResults.length === 0 && (
        <Message text="Nothing found" color="gray" />
          )}
     </>
   )}
 </Container>

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;