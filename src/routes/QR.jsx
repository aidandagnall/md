import { Html5Qrcode } from "html5-qrcode";
import { useEffect, useState } from "react";

function QR() {
  const [result, setResult] = useState("");

  useEffect(() => {
    const html5qrcode = new Html5Qrcode("scanner", true);
    html5qrcode.start(
      { facingMode: "environment" },
      { fps: 10 },
      (encodedText) => {
        setResult(encodedText);
      },
      (error) => {
      },
    ).then(() => {
        setResult("Wow it worked");
      })
    .catch(() => {
        setResult("Error starting QR scanner");
      });
  }, []);

  return (
    <div>
      <div id="scanner"/>
      <p> Result found: {result} </p>
    </div>
  );
}
export default QR;
