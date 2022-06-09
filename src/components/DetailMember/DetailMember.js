import "./DetailMember.css";

const DetailMember = (objMember) => {
  return (
    <tr>
      <td>#</td>
      <td>{objMember.member.name}</td>
      <td>{objMember.member.birthday}</td>
      <td>{objMember.member.email}</td>
    </tr>
  );
};

export default DetailMember;
