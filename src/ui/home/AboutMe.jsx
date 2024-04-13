import data from "../../data/index.json";

export default function AboutMe() {
  return (
    <section
      id="AboutMe"
      className="w-full h-fit px-10 lg:px-[15vw] py-20 flex gap-10 lg:gap-[10vw] flex-col lg:flex-row bg-sky-100"
    >
      <div className="align-middle flex justify-center items-center">
        <img className="w-fit h-fit" src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="gap-10 lg:w-[30vw]">
        <h2 className="pb-10">About Me</h2>
        {data?.aboutMe?.map((item, index) => (
          <p className="py-2" key={index}>
            {item}
          </p>
        ))}
        <div className="flex flex-col lg:flex-row lg:gap-10 justify-center py-5 text-sky-700">
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
