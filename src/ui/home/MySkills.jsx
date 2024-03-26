import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section
      className="w-full h-fit px-10 xl:px-20 py-20 flex gap-10 flex-col bg-sky-100"
      id="MySkills"
    >
      <h2>My Skills</h2>
      <div className="grid justify-center items-start gap-10 xl:grid-cols-4 flex-col">
        {data?.skills?.map((item, index) => (
          <div
            key={index}
            className="flex px-5 pt-12 flex-col items-start gap-3 h-full rounded-xl hover:drop-shadow-2xl bg-white"
          >
            <div className="flex gap-5">
              <div className="flex justify-center items-center gap-3.5 rounded-lg h-10 w-10">
                <img alt="icon" src={item.src} />
              </div>
              <h3 className="text-black w-3/6">{item.title}</h3>
            </div>
            <ul className="px-10 pb-4 text-sky-700 font-bold list-disc">
              {item.skill?.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
