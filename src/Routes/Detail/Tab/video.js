import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 50%;
`;
const VideoItem = styled.a`
    display: block;
    margin-bottom: 10px;
    font-size: 15px;
    border: rgba(255, 255, 253, 0.3) solid; 
    border-width: 0 0 6px 0;
`;
const Video = ({result: { videos: { results : videos } } } ) => (
    <Container>
        {videos && videos.length > 0 && (videos.map(video => <VideoItem 
                key={video.id} 
                target="_blank" 
                href={`https://www.youtube.com/watch?v=${video.key}`}>
                    {video.name}
            </VideoItem>))
    }
    </Container>
)

export default Video
