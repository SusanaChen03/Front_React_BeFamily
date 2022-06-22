import {AiFillEdit} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import './DetailMember.css';


const DetailMember = (objMember) => {

  const navigate = useNavigate();

  const buttonHandlerUpdate = () =>{
   
    navigate('/addMember/'+ objMember.member.id);

  }


  return (
    <tr>
      <td></td>
      <td>{objMember.member.name}</td>
      <td>{objMember.member.birthday}</td>
      <td>{objMember.member.email}</td>
      <td onClick={buttonHandlerUpdate}><span  className="editIcon">{<AiFillEdit/>}</span></td>
    </tr>
  );
};

export default DetailMember;
