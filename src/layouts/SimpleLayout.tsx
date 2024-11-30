import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const SimpleLayout = ({ children }: Props) => {
    return (
        <div className="justify-center items-center">
            <main className="flex-grow">
                {children}
            </main>
        </div>
    );
};

export default SimpleLayout;