import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { PiClock } from "react-icons/pi";
import { IoPeopleOutline } from "react-icons/io5";
import { MdCurrencyRupee } from "react-icons/md";

import {
  CourseDetails,
  CourseHeading,
  CourseImage,
  CourseItem,
  CoursesContainer,
  CoursesList,
  CourseTitle,
  ExploreButton,
  InfoContainer,
  PrizeContainer,
  RatingContainer,
  RatingInfo,
  SpanContainer,
  Stars,
} from "./styledComponents";

import { coursesList } from "../../mockData/coursesList";

const CoursesNew = () => {
  const [courses, setCourses] = useState(coursesList);

  return (
    <>
      <CoursesContainer>
        <CourseHeading>Placement Fit Crash Course</CourseHeading>
        <CoursesList>
          {courses.map((course) => {
            const starsLength = Math.floor(course.rating);
            return (
              <CourseItem key={course.id}>
                <CourseImage src={course.courseImage} alt={course.courseName} />
                <CourseDetails>
                  <>
                    <CourseTitle>{course.courseName}</CourseTitle>
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
                        <span className="span-right">
                          {course.recommendedFor}
                        </span>
                      </SpanContainer>
                    </InfoContainer>
                    <PrizeContainer>
                      <MdCurrencyRupee />
                      {course.prize}
                      <span className="batch">({course.batch})</span>
                    </PrizeContainer>
                  </>
                  <Link
                    to={`/course/${course.id}`}
                    style={{ textDecoration: "none", marginTop: "auto" }}
                  >
                    <ExploreButton>Explore</ExploreButton>
                  </Link>
                </CourseDetails>
              </CourseItem>
            );
          })}
        </CoursesList>
      </CoursesContainer>
    </>
  );
};

export default CoursesNew;
