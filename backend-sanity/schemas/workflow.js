export default {
  title: "Development Workflow",
  name: "workflow",
  type: "object",
  fieldsets: [
    {
      name: "workflow",
      title: "Development Workflow",
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
      fieldset: "workflow",
    },
    {
      name: "git",
      type: "number",
      title: "Version Control",
      fieldset: "workflow",
    },
    {
      name: "review",
      type: "number",
      title: "Code Review",
      fieldset: "workflow",
    },
    {
      name: "scrum",
      type: "number",
      title: "Scrum & Agile",
      fieldset: "workflow",
    },
    {
      name: "debug",
      type: "number",
      title: "Debugging",
      fieldset: "workflow",
    },
  ],
};
