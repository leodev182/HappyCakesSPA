import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        className="notFound"
        style={{ paddingBottom: "10%", fontSize: "15rem" }}
      >
        404!
      </h1>
      <h1>Oops! parece que te perdiste.</h1>
      <p>Aquí algunos links de ayuda:</p>
      <div style={{ display: "flex", gap: "25px" }}>
        <Link to="/">Home</Link>
        <Link to="/contacto">Contacto</Link>
      </div>
    </div>
  );
}

export default NotFound;
