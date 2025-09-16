import { ErrorMessage } from "formik";

function FormikField({ ...field }) {
    return (
        <div className="field-group">
            <input
                {...field}
                className={`p-3 rounded-md w-full bg-bg-light dark:bg-dark-surface border border-gray-soft dark:border-purple-dark transition dark:focus:border-primary-purple`}
            />
            {/* Error Message */}
            <ErrorMessage name={field.name} className="text-red-500 mt-2" component={"div"} />
        </div>
    )
}

export default FormikField;