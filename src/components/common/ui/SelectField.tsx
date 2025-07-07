import type { Path, UseFormRegister, FieldValues } from "react-hook-form";

interface Option {
    id: number;
    name: string;
}

interface SelectFieldProps<T extends FieldValues> {
    options: Option[],
    label: string,
    name: Path<T>
    register: UseFormRegister<T>
    error?: string
}

const SelectField = <T extends FieldValues>({options, label, name, register, error}: SelectFieldProps<T>) => {
    return (
        <>
            <div>
                <label htmlFor={name} className="text-sm font-semibold">
                    {label} <span className="text-red-500">*</span>
                </label>
            </div>
            <div>
                <select
                    id={name}
                    {...register(name)}
                    className={`w-full p-2 border ${error? 'border-2 border-red-500' : 'border-[var(--black)]'}`}
                >
                    <option value="">Select...</option>
                    {
                        options.map(({id, name}) => (
                            <option key={id} value={name}>{name}</option>
                        ))
                    }
                </select>
                {error && <span className="text-sm text-red-500 font-medium">{error}</span>}
            </div>
        </>
    )
}

export default SelectField;