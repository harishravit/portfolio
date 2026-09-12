import { Link } from "react-router-dom";
import ProjectInProgress from "../assets/Project _in_ progress.svg";
// import BottomNavigationBtn from "../components/BottomNavigationBtn";
import projectInfo from "../utils/project-data";
export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex gap-x-2 items-center">
        <span className="text-primary text-2xl font-medium antialiased">
          Projects
        </span>
      </div>
      <div className="flex flex-col gap-y-2 w-full pl-1">
        {projectInfo.length > 0 ? (
          projectInfo.map((item) => (
            <Link
              to={`/${item.pathLink}`}
              key={item.title}
              className="w-full flex flex-col gap-y-1"
            >
              <div>
                <span className="text-primary text-lg font-medium">
                  {item.title}
                </span>
                <p className="text-secondary text-sm -mt-0.5">
                  {item.sampleDescription}
                </p>
              </div>
              <hr className="w-full border border-border" />
            </Link>
          ))
        ) : (
          <div className="flex flex-col text-xl text-secondary text-center w-full">
            <img
              src={ProjectInProgress}
              className="max-w-full h-auto mx-auto w-45 md:w-65  md:max-w-md object-contain"
              alt="work in progress"
            />
            <h4 className="font-medium mt-3">Work in progress</h4>
            <p className="text-balance text-sm mt-1">
              I am hard at work updating this section. Exciting projects are
              coming very soon!
            </p>
          </div>
        )}
      </div>
      {/* <BottomNavigationBtn
        text={["Home", "Journey"]}
        varient="double"
        routes={["/", "/journey"]}
      /> */}
    </div>
  );
}
