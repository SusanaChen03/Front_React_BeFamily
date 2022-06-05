import './ListChallengers.css';
import {IoAddCircleOutline } from 'react-icons/io5'

const ListChallengers = () =>{
    return(
        <div>
            <h1>Retos de la Familia </h1>

            <div className='profileStyles'>
                <div class="card">
                    <img src="https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2018/05/New-Project.png" 
                    class="card-img-top" alt="challengeImage" />

                    <div class="card-body">
                        <h5 class="card-title">Lavar los platos de la cena</h5>
                        <p class="card-text">21 repeticiones</p>
                        <p class="card-text">miembro 1 y 2</p>
                        <a href="#" class="btn btn-primary">Ir a Reto</a>
                    </div>
                </div>
                
                 
                <div class="card">
                    <img src="https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2018/05/New-Project.png" 

                    class="card-img-top" alt="challengeImage" />

                    <div class="card-body">
                        <h5 class="card-title">Vacaciones de Verano</h5>
                        <p class="card-text">2 dias en el parque Acuatico full equip</p>
                        <p class="card-text">Una mes haciendo la cama</p>
                        <a href="#" class="btn btn-primary">Ir a Reto</a>
                    </div>
                </div>

                <div class="card">
                <img src="https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2018/05/New-Project.png" 

                    class="card-img-top" alt="challengeImage" />

                    <div class="card-body">
                        <h5 class="card-title">Vacaciones de Verano</h5>
                        <p class="card-text">2 dias en el parque Acuatico full equip</p>
                        <p class="card-text">Una mes haciendo la cama</p>
                        <a href="#" class="btn btn-primary">Ir a Reto</a>
                    </div>
                </div>

                
                <div class="card">
                <img src="https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2018/05/New-Project.png" 

                    class="card-img-top" alt="challengeImage" />

                    <div class="card-body">
                        <h5 class="card-title">Vacaciones de Verano</h5>
                        <p class="card-text">2 dias en el parque Acuatico full equip</p>
                        <p class="card-text">Una mes haciendo la cama</p>
                        <a href="#" class="btn btn-primary">Ir a Reto</a>
                    </div>
                </div>

                
                <div class="card">
                <img src="https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2018/05/New-Project.png" 

                    class="card-img-top" alt="challengeImage" />

                    <div class="card-body">
                        <h5 class="card-title">Vacaciones de Verano</h5>
                        <p class="card-text">2 dias en el parque Acuatico full equipeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</p>
                        <p class="card-text">Una mes haciendo la cama</p>
                        <a href="#" class="btn btn-primary">Ir a Reto</a>
                    </div>
                </div>


                <div class="card">                  
                  <img src="https://blogs.iadb.org/conocimiento-abierto/wp-content/uploads/sites/10/2018/05/New-Project.png" 

                    class="card-img-top" alt="challengeImage" />

                    <div class="card-body">
                        <h5 class="card-title">Añade un nuevo Reto</h5>
                       
                    <h1 class="iconAdd"><IoAddCircleOutline/> </h1> 
                    </div>
                </div>
                
            </div>
        </div>
    )
};


export default ListChallengers;