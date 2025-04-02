import React from "react";
import { Mail, MapPin, ExternalLink } from "lucide-react";

const Person = ({ img, name }) => {
  return (
    <div className="text-center flex p-2" style={{display: "inline-block"}}>
      <img className="shadow-lg inline-block rounded-full" src={img} width="100px" height="100px"></img>
      <p className="text-slate-600 dark:text-slate-300 pt-2" style={{width: 100}}>{name}</p>
    </div>
  );
};

export default () => (
  <div>
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-white mb-12">
            Contact Us
          </h1>

          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg shadow-md mt-8">
            <h2 className="text-center text-xl font-bold mb-4">Faculty and Research Staff</h2>

            <div className="flex flex-row flex-wrap text-center justify-center">
              <Person img="images/akos-ledeczi.jpeg" name="Akos Ledeczi" />
              <Person img="images/brian-broll.jpeg" name="Brian Broll" />
              <Person img="images/gordon-stein.jpeg" name="Gordon Stein" />
              <Person img="images/devin-jean.jpg" name="Devin Jean" />
            </div>
          </div>

          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg shadow-md mt-8">
            <h2 className="text-center text-xl font-bold mb-4">Graduate Students</h2>

            <div className="flex flex-row flex-wrap text-center justify-center">
              <Person img="images/placeholder.png" name="Saman Kittani" />
              <Person img="images/placeholder.png" name="Gabriel Barnard" />
              <Person img="images/placeholder.png" name="Tito Ebiwonjumi" />
            </div>
          </div>

          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg shadow-md mt-8">
            <h2 className="text-center text-xl font-bold mb-4">Undergraduate Students</h2>

            <div className="flex flex-row flex-wrap text-center justify-center">
              <Person img="images/tabitha-lee.jpeg" name="Tabitha Lee" />
              <Person img="images/marina-rizk.jpeg" name="Marina Rizk" />
              <Person img="images/marissa-schwarz.jpeg" name="Marissa Schwarz" />
              <Person img="images/eleanor-summerfield.jpeg" name="Eleanor Summerfield" />
              <Person img="images/yizhou-tan.jpeg" name="Yizhou Tan" />
              <Person img="images/siyuan-wang.jpeg" name="Siyuan Wang" />
              <Person img="images/michelle-zhu.jpeg" name="Michelle Zhu" />
            </div>
          </div>

          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-xl font-bold mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <a className="text-blue-600 hover:underline" href="mailto:akos.ledeczi@vanderbilt.edu">akos.ledeczi@vanderbilt.edu</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="text-slate-600 dark:text-slate-300">
                  1025 16th Ave S, Nashville, TN 37212
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-xl font-bold mb-4">Additional Information</h2>
            <p className="text-slate-600 dark:text-slate-300 text-justify">
              NetsBlox is an open-source project developed at Vanderbilt University. We welcome contributions, feedback, and collaborations from the community. If you have any questions about using NetsBlox, want to report a bug, or are interested in contributing to the project, please don't hesitate to reach out to us.
            </p>
            <div className="mt-4">
              <a href="https://github.com/NetsBlox/NetsBlox" className="text-blue-600 hover:underline">
                <ExternalLink className="inline-block w-4 h-4"/> Visit our GitHub repository
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
);
