import React, { useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import html2canvas from 'html2canvas';


export default function PreviewSection({ content, title, titleColor, titleBgColor,qrColor,qrBgColor }) {
  const qrRef = useRef(null);

  const handleDownload = async () => {
    if (qrRef.current) {
      const canvas = await html2canvas(qrRef.current);
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = `${title || 'qr_code'}.png`;
      link.click();
    }
  };

  return (
    <aside className="preview-section">
      <div ref={qrRef} className="qr-container">
      <QRCodeCanvas value={content || ''} size={200} bgColor={qrBgColor} fgColor={qrColor} level="L" />
        <div
          className="qr-title"
          style={{ backgroundColor: titleBgColor, color: titleColor }}
        >
          {title}
        </div>
        
      </div>
      <button onClick={handleDownload} className="download-btn">
        Download QR Code 
      </button>
    </aside>
  );
}
