import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loading from "../../Components/Loader";
import Poster from "../../Components/Poster";

const Container = styled.div`
    padding : 0 20px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
    loading ? <Loading></Loading> : 
    <Container>
        {nowPlaying && nowPlaying.length > 0 && (
        <Section title="nowPlaying">{nowPlaying.map(movie => 
            <Poster
            key={movie.id}
            id={movie.id}
            imageUrl={movie.poster_path}
            title={movie.original_title}
            rating={movie.vote_average}
            year={movie.release_date.substring(0, 4)}
            isMovie={true}
          /> )}</Section>
        )}
                {popular && popular.length > 0 && (
        <Section title="popular">{popular.map(movie =>
            <Poster
            key={movie.id}
            id={movie.id}
            imageUrl={movie.poster_path}
            title={movie.original_title}
            rating={movie.vote_average}
            year={movie.release_date.substring(0, 4)}
            isMovie={true}
          />)}</Section>
        )}
                {upcoming && upcoming.length > 0 && (
        <Section title="upcoming">{upcoming.map(movie => 
            <Poster
            key={movie.id}
            id={movie.id}
            imageUrl={movie.poster_path}
            title={movie.original_title}
            rating={movie.vote_average}
            year={movie.release_date.substring(0, 4)}
            isMovie={true}
          />)}</Section>
        )}
    </Container>

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcomfing: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;