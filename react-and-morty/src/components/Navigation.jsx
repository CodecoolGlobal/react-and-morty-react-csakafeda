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
          onNavigate("kuki");
        }}
      >
        Locations
      </button>
    </div>
  );
};

export default Navigation;
