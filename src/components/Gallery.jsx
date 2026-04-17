import React, { useState } from "react";
import "./Gallery.css";

function Gallery() {

  const artworks = [
    { id: 1, title: "Abstract Art", category: "Painting", img: "https://picsum.photos/300/300?1" },
    { id: 2, title: "Nature View", category: "Photography", img: "https://picsum.photos/300/300?2" },
    { id: 3, title: "Modern Design", category: "Digital", img: "https://picsum.photos/300/300?3" },
    { id: 4, title: "Classic Painting", category: "Painting", img: "https://picsum.photos/300/300?4" },
    { id: 5, title: "3D Sculpture", category: "Sculpture", img: "https://picsum.photos/300/300?5" },
    { id: 6, title: "Portrait Shot", category: "Photography", img: "https://picsum.photos/300/300?6" },
  ];

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  // 🔥 Combined Logic
  const filteredData = artworks.filter((art) => {
    const matchesCategory = filter === "All" || art.category === filter;
    const matchesSearch = art.title.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container my-5">

      <h1 className="text-center mb-4">Art Gallery</h1>

      {/* 🔍 Search Bar */}
      <div className="text-center mb-3">
        <input
          type="text"
          placeholder="Search artwork..."
          className="form-control w-50 mx-auto"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 🎯 Filter Buttons */}
      <div className="text-center mb-4">
        <button onClick={() => setFilter("All")} className="btn btn-dark m-2">All</button>
        <button onClick={() => setFilter("Painting")} className="btn btn-outline-dark m-2">Painting</button>
        <button onClick={() => setFilter("Photography")} className="btn btn-outline-dark m-2">Photography</button>
        <button onClick={() => setFilter("Digital")} className="btn btn-outline-dark m-2">Digital</button>
        <button onClick={() => setFilter("Sculpture")} className="btn btn-outline-dark m-2">Sculpture</button>
      </div>

      {/* 🖼️ Gallery */}
      <div className="row">
        {filteredData.length > 0 ? (
          filteredData.map((art) => (
            <div className="col-md-4 mb-4" key={art.id}>
              <div className="card gallery-card">
                <img src={art.img} className="card-img-top" alt={art.title} />
                <div className="card-body text-center">
                  <h5>{art.title}</h5>
                  <p className="text-muted">{art.category}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h5 className="text-center">No results found</h5>
        )}
      </div>

    </div>
  );
}

export default Gallery;