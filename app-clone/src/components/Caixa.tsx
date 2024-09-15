interface CaixaProps {
    children: React.ReactNode;
    className?: string;
}

const Caixa: React.FC<CaixaProps> = ({children, className}) => {
    return(
        <div>
            {children}
        </div>
    )
}

export default Caixa;