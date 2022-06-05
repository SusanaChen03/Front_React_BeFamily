import './CreateChallenge.css';

const CreateChallenge = () => {
    return(
        <div>
            <div>
                <h1>Creación de un nuevo reto</h1>

                <form>
                    <div>

                    <label htmlFor="whoMember"> ¿Quienes van a participar?</label>

                    <div>
                    <button type='submit' className='names' >name1</button>
                    <button type='submit' className='names'>name2</button>
                    <button type='submit' className='names'>name3</button>
                    </div>
                  
                    <label htmlFor="challengeName">Nombre del reto</label>
                    <input type="text" id="challengeName" name="challengeName" />
                   
                    <label htmlFor="repetition">Duración</label>
                    <input type="text" id="repetition" name="repetition" placeholder="numero de repeticiones"></input>

                    <label htmlFor="reward">Recompensa</label>
                    <input type="text" id="reward" name="reward"></input>
                    </div>

                    <input type="submit" value="CREAR RETO" className="sendButton"/>


                </form>

            </div>
            

        </div>
    )
};

export default CreateChallenge;