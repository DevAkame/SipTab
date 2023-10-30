/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { LogoSipTab32Props } from "./LogoSipTab32";
import { ButtonProps, FlexProps, HeadingProps, IconProps, SelectFieldProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NavBarHeaderOverridesProps = {
    NavBarHeader?: PrimitiveOverrideProps<ViewProps>;
    "Frame 454"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 450"?: PrimitiveOverrideProps<FlexProps>;
    LogoSipTab32?: LogoSipTab32Props;
    SelectField?: PrimitiveOverrideProps<SelectFieldProps>;
    NavGroupSelect?: PrimitiveOverrideProps<SelectFieldProps>;
    "Frame 453"?: PrimitiveOverrideProps<FlexProps>;
    "\uD83D\uDD12Icon"?: PrimitiveOverrideProps<IconProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NavBarHeaderProps = React.PropsWithChildren<Partial<ViewProps> & {
    usermails?: React.ReactNode;
    tenants?: any;
} & {
    overrides?: NavBarHeaderOverridesProps | undefined | null;
}>;
export default function NavBarHeader(props: NavBarHeaderProps): React.ReactElement;