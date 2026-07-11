function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0F172A",
        color: "#F8FAFC",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          borderBottom: "1px solid #334155",
        }}
      >
        <h2 style={{ color: "#8B5CF6" }}>TemplateNest</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Marketplace
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Categories
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Login
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Register
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h1 style={{ fontSize: "56px", marginBottom: "20px" }}>
          Premium Design Templates
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#CBD5E1",
            marginBottom: "40px",
          }}
        >
          Buy high-quality PSD templates with secure cryptocurrency payments.
        </p>

        <button
          style={{
            background: "#7C3AED",
            color: "white",
            border: "none",
            padding: "15px 35px",
            borderRadius: "10px",
            cursor: "pointer",
            fontSize: "18px",
          }}
        >
          Explore Marketplace
        </button>
      </section>
    </div>
  );
}

export default App;