import { ReactNode } from "react";
import HeadTitle from "../HeadTitle";

interface Props {
  children: ReactNode;
}


const DescribeBlockContent = ({ children }: Props) => {
  return (
    <HeadTitle className="mb-3">
      { children }
    </HeadTitle>
  )
}

export default DescribeBlockContent;