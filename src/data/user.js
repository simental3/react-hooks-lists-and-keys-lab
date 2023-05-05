const user = {
  name: "Anthony",
  city: "Los Angeles",
  bio: "I made this!",
  color: "firebrick",
  links: {
    github: "https://github.com/Anthony",
    linkedin: "https://www.linkedin.com/in/Anthony/",
  },
  projects: [
    {
      id: 1,
      name: "Reciplease",
      about: "A recipe tracking app",
      technologies: ["Rails", "Bootstrap CSS"],
    },
    {
      id: 2,
      name: "Kibbles N Bitz",
      about: "Tinder for dogs",
      technologies: ["React", "Redux"],
    },
    {
      id: 3,
      name: "Alienwares",
      about: "Etsy for aliens",
      technologies: ["React", "Redux", "Rails"],
    },
  ],
};

export default user;
