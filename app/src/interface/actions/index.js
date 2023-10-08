import UseCase from '../../app/useCase/index.js'
import Responder from '../../app/responders/index.js'
import rootActions from "./root/index.js"
import membersActions from "./members/index.js"

const actions = {
  rootActions: rootActions({ ...UseCase, ...Responder }),
  membersActions: membersActions({...UseCase, ...Responder})
}

export default actions