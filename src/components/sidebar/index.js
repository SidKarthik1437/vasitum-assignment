import InfoCard from "./InfoCard"
import UserCard from "./UserCard"
import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";

function Sidebar() {
    return (
      <div className="hidden h-screen pt-5 md:inline-flex flex-col space-y-4 sticky">
        <div className="flex justify-end border-b mb-5 ">
          <Button
            color="blueGray"
            buttonType="link"
            size="large"
            rounded={false}
            block={false}
            iconOnly={true}
            ripple="light"
            className="flex rounded-xl my-5"
          >
            <Icon name="notifications" size="regular" className="w-20 h-20" />
          </Button>
        </div>
        <UserCard />
        <InfoCard />
      </div>
    );
}

export default Sidebar
