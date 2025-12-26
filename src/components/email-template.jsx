export function EmailTemplate({ name, email, message }) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <h1 style={{ color: "#333", marginBottom: "20px", fontSize: "24px" }}>
          New Contact Form Submission
        </h1>

        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        >
          <div style={{ marginBottom: "15px" }}>
            <strong
              style={{
                color: "#666",
                fontSize: "14px",
                display: "block",
                marginBottom: "5px",
              }}
            >
              Name:
            </strong>
            <p style={{ margin: "0", color: "#333", fontSize: "16px" }}>
              {name}
            </p>
          </div>

          <div style={{ marginBottom: "15px" }}>
            <strong
              style={{
                color: "#666",
                fontSize: "14px",
                display: "block",
                marginBottom: "5px",
              }}
            >
              Email:
            </strong>
            <p style={{ margin: "0", color: "#333", fontSize: "16px" }}>
              <a
                href={`mailto:${email}`}
                style={{ color: "#0066cc", textDecoration: "none" }}
              >
                {email}
              </a>
            </p>
          </div>

          <div>
            <strong
              style={{
                color: "#666",
                fontSize: "14px",
                display: "block",
                marginBottom: "5px",
              }}
            >
              Message:
            </strong>
            <p
              style={{
                margin: "0",
                color: "#333",
                fontSize: "16px",
                lineHeight: "1.5",
                whiteSpace: "pre-wrap",
              }}
            >
              {message}
            </p>
          </div>
        </div>

        <div style={{ fontSize: "12px", color: "#666", textAlign: "center" }}>
          <p style={{ margin: "0" }}>
            This email was sent from your portfolio contact form
          </p>
        </div>
      </div>
    </div>
  );
}
