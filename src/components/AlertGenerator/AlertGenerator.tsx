import {Alert, AlertHeading } from 'react-bootstrap'

type AlertGeneratorProps = {
    message:String;
}

const AlertGenerator = ({message}: AlertGeneratorProps) => {
  return (
    <Alert variant='success' className='mt-2 w-25'>
        <AlertHeading> Mensaje recibido</AlertHeading>
        <p>
            {message}
        </p>
    </Alert>
  )
}

export default AlertGenerator