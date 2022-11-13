function CardRecomendation({ stars, reviews }) {
  return (
    <div
      style={{
        color: "black",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <span>⭐ {stars}</span>
      <span>💬 {reviews}</span>
      <button
        style={{
          border: "none",
          background: "white",
          color: "#6c6c00",
          fontWeight: "bold",
          fontSize: "1rem",
        }}
      >
        more...
      </button>
    </div>
  );
}

export default CardRecomendation;
