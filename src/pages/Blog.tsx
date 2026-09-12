import BlogWriteImage from "../assets/Writing work.svg";
export default function BlogPage() {
  return (
    <div className="text-xl text-secondary w-full h-full flex items-center justify-center">
      <div className="flex flex-col text-xl text-secondary text-center w-full">
        <img
          src={BlogWriteImage}
          className="max-w-full h-auto mx-auto w-45 md:w-65 md:max-w-md  object-contain"
          alt="work in progress"
        />
        <h4 className="font-medium mt-3">No Posts Yet</h4>
        <p className="text-balance text-sm mt-1">
          The blog is currently empty. Stay tuned for exciting tech insights
          coming very soon!
        </p>
      </div>
    </div>
  );
}
