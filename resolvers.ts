import { Users } from './data'

const resolvers = {
  users: async (_) => {
    return Users;
  },
  user: async ({ id }, _) => {
    return Users.find((user) => user.id == id)
  }
};

export default resolvers
