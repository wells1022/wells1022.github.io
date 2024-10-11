import data from "../../data/index.json";

export default function Certifications() {
  return (
    <section
      className="w-full h-fit px-5 lg:px-20 py-20 flex gap-10 flex-col"
      id="Certifications"
    >
      <h2>Certifications</h2>
      <div className="px-5 lg:px-[10vw] xl:px-[20vw]">
        {data?.certifications?.slice().map((item, index) => (
          <div className="flex" key={index}>
            <div className="flex items-start justify-center relative w-20 pr-5">
              <svg
                className="absolute h-5 w-5 z-10 text-sky-700 bg-white"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="3"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <circle cx="12" cy="12" r="10" />
              </svg>
              <div className="h-full pt-6 w-0.5 bg-sky-700"></div>
            </div>
            <div className="lg:w-[70vw] py-5">
              <div className="flex flex-col">
                <h3 className="pb-2">{item.title}</h3>
                <div className="flex flex-col lg:flex-row lg:gap-10 gap-5 justify-between">
                  <div>
                    <div className="flex gap-5 lg:gap-20 text-sky-700">
                      <div className="flex gap-1">
                        <svg
                          className="h-5 w-5"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          {" "}
                          <path stroke="none" d="M0 0h24v24H0z" />{" "}
                          <rect x="4" y="5" width="16" height="16" rx="2" />{" "}
                          <line x1="16" y1="3" x2="16" y2="7" />{" "}
                          <line x1="8" y1="3" x2="8" y2="7" />{" "}
                          <line x1="4" y1="11" x2="20" y2="11" />{" "}
                          <rect x="8" y="15" width="2" height="2" />
                        </svg>
                        <h5>{item.date}</h5>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.skill.map((item, index) => (
                        <div
                          className="bg-sky-100  px-2 py-1 rounded"
                          key={index}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <img
                      alt={item.title}
                      className="lg:h-[7vw] lg:w-[8vw] h-[25vw] w-[30vw]"
                      src={item.src}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
