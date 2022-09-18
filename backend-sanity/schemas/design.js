export default {
  title: "UI UX Design",
  name: "design",
  type: "object",
  fieldsets: [
    {
      name: "design",
      title: "UI/UX Design",
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
      fieldset: "design",
    },
    {
      name: "figma",
      type: "number",
      title: "Figma",
      fieldset: "design",
    },
    {
      name: "sketch",
      type: "number",
      title: "Sketch",
      fieldset: "design",
    },
    {
      name: "adobe",
      type: "number",
      title: "Adobe",
      fieldset: "design",
    },
  ],
};
