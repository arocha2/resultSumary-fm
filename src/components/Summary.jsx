import data from "../data/data.json";

import Reaction from "../assets/images/icon-reaction.svg";
import Memory from "../assets/images/icon-memory.svg";
import Verbal from "../assets/images/icon-verbal.svg";
import Visual from "../assets/images/icon-visual.svg";

export const Summary = () => {
  console.log(data);
  return (
    <section className="w-full px-8 py-6 flex flex-col gap-4">
      <p>Summary</p>
      {data.map(({ category, score }) => {
        let icon;
        if (category == "Reaction") icon = Reaction;
        if (category == "Memory") icon = Memory;
        if (category == "Verbal") icon = Verbal;
        if (category == "Visual") icon = Visual;
        return (
          <div
            className={`${
              category == "Reaction"
                ? "text-Light-red bg-Light-red/10"
                : category == "Memory"
                ? "text-Orangey-yellow bg-Orangey-yellow/10"
                : category == "Verbal"
                ? "text-Green-teal bg-Green-teal/10"
                : "text-Cobalt-blue bg-Cobalt-blue/10"
            }
                flex justify-between text-sm p-4  rounded-xl`}
            key={category}
          >
            <div className="flex gap-2">
              <img src={icon} alt="icon" /> <span>{category}</span>
            </div>
            <div>
              <span className="text-zinc-800"> {score}</span>{" "}
              <span className="text-Light-lavender">/ 100</span>
            </div>
          </div>
        );
      })}
      <button className="w-full py-4 text-center bg-Dark-gray-blue text-white rounded-full hover:bg-Cobalt-blue hover:text-white transition-all">
        Continue
      </button>
    </section>
  );
};
