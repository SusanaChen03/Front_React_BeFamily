import './CreateReward.css';


const CreateReward = () => {
    return(
        <div>
        <div>
          <h1>Creación de una recompensa</h1>
  
          <form>
            <div>
              <label htmlFor="rewardUrl">URL de la recompensa</label>
              <input type="text" id="rewardUrl" name="rewardUrl" placeholder='Buscar una imagen para tu recompensa'/>
              <div>
           
              </div>
              <label htmlFor="rewardName">Nombre de la recompensa</label>
              <input type="text" id="rewardName" name="rewardName" />
  
              <label htmlFor="description">Descripción</label>
              <input type="text" id="description" name="description" />
            </div>
            <input type="submit" value="CREAR RECOMPENSA" className="sendButton" />
          </form>
        </div>
      </div>
    )
};


export default CreateReward;