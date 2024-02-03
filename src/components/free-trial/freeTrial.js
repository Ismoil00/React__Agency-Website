import "./freeTrial.scss";
import Icon from "../icon";

const FreeTrial = ({ bg }) => {
  return (
    <button
      className="free-trial-btn"
      style={{
        backgroundColor: bg === "black" ? "rgba(18, 18, 18, 0.9)" : "#FBFBFB",
        color: bg === "black" ? "#FBFBFB" : "rgba(18, 18, 18, 0.9)",
      }}
    >
      <Icon
        size={30}
        icon={`arrow-right-${bg}`}
        bg={bg === "black" ? "white" : "black"}
      />
      Start your Free Trial
    </button>
  );
};

export default FreeTrial;
