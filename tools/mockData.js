const courses = [
  {
    id: 1,
    title: "Learn Production Grade React-Redux JS",
    slug: "react-redux",
    authorId: 1,
    category: "React",
  },
  {
    id: 2,
    title: "Covid 19 Angular App",
    slug: "covid-angular",
    authorId: 1,
    category: "Angular",
  },
  {
    id: 3,
    title: "HouseApplianceApplication Setup with Docker",
    slug: "docker",
    authorId: 1,
    category: "Docker",
  },
  {
    id: 4,
    title: "HouseApplianceApplication FrontEnd",
    slug: "house-hold-appliance-angular",
    authorId: 1,
    category: "Angular",
  },
  {
    id: 5,
    title: "HouseApplianceApplication BackendEnd",
    slug: "springboot",
    authorId: 1,
    category: "Springboot",
  },
];

const authors = [
  { id: 1, name: "GautamKumar@SoeWin" },
  { id: 2, name: "John Smith" },
  { id: 3, name: "Alan Smith" },
];

const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: "",
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newCourse,
  courses,
  authors,
};
