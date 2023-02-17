import React, { useState } from "react";
import ytlogo from './Youtube_logo.png'
import { axiosClient } from "./axios/axiosClient";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [video, setVideos] = useState([]);

  const handleSubmit = async (event) => {
    console.log("entered submit")
    event.preventDefault();
    try {
      const response = await axiosClient.get(`/search`, { searchTerm })
      setVideos(response.data.items);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (

    <div>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-3 border-b border-b-[#d1d6df]">
        <div className="flex"> <img src={ytlogo} className="w-10" /> <h4 className="text-2xl font-bold ml-2">My Tube</h4></div>

        <button className="font-inter font-medium bg-[#132642] text-white px-4 py-2 rounded-md">SignIn</button>
      </header>
      <form onSubmit={handleSubmit} className="flex justify-center mt-10">
        <input
          type="text"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          className="border border-black h-10 w-1/2 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:border-transparent focus:outline-none p-2 text-lg"
        />

        <button type="submit" className="bg-[#6469ff]  px-4 ml-2 rounded-md text-white text-lg font-medium">Search</button>
      </form>
      {video.length > 0 && (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  p-10 gap-10">
          {video.map((video) => (
            <div key={video.id.videoId}>
              <iframe
                className="rounded-[30px] hover:scale-105"
                width="400"
                height="250"
                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
