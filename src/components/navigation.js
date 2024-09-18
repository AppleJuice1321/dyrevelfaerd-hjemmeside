"use client";

import LoginDialog from "./login-dialog";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center py-4">
      {/* LOGO */}
      <div className="flex items-center gap-2">
        <img className="h-10" src="./images/logo.png" alt="Dyrevelfærd Logo" />
        <span>Foreningen af Dyrevelfærd</span>
      </div>

      {/* NAVIGATION */}
      <ul className="flex gap-4">
        <button>Hjem</button>
        <button>Om os</button>
        <button>Bliv Frivilig</button>
        <button>Dyr i nød</button>
        <button>Adopter et dyr</button>
        {/* LOGIN */}
        <LoginDialog />
      </ul>
    </nav>
  );
}
