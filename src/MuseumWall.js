import React, { useState, useEffect } from "react";compo
import "./MuseumWall.css"
import ArtTile from "./ArtTile";

const MuseumWall = (props) => {
  const [art, setArt] = useState([]);

  const getArt = async () => {
    try {
      const response = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/436121");
      if (!response.ok) {
        const error = new Error(`${response.status}: ${response.statusText}`);
        throw error;
      }
      const responseBody = await response.json();
      setArt(responseBody);
    } catch (error) {
      console.error(`Error during fetch: ${error}`);
    }
  }

  useEffect(() => {
    getArt();
  }, []);

  return (
    <ArtTile 
      imgUrl={art.primaryImageSmall}
      title={art.title}
      artistName={art.artistDisplayName}
      artistBio={art.artistDisplayBio}
      artMedium={art.medium}
    />
  );
};

export default MuseumWall;