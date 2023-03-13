import { useState, useEffect } from "react";

const Home = () => {
  const [accessToken, setAccessToken] = useState("");
  const [seacrhKey, setSearchKey] = useState("");
  const [tracks, setTracks] = useState([]);

  const CLIENT_ID = "cb6fae41b9a148c1b4a6f56eb93a1345";
  const REDIRECT_URI = "http://localhost:5173/home/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  useEffect(() => {
    const params = new URLSearchParams(window.location.hash.substr(1));

    const token = params.get("access_token");

    if (token) {
      localStorage.setItem("access_token", token); // Save token to local storage
      setAccessToken(token);
    } else {
      const storedToken = localStorage.getItem("access_token");
      if (storedToken) {
        setAccessToken(storedToken);
      }
    }
  }, []);

  const SearchArtist = async () => {
    const artistName = seacrhKey;

    const response = await fetch(
      `https://api.spotify.com/v1/search?q=${artistName}&type=track`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const data = await response.json();

    setTracks(data.tracks.items);

    console.log(tracks);
  };

  return (
    <div>
      {!accessToken ? (
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          <button className="text-white shadow-md  mt-6 rounded-full w-[80vw] py-2 flex items-center font-bold justify-center bg-[#C37AFE] ">
            <img src="" alt="" className="h-8 w-8 mr-3" />{" "}
            <span>Continue with Spotify</span>
          </button>
        </a>
      ) : (
        <>
          <div className="rounded-lg bg-opacity-10 border border-white mt-10 flex">
            <input
              type="text"
              name=""
              id=""
              placeholder="search"
              className="bg-purple-100 bg-opacity-0 w-full text-white rounded-lg  "
              onChange={(e) => {
                setSearchKey(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  searchTracks();
                }
              }}
            />
            <svg
              onClick={SearchArtist}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                className="text-white"
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tracks.map((track) => (
              <div className="border border-gray-200 shadow-md rounded-lg p-4 flex flex-col justify-center items-center">
                <img
                  src={track.album.images[0].url}
                  alt={track.album.name}
                  className="w-40 h-40 object-cover rounded-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-bold">{track.name}</h3>
                  <p className="text-gray-500">{track.artists[0].name}</p>
                  <p className="text-gray-500">{track.album.name}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
