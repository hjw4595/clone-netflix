import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'Components/Section';
import Loading from 'Components/Loader';
import Poster from '../../Components/Poster';

const Container = styled.div`
    width: 100%;
    position: relative;
`;

const CollectionPresenter = ({ result, loading}) =>
    loading ?  <Loading /> : (
        <>
            {result && (
                <Container>
                    {result.parts && result.parts.length > 0 && (
                        <Section title="Movies belonged to this collection">
                            {result.parts.map((movie) => (
                                <Poster
                                    key={movie.id}
                                    id={movie.id}
                                    imageUrl={movie.poster_path}
                                    title={movie.title}
                                    rating={movie.vote_average}
                                    year={movie.release_date}
                                />))}
                        </Section>
                    )}
                </Container>
            )}
        </>
    );
CollectionPresenter.propTypes = {
    Result: PropTypes.object,
    loading: PropTypes.bool.isRequired,
};

export default CollectionPresenter;