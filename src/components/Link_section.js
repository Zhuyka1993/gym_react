import React from "react";
import LinkItem from "./LinkItem";
import "../style/StyleForComponents.css";

const LinkSection = () => {
  return (
    <div className="links" id="services">
      <LinkItem
        href="#gym"
        imgSrc={`${process.env.PUBLIC_URL}/gym.png`}
        altText="Gym"
        text="ТРЕНАЖЕРНИЙ ЗАЛ"
        bgClass="gym_link"
      />
      <LinkItem
        href="#group"
        imgSrc={`${process.env.PUBLIC_URL}/group.png`}
        altText="Group"
        text="ГРУПОВІ ЗАНЯТТЯ"
        bgClass="group_link"
      />
      <LinkItem
        href="#sol"
        imgSrc={`${process.env.PUBLIC_URL}/sun.png`}
        altText="Solarium"
        text="СОЛЯРІЙ"
        bgClass="solari_link"
      />
      <LinkItem
        href="#massage"
        imgSrc={`${process.env.PUBLIC_URL}/relax.png`}
        altText="Massage"
        text="МАСАЖ"
        bgClass="massage_link"
      />
      <LinkItem
        href="#cafe"
        imgSrc={`${process.env.PUBLIC_URL}/cafe.png`}
        altText="Cafe"
        text="КАФЕ"
        bgClass="cafe_link"
      />
    </div>
  );
};

export default LinkSection;
