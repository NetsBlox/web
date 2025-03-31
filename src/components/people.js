import React from "react";

const Entry = ({ img, name }) => {
  return (
    <div className="text-center flex" style={{display: "inline-block", padding: "20px"}}>
      <img className="shadow-lg" src={img} width="150px" height="150px" style={{borderRadius: "100%", display: "inline-block"}}></img>
      <p className="text-slate-600 dark:text-slate-300" style={{paddingTop: 15}}>{name}</p>
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
                <Entry img="images/placeholder.png" name="Tito Ebiwonjumi"></Entry>
              </div>
            </div>

            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-6 rounded-lg shadow-md mt-8">
              <h2 className="text-center text-xl font-bold mb-4">Undergraduate Students</h2>

              <div className="flex flex-row flex-wrap text-center justify-center">
                <Entry img="images/tabitha-lee.jpeg" name="Tabitha Lee"></Entry>
                <Entry img="images/marina-rizk.jpeg" name="Marina Rizk"></Entry>
                <Entry img="images/marissa-schwarz.jpeg" name="Marissa Schwarz"></Entry>
                <Entry img="images/eleanor-summerfield.jpeg" name="Eleanor Summerfield"></Entry>
                <Entry img="images/yizhou-tan.jpeg" name="Yizhou Tan"></Entry>
                <Entry img="images/siyuan-wang.jpeg" name="Siyuan Wang"></Entry>
                <Entry img="images/michelle-zhu.jpeg" name="Michelle Zhu"></Entry>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
