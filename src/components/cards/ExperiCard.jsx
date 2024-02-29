import React from "react";
import { TracingBeam } from "../ui/tracing-beam";
import bsnlintern from "../experiences/bsnlintern.jpg"
import ibmintern from "../experiences/ibmintern.jpg"
import skilldzireint from "../experiences/skilldzireint.jpg"

export function ExperiCard() {
  return (
    <TracingBeam className="lg:w-[85%] w-[75%] mx-auto mt-16 px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10 shadow-2xl rounded-2xl p-6 bg-white text-black dark:bg-gray-800 dark:text-white">
            <h2 className="bg-black text-white rounded-lg text-sm w-fit px-4 py-2 mb-4">
              {item.badge}
            </h2>

            <p className="mb-3 font-bold text-lg">
              {item.title}
            </p>

            <div className="text-sm text-justify mr-5 prose prose-sm dark:prose-invert lg:font-semibold">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height={500}
                  width={600}
                  className="rounded-lg mb-5 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const dummyContent = [
  {
    title: "Front End Development | IBM",
    description: (
      <div>
        <p>
        Designed SoloLearn front-end website for interactive coding
        language learning, featuring engaging lessons, quizzes, and
        responsive design for enhanced user experience and making learning
        70% easier than before.
        </p>
      </div>
    ),
    badge: "Intern",
    image: ibmintern ,
  },
  {
    title: "Machine Learning | SkillDzire",
    description: (
      <>
        <p>
        Mastered 20% Machine Learning methodologies through SkillDzire
        internship, actively participating in projects covering data
        preprocessing, model development, and algorithm implementation.
        </p>
      </>
    ),
    badge: "Intern",
    image: skilldzireint ,
  },
  {
    title: "Telecommunications | BSNL",
    description: (
      <>
        <p>
        Attained comprehensive telecom skills in BSNL internship,
        performing a streamlining operations and increasing efficiency that
        leading to reducing costs by 20%. Achieved a 15% enhancement in
        customer satisfaction.
        </p>
      </>
    ),
    badge: "Intern",
    image: bsnlintern ,
  },
];