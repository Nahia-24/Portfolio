import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-gray-500 bg-[#add8e6]/30">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-gray-700">
            Coder · Visionary · Experience Maker
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-gray-700">
                Hello! I'm 
                {" "}
                <span className="font-bold text-gray-700">
                  Nahia
                </span>
                , a passionate TypeScript developer focused on building intuitive, efficient, and accessible web experiences. I'm especially driven by the idea of making development workflows simpler and faster for everyone.

              </p>
              <p className="text-gray-700">
                Currently, I'm expanding my skills into backend development with technologies like Node.js, Python, MongoDB, and MySQL, as I pursue a full-stack perspective to deliver seamless, end-to-end web applications.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-gray-700">
                    I’m a lifelong learner with a curious mind and a passion for creating tools that bring real value to the developer community. I see code as more than syntax—it's a way to solve problems, tell stories, and build bridges.

                    I'm here to keep creating, growing, and sharing—one commit at a time.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
