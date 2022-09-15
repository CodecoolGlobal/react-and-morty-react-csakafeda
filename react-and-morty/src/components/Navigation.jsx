import "../App.css";

const Navigation = ({ onNavigate }) => {
  return (

    <div className="Navigation">
      <button
        className="home-button"
        onClick={() => {
          onNavigate("");
        }}
      >
       Home
      </button>
      <button
        className="char-button"
        onClick={() => {
          onNavigate("ch");
        }}
      >
        Characters
      </button>
      <button
        className="location-button"
        onClick={() => {
          onNavigate("lc");
        }}
      >
        Locations
      </button>
      
    </div>
  );
};

export default Navigation;
