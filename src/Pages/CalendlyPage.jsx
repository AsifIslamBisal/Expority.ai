import React from "react";
import { InlineWidget } from "react-calendly";

const CalendlyPage = () => {
  return (
    <section className="min-h-screen bg-linear-to-br from-white via-cyan-50/30 to-white flex flex-col items-center justify-center ">
      <div className="max-w-5xl w-full bg-white  rounded-3xl p-8 border border-gray-200">
        <div className="text-center mb-5 mt-18">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
            Schedule a Meeting
          </h1>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Book a convenient time to discuss your project, ideas, or
            collaboration. Select a time slot that fits you best.
          </p>
        </div>
        <div className="w-full h-[700px] overflow-hidden rounded-xl border border-gray-200">
          <InlineWidget
            url="https://calendly.com/ronyt2sec/30min"
            styles={{
              height: "700px",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CalendlyPage;
