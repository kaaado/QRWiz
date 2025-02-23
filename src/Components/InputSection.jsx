import { useState, useEffect } from 'react';

const InputSection = ({ onUpdate }) => {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [titleColor, setTitleColor] = useState('#000000');
  const [titleBgColor, setTitleBgColor] = useState('#ffffff');
  const [qrColor, setQrColor] = useState('#000000');
  const [qrBgColor, setQrBgColor] = useState('#ffffff');

 useEffect(() => {
    
    onUpdate({
      content,
      title,
      titleColor,
      titleBgColor,
      qrColor,
      qrBgColor,
    });
  }, [content, title, titleColor, titleBgColor, qrColor, qrBgColor]); 
  return (
   <section className="input-section">
  <div className="content">
    <h1>Complete the content</h1>
    <div className="message">
      <label htmlFor="textarea-content">Content</label>
      <textarea
        id="textarea-content"
        rows="7"
        minLength="2000"
        placeholder="Enter your Content..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
    </div>
  </div>
  <div className="design-title">
    <h1>Design your QR</h1>
    <div className="message">
      <label htmlFor="message-input">Title</label>
      <input
        maxLength="88"
        type="text"
        id="message-input"
        placeholder="Enter your title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
    <div className="design-color">
    <div className="qr-title">
      <div className="title-color">
        <label htmlFor="color-input">Title Color</label>
        <div className="inputs">
          <input
            id="color-input"
            type="text"
            placeholder="Hex color"
            value={titleColor}
            onChange={(e) => setTitleColor(e.target.value)}
          />
          <input
            id="color-input"
            type="color"
            value={titleColor}
            onChange={(e) => setTitleColor(e.target.value)}
          />
        </div>
      </div>
      <div className="title-color">
        <label htmlFor="bgcolor-input">Background Title Color</label>
        <div className="inputs">
          <input
            id="bgcolor-input"
            type="text"
            placeholder="Hex color"
            value={titleBgColor}
            onChange={(e) => setTitleBgColor(e.target.value)}
          />
          <input
            id="bgcolor-input"
            type="color"
            value={titleBgColor}
            onChange={(e) => setTitleBgColor(e.target.value)}
          />
        </div>
      </div></div>
      <div className="qr-title">
      <div className="title-color">
        <label htmlFor="color-input">QR Color</label>
        <div className="inputs">
          <input
            id="color-input"
            type="text"
            placeholder="Hex color"
            value={qrColor}
            onChange={(e) => setQrColor(e.target.value)}
          />
          <input
            id="color-input"
            type="color"
            value={qrColor}
            onChange={(e) => setQrColor(e.target.value)}
          />
        </div>
      </div>
      <div className="title-color">
        <label htmlFor="bgcolor-input">Background QR Color</label>
        <div className="inputs">
          <input
            id="bgcolor-input"
            type="text"
            placeholder="Hex color"
            value={qrBgColor}
            onChange={(e) => setQrBgColor(e.target.value)}
          />
          <input
            id="bgcolor-input"
            type="color"
            value={qrBgColor}
            onChange={(e) => setQrBgColor(e.target.value)}
          />
        </div>
      </div></div>
    </div>
  </div>
</section>

  );
};

export default InputSection;
