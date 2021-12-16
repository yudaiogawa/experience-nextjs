import { sqlExecuter } from "../../modules/database"

const select_all_user = "select * from users"

const foo = async (req: any, res: any) => {
  const data = await sqlExecuter.any(select_all_user);
  res.status(200).json({data});
}

export default foo
