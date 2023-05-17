import { Alert } from "react-bootstrap"

const AlertDanger = ({ message }: { message: string }) => {
  return (
    <Alert key="danger" variant="danger">
      {message}
    </Alert>
  )
}

export default AlertDanger
