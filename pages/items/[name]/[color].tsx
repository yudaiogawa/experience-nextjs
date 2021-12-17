
import { useRouter } from "next/router";

const Color = () => {
  const {name, color} = useRouter().query;
  return <h1>{name} の {color} です</h1>
}

export default Color
