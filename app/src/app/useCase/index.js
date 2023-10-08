import rootUseCase from './root/index.js'
import membersUseCase from './members/index.js'

const useCase = {
  rootUseCase: rootUseCase(),
  membersUseCase: membersUseCase()
}

export default useCase