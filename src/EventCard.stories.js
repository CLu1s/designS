import React from "react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import EventCard from "./EventCard";

export default {
  title: "Design System|EventCard",

  parameters: {
    component: EventCard,
  },
};

const card = {
  image:
    "https://cdn.stocksnap.io/img-thumbs/960w/donut-sprinkles_46KSWRAA9X.jpg",
  title: "Guide To Eating An Anti-inflammatory Diet Virtual Lecture",
  date: "July 26, 2020  |  10:00 am - 11:30 pm",
  description: "Lorem Ipsum Location",
  location: "virtual",
  category: "Virtual Support Group",
};
export const all = () => {
  return (
    <>
      <EventCard card={card} />
      <EventCard size='large' card={card} />
    </>
  );
};
export const standard = () => <EventCard card={card} />;
export const large = () => <EventCard size='large' card={card} />;
