import './DetailProfile.css';

const DetailProfile = (objUser) =>{
    return(

        <div className='contentProfile'>
        <div className="contentUser">
          <label className="key">NOMBRE:</label>
          <label className="value"> {objUser.user.name} </label>
        </div>

        <div className="contentUser">
          <label className="key">EMAIL:</label>
          <label className="value"> {objUser.user.email} </label>
        </div>

        <div className="contentUser">
          <label className="key">Fecha de nacimiento:</label>
          <label className="value"> {objUser.user.birthday} </label>
        </div>

        <div className="contentUser">
          <label className="key">NOMBRE DE LA FAMILIA:</label>
          <label className="value"> {objUser.user.familyName} </label>
        </div>

        <div className="contentUser">
          <label className="key">CONTRASEÑA:</label>
          <label className="value"> *****</label>
        </div>
      </div>
    )
};


export default DetailProfile;