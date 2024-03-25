import data from "../../data/index.json";

export default function AboutMe() {
  return (
    <section
      id="AboutMe"
      className="w-full h-fit px-20 py-20 flex gap-10 lg:gap-40 flex-col lg:flex-row bg-sky-100"
    >
      <div className="align-middle flex justify-center items-center">
        <img className="w-fit h-fit" src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="gap-10">
        <h2 className="pb-10">About Me</h2>
        <p className="py-2">
          As a Master of IT student at Monash University, I am a technology
          enthusiast with a keen interest in cloud computing and big data.
        </p>
        <p className="py-2">
          Currently, I am focused on obtaining my cloud solutions architect
          certification, showcasing my commitment to advancing my skills.
        </p>

        <div className="flex flex-row gap-10 justify-center py-5 text-sky-700">
          {data?.contact?.map((item, index) => (
            <div key={index}>
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="flex flex-row gap-2 items-center "
              >
                <img alt="icon" className="w-5 h-5" src={item.src} />
                <p>{item.title}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
