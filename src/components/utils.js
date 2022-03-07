export const updateState = (e, state, setState) => {
  const { placeholder, name, value } = e.target;
  let keySetter = placeholder || name;
  if (keySetter === 'editCount' || keySetter === 'editDuration') {
    setState({...state, [keySetter]: Number(value)})
    return;
  }
  setState({...state, [keySetter]: value})
}