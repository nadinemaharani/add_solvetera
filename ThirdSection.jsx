//NOTE: Copied from 'About Us'
//all background di asset, ditaruh di tailwind.config? repo 

const ThirdSection = () => {
  return (
    <section className="w-full flex flex-col min-h-screen gap-10 max-container bg-ThirdSection bg-no-repeat bg-right">
      <div className="relative xl:w-3/5 flex flex-col justify-start items-start w-full max-xl:padding-x pt-60">
        <h1 className="text-4xl font-bold leading-snug">
          Let's Start The{" "}
          <span className="bg-gradient-to-r from-cyan to-blue text-transparent bg-clip-text">
            Prediction!
          </span>
        </h1>
      
        <div className="flex justify-center items-center w-full mt-10">
        <img
          src="/project/workspace/src/assets/images/ThirdSectionPhoto.png"
          alt="Second Section Photo"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>

    </section>
  );
};

export default ThirdSection;
