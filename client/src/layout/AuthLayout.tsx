import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};
const AuthLayout = ({ children, ...props }: Props) => {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full flex flex-col gap-10 justify-center items-center bg-customBlack py-28 px-4">
        <h1 className="text-customWhite2 text-4xl font-bold">
          <span className="text-customRed3">TOP</span>HAT EMS
        </h1>
        {children}
      </div>
    </div>
  );
};
export default AuthLayout;
