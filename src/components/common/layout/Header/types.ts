export type SetBoolean = React.Dispatch<React.SetStateAction<boolean>>;

export interface NavBarProps {
    isNavBarOpen: boolean;
    setIsNavBarOpen: SetBoolean;
}