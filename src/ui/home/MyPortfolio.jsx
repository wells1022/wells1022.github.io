import { useState } from "react";
import clsx from "clsx";
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
      className="w-full h-fit px-20 py-20 flex gap-10 flex-col"
      id="MyPortfolio"
    >
      <h2>My Portfolio</h2>
      {data?.portfolio
        ?.slice()
        .reverse()
        .map((item, index) => (
          <div
            key={index}
            className={clsx(
              "flex justify-center items-center gap-10 bg-sky-100 p-10 rounded-xl",
              { "bg-sky-800 text-white duration-700": hover === item.id }
            )}
            onMouseEnter={() => onMouseEnter(item.id)}
            onMouseLeave={onMouseLeave}
          >
            <div className="w-96">
              <img src={item.src} />
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
                  <div className=
                  "bg-white text-black px-2 py-1 rounded" key={index}>
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
