//NOTE: Copied from 'Advantages'
//Please check if arrows, picnya display bcs suka ngga muncul di gue

const SecondSection = () => {
  return (
    <section className="w-full flex flex-col min-h-screen gap-10 max-container bg-SecondSection bg-no-repeat bg-right">
      <div className="relative xl:w-3/5 flex flex-col justify-start items-start w-full max-xl:padding-x pt-60">
        {/* Removed <h1>, could use a placeholder */}
        <div className="h-10"></div> {/* This keeps the space */}
        <p className="text-lg text-black mt-10">
          Here we can see the displayed personalized{" "}
          <span className="bg-gradient-to-r from-cyan to-blue text-transparent bg-clip-text">
            Solvent Outcome
          </span>{" "}
          based on your input followed by the solvent’s description!
        </p>
      </div>

      <div className="flex justify-center items-right w-full mt-10">
        <img
          src="/project/workspace/src/assets/images/arrow 2-1.png"
          alt="Arrow 2-1"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="flex justify-center items-center w-full mt-10">
        <img
          src="/project/workspace/src/assets/images/SecondSectionPhoto.png"
          alt="Second Section Photo"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="flex justify-center items-left w-full mt-10">
        <img
          src="/project/workspace/src/assets/images/arrow 2-2.png"
          alt="Arrow 2-2"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="relative xl:w-3/5 flex flex-col justify-start items-start w-full max-xl:padding-x">
        <p className="text-lg text-black mt-10">
          These icons indicate{" "}
          <span className="bg-gradient-to-r from-cyan to-blue text-transparent bg-clip-text">
            Chemical Properties
          </span>{" "}
          of the solvent, like for example, flammability and toxicity!
        </p>
      </div>
    </section>
  );
};

export default SecondSection;
