import { useState } from "react"
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/esm/Form";
import Modal from "react-bootstrap/esm/Modal";

type myModalProps ={
    show: boolean;
    onHide: () => void;
    changeButtonColor: (color:string) => void;

}


const ModalColorPick = ({show, onHide, changeButtonColor}: myModalProps) => {

  //Color inicial  
  const [selectedColor, setSelectedColor] = useState('#FFF');

  //Recuperamos el valor obtenido del cambio que realizo el usuario  
  const handleColorPickerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value);
  }  

  //Se actualiza el color al hacer click en 'aceptar' y se cierra el modal
  const handleOnClickAccept = () => {
    changeButtonColor(selectedColor);
    onHide();
  }
  return (
    <Modal show={show} onHide={onHide} centered backdrop='static'>
        <Modal.Header closeButton>
            <Modal.Title> Cambiar color</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* Color picker */}
            <Form.Label htmlFor="exampleColorInput"> Elegi un color</Form.Label>
            <Form.Control
            type='color'
            id='exampleColorInput'
            defaultValue='#FFF'
            title='Elegi un color'
            onChange={handleColorPickerChange}/>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>Cancelar</Button>
            <Button variant="primary" onClick={handleOnClickAccept}>Aceptar</Button>
        </Modal.Footer>
    </Modal>
  )
}

export default ModalColorPick