import "./ListChallengers.css";
import ChallengeCard from "../../components/ChallengeCard/ChallengeCard";
import { IoAddCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { URL_HEROKU, CLOSE_LOADING } from "../../store/typesVar";
import { Link } from "react-router-dom";
import useLoading from "../../hooks/useLoading";
import { useDispatch } from "react-redux";
import actionCreator from "../../store/actionTypes";

const ListChallengers = () => {
  const navigate = useNavigate();
  const loading = useLoading();
  const dispatch = useDispatch();



  const [listChallenges, setListChallenges] = useState([]);

  const challengeList = async () => {
    const results = await fetch(
      URL_HEROKU +
        "/challenge/familyName/" +
        sessionStorage.getItem("familyName"),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
      }
    );

    const dataChallenges = await results.json();
    setListChallenges(dataChallenges);
    dispatch(actionCreator(CLOSE_LOADING));
  };

  useEffect(() => {
    try {
      loading();
      challengeList();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const buttonHandler = () => {
    navigate("/createChallenge");
  };

  return (
    <div>
      <h1>Retos de la Familia </h1>

      <div class="cardChallegnge">
        {listChallenges.map((challenges) => {
          return <ChallengeCard challenges={challenges} />;
        })}

        <div class="my-2 mx-auto p-relative bg-white shadow-1 blue-hover cardcontainerCh">
          <img
            src="https://esment.org/blogs/wp-content/uploads/2020/03/reto.jpg"
            class="d-block w-full imgch"
          />

          <div class="px-2 py-2 hp">
            <p class="mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px">
              Retos
            </p>

            <h1 class="ff-serif font-weight-normal text-black card-heading mt-0 mb-1 hch1">
              Crea un nuevo reto
            </h1>

            <p class="mb-1 tl1">
              <Link to="/createChallenge" class="linknewrw">
                <span class="iconAdd">
                  {" "}
                  <IoAddCircleOutline />
                </span>
              </Link>
            </p>
          </div>

          <a
            href="/createChallenge"
            class="text-uppercase d-inline-block font-weight-medium lts-2px ml-2 mb-2 text-center styled-link aref"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default ListChallengers;
