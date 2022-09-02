import React from "react";
import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChanelCard from "./ChanelCard";

const Video = ({ videos }) => {
  // console.log(videos);
  return (
    <div>
      <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
        {videos.map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.chanelId && <ChanelCard chanelDetail={item} />}
          </Box>
        ))}
      </Stack>
    </div>
  );
};

export default Video;
