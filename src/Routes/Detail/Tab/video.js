import React from "react";
import styled from "styled-components";

const Container = styled.div`
`;
const VideoItem = styled.span`
`;
const List = styled.li`
`;
const Video = ({result: { videos: { results : videos } } } ) => (
    <Container>
        {videos && videos.length > 0 && <List>{
            videos.map(video => <VideoItem key={video.key}>
                {video.name}
            </VideoItem>)}</List>
    }
    </Container>
)

export default Video
