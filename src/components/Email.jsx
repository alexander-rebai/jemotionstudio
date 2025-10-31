const Email = ({
  typeRenovatie = "",
  budgetIndicatie = "",
  gewensteStartdatum = "",
  name = "",
  email = "",
  phone = "",
  extraInfo = "",
}) => {
  return (
    <div
      style={{
        backgroundColor: "#1a1a1a",
        color: "#ffffff",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
        lineHeight: "1.6",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#262626",
          padding: "25px",
          borderRadius: "8px",
        }}
      >
        <h1
          style={{
            color: "#aed800",
            fontSize: "24px",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Contact Form Submission
        </h1>

        <table
          cellPadding="10"
          style={{ width: "100%", color: "#ffffff", fontSize: "15px" }}
        >
          <tbody>
            <tr>
              <td style={{ color: "#aed800", fontWeight: "bold", width: "40%" }}>
                Type Renovatie:
              </td>
              <td>{typeRenovatie || "N/A"}</td>
            </tr>

            <tr>
              <td style={{ color: "#aed800", fontWeight: "bold" }}>
                Budget Indicatie:
              </td>
              <td>{budgetIndicatie || "N/A"}</td>
            </tr>

            <tr>
              <td style={{ color: "#aed800", fontWeight: "bold" }}>
                Gewenste Startdatum:
              </td>
              <td>{gewensteStartdatum || "N/A"}</td>
            </tr>

            <tr>
              <td style={{ color: "#aed800", fontWeight: "bold" }}>Naam:</td>
              <td>{name || "N/A"}</td>
            </tr>

            <tr>
              <td style={{ color: "#aed800", fontWeight: "bold" }}>E-mail:</td>
              <td>{email || "N/A"}</td>
            </tr>

            <tr>
              <td style={{ color: "#aed800", fontWeight: "bold" }}>Telefoon:</td>
              <td>{phone || "N/A"}</td>
            </tr>

            <tr>
              <td style={{ color: "#aed800", fontWeight: "bold" }}>
                Extra Informatie:
              </td>
              <td>{extraInfo || "Geen extra informatie"}</td>
            </tr>
          </tbody>
        </table>

        <p
          style={{
            marginTop: "30px",
            fontSize: "14px",
            textAlign: "center",
            color: "#999999",
          }}
        >
          This email was automatically generated from the contact form.
        </p>
      </div>
    </div>
  );
};

export default Email;
