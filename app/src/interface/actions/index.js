import UseCase from '../../app/useCase/index.js'
import Responder from '../../app/responders/index.js'
import rootActions from "./root/index.js";

const actions = {
  rootActions: rootActions({ ...UseCase, ...Responder })
}

export default actions