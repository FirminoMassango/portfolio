import CSS from "../assets/icons/css.png";
import Figma from "../assets/icons/figma.png";
import Java from "../assets/icons/java.png";
import JavaScript from "../assets/icons/js.png";
import Laravel from "../assets/icons/laravel.png";
import Next from "../assets/icons/next.png";
import PHP from "../assets/icons/php.png";
import Python from "../assets/icons/python.png";
import React from "../assets/icons/react.png";
import Spring from "../assets/icons/spring.png";
import TypeScript from "../assets/icons/ts.png";
import Vue from "../assets/icons/vue.png";
import Skill from "./Skill";
import TechStack from "./TechStack";
import CallToAction from "./CallToAction";

interface FontProps {
  font: string;
}

function Skills(props: FontProps) {
  return (
    <section className="md:h-screen md:snap-start mb-16 pt-8">
      <h1 className={`text-3xl md:text-5xl mb-8 ${props.font}`}>Skills</h1>
      <div className="md:flex justify-between">
        <div>
          <TechStack stack="Frontend" />
          <Skill skillIcon={CSS} name="CSS" />
          <Skill skillIcon={TypeScript} name="TypeScript" />
          <Skill skillIcon={JavaScript} name="JavaScript" />
          <Skill skillIcon={React} name="React" />
          <Skill skillIcon={Vue} name="Vue.js" />
          <Skill skillIcon={Next} name="Next JS" />
        </div>
        <div>
          <TechStack stack="Backend" />
          <Skill skillIcon={Java} name="Java" />
          <Skill skillIcon={PHP} name="PHP" />
          <Skill skillIcon={Python} name="Python" />
          <Skill skillIcon={Laravel} name="Laravel" />
          <Skill skillIcon={Spring} name="Spring Boot" />
        </div>
        <div>
          <TechStack stack="Design" />
          <Skill skillIcon={Figma} name="Figma" />
        </div>
      </div>
      <h1 className={`text-3xl md:text-5xl mt-16 mb-4 ${props.font}`}>
        Colaboration
      </h1>
      <div className="relative">
        <div className="md:flex">
          <p className="text-justify text-sm md:text-base text-white/90 mb-8 md:mb-0 md:mr-8">
            I&apos;m always excited to collaborate on projects that push the
            boundaries of design and technology. If you&apos;re looking to
            create exceptional user experiences and innovative solutions,
            let&apos;s connect and bring your ideas to life. Feel free to reach
            out by clicking the right button.
          </p>
          <CallToAction />
        </div>
        <svg
          width="152"
          height="34"
          viewBox="0 0 162 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-20 hidden lg:block animate-bounce"
        >
          <g clip-path="url(#clip0_14_41)">
            <path
              d="M2.33377 19.0103C3.88962 20.7293 5.75663 22.1357 7.15689 24.0109C19.1369 40.7319 36.2512 49.0142 55.2325 53.5461C61.7671 55.1088 69.2352 54.9525 75.9253 53.5461C95.0622 49.7956 112.488 41.8258 127.579 29.3241C131.936 25.7299 135.67 21.1981 138.781 16.0411C137.07 16.6662 135.203 17.2913 133.492 18.0727C128.513 20.2604 123.534 22.6045 118.4 24.4797C116.222 25.2611 113.577 25.2611 111.087 25.1048C110.154 25.1048 108.754 23.6984 108.598 22.7608C108.442 21.8231 109.376 20.1042 110.154 19.9479C123.379 15.8849 134.892 8.07133 146.872 1.3517C151.073 -0.992362 153.718 -0.367279 155.585 3.85203C160.097 14.3222 162.119 25.4174 161.808 36.8251C161.808 37.1377 161.186 37.6065 160.252 38.5441C151.073 35.1062 153.873 25.1048 149.361 17.135C148.272 19.0103 147.494 20.573 146.561 21.8231C126.957 46.0451 100.974 58.8593 70.791 63.5474C66.279 64.3288 61.3003 64.0162 56.6328 63.2349C39.5185 60.2657 24.2712 53.0773 11.6688 41.0444C7.62365 37.1377 4.66754 31.9807 1.71143 27.1364C0.466753 25.2611 0.466754 22.6045 0 20.4167C0.777923 19.9479 1.55585 19.4791 2.33377 19.0103Z"
              fill="#333333"
            />
          </g>
          <defs>
            <clipPath id="clip0_14_41">
              <rect width="161.839" height="64" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </section>
  );
}

export default Skills;
