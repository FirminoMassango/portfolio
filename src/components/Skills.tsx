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
      <div className="md:flex">
        <p className="text-justify text-sm md:text-base text-white/90 mb-8 md:mb-0 md:mr-8">
          I&apos;m always excited to collaborate on projects that push the
          boundaries of design and technology. If you&apos;re looking to create
          exceptional user experiences and innovative solutions, let&apos;s
          connect and bring your ideas to life. Feel free to reach out by
          clicking the right button.
        </p>
        <CallToAction />
      </div>
    </section>
  );
}

export default Skills;
