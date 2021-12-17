
// import { sqlExecuter } from "../../modules/database"

// const select_all_user = "select * from users"

// const foo = async (req: any, res: any) => {
//   const data = await sqlExecuter.any(select_all_user);
//   res.status(200).json({data});
// }

const data = [
  { name: "alice", email: "alice@example.com" },
  { name: "bob",   email: "bob@example.com" },
  { name: "eve",   email: "eve@example.com" }
]

const foo = async (req: any, res: any) => {
  res.status(200).json({data})
}

export default foo
