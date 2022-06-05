import "./ListRewards.css";
import { IoAddCircleOutline } from "react-icons/io5";

const ListRewards = () => {
  return (
    <div>
      <h1>Lista de recompensas</h1>

      <div className="profileStyles">
        <div class="card">
          <img
            src="https://areajugones.sport.es/wp-content/uploads/2022/01/eternals-2.jpg"
            class="card-img-top"
            alt="cinema"  />
         
          <div class="card-body">
            <h5 class="card-title">Entradas de cine</h5>
            <p class="card-text">Cine para la película ETERNALS</p>
          </div>
        </div>

        <div class="card">
          <img
            src="https://i.ytimg.com/vi/tKa3mSgpRi8/maxresdefault.jpg"
            class="card-img-top"
            alt="cinema"  />
         
          <div class="card-body">
            <h5 class="card-title">Entradas al parque de atracciones</h5>
            <p class="card-text">Entradas al parque de atracciones</p>
          </div>
        </div>

        <div class="card">
          <img
            src="https://i.ytimg.com/vi/tKa3mSgpRi8/maxresdefault.jpg"
            class="card-img-top"
            alt="cinema"  />
         
          <div class="card-body">
            <h5 class="card-title">Entradas al parque de atracciones</h5>
            <p class="card-text">Entradas al parque de atracciones</p>
          </div>
        </div>

        <div class="card">
          <img
            src="https://i.ytimg.com/vi/tKa3mSgpRi8/maxresdefault.jpg"
            class="card-img-top"
            alt="cinema"  />
         
          <div class="card-body">
            <h5 class="card-title">Entradas al parque de atracciones</h5>
            <p class="card-text">Entradas al parque de atracciones</p>
          </div>
        </div>

        <div class="card">
          <img
            src="https://anpeandalucia.es/imageFile.php?link=portfolio/1/aqualand_t1559905111a.jpg"
            class="card-img-top"
            alt="Aqualand"
          />

          <div class="card-body">
            <h5 class="card-title">Añade una nueva recompensa</h5>

            <h1 class="iconAdd">
              <IoAddCircleOutline />{""}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListRewards;
