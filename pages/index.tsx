import { NextPage } from 'next'
import { getRequestInstance } from "../modules/request";

const Page: NextPage = ({ data }) => {
   return data.map(
      (d: any, i: number) => <h3>{i}: [Name] {d.name} [E-Mail] {d.email}</h3>
   )
}

Page.getInitialProps = async (ctx: any) => {
  const request = getRequestInstance(Boolean(ctx.req));
  const res = await request.get("data").then(res => res);
  return res.data;
}

export default Page
