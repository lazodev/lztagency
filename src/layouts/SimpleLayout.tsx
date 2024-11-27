import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

const SimpleLayout = ({ children }: Props) => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <main className="flex-grow">
                {children}
            </main>
        </div>
    );
};

export default SimpleLayout;