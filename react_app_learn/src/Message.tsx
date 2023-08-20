function Message() {
  let display_name = 'Axel Natusch';
  if (display_name !== undefined)
    return <h1>Hello World {display_name}</h1>;
  return <h1>Hello World</h1>;
}

export default Message;
