import React from "react";

const Loader = () => (
    <div style={styles.container}>
        <div style={styles.spinner}></div>
        <span style={styles.text}>Loading weather data...</span>
    </div>
);

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "200px",
        width: "100%",
    },
    spinner: {
        width: "48px",
        height: "48px",
        border: "6px solid #e0e0e0",
        borderTop: "6px solid #2196f3",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
        marginBottom: "16px",
    },
    text: {
        color: "#2196f3",
        fontSize: "1.1rem",
        fontWeight: "500",
    },
};

// Spinner animation keyframes
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
@keyframes spin {
    0% { transform: rotate(0deg);}
    100% { transform: rotate(360deg);}
}
`;
document.head.appendChild(styleSheet);

export default Loader;