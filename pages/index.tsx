
// import { NextPage } from 'next'
// import { getRequestInstance } from "../modules/request";

import Link from 'next/link';

const items = [
  { name: 'foo' },
  { name: 'bar' },
  { name: 'baz' },
  { name: 'qux' },
]

const Page = () => {
  return (
    <>
      <h1>Experience Next.js</h1>

      <h2>Items...</h2>
      <ul>
        {items.map((item:{name:string}, i: number) => {
          return (
            <li key={i}>
              <Link href={`/items/${item.name}`}><a>{item.name}</a></Link>
            </li>
          )
        })}
      </ul>

      <h2>More...</h2>
      <ul>
         <li><Link href='./about'><a>About</a></Link></li>
      </ul>
    </>
  )
}

// const Page: NextPage = ({ data }) => {
//   return data.map(
//    (d: any, i: number) => <h3 key={i}>[Name] {d.name} [E-Mail] {d.email}</h3>
//   )
// }

// Page.getInitialProps = async ctx => {
//   const req = getRequestInstance(Boolean(ctx.req));
//   const res = await req.get("data").then(res => res);
//   return res.data;
// }

export default Page
