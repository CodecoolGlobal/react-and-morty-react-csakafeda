import "../App.css";

const Navigation = ({ onNavigate }) => {
  return (
    <div className="Navigation">
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
