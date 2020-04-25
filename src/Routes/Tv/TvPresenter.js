import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loading from "../../Components/Loader";

const Container = styled.div`
    padding : 0 10px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) =>
    loading ? <Loading></Loading> : <Container>
        {topRated && topRated.length > 0 && (
        <Section title="top-Rated">{topRated.map(tv => tv.name)}</Section>
        )}
        {popular && popular.length > 0 && (
        <Section title="top-Rated">{popular.map(tv => tv.name)}</Section>
        )}
        {airingToday && airingToday.length > 0 && (
        <Section title="top-Rated">{airingToday.map(tv => tv.name)}</Section>
        )}
        {console.log(topRated)}
    </Container>

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default TVPresenter;