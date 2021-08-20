import { IconButton } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import ThumbDownIcon from "@material-ui/icons/ThumbDownOutlined";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorderOutlined";
import { Scrollbars } from "react-custom-scrollbars";

function JobCard({ job, company, tags, bg }) {
  return (
      <div className={`flex relative bg-bg bg-opacity-30 md:w-1/3 h-44 w-80 self-center rounded justify-evenly items-center hover:shadow-2xl shadow cursor-pointer`}>
      <div className="absolute flex -right-80 top-1 w-full pl-8">
        <IconButton size="small">
          <ThumbDownIcon color="secondary" size="small" />
        </IconButton>
        <IconButton size="small">
          <BookmarkBorderIcon color="secondary" size="small" />
        </IconButton>
      </div>
      <img
        src="https://recruiter-ebook.s3.ap-south-1.amazonaws.com/company-icon.svg"
        alt=""
        className="flex h-16"
      />
      <div className="flex flex-col">
        <h2 className="flex font-semibold text-lg tracking-wide">{job}</h2>
        <span className="flex font-thin">{company}</span>
        <Scrollbars
          autohide
          style={{ height: 50 , width:250 }}
          trackHorizontal
          className="mt-2 flex overflow-x-scroll "
        >
          {tags.map((tag) => (
            <Chip
              label={tag}
              color="secondary"
              size="small"
              className="flex m-1 text-sm"
            />
          ))}
        </Scrollbars>
      </div>
    </div>
  );
}

export default JobCard;
