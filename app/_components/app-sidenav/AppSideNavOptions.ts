import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import GroupsIcon from "@mui/icons-material/Groups";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";

export const navOptions = [
  {
    icon: PlayArrowIcon,
    label: "Play",
    link: "/play",
    roles: ["admin", "user"],
  },
  {
    icon: GroupsIcon,
    label: "Groups",
    link: "/groups",
    roles: ["admin", "user"],
  },
  // {
  //   icon: GolfCourseIcon,
  //   label: "Tournaments",
  //   link: "/tournaments",
  //   roles: ["admin", "user"],
  // },
  {
    icon: LeaderboardIcon,
    label: "Ranking",
    link: "/ranking",
    roles: ["admin", "user"],
  },
];
