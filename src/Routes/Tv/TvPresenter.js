import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loading from "../../Components/Loader";
import Poster from "../../Components/Poster";

const Container = styled.div`
    padding : 0 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
    loading ? <Loading /> : <Container>
        {topRated && topRated.length > 0 && (
        <Section title="top-Rated">{topRated.map(tv => 
            <Poster
            key={tv.id}
            id={tv.id}
            imageUrl={tv.poster_path}
            title={tv.original_name}
            rating={tv.vote_average}
            year={tv.first_air_date.substring(0, 4)}
          />)}</Section>
        )}
        {popular && popular.length > 0 && (
        <Section title="popular">{popular.map(tv => 
            <Poster
            key={tv.id}
            id={tv.id}
            imageUrl={tv.poster_path}
            title={tv.original_name}
            rating={tv.vote_average}
            year={tv.first_air_date.substring(0, 4)}
          />)}</Section>
        )}
        {airingToday && airingToday.length > 0 && (
        <Section title="airingToday">{airingToday.map(tv =>
            <Poster
            key={tv.id}
            id={tv.id}
            imageUrl={tv.poster_path}
            title={tv.original_name}
            rating={tv.vote_average}
            year={tv.first_air_date.substring(0, 4)}
          />)}</Section>
        )}
    </Container>

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default TVPresenter;