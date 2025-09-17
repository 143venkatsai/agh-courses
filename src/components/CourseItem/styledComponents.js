import styled from "styled-components";

export const CoursesItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 12px;
  gap: 10px;
  @media (min-width: 768px) {
    padding: 16px 24px;
  }

  @media (min-width: 1024px) {
    padding: 32px 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`;

export const CourseItemLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  order: 1;
  @media (min-width: 1024px) {
    order: 0;
  }
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

export const TitleContainer = styled.h1`
  font-family: "Arial", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin-top: 0px;
  margin-bottom: 0px;
  line-height: 120%;
  @media (min-width: 1024px) {
    font-size: 32px;
  }
`;

export const TitleLeft = styled.span`
  color: #fc2947;
`;

export const TitleRight = styled.span`
  color: #262626;
`;

export const DurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-self: flex-start;
  margin-top: 16px;
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
    gap: 24px;
  }
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

export const Description = styled.p`
  font-family: "Work Sans", snas-serif;
  color: #262626;
  font-size: 18px;
  font-weight: 400;
  margin: 24px 0px;
  line-height: 150%;
`;

export const PrizeContainer = styled.div`
  display: flex;
  align-items: center;
  color: #343434;
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  @media (min-width: 1024px) {
    font-size: 32px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 24px;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Download = styled.button`
  background-color: #e8e8e8;
  color: #434343;
  border: none;
  font-family: "Work Sans", sans-serif;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 8px;
  height: 56px;
  width: 100%;
  @media (min-width: 786px) {
    height: 56px;
    width: 216px;
  }
`;

export const Enroll = styled.button`
  background-color: #fc2947;
  color: #fff;
  border: none;
  font-family: "Work Sans", sans-serif;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  border-radius: 8px;
  height: 56px;
  width: 100%;
  @media (min-width: 786px) {
    height: 56px;
    width: 216px;
  }
`;

export const CourseVectorImage = styled.img`
  height: 300px;
  width: 100%;
  order: 0;
  @media (min-width: 1024px) {
    order: 1;
    height: 450px;
    width: 650px;
  }
`;
