import rootResponder from './root/index.js'
import membersResponder from './members/index.js'

const responders = {
  rootResponder: rootResponder(),
  membersResponder: membersResponder()
}

export default responders