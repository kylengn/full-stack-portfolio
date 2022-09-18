export default {
  title: "Frontend Development",
  name: "frontend",
  type: "object",
  fieldsets: [
    {
      name: "frontend",
      title: "Frontend Development",
      options: {
        collapsible: true, // Makes the whole fieldset collapsible
        collapsed: false, // Defines if the fieldset should be collapsed by default or not
        columns: 2, // Defines a grid for the fields and how many columns it should have
      },
    },
  ],
  fields: [
    {
      name: "yearsExp",
      type: "number",
      title: "Years of Experience",
      fieldset: "frontend",
    },
    {
      name: "html",
      type: "number",
      title: "HTML",
      fieldset: "frontend",
    },
    { name: "css", type: "number", title: "CSS", fieldset: "frontend" },
    {
      name: "javascript",
      type: "number",
      title: "JavaScript",
      fieldset: "frontend",
    },
    {
      name: "react",
      type: "number",
      title: "React",
      fieldset: "frontend",
    },
    { name: "api", type: "number", title: "API", fieldset: "frontend" },
  ],
};
