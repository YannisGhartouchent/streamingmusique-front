import {ButtonProps, InputBaseProps} from "@mantine/core"

type VeHandlerComponentType = () => void | undefined | Promise<void>

type ButtonPropsType = ButtonProps & {onClickButton?: VeHandlerComponentType}

type SvgPropsType = {
    w?: string
    h?: string
}

type InputPropsType = InputBaseProps & {placeholder?: string}

export type ApoPropsType = ButtonPropsType & SvgPropsType & InputPropsType
