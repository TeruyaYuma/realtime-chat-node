const membersActions = ({ membersUseCase, membersResponder }) => {
  return async (req, res, next) => {
    const status = await membersUseCase()
    membersResponder(res, status)
  }
}

export default membersActions