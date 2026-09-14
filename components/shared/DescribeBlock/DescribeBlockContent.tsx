import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}


const DescribeBlockContent = ({ children }: Props) => {
  return (
    <div className="text-default-text text-lg">
      { children }
    </div>
  )
}

export default DescribeBlockContent;