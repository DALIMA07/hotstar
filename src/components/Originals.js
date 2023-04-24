import styled from "styled-components";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { selectNewDisney } from "../features/movie/movieSlice";

const Original = (props) => {
//  const movies = useSelector(selectNewDisney);

  return (
    <Container>
      <h4>Original</h4>
      <Content>
                <Wrap>
                    <Link to='/' >
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxq6NS7ac4G4gNYubM5bqtIY28EQg9x94bHw&usqp=CAU" alt=""/>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to='/' >
                        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/6497/1316497-h-0073cb514439" alt=""/>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to='/' >
                        <img src="https://www.millenniumpost.in/h-upload/2022/12/16/1600x960_658838-aar-ya-paar-poster.jpg" alt=""/>
                    </Link>
                </Wrap>
                <Wrap>
                    <Link to='/' >
                        <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6534/1476534-h-6bd0ba8efed0" alt=""/>
                    </Link>
                </Wrap>
        </Content>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;

export default Original;