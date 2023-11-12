import {
    AccountIcon,
    BackIcon,
    BackIconContainer,
    LogoutIcon,
    StopwatchCardContainer,
    StopwatchCardText,
} from "./styles";

interface StopwatchCardProps {
    useLogoutIcon?: boolean
    backOnClick?: () => void;
}

const StopwatchCard = ({backOnClick, useLogoutIcon = false}: StopwatchCardProps) => {
    return (
        <>
            <StopwatchCardContainer>
                <BackIconContainer onClick={backOnClick}>
                    {
                        useLogoutIcon
                            ? <LogoutIcon/>
                            : <BackIcon/>
                    }
                </BackIconContainer>
                <StopwatchCardText>Cronômetro</StopwatchCardText>
                <AccountIcon/>
            </StopwatchCardContainer>
        </>
    );
};

export default StopwatchCard;
