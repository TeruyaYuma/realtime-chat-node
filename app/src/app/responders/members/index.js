const membersResponder = () => {
  return (res, status) => {
    res.status(200).json({ status: status })
  }
}

export default membersResponder