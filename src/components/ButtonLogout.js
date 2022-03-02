import { useNavigate } from "react-router-dom";

const ButtonLogout = ({ setToken }) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    setToken('');
    localStorage.removeItem('token');
    navigate('/routines')
  }
  
  return (
    <button onClick={handleClick}>Logout</button>
  )
}

export default ButtonLogout;