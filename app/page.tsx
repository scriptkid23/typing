"use client";
import React, { useState, useRef, useEffect } from "react";

export default function Home() {
  const editableDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (editableDivRef.current) {
      editableDivRef.current.focus(); // Automatically focus on the div
    }
  }, []);
  return (
    <main className="flex p-24 items-center">
      <div
        ref={editableDivRef}
        contentEditable={true}
        className="caret-transparent outline-none"
      />
      <span className="cursor"></span>
    </main>
  );
}
