import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export function Page({children}) {
  return (
    <div className="min-h-screen bg-blue-50">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

export function Card({children}) {
  return <div className="p-4 my-4 first:mt-0 last:mb-0 bg-white/50 rounded-xl shadow-md">{children}</div>;
}

export function Flex({children}) {
  return <div className="flex flex-row flex-wrap justify-center gap-4">
    {children}
  </div>;
}

export function Grid({children, cols}) {
  const grids = {
    1: 'grid-cols-1 md:grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
  };
  return (
    <div className={`grid ${grids[cols]} gap-8 my-4 first:mt-0 last:mb-0`}>
      {children}
    </div>
  );
}

export function Warning({children}) {
  return (
    <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl my-4 first:mt-0 last:mb-0 text-yellow-800 shadow-md fancyjustify">
      {children}
    </div>
  );
}

export function Youtube({id}) {
  return <iframe className="shadow-lg my-4 first:mt-0 last:mb-0" width="100%" style={{ aspectRatio: "16 / 9" }} src={`https://www.youtube.com/embed/${id}?rel=0`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>;
}

export function Audio({title, src}) {
  return (
    <div>
      {title && <h2 className="text-gray-700 mb-0">{title}</h2>}
      <audio className="w-full" controls>
        <source src={src} type={`audio/${src.slice(src.lastIndexOf('.') + 1)}`} />
        <Warning>Your browser does not support audio elements.</Warning>
      </audio>
    </div>
  );
}

export function Collapsable({title, children}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Card>
      <button className="text-left w-full hover:scale-100" onClick={() => setIsOpen(!isOpen)}>
        {title} {isOpen ? <ChevronUp/> : <ChevronDown/>}
      </button>

      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "mt-8 opacity-100" : "max-h-0 opacity-0"}`}>
        {children}
      </div>
    </Card>
  );
}

export function TabView({children, key="TabView"}) {
  children = children.map ? children : [children];

  const [ordering, setOrdering] = useState(children.map((_, i) => i));
  const setActive = i => {
    const newOrdering = [...ordering];
    newOrdering.splice(newOrdering.indexOf(i), 1);
    newOrdering.unshift(i);
    setOrdering(newOrdering);
  };

  return (
    <Card key={key}>
      <Flex>
        {children.map((x, i) => <div key={`${key}-t${i}`}><button style={{textDecorationLine: ordering[0] === i ? "underline" : "none"}} onClick={() => setActive(i)}>{x.props.name || `Tab ${i+1}`}</button></div>)}
      </Flex>
      {ordering.map((i, j) => <div key={`${key}-c${i}`} className={`transition-all duration-300 ease-in-out overflow-hidden`} style={j === 0 ? {marginTop: "2rem", opacity: 100} : {marginTop: 0, maxHeight: 0, opacity: 0}}>{children[i]}</div>)}
    </Card>
  );
}
