//NOTE: Copied from 'Hero'

const FirstSection = () => {
  return (
    <section className="w-full flex flex-col min-h-screen gap-10 max-container bg-FirstSection bg-no-repeat bg-right">
      <div className="relative xl:w-3/5 flex flex-col justify-start items-start w-full max-xl:padding-x pt-60">
        <h1 className="text-4xl font-bold leading-snug">
          Your Green Chemistry Journey{" "}
          <span className="bg-gradient-to-r from-cyan to-blue text-transparent bg-clip-text">
            Starts Here
          </span>
        </h1>

        <p className="text-lg text-black mt-10">
          Add your{" "}
          <span className="bg-gradient-to-r from-cyan to-blue text-transparent bg-clip-text">
            Chemical Properties
          </span>{" "}
          such as Reaction Type, Reactants, and other details listed below.
        </p>
      </div>

      <div className="flex justify-center items-right w-full mt-10">
        <img
          src="/project/workspace/src/assets/images/arrow 1-1.png"
          alt="Arrow 1-1"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      
      <div className="flex justify-center items-center w-full mt-10">
        <img
          src="/FirstSectionPhoto.png"
          alt="FirstSectionPhoto"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="flex justify-center items-right w-full mt-10">
        <img
          src="/project/workspace/src/assets/images/arrow 1-2.png"
          alt="Arrow 1-2"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      <div className="relative xl:w-3/5 flex flex-col justify-start items-start w-full max-xl:padding-x">
        <p className="text-lg text-black mt-10">
          Hit the{" "}
          <span className="bg-gradient-to-r from-cyan to-blue text-transparent bg-clip-text">
            Find My Solvent
          </span>{" "}
          button and let Solvetera do the magic!
        </p>
      </div>
    </section>
  );
};

export default FirstSection;
