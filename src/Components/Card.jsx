import React, { useState } from 'react';
import InputSection from './InputSection.jsx';
import PreviewSection from './PreviewSection.jsx';

export default function Card() {
  const [qrData, setQrData] = useState({
    content: '',
    title: '',
    titleColor: '#000000',
    titleBgColor: '#ffffff',
    qrColor: '#000000',
    qrBgColor: '#ffffff',
  });

  const handleUpdate = (updatedData) => {
    setQrData(updatedData);
  };

  return (
    <div className="card">
      <InputSection onUpdate={handleUpdate} />
      <PreviewSection
        content={qrData.content}
        title={qrData.title}
        titleColor={qrData.titleColor}
        titleBgColor={qrData.titleBgColor}
        qrColor={qrData.qrColor}
        qrBgColor={qrData.qrBgColor}
      />
    </div>
  );
}
