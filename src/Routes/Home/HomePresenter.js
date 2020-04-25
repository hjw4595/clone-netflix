import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loading from "../../Components/Loader";
const Container = styled.div`
    padding : 0 10px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
    loading ? <Loading></Loading> : 
    <Container>
        {nowPlaying && nowPlaying.length > 0 && (
        <Section title="nowPlaying">{nowPlaying.map(movie => movie.title)}</Section>
        )}
                {popular && popular.length > 0 && (
        <Section title="popular">{popular.map(movie => movie.title)}</Section>
        )}
                {upcoming && upcoming.length > 0 && (
        <Section title="upcoming">{upcoming.map(movie => movie.title)}</Section>
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