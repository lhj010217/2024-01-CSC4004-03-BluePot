import styled, { css } from "styled-components";

export const MainWrapper = styled.div `
    display: flex;
    flex-direction: column;
    gap: 21px;
`;

//Title
export const TitleWrapper = styled.div`
    display: flex;
    margin-right: 70vw;
    margin-left: 20rem;
`;

export const Title = styled.div `
    font-family: Jalnan;
    font-size: 40px;
    color: #161835;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    font-style: normal;
    font-weight: 700;
    line-height: 36px;
    width: 100%;
    margin-top: 7vw;
`;

export const subTitle = styled.div `
    font-family: Pretendard-Regular;
    width: 140%;
    margin-top: 10.5vw;
    font-size: 13px;
    margin-left: -13vw;
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
    font-style: normal;
`;

//검색창
export const searchBox= styled.div `
    display: flex;
    margin-left: 35rem;
    margin-top: 4rem;
    width: 908px;
    height: 59px;
    background-color: #fff;
    border: 1px solid #161835;
    border-radius: 15px;
    opacity: 0.4;
`;

export const Input = styled.input `
    display: flex;
    font-family: Pretendard-Medium;
    transform: translate(-50%, -50%);
    margin-left: 45rem;
    margin-top: 2.8rem;
    width: 230px;
    height: 24px;
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    text-align: center;

    &::placeholder {
        color: black;
    }
`;

export const searchImage = styled.img `
    display: flex;
    transform: translateY(-50%);
    margin-left: 37rem;
    margin-top: -2.8rem;
    width: 24px;
    height: 24px;
`;

//지역 선택
export const regionContainer = styled.div`
    display: flex;
    margin-left: 35rem;
    width: 950px;
    height: 94px;
    display: flex;
    flex-wrap: wrap;
`;

export const region = styled.div`
    display: flex;
    margin-right: 3rem;
    margin-top: 1rem;
    width: 75px;
    height: 39px;
    background-color: #fff;
    color: #161835;
    border: 1px solid #161835;
    border-radius: 9px;
    font-size: 14px;
    font-family: 'Pretendard';
    font-weight: 600;
    text-align: center;
    flex-direction: column;
    justify-content: center;

    &:hover {
        background-color: #161835;
        color: #fff;
    }
    ${props =>
        props.isActive &&
        css`
            background-color: #161835;
            color: #fff;
        `}
`;

//영화관 선택
export const TheaterContainer = styled.div `
    display: flex;    
    flex-wrap: wrap;
    width: 1400px;
    margin-left: 15rem;
`;

//정렬버튼
export const SortContainer = styled.div `
    display: flex;
    margin-left: 130rem;
    

    select {
        color: #AEAFB9;
        border-radius: 7px;
        padding: 0.4rem;

        border: 1px solid #AEAFB9;
        background: #FFF;
        box-shadow: 0px 2.776px 2.776px 0px rgba(0, 0, 0, 0.25);
    }
`;