import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white mt-5 p-4 text-center">
      Copyrigth &copy; {new Date().getFullYear()} DevConnector
    </footer>
  );
}
