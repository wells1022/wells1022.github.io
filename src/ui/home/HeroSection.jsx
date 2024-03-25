export default function HeroSection() {
  return (
    <section
      id="heroSection"
      className="w-full h-screen bg-cover bg-right bg-fixed px-20 py-48"
      style={{ backgroundImage: `url("./img/hero-bg.jpg")` }}
    >
      <div className="flex flex-col items-start gap-10 text-white">
        <h2 className="shadow-xl">Hi, I am 余承翰</h2>
        <h1 className="shadow-xl">Wells Yu</h1>
        <span className="content__container block text-browngray text-3xl font-bold">
          <ul className="content__container__list">
            <li className="content__container__list__item xl:pl-3">Web Developer</li>
            <li className="content__container__list__item xl:pl-3">Cloud Architect</li>
            <li className="content__container__list__item xl:pl-3">Mechanical Engineer</li>
          </ul>
        </span>
      </div>
    </section>
  );
}
