import styled from "styled-components";

export const CoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 12px;

  @media (min-width: 768px) {
    padding: 16px 24px;
  }

  @media (min-width: 1024px) {
    padding: 32px 100px;
  }
`;

export const CourseHeading = styled.h1`
  font-family: "Work Sans", sans-serif;
  font-size: 24px;
  font-weight: 600;
  padding-bottom: 32px;
  color: #000;
  @media (min-width: 1024px) {
    font-size: 32px;
  }
`;

export const CoursesList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const CourseItem = styled.li`
  display: flex;
  flex-direction: column;
  border: 0.8px solid #dcdcdc;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 2px 4px 4px 0px #c3c3c340;
`;

export const CourseImage = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  position: relative;
`;

export const CourseDetails = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 24px;
`;

export const CourseTitle = styled.h3`
  font-family: "Reddit Sans", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #27272a;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const RatingInfo = styled.p`
  font-family: "Work Sans", sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #343434;
  margin-left: 5px;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: "Reddit Sans", sans-serif;
  margin-bottom: 8px;

  .icon {
    color: #787878;
    height: 24px;
    width: 24px;
  }
`;

export const SpanContainer = styled.div`
  display: flex;
  align-items: center;

  .span-left {
    color: #757575;
    font-size: 14px;
    margin-right: 4px;
  }
  .span-right {
    color: #1b2124;
    font-size: 14px;
  }
`;

export const ExploreButton = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: #fff;
  background-color: #fc2947;
  border-radius: 6px;
  text-align: center;
  margin-top: 10px;
  padding: 8px;
  cursor: pointer;
`;

export const PrizeContainer = styled.div`
  background: linear-gradient(to top right, #ff8899, #fc2947);
  height: 42px;
  width: 106px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
  font-size: 24px;
  position: absolute;
  top: 16px;
  z-index: 2;
`;
