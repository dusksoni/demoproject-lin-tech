"use client"
import React, { useState } from "react";
import TopSection from "@/component/topSection";
import GoalSection from "@/component/goalSection";
import ContentSection from "@/component/contentSection";
import HowItsWorkSection from "@/component/howItsWorkSection";
import Step2section from "@/component/step2section";
import Step3Section from "@/component/step3Section";
import FeaturedCompanies from "@/component/featuredCompanies";
import FeaturesSection from "@/component/featuresSection";
import JoinClubSection from "@/component/joinClubSection";
import StudentsReview from "@/component/studentsReview";
import Questions from "@/component/questions";
import Footer from "@/component/footer";
import WhatWeDoSection from "@/component/whatWeDoSection";
import ContentSectionRecruiter from "@/component/contentSectionRecruiter";
import HowItsWorkRecruiter from "@/component/howItsWorkRecruiter";
import Step2recruiter from "@/component/step2recruiter";
import Step3recruiter from "@/component/step3recruiter";
import RecruitUdiffSection from "@/component/recruitUdiffSection";
import CollaborationIntegrationSection from "@/component/collaboration&integrationSection";

export default function Home() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    // Add logic for day-night transition here
  };
  return (
    <div className="bg-white">
      {/* Header  */}

      <TopSection handleToggle={handleToggle} toggle={toggle} />
      {toggle ? (
        <>
        <WhatWeDoSection />
        <ContentSectionRecruiter/>
        <HowItsWorkRecruiter />
        <Step2recruiter />
        <Step3recruiter />
        <FeaturedCompanies toggle={toggle}/>
        <RecruitUdiffSection />
        <CollaborationIntegrationSection/>
        </>
      ) : (
        <>
          <GoalSection />
          <ContentSection />
          <HowItsWorkSection />
          <Step2section />
          <Step3Section />
          <FeaturedCompanies toggle={toggle}/>
          <FeaturesSection />
          <JoinClubSection />
        </>
      )}
      <StudentsReview />
      <Questions toggle={toggle}/>
      <Footer toggle={toggle}/>
    </div>
  )
}
