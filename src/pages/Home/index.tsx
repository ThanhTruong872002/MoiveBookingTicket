import React from "react";
import Header from "../../components/Head";
import Hero from "../../components/Hero";
import TicketBookingFast from "../../components/TicketBookingFast"

export default function Home() {
  return (
    <div>
      <div>
        <Header />
        <Hero />
        <TicketBookingFast/>
      </div>
    </div>
  );
}
