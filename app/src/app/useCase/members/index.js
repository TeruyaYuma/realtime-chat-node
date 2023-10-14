import pkg from "pg"
const { Client } = pkg

/**
 * TODO：modelとrepositoryは切り出す
 */

// model
const client = new Client({
  user: "postgres",
  host: "my_db",
  database: "postgres",
  password: "postgres",
  port: 5432
});

//repository
const getMembers = async () => {
  await client.connect().catch(err => {
    console.log('err:', err)
  })
  
  const query = { text: "select * from members", values: [] };

  const response = await client.query(query)

  return response.rows
}

// useCase
const membersUseCase = () => {
  return async () => {
   const response = await getMembers()
   return response
  }
}

export default membersUseCase