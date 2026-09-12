import NotFoundImage from "../assets/Page_error_image.svg";
const ErrorPage = () => {
  return (
    <div className="text-xl text-secondary w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col text-xl text-secondary text-center w-full">
        <img
          src={NotFoundImage}
          className="max-w-full h-auto mx-auto w-45 md:w-65 md:max-w-md  object-contain"
          alt="work in progress"
        />
        <h4 className="font-medium mt-3 ">Looks Like You Took a Wrong Turn</h4>
        <p className="text-balance text-sm mt-1">
          The page you are trying to reach doesn't exist. Double-check the
          address or return home to start over.!
        </p>
      </div>
    </div>
  );
};
export default ErrorPage;
