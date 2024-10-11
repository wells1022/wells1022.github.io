import data from "../../data/index.json";

export default function WorkExperience() {
  // Helper function to convert "MMM YYYY" string to Date object
  const parseDate = (dateString) => {
    const [month, year] = dateString.split(" ");
    return new Date(`${year}-${month}-01`);
  };

  // Helper function to calculate the duration between two dates
  const calculateDuration = (fromDate, toDate) => {
    const startDate = parseDate(fromDate);
    const endDate = toDate === "Present" ? new Date() : parseDate(toDate);

    let years = endDate.getFullYear() - startDate.getFullYear();
    let months = endDate.getMonth() - startDate.getMonth() + 1;

    if (months < 0) {
      years--;
      months += 12;
    }

    return `${
      years > 0 ? `${years} yr${years > 1 ? "s" : ""} ` : ""
    }${months} mo${months > 1 ? "s" : ""}`;
  };

  return (
    <section
      className="w-full h-fit px-5 lg:px-20 py-20 flex gap-10 flex-col"
      id="WorkExperience"
    >
      <h2>Work Experience</h2>
      <div className="px-5 lg:px-[10vw] xl:px-[20vw]">
        {data?.experience
          ?.slice()
          .reverse()
          .map((item, index) => (
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
              <div className="lg:w-[70vw] py-8">
                <div className="flex lg:flex-row flex-col lg:gap-10 justify-between">
                  <div>
                    <h3 className="pb-2">{item.title}</h3>
                    <h4 className="bg-sky-100 px-2 py-1 rounded w-fit">
                      {item.company}
                    </h4>
                  </div>
                  <div>
                    <img
                      alt={item.company}
                      className="h-20 w-20"
                      src={item.src}
                    />
                  </div>
                </div>
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
                    <h5>
                      {item.from} - {item.to}
                    </h5>
                  </div>
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
                      <circle cx="12" cy="12" r="9" />{" "}
                      <polyline points="12 7 12 12 15 15" />
                    </svg>
                    {/* <h5>{item.duration}</h5> */}
                    <h5>{calculateDuration(item.from, item.to)}</h5>
                  </div>
                </div>
                <div className="flex gap-1 text-sky-700">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <h5>{item.location}</h5>
                </div>
                <ul className="pt-5 pl-5 list-disc">
                  {item.description.map((item, index) => (
                    <li className="pb-2" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {item.skill.map((item, index) => (
                    <div className="bg-sky-100 px-2 py-1 rounded" key={index}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
