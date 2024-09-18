"use client";

export default function Contact() {
  return (
    <div className="flex flex-col gap-10 p-10 px-[20em] bg-blue-100">
      <div className="flex justify-between">
        {/* KONTAKT */}
        <div className="flex flex-col">
          <h1>KONTAKT</h1>
          <span>Tornebuskvej 22, 1.</span>
          <span>1131 København K</span>
          <span>CVR: 22446187</span>
          <span>
            Husk at du kan få fradrag for donationer på på til 16.600 kr.
          </span>
        </div>

        {/* PARTNERE */}
        <div className="flex flex-col">
          <h1>PARTNERE</h1>
          <a href="#" className="partners">Anima</a>
          <a href="#" className="partners">World Animal Protection</a>
          <a href="#" className="partners">Fødevarestyrelsen</a>
          <a href="#" className="partners">Faktalink</a>
        </div>
      </div>

      {/* COPYWRITE */}
      <div className="text-center">
        <span>&copy; 2020 - Forening for Dyrevelfærd</span>
      </div>
    </div>
  );
}
