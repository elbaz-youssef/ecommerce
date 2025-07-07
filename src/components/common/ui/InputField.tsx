import type {UseFormRegister, Path, FieldValues} from "react-hook-form";

interface InputFieldProps<T extends FieldValues> {
    label: string;
    name: Path<T>;
    type?: string;
    isOptional?: boolean;
    register: UseFormRegister<T>;
    error?: string;
    onInput?: React.FormEventHandler<HTMLInputElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

const InputField = <T extends FieldValues>({label, name, type, isOptional, register, error, onInput, onKeyDown}: InputFieldProps<T>) => {
    return (
        <div className="flex flex-col">
             <div>
                <label htmlFor={name} className="text-sm font-semibold">
                    {label} {!isOptional && <span className="text-red-500">*</span>}
                </label>
            </div>
            <div>
                <input
                    id={name}
                    type={type || "text"}
                    {...register(name, {
                        setValueAs: (value) => typeof value === "string" ? value.trim() : value
                    })}
                    onInput={onInput}
                    onKeyDown={onKeyDown}
                    className={`w-full p-2 border ${error? 'border-2 border-red-500' : 'border-[var(--black)]'}`}
                />
                {error && <span className="text-sm text-red-500 font-medium">{error}</span>}
            </div>
        </div>
    )
}

export default InputField;