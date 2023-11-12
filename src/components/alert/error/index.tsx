import {Alert, AlertIcon} from "@chakra-ui/react";

interface ErrorAlertProps {
    errorMessage: string | undefined
}

const ErrorAlert = ({errorMessage}: ErrorAlertProps) => {
    return <Alert
        colorScheme={"whiteAlpha"}
        fontSize={12}
        status="error">
        <AlertIcon/>{errorMessage}
    </Alert>
}

export default ErrorAlert;