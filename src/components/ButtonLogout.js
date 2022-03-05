import { useNavigate } from "react-router-dom";

const ButtonLogout = ({ setToken, setUser }) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    setToken('');
    setUser({});
    localStorage.removeItem('token');
    navigate('/routines')
  }
  
  return (
    <button onClick={handleClick}>Logout</button>
  )
}

export default ButtonLogout;