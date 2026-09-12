import JourneyImage from "../assets/Journey.svg";
export default function JourneyPage() {
  return (
    <div className="text-xl text-secondary w-full h-full flex items-center justify-center">
      <div className="flex flex-col text-xl text-secondary text-center w-full">
        <img
          src={JourneyImage}
          className="max-w-full h-auto mx-auto w-45 md:w-65 md:max-w-md  object-contain"
          alt="work in progress"
        />
        <h4 className="font-medium mt-3">Documenting My Story</h4>
        <p className="text-balance text-sm mt-1">
          I am currently adding my experiences and milestones. Check back soon
          to read my journey!
        </p>
      </div>
    </div>
  );
}
