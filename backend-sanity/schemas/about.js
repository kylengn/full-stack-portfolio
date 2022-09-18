export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "yearsOfExp",
      title: "Years of Experience",
      type: "number",
    },
    {
      name: "completedProjects",
      title: "Number of Projects Completed",
      type: "number",
    },
    {
      name: "companiesWorked",
      title: "Number of Companies Worked",
      type: "number",
    },
    {
      name: "about_img",
      title: "About Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "resume",
      title: "Resume",
      type: "file",
    },
  ],
};
