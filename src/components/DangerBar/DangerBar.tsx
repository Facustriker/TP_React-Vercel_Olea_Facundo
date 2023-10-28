import { ProgressBar } from "react-bootstrap";

//Especifico cuales son los props y tipo de dato que el componente hijo puede recibir
type DangerBarProps = {
    value: number;
};

//El componente hijo tiene argumentos del tipo 'DangerBarProps'
const DangerBar = ({value}: DangerBarProps) => {

    //Dependiendo el valor del componente padre, muestra algo distinto
    const getVariant = (value:number) => {

        if(value < 30){
            return 'sucess';
        }else if(value < 60){
            return 'warning';
        }else{
            return 'danger';
        }
    };

    return (
        <ProgressBar animated now={value} variant={getVariant(value)}/>
    )

}

export default DangerBar