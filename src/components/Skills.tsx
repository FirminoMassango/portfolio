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

interface FontProps {
  font: string;
}

function Skills(props: FontProps) {
  return (
    <section className="h-screen snap-start mb-16 pt-8">
      <h1 className={`text-5xl mb-8 ${props.font}`}>Skills</h1>
      <div className="flex justify-between">
        <div>
          <div className="px-16 py-2 bg-zinc-700 rounded">
            <span className="font-medium">Frontend</span>
          </div>
          <Skill skillIcon={CSS} name="CSS" />
          <Skill skillIcon={TypeScript} name="TypeScript" />
          <Skill skillIcon={JavaScript} name="JavaScript" />
          <Skill skillIcon={React} name="React" />
          <Skill skillIcon={Vue} name="Vue.js" />
          <Skill skillIcon={Next} name="Next JS" />
        </div>
        <div>
          <div className="px-16 py-2 bg-zinc-700 rounded">
            <span className="font-medium">Backend</span>
          </div>
          <Skill skillIcon={Java} name="Java" />
          <Skill skillIcon={PHP} name="PHP" />
          <Skill skillIcon={Python} name="Python" />
          <Skill skillIcon={Laravel} name="Laravel" />
          <Skill skillIcon={Spring} name="Spring Boot" />
        </div>
        <div>
          <div className="px-16 py-2 bg-zinc-700 rounded">
            <span className="font-medium">Design</span>
          </div>
          <Skill skillIcon={Figma} name="Figma" />
        </div>
      </div>
      <h1 className={`text-5xl mt-16 mb-8 ${props.font}`}>Colaboration</h1>
      <p className="w-4/5 text-white/90">
        I'm always excited to collaborate on projects that push the boundaries
        of design and technology. If you're looking to create exceptional user
        experiences and innovative solutions, let's connect and bring your ideas
        to life. Feel free to reach out by clicking the right button.
      </p>
    </section>
  );
}

export default Skills;
