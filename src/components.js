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
  return <div className="p-4 my-4 first:mt-0 last:mb-0 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-md">{children}</div>;
}

export function Flex({children}) {
  return <div className="flex flex-row flex-wrap justify-center">
    {children}
  </div>;
}

export function Grid({children, cols}) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${cols} lg:grid-cols-${cols} gap-8 my-4 first:mt-0 last:mb-0`}>
      {children}
    </div>
  );
}

export function Warning({children}) {
  return (
    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 p-4 rounded-xl my-4 first:mt-0 last:mb-0 text-yellow-800 dark:text-yellow-200 shadow-md fancyjustify">
      {children}
    </div>
  );
}

export function Youtube({id}) {
  return <iframe className="shadow-lg my-4 first:mt-0 last:mb-0" width="100%" style={{ aspectRatio: "16 / 9" }} src={`https://www.youtube.com/embed/${id}?rel=0`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>;
}
