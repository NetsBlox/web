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

export function Grid({children, cols}) {
  return (
    <div className={`grid grid-cols-${Math.round(0.5 * cols)} md:grid-cols-${Math.round(0.75 * cols)} lg:grid-cols-${cols} gap-8 my-8`}>
      {children.map(x => <div>{x}</div>)}
    </div>
  );
}

export function Warning({children}) {
  return (
    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 p-4 rounded-lg my-4 first:mt-0 last:mb-0 text-yellow-800 dark:text-yellow-200 shadow-md fancyjustify">
      {children}
    </div>
  );
}

export function Youtube({id}) {
  return <iframe className="rounded-3xl shadow-lg" width="100%" style={{ aspectRatio: "16 / 9" }} src={`https://www.youtube.com/embed/${id}?rel=0`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>;
}
