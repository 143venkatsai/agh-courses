import React from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { PiClock } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";

import {
  ButtonsContainer,
  CourseItemLeftContainer,
  CoursesItemContainer,
  CourseVectorImage,
  Description,
  Download,
  DurationContainer,
  Enroll,
  InfoContainer,
  PrizeContainer,
  RatingContainer,
  RatingInfo,
  SpanContainer,
  Stars,
  TitleContainer,
  TitleLeft,
  TitleRight,
} from "./styledComponents";

import { coursesList } from "../../mockData/coursesList";

import { IoPeopleOutline } from "react-icons/io5";
import { MdCurrencyRupee } from "react-icons/md";

const CourseItem = () => {
  const { id } = useParams();
  const course = coursesList.find((item) => item.id === parseInt(id));
  console.log(course);
  const starsLength = Math.floor(course.rating);

  return (
    <>
      <CoursesItemContainer>
        <CourseItemLeftContainer>
          <RatingContainer>
            <Stars>
              {[...Array(starsLength)].map((_, index) => (
                <FaStar
                  key={index}
                  style={{
                    color: "#FFD95A",
                    height: "16px",
                    width: "16px",
                    marginRight: "2px",
                  }}
                />
              ))}
            </Stars>
            <RatingInfo>{course.rating}</RatingInfo>
          </RatingContainer>
          <TitleContainer>
            <TitleLeft>{course.shortName} - </TitleLeft>
            <TitleRight>Placement Fit Crash Course</TitleRight>
          </TitleContainer>
          <DurationContainer>
            <InfoContainer>
              <PiClock className="icon" />
              <SpanContainer>
                <span className="span-left">Duration :</span>
                <span className="span-right">{course.duration}</span>
              </SpanContainer>
            </InfoContainer>
            <InfoContainer>
              <IoPeopleOutline className="icon" />
              <SpanContainer>
                <span className="span-left">Recommended for</span>
                <span className="span-right">{course.recommendedFor}</span>
              </SpanContainer>
            </InfoContainer>
          </DurationContainer>
          <Description>{course.description}</Description>
          <PrizeContainer>
            <MdCurrencyRupee />
            {course.prize}
          </PrizeContainer>
          <ButtonsContainer>
            <Download>Download</Download>
            <Enroll>
              Get Enrolled <FaArrowRightLong style={{ marginLeft: "8px" }} />
            </Enroll>
          </ButtonsContainer>
        </CourseItemLeftContainer>
        <CourseVectorImage src={course.vectorImage} alt={course.courseName} />
      </CoursesItemContainer>
    </>
  );
};

export default CourseItem;
