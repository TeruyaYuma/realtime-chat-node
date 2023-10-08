const rootActions = ({ rootUseCase, rootResponder }) => {
  return (req, res, next) => {
    const status = rootUseCase()
    rootResponder(res, status)
  }
}

export default rootActions