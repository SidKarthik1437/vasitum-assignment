import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import Tooltips from "@material-tailwind/react/Tooltips";
import TooltipsContent from "@material-tailwind/react/TooltipsContent";
import { useRef } from "react";
import { Link } from 'react-router-dom'
import * as ROUTES from "../constants/routes";


function Navbar() {
  const HomeRef = useRef();
  const saved_JobRef = useRef();
  const applied_JobRef = useRef();
  const ChatRef = useRef();

  return (
    <header className="md:flex md:flex-col fixed bottom-0 left-0 z-50 h-14 w-full md:h-screen md:w-20 bg-bg md:py-2 md:rounded-r-lg items-center justify-between">
      <div className="hidden md:flex">
        <img
          src="/assets/icons/vasitum.svg"
          alt="logo"
          className="object-fill h-14 p-2 bg-blue rounded-xl"
        />
      </div>

      <div className="flex md:flex-col md:my-10 h-14 space-x-10 md:space-x-0 justify-center w-full items-center">
        <Link to={ROUTES.DASHBOARD}>
          <Button 
            color="lightBlue"
            buttonType="filled"
            size="large"
            rounded={false}
            block={false}
            iconOnly={true}
            ripple="light"
            className="flex md:w-14 md:h-14 rounded-xl md:my-5"
            ref={HomeRef}
          >
            <Icon name="home" size="regular" className="w-20 h-20" />
          </Button>
        <Tooltips placement="right" ref={HomeRef}>
          <TooltipsContent>Home</TooltipsContent>
        </Tooltips>
        </Link>
        <Link>
          <Button
            color="lightBlue"
            buttonType="filled"
            size="large"
            rounded={false}
            block={false}
            iconOnly={true}
            ripple="light"
            className="flex md:w-14 md:h-14 rounded-xl md:my-5"
            ref={saved_JobRef}
          >
            <Icon name="bookmark_border" size="regular" className="w-20 h-20" />
          </Button>
          <Tooltips placement="right" ref={saved_JobRef}>
            <TooltipsContent>Saved Jobs</TooltipsContent>
          </Tooltips>
        </Link>
        <Link>
          <Button
            color="lightBlue"
            buttonType="filled"
            size="large"
            rounded={false}
            block={false}
            iconOnly={true}
            ripple="light"
            className="flex md:w-14 md:h-14 rounded-xl md:my-5"
            ref={applied_JobRef}
          >
            <Icon
              name="check_circle_outline"
              size="regular"
              className="w-20 h-20"
            />
          </Button>
          <Tooltips placement="right" ref={applied_JobRef}>
            <TooltipsContent>Applied Jobs</TooltipsContent>
          </Tooltips>
        </Link>
        <Link>
          <Button
            color="lightBlue"
            buttonType="filled"
            size="large"
            rounded={false}
            block={false}
            iconOnly={true}
            ripple="light"
            className="flex md:w-14 md:h-14 rounded-xl md:my-5"
            ref={ChatRef}
          >
            <Icon name="chat" size="regular" className="w-20 h-20" />
          </Button>
          <Tooltips placement="right" ref={ChatRef}>
            <TooltipsContent>Messaging</TooltipsContent>
          </Tooltips>
        </Link>
      </div>

      <div className="hidden md:flex rounded-full object-contain ">
        <img
          src="https://images.unsplash.com/photo-1557130680-6a87a704ac0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
          alt=""
          className="rounded-full object-cover h-8 w-8 md:h-14 md:w-14"
        />
      </div>
    </header>
  );
}

export default Navbar;
