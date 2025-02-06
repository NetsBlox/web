import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Entry = ({ img, name }) => {
  return (
    <div className="text-center flex" style={{display: "inline-block", padding: "20px"}}>
      <img src={img} width="100px" height="100px" style={{borderRadius: "100%"}}></img>
      <p className="text-slate-600 dark:text-slate-300">{name}</p>
    </div>
  );
};

export default function PeoplePage() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-white mb-12">
              People
            </h1>

            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-md mt-8">
              <h2 className="text-center text-xl font-bold mb-4">Faculty and Research Staff</h2>

              <div className="flex flex-row flex-wrap text-center justify-center">
                <Entry img="images/akos-ledeczi.jpeg" name="Akos Ledeczi"></Entry>
                <Entry img="images/brian-broll.jpeg" name="Brian Broll"></Entry>
                <Entry img="images/gordon-stein.jpeg" name="Gordon Stein"></Entry>
              </div>
            </div>

            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-md mt-8">
              <h2 className="text-center text-xl font-bold mb-4">Graduate Students</h2>

              <div className="flex flex-row flex-wrap text-center justify-center">
                <Entry img="images/devin-jean.jpg" name="Devin Jean"></Entry>
                <Entry img="images/placeholder.png" name="Saman Kittani"></Entry>
                <Entry img="images/placeholder.png" name="Gabriel Barnard"></Entry>
              </div>
            </div>

            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-md mt-8">
              <h2 className="text-center text-xl font-bold mb-4">Undergraduate Students</h2>

              <div className="flex flex-row flex-wrap text-center justify-center">
                <Entry img="images/placeholder.png" name="person 1"></Entry>
                <Entry img="images/placeholder.png" name="person 2"></Entry>
                <Entry img="images/placeholder.png" name="person 3"></Entry>
                <Entry img="images/placeholder.png" name="person 4"></Entry>
                <Entry img="images/placeholder.png" name="person 5"></Entry>
                <Entry img="images/placeholder.png" name="person 6"></Entry>
                <Entry img="images/placeholder.png" name="person 7"></Entry>
                <Entry img="images/placeholder.png" name="person 8"></Entry>
                <Entry img="images/placeholder.png" name="person 9"></Entry>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
