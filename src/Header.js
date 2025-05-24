import React from "react";

const logoUrl = "https://videos.openai.com/vg-assets/assets%2Ftask_01jw0r9ndtemd9pbb4t7bqbn5d%2F1748077234_img_2.webp?st=2025-05-24T07%3A19%3A25Z&se=2025-05-30T08%3A19%3A25Z&sks=b&skt=2025-05-24T07%3A19%3A25Z&ske=2025-05-30T08%3A19%3A25Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=jZMJYC3W3gn2eQ%2BHEKOx09X1vUDNq81LkzfH701eQuA%3D&az=oaivgprodscus";

export const Header = () => {
  return (
    <>
      <style>{`
        .header-box {
          display: grid;
          grid-template-columns: 60px auto;
          align-items: center;
          column-gap: 16px;
          background: #3e2703;
          padding: 10px 16px;
          border-radius: 12px;
          box-shadow: inset 0 0 6px #d4af37aa;
          margin-bottom: 20px;
        }
        .header-box img {
          width: 100px;
          height: 100px;
          object-fit: contain;
          border-radius: 50%;
          border: 2px solid #d4af37;
          background:rgb(169, 123, 7);
        }
        .company-name {
          font-size: 1.6rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          user-select: none;
          color: #d4af37;
        }
      `}</style>
      <div className="header-box">
        <img src={logoUrl} alt="Brown CodeVine Logo" />
        <div className="company-name">Brown CodeVine</div>
      </div>
    </>
  );
};
