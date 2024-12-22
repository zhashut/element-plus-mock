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
    addFileds: (filed: FormItemContext) => void;
    removeFileds: (filed: FormItemContext) => void;
}

export interface FormValidateFailure {
    errors: ValidateError[] | null;
    fileds: ValidateFieldsError;
}

export interface FormItemContext {
    prop: string;
    validate: (trigger?: string) => any;
}

export const formContextKey: InjectionKey<FormContext> = Symbol('formContextKey')
export const formItemContextKey: InjectionKey<FormItemContext> = Symbol('formItemContextKey')