import type { InjectionKey } from "vue";
import type { RuleItem, ValidateError, ValidateFieldsError } from 'async-validator'

export interface FormItemProps {
    label: string;
    prop?: string;
}

export interface FormItemRule extends RuleItem {
    trigger?: string;
}

export type FormRules = Record<string, FormItemRule[]>

export interface FormProps {
    model: Record<string, any>;
    rules: FormRules;
}

export interface FormContext extends FormProps {
    addFiled: (filed: FormItemContext) => void;
    removeFiled: (filed: FormItemContext) => void;
}

export interface FormValidateFailure {
    errors: ValidateError[] | null;
    fileds: ValidateFieldsError;
}

export interface FormItemContext {
    prop: string;
    validate: (trigger?: string) => Promise<any>;
    clearValidate: () => void;
    resetFileds: () => void;
}

export interface ValidateStatusProp {
    state: 'init' | 'success' | 'error';
    errorMsg: string;
    loading: boolean;
}

export interface FormInstance {
    validate: () => Promise<any>;
    clearValidate: () => void;
    resetFileds: () => void;
}

export interface FormItemInstance {
    validateStatus: ValidateStatusProp;
    validate: (trigger?: string) => Promise<any>;
    clearValidate: () => void;
    resetFileds: () => void;
}

export const formContextKey: InjectionKey<FormContext> = Symbol('formContextKey')
export const formItemContextKey: InjectionKey<FormItemContext> = Symbol('formItemContextKey')