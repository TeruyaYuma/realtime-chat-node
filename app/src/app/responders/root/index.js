const rootResponder = () => {
  return (res, status) => {
    res.status(200).json({ status: status })
  }
}

export default rootResponder