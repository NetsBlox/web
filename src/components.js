import React from "react";

export function Page({children}) {
  return (
    <div className="min-h-screen bg-blue-50 dark:bg-slate-800">
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

export function Warning({children}) {
  return (
    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 p-4 rounded-lg mt-4 text-yellow-800 dark:text-yellow-200 text-justify">
      {children}
    </div>
  );
}
