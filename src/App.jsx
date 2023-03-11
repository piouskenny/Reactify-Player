import "./App.css";
import "./styles/login.css";

const App = () => {
  const CLIENT_ID = "cb6fae41b9a148c1b4a6f56eb93a1345";
  const REDIRECT_URI = "http://localhost:5173/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";

  return (
    <div className="md:p-[2rem]  ">
      <div className="md:grid grid-cols-2 md:h-[90vh]  md:bg-white rounded-xl ">
        {/* Mobile View */}
        <div className="md:hidden text-center h-screen max-h-screen mobile-auth flex justify-center items-center">
          <div className="m-[0 auto]">
            <button className="bg-white  shadow-[#C37AFE] rounded-full w-[80vw] py-3 font-bold">
              Create Account
            </button>

            <a
              href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
            >
              <button className="text-white shadow-md  mt-6 rounded-full w-[80vw] py-2 flex items-center font-bold justify-center bg-[#C37AFE] ">
                <img
                  src="images/spotify-logo.png"
                  alt=""
                  className="h-8 w-8 mr-3"
                />{" "}
                <span>Continue with Spotify</span>
              </button>
            </a>
          </div>
        </div>

        {/* Desktop View */}
        <div className="col-span-1 hidden md:flex justify-center items-center">
          <div className="">
            <button className="bg-white border border-black shadow-[#C37AFE] rounded-full w-[20vw] py-3 font-bold">
              Create Account
            </button>

            <a
              href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
            >
              <button className="text-white shadow-md  mt-6 rounded-full w-[20vw] py-2 flex items-center font-bold justify-center bg-[#C37AFE] ">
                <img
                  src="images/spotify-logo.png"
                  alt=""
                  className="h-8 w-8 mr-3"
                />{" "}
                <span>Continue with Spotify</span>
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-1 overflow-hidden hidden md:block">
          <img
            src="images/Hero.png"
            alt=""
            className="rounded-xl h-fit w-fit"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
