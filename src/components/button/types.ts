export interface IButton {
    variant?: string; 
    label: string; 
    onClick?: () => void;
    type?: string;
}

export interface IButtonStyled {
    variant: string; 
}
