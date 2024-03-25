import { useState } from "react";
import data from "../../data/index.json";
import clsx from "clsx";

export default function MySkills() {
  const [hover, setHover] = useState("");

  const onMouseEnter = (id) => {
    setHover(id);
  };

  const onMouseLeave = () => {
    setHover("");
  };

  return (
    <section
      className="w-full h-fit px-20 py-20 flex gap-10 flex-col bg-sky-100"
      id="MySkills"
    >
      <h2>My Skills</h2>
      <div className="grid justify-center items-start gap-10 grid-cols-4">
        {data?.skills?.map((item, index) => (
          <div
            key={index}
            className={clsx(
              "flex px-8 pt-12 flex-col items-start gap-8 h-96 rounded-xl bg-white hover:drop-shadow-xl",
              { "bg-[#1e6680] duration-700": hover === item.id }
            )}
            onMouseEnter={() => onMouseEnter(item.id)}
            onMouseLeave={onMouseLeave}
          >
            {hover !== item.id && (
              <div className="flex px-5 justify-center items-center gap-3.5 rounded-lg">
                <img alt="icon" src={item.src} />
              </div>
            )}
            <h3
              className={clsx("text-sky-700", {
                "text-[#ffff]": hover === item.id,
              })}
            >
              {item.title}
            </h3>
            {hover === item.id && (
              <ui className="p-2 text-sky-700 font-bold">
                {item.skill?.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ui>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
