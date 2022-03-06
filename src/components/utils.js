export const updateState = (e, state, setState) => {
  const { placeholder, name, value } = e.target;
  let keySetter = placeholder || name;
  console.log(keySetter, value)
  setState({...state, [keySetter]: value})
}