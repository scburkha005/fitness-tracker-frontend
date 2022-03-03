export const updateState = (e, state, setState) => {
  const { placeholder, value } = e.target;
  setState({...state, [placeholder]: value})
}