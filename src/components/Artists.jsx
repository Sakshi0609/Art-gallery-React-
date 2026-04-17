import React from "react";
import "./Artists.css";

function Artists() {
const artists = [
  {
    id: 1,
    name: "Leonardo da Vinci",
    style: "Renaissance",
    img: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    name: "Vincent van Gogh",
    style: "Post-Impressionism",
    img: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    name: "Frida Kahlo",
    style: "Surrealism",
    img: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    id: 4,
    name: "Claude Monet",
    style: "Impressionism",
    img: "https://randomuser.me/api/portraits/men/4.jpg"
  },
];

  return (
    <div className="container my-5">

      <h1 className="text-center mb-5">Our Artists</h1>

      <div className="row">
        {artists.map((artist) => (
          <div className="col-md-4 mb-4" key={artist.id}>
            <div className="card artist-card text-center p-3">
              
              <img 
                src={artist.img} 
                alt={artist.name} 
                className="artist-img mx-auto"
              />

              <h5 className="mt-3">{artist.name}</h5>
              <p className="text-muted">{artist.style}</p>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Artists;