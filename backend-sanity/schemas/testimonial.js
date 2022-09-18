export default {
  title: "Testimonials",
  name: "testimonial",
  type: "object",
  fields: [
    {
      name: "clientName",
      title: "Client Name",
      type: "string",
    },
    {
      name: "clientTitle",
      title: "Client Title",
      type: "string",
    },
    {
      name: "clientImg",
      title: "Client Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "clientReview",
      title: "Client Review",
      type: "text",
    },
    {
      name: "ratings",
      title: "Client Ratings",
      type: "number",
      initialValue: 5,
      validation: (Rule) => Rule.required().greaterThan(0).lessThan(6),
    },
  ],
};
