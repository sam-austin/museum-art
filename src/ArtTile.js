import React, { useState, useEffect } from "react";
import "./ArtTile.css";

const ArtTile = ({ imgUrl, title, artistName, artistBio, artMedium }) => {
  return (
    <div className="ArtTile">
      <div className="ArtTile-spotlight"></div>
      <div className="ArtTile-painting">
        <img 
          src={imgUrl} 
          alt="image"
        />
        <p className="name">{artistName}</p>
        <p className="sub-title">{artistBio}</p>
        <p className="title">{title}</p>
        <p className="sub-title">{artMedium}</p>
      </div>
    </div>
  );
};

export default ArtTile;