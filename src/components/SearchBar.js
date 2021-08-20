// import Icon from "@material-tailwind/react/Icon";
import InputIcon from "@material-tailwind/react/InputIcon";


function SearchBar() {
  return (
    <div className="flex self-center md:w-1/2 w-72 bg-white shadow-lg focus-within:shadow-2xl focus-within:border-2 rounded-xl items-center text-dark">
      <InputIcon
        type="text"
        color="lightBlue"
        size="lg"
        outline={true}
        placeholder="Search by name, designation, skills"
        iconFamily="material-icons"
        iconName="search"
        className="flex h-8 bg-white pl-2 w-full outline-none flex-wrap"
          />
          {/* <Icon name="search" size="md" className="bg-white flex pr-2" /> */}
    </div>
  );
}

export default SearchBar;
