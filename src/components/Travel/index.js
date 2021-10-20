const Travel = props => {
  const {list} = props
  const {imageUrl, name, description} = list

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <name>{name}</name>
      <para>{description}</para>
    </li>
  )
}

export default Travel
