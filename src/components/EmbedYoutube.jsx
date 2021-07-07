import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import ReactPlayer from "react-player/youtube";
import "twin.macro";

function PlayIcon() {
  return (
    <div tw="mx-10 2xl:mx-40 text-justify 2xl:text-2xl text-xs sm:mx-14 sm:text-sm md:mx-20 md:text-base lg:mx-24 lg:text-lg xl:mx-32 xl:text-xl">
      <p>
        Dieses eingebettete YouTube-Video wird von Google Ireland Limited
        bereitgestellt.
      </p>
      <p>
        Bitte lesen Sie zuerst die{" "}
        <Link to="/datenschutz" tw="hover:text-red-300">
          →Datenschutzerklärung
        </Link>
        .<br />
        Durch Klicken dieser Fläche stimmen Sie den{" "}
        <Link to="/datenschutz" tw="hover:text-red-300">
          →Datenschutzhinweisen
        </Link>{" "}
        zu.
      </p>
    </div>
  );
}

// Parameters inspired by https://www.npmjs.com/package/react-youtube
export default function EmbedYoutube({ videoId }) {
  return (
    // https://css-tricks.com/aspect-ratio-boxes/
    <div tw="aspect-w-16 aspect-h-9 md:aspect-h-7 w-3/4 border-8 border-red-300 rounded-lg overflow-auto">
      <ReactPlayer
        light="/youtube_logo_2017_padding.svg"
        playing
        playIcon={<PlayIcon />}
        width="100%"
        height="100%"
        url={"https://www.youtube-nocookie.com/embed/" + videoId}
        config={{
          youtube: {
            playerVars: { controls: 1 },
          },
        }}
      />
    </div>
  );
}

EmbedYoutube.propTypes = {
  videoId: PropTypes.string.isRequired,
};
