import React from "react";

export function Page({children}) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

export function Card({children}) {
  return (
    <div className="p-4 my-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg shadow-md">
      {children}
    </div>
  );
}
