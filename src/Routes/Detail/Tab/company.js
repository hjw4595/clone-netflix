import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
    background-image: url(${(props) => props.bgUrl});
    width: 100%;
    height: 100px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
`;
const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const company = ({ imageUrl, name = false }) => (
    <Container>
      <ImageContainer>
      <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : require("../../../assets/NoPoster.jpg")
          }
        />
      </ImageContainer>
      <Title>
        {name}
      </Title>
    </Container>
);

company.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string
};

export default company;