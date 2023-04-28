import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRecommend } from "../features/movie/movieSlice";

const Recommends = (props) => {
  const movies = useSelector(selectRecommend);
  console.log(movies, ":🛢️");

  // return (
  //   <Container>
  //       <h4>Recommended for You</h4>
  //       <Content>
  //               <Wrap>
  //                   <Link to='/' >
  //                       <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/4253/734253-h" alt=""/>
  //                   </Link>
  //               </Wrap>
  //               <Wrap>
  //                   <Link to='/' >
  //                       <img src="https://i.ytimg.com/vi/5Y4yJOhg4pI/hqdefault.jpg" alt=""/>
  //                   </Link>
  //               </Wrap>
  //               <Wrap>
  //                   <Link to='/' >
  //                       <img src="https://images.thedirect.com/media/article_big/avatar-2-disney-plus-release-date.jpg?imgeng=cmpr_75/" alt=""/>
  //                   </Link>
  //               </Wrap>
  //               <Wrap>
  //                   <Link to='/' >
  //                       <img src="https://i0.wp.com/urbanasian.com/wp-content/uploads/2020/09/The-Right-Stuff_Disney-Hotstar-Premium.jpg?fit=1366%2C768&ssl=1" alt=""/>
  //                   </Link>
  //               </Wrap>
  //       </Content>
  //   </Container>
  // );

  return (
    <Container>
        <h4>Recommended for You</h4>
        <Content>
               {
                  movies && movies.map((movie, key)=> (
                    <Wrap key={key}>
                        {movie.id}
                        <Link to={'/detail/' +movie.id}>
                          <img src={movie.cardImg} alt={movie.title}/>
                        </Link>
                    </Wrap>
                  ))
               }
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

export default Recommends;