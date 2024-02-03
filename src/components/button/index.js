import "./button.scss";

const Button = ({ text, color }) => {
  return (
    <button
      className="btn"
      style={{
        backgroundColor:
          color === "black" ? "rgba(18, 18, 18, 0.9)" : "#FBFBFB",
        color: color === "black" ? "#FBFBFB" : "rgba(18, 18, 18, 0.9)",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
