import { useState } from "react";
import data from "../../data/index.json";

export default function MyPortfolio() {
  const [hover, setHover] = useState("");

  const onMouseEnter = (id) => {
    setHover(id);
  };

  const onMouseLeave = () => {
    setHover("");
  };

  return (
    <section
      className="w-full h-fit px-5 lg:px-20 py-20 xl:px-[15vw] flex gap-10 flex-col bg-sky-100"
      id="MyPortfolio"
    >
      <h2>My Portfolio</h2>
      {data?.portfolio
        ?.slice()
        .reverse()
        .map((item, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row justify-start items-center gap-10 p-10 lg:px-[10vw] rounded-xl hover:drop-shadow-2xl ${
              hover === item.id
                ? "bg-sky-700 text-white duration-500"
                : "bg-white text-black"
            }`}
            onMouseEnter={() => onMouseEnter(item.id)}
            onMouseLeave={onMouseLeave}
          >
            <div className="lg:w-96">
              <img alt="Project" src={item.src} />
            </div>
            <div className="w-fit">
              <h3>{item.title}</h3>
              <ul className="list-disc">
                {item.description?.map((item, index) => (
                  <li className="flex-row p-2" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-5 mt-3">
                {item.Technologies?.map((tech, index) => (
                  <div
                    className={`px-2 py-1 rounded ${
                      hover === item.id
                        ? "bg-sky-100 text-sky-700 duration-500"
                        : "text-sky-100 bg-sky-700"
                    }`}
                    key={index}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}
