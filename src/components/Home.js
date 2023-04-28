import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommended";
import NewDisney from "./NewDisplay";
import Original from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import { original } from "@reduxjs/toolkit";




const Home =  (props) =>{

    const dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trendings = [];

    useEffect(()=>{
      db.collection('movies').onSnapshot((snapshot)=>{
          debugger;
          snapshot.docs.map((doc)=>{
            debugger;
            console.log(recommends);
            console.log(newDisneys);
            console.log(originals);
            console.log(trendings);
            switch(doc.data().type){
              case 'recommend' :
                debugger;
                recommends = [...recommends, {id: doc.id, ...doc.data()}]
                break;
              case 'new' :
                newDisneys= [...newDisneys, {id: doc.id, ...doc.data()}]
                break;
              case 'original' :
                originals = [...originals, {id: doc.id, ...doc.data()}]
                break;
              case 'trending' :
                trendings = [...trendings, {id: doc.id, ...doc.data()}]
                break;
              
            }
          });
      

      dispatch(setMovies({
          recommend : recommends,
          newDisney : newDisneys,
          original : originals,
          trending : trendings
      })
      );
    });
    }, [userName]);

    return (
        <Container>
            <ImgSlider/>
            <Viewers/>
            <Recommends/>
            <NewDisney/>
            <Original/>
            <Trending/>
        </Container>
    )
};

const Container = styled.main`
    position: relative;min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
    &:after {
      background: url("/images/home-background.png") center center / cover
        no-repeat fixed;
      content: "";
      position: absolute;
      inset: 0px;
      opacity: 1;
      z-index: -1;
    }
`;

//top => use to start the home page after header 
//image hight is increases when we aadd new components 
export default Home;