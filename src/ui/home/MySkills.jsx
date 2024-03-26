import { useState } from "react";
import data from "../../data/index.json";

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
            className={`flex px-8 pt-12 flex-col items-start gap-8 h-96 rounded-xl hover:drop-shadow-xl ${
              hover === item.id ? "bg-sky-700 duration-500" : "bg-white"
            }`}
            onMouseEnter={() => onMouseEnter(item.id)}
            onMouseLeave={onMouseLeave}
          >
            {hover !== item.id && (
              <div className="flex px-5 justify-center items-center gap-3.5 rounded-lg">
                <img alt="icon" src={item.src} />
              </div>
            )}
            <h3
              className={
                hover === item.id ? "text-white duration-500" : "text-sky-700"
              }
            >
              {item.title}
            </h3>
            {hover === item.id && (
              <ul className="p-2 text-sky-200 font-bold list-disc">
                {item.skill?.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
