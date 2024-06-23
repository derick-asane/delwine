import ContactUs from "../contactus/contactUs";
import mycherry from "/src/assets/img/cherry.svg";
import "./home.css";
import Service from "../services/services";

const Home = () => {
  return (
    <div className="w-[100%] p__container">
      <div className="app__home">
        <div className="app__home-img">
          <img src={mycherry} alt="cherry" />
        </div>
        <div className="app__home-text">
          <h1>Best quality drinks</h1>
          <span>
            Welcome to our cellar of indulgence. Explore our curated selection
            of fine wines and whiskies, where each bottle holds a story waiting
            to be savored. Cheers to memorable moments ahead!
          </span>
        </div>
      </div>
      <ContactUs />
      <Service />
    </div>
  );
};

export default Home;
