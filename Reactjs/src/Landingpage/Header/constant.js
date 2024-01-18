import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import {BiSolidBible} from "react-icons/bi";
import {IoDocumentTextSharp} from "react-icons/io5"
import {BsCalendarEventFill, BsFillBookFill} from "react-icons/bs";
import {RiFeedbackFill} from "react-icons/ri";
 import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowLeft} from "react-icons/md"
export const SidebarData = [
  {
    title: "Home",
    path: "/dashboard/home",
    icon: <AiIcons.AiFillHome />,
    
  },
  {
    title: "Quick Search",
    path: "/dashboard/search",
    icon: <FaIcons.FaSearch />,
    
  },
  {
    title: "Sabbath Day Document",
    path: "/dashboard/sabbath_document",
    icon: <FaIcons.FaFolderOpen />,
    
  },
  {
    title: "Bible",
    // path: "/bible",
    icon: <BiSolidBible />,
    iconClosed: <MdOutlineKeyboardArrowLeft size={20}/>,
    iconOpened: <MdOutlineKeyboardArrowDown size={20}/>,
 
    subNav: [
      {
        title: "Holy Bible",
        path: "/dashboard/holy_bible",
        icon: <BiSolidBible />,
        cName: "sub-nav",
      },
      {
        title: "Study Bibles",
        path: "/dashboard/study",
        icon: <BiSolidBible/>,
        cName: "sub-nav",
      },
      {
        title: "Bible Commentaries",
        path: "/dashboard/commentaries",
        icon: <BiSolidBible/>,
      },
      {
        title: "Bible Theology",
        path: "/dashboard/theology",
        icon: <BiSolidBible />,
      },
      {
        title: "Bible Dictionary & Encyclopedia",
        path: "/dashboard/dictionary",
        icon: <BiSolidBible/>,
      },
    ],
  },
  {
    title: "E-Books",
    path: "/dashboard/ebooks",
    icon: <FaIcons.FaBookReader />,
  },
  {
    title: "Spiritual Articles",
    path: "/dashboard/spiritual_articles",
    icon: <IoDocumentTextSharp />,
  },
  {
    title: "Mariology",
    icon: <BiSolidBible />,
    iconClosed: <MdOutlineKeyboardArrowLeft size={20}/>,
    iconOpened: <MdOutlineKeyboardArrowDown size={20}/>,
 
    subNav: [
      {
        title: "Marian Books",
        path: "/dashboard/mariologybook",
        icon: <BiSolidBible />,
      },
      {
        title: "Marian Studies",
        path: "/dashboard/mariologystudy",
        icon: <BiSolidBible />,
      },
    ],
  },
  {
    title: "Prayer Rain",
    path: "/dashboard/prayer_rain",
    icon: <FaIcons.FaFolderOpen />,
  },

  {
    title: "Sinai Letter",
    path: "/dashboard/sinai_letter",
    icon: <BiSolidBible  />,
  },
  {
    title: "Prayer Notes",
    path: "/dashboard/prayer_notes",
    icon: <FaIcons.FaFolderOpen  />,
  },
  {
    title: "Bible Workshop Documents",
    path: "/dashboard/workshop_doc",
    icon: <FaIcons.FaFolderOpen  />,
  },
  {
    title: "Fasting Prayer Documents",
    path: "/dashboard/fasting_docs",
    icon: <FaIcons.FaFolderOpen />,
  },
  {
    title: "Diploma in Bible Books",
    path: "/dashboard/diploma_books",
    icon: <FaIcons.FaFolderOpen />,
  },
  {
    title: "Virgin Biblio",
    path: "/dashboard/virgin_biblio",
    icon: <FaIcons.FaFolderOpen />,
  },
  {
    title: "Evangelical Events",
    path: "/dashboard/evangelic_events",
    icon: <BsCalendarEventFill />,
  },
  {
    title: "Book Request",
    path: "/dashboard/request",
    icon: <BsFillBookFill />,
  },
  {
    title: "Feedback / Suggestions",
    path: "/dashboard/feedback",
    icon: <RiFeedbackFill />,
  },
  {
    title: "Catholic tamil Website",
    path: "/dashboard/ctw",
    icon: <IoIcons.IoMdHelpCircle />,
  },
];