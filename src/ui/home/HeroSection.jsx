export default function HeroSection() {
  return (
    <section
      id="heroSection"
      className="w-full h-[98vh] bg-cover bg-right bg-fixed px-[10vw] py-[30vh]"
      style={{ backgroundImage: `url("./img/hero-bg.jpg")` }}
    >
      <div className="flex flex-col items-start gap-10 text-white">
        <h3 className="lg:text-5xl xl:text-7xl">Hi, I am 余承翰</h3>
        <h2 className="lg:text-3xl xl:text-5xl">Wells Yu</h2>
        <span className="content__container block text-3xl font-bold">
          <ul className="content__container__list">
            <li className="content__container__list__item lg:pl-3">Web Developer</li>
            <li className="content__container__list__item lg:pl-3">Cloud Architect</li>
            <li className="content__container__list__item lg:pl-3">Mechanical Engineer</li>
          </ul>
        </span>
      </div>
    </section>
  );
}
