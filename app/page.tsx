// app/page.jsx
"use client"; // needed because your Home uses hooks like useState, useEffect, useCart

import Home from "@/components/Home";

export default function Page() {
  return <Home />;
}
