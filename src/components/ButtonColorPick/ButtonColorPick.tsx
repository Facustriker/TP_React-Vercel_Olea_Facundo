import { useState } from "react";
import ModalColorPick from "../ModalColorPick/ModalColorPick";
import { Button } from "react-bootstrap";


const ButtonColorPick = () => {

  //Color del boton  
  const [buttonColor, setButtonColor] = useState('#3d7c40');

  //Estado inicial del modal
  const [showModal, setShowModal] = useState(false);
    
  //Permite cambiar el color al boton
  const changeButtonColor = (color: string) => {
    setButtonColor(color);
  };

  //Muestra el modal al hacer click en el boton
  const showModalOnClick = () => {
    setShowModal(true);
  };

  return (
    <div className="m-3">
        <h2>Ejemplo 3</h2>

        {/* Componente padre */}
        <Button variant='primary' style={{backgroundColor: buttonColor}} onClick={showModalOnClick}> Hazme click</Button>

        {/* Componente hijo */}
        {showModal && <ModalColorPick
        show={showModal}
        onHide={() => setShowModal(false)}
        changeButtonColor={changeButtonColor}/>}
    </div>
  )
}

export default ButtonColorPick