/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Tenants } from "../models";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type TenantsUpdateFormInputValues = {
    name?: string;
};
export declare type TenantsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TenantsUpdateFormOverridesProps = {
    TenantsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TenantsUpdateFormProps = React.PropsWithChildren<{
    overrides?: TenantsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    tenants?: Tenants;
    onSubmit?: (fields: TenantsUpdateFormInputValues) => TenantsUpdateFormInputValues;
    onSuccess?: (fields: TenantsUpdateFormInputValues) => void;
    onError?: (fields: TenantsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TenantsUpdateFormInputValues) => TenantsUpdateFormInputValues;
    onValidate?: TenantsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TenantsUpdateForm(props: TenantsUpdateFormProps): React.ReactElement;
