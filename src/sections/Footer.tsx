"use client";

import { useEffect, useState } from "react";

const footerLinks = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/kaya-atasoy-906786257/",
  },
  { title: "Github", href: "https://github.com/ZTNimbus" },
];

function Footer() {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }, [isCopied]);

  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10" />

      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-8 md:flex-row md:justify-between z-0">
          <div className="text-white/40">&copy; 2025. All rights reserved.</div>
          <nav className="flex flex-col items-center gap-8 md:flex-row">
            {footerLinks.map((link) => {
              return (
                <a
                  href={link.href}
                  key={link.title}
                  target="_blank"
                  className="inline-flex items-center gap-1.5"
                >
                  <span className="font-semibold">{link.title}</span>
                </a>
              );
            })}
            <button
              onClick={() => {
                navigator.clipboard.writeText("kaya.atsy@gmail.com");

                setIsCopied(true);
              }}
            >
              <span className="text-sm text-sky-400 font-light">
                {isCopied ? "Copied to clipboard!" : "kaya.atsy@gmail.com"}
              </span>
            </button>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
