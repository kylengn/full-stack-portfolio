// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import intro from "./intro";
import about from "./about";
import skills from "./skills";
import frontend from "./frontend";
import design from "./design";
import workflow from "./workflow";
import qualifications from "./qualifications";
import education from "./education";
import work from "./work";
import services from "./services";
import service from "./service";
import portfolio from "./portfolio";
import project from "./project";
import cta from "./cta";
import testimonials from "./testimonials";
import testimonial from "./testimonial";
import contact from "./contact";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    intro,
    about,
    skills,
    design,
    frontend,
    workflow,
    qualifications,
    education,
    work,
    services,
    service,
    portfolio,
    project,
    cta,
    testimonials,
    testimonial,
    contact,
  ]),
});
