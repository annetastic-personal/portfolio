import ttgFullCollection from "../assets/images/projects/ttgcollector/main-page-full-collection.png";
import ttgFilteredCollection from "../assets/images/projects/ttgcollector/main-with-filters.png";
import ttgSearchForm from "../assets/images/projects/ttgcollector/bggsearchform.png";
import ttgDetailsForm from "../assets/images/projects/ttgcollector/bggdetailsform.png";
import pddSinglePest from "../assets/images/projects/pest-degree-day-calculator/single-pest.png";
import pddMap from "../assets/images/projects/pest-degree-day-calculator/map-sample.png";
import ttgCardThumb from "../assets/images/projects/ttgcollector/eaten.png";
import pddCardThumb from "../assets/images/projects/pest-degree-day-calculator/corn-flea-beetle-map-for-flattening.gif";
import pddChoosePest from "../assets/images/projects/pest-degree-day-calculator/choose-pest.png"


const projects = [
  {
    slug: "ttgcollector",
    title: "Table Top Game Library",
    featured: true,
    summary:
      "An electronic library of your board games and their expansions. Find what to play next based on play style, number of players, themes, and more.",
    role: "Sole Developer",
    technologies: [
      "PostgreSQL",
      "Node.js",
      "Express.js",
      "React.js",
      "BoardGameGeek API",
      "REST",
    ],
    features: [
      "Build and manage a personal board-game and expansion library.",
      "Retrieve game details from BoardGameGeek to add games to your collection quickly with complete information.",
      "Choose the details that matter most for each game collection.",
      "Find games that fit a group's player count, ages, play time, mechanics, and preferred style.",
    ],
    architecture: [
      "Full-stack PERN app application built with React and Vite, Express, PostgreSQL, and Sequelize",
      "Session-based auth",
      "BoardGameGeek API integration to auto-populate game data by game name",
    ],
    coverImage: {
      src: ttgCardThumb,
      alt: "Web page displaying a board game and left-margin filter control",
    },
    images: [
      {
        src: ttgFullCollection,
        alt: "Web page displaying a collection of board games, with pictures for each game with filters in a left sidebar to simplify finding games to play",
      },
      {
        src: ttgFilteredCollection,
        alt: "Web page displaying a subset of games, filtered by player count, age, category, and game mechanic.",
      },
      {
        src: ttgSearchForm,
        alt: "Search form showing a search for a game and the resulting list of possible matches from BoardGameGeek",
      },
      {
        src: ttgDetailsForm,
        alt: "Form for adding a game that includes all the details pulled in from BoardGameGeek, including description, category options, and game mechanic options. Labels in category and game mechanic fields are editable.",
      },
    ],
    links: {
      live: "",
      source: "",
    },
    projectStatus: {
      type: "active",
      message: "",
    },
  },
  {
    slug: "pest-degree-day-calculator",
    title: "Pest Degree Day Calculator",
    featured: false,
    summary:
      "Helps thousands of Illinois farmers interpret historical pest activity and make better-informed decisions about future pest conditions.",
    role: "Primary Developer",
    technologies: [
      "Microsoft SQL Server",
      "ASP.NET",
      "JavaScript",
      "ArcGIS",
      "NOAA API",
      "Python",
      "SOAP",
    ],
    features: [
      "Explore common and specialty Midwest crop pests across all Illinois data-collection stations.",
      "Interpret a decade of PRI pest-activity data through interactive visualizations.",
      "Review heat maps for pests whose activity is measured in units other than pest degree days.",
      "Provide contextual guidance that helps users interpret the presented data.",
    ],
    architecture: [
      "ASP.NET application backed by Microsoft SQL Server for pest and historical activity data.",
      "Forecasting workflow combined pest-development thresholds with NOAA API weather inputs to calculate near-term activity predictions.",
    ],
    coverImage: {
      src: pddCardThumb,
      alt: "Web page displaying a heat map of past activity",
    },
    images: [
      {
        src: pddChoosePest,
        alt: "Web page displaying the state of Illinois with all data collection stations marked, and drop-down boxes for choosing desired station and pest",
      },
      {
        src: pddSinglePest,
        alt: "Web page displaying data for Western Bean Cutworm with graph showing pest degree day trends from April 2026 through September 3rd 2026, with context regarding where in IL data was collected, what expected pest degree days should be based on historical context ",
      },
      {
        src: pddMap,
        alt: "Web page displaying heat map of Brown Marmorated Stinkbug with photoperiod numbers marked by data collection station and context information for what that means for expected pest activity",
      },
    ],
    links: {
      live: "",
      source: "",
    },
    projectStatus: {
      type: "maintenance",
      message:
        "Developed by me and currently maintained by another developer. The public deployment is undergoing maintenance before the forecasting feature can be demonstrated. Screenshots show currently accessible parts of the application.",
    },
  },
];

export default projects;
