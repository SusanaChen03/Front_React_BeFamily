import './Home.css';
import MiniCardChallenger from '../../components/MiniCardChallenger/MiniCardChallenger';
import { useEffect, useState } from 'react';
import { SHOW_POPUP, URL_LOCAL, HIDDEN_POPUP } from "../../store/typesVar.js";

const Home = () =>{

    const [cards, setCard] = useState([]);

    const cardList = async () =>{
        const cardsResult = await fetch(URL_LOCAL + "/challenges", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + sessionStorage.getItem("token"),
            },
        });
        
        const dataCard = await cardsResult.json();
        setCard(dataCard);
    }

    useEffect(() => {
        try {
            cardList();
        } catch (error) {
          console.log(error);
        }
      }, []);

    return(
        <div className='ContainerChallengers'>
             {cards.map((card) => {
            return <MiniCardChallenger card={card} />;
          })}
      
        </div>
    )
};

export default Home;