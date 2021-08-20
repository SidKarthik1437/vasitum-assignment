import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/sidebar";

function dashboard() {
  return (
    <div className="flex items-center justify-between bg-white w-full h-screen p-5 md:ml-20 pl-0 mb-48 md:mb-0">
      {/* <Navbar /> */}
      <div className="flex flex-col w-full flex-grow p-5 h-screen">
        <div className="flex w-full flex-grow items-center justify-between">
          <SearchBar />
          <div className="flex h-8 w-8 ml-2 md:hidden rounded-full object-contain ">
            <img
              src="https://images.unsplash.com/photo-1557130680-6a87a704ac0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
              alt=""
              className="rounded-full object-cover h-8 w-8 md:h-14 md:w-14"
            />
          </div>
        </div>
        <h2 className="tracking-wider py-4 ">Relax while AI does your work</h2>
        <div className="flex flex-col gap-4 h-screen w-full">
          <div className="flex flex-col md:flex-row space-x-4">
            <JobCard
              job="React Developer"
              company="Sumedha Softech Pvt.Ltd | Jaipur"
              tags={["react", "react native"]}
            />
            <JobCard
              job="React Native Developer"
              company="Metafic | Bengaluru"
              tags={["redux", "react native", "oops"]}

            />
          </div>
          <div className="flex flex-col md:flex-row space-x-4">
            <JobCard
              job="React Developer"
              company="Angular Minds Private Limited | Pune"
              tags={[
                "ReactJS",
                "HTML",
                "css",
                "Javascript",
                "redux",
                "react native",
              ]}
            />
            <JobCard
              job="React JS Developer"
              company="SKM Jobs | Noida"
              tags={['ReactJS' , 'React Native' , 'Javascript' , 'Redux' , 'XCode' , 'ECMAScript' , 'Gradle']}
            />
          </div>
        </div>
      </div>
      <Sidebar />
    </div>
  );
}

export default dashboard;
