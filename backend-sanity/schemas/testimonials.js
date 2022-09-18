export default {
  name: "testimonials",
  title: "Testimonials",
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
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [{ type: "testimonial" }],
    },
  ],
};
