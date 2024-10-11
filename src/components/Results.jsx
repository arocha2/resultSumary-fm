export const Results = () => {
  return (
    <section className="w-full  bg-gradient-to-b from-Light-slate-blue to-Light-royal-blue  py-6 flex flex-col justify-center items-center rounded-b-[30px] sm:rounded-[30px]">
      <p className="text-Light-lavender text-lg">Your Result</p>
      <div className="flex flex-col justify-center items-center  rounded-full w-36 h-36 my-6 bg-gradient-to-b from-Violet-blue to-Persian-blue">
        <span className="text-6xl text-white ">76 </span>
        <span className="text-Light-lavender">of 100</span>
      </div>
      <div className="flex flex-col justify-center items-center w-2/3 pb-4 ">
        <p className="text-2xl text-white">Great</p>
        <p className="text-Light-lavender text-center text-sm">
          Your scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </section>
  );
};
