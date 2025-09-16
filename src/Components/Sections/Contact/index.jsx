import { Formik } from "formik";
import * as Yup from "yup";
import ContactInfo from "./Components/ContactInfo";
import FormikField from "./Components/FormikField";

const fields = [
    {
        id: "firstName",
        name: "first_name",
        type: "text",
        placeholder: "First Name",
        autoComplete: "off"
    },
    {
        id: "lastName",
        name: "last_name",
        type: "text",
        placeholder: "Last Name",
        autoComplete: "off"
    },
    {
        id: "email",
        name: "email",
        type: "email",
        placeholder: "Email address",
        autoComplete: "off"
    },
    {
        id: "phone",
        name: "phone",
        type: "tel",
        placeholder: "Phone number",
        autoComplete: "off"
    }
];
const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: ""
};
const validationSchema = Yup.object({
    first_name: Yup.string().min(2, "Must be 2 characters or more").max(20, "Must be 20 characters or less").required("First Name is Required"),
    last_name: Yup.string().min(2, "Must be 2 characters or more").max(20, "Must be 20 characters or less"),
    email: Yup.string().email("Invalid email address").required("Email Address is Required"),
    phone: Yup.string().required("Phone Number is Required")
});

function Contact() {
    return (
        <section className="contact-section py-10" id="contact">
            <div className="container">
                {/* Content Wrapper */}
                <div className="content-wrapper p-5 md:p-10 rounded-xl border border-gray-soft dark:border-purple-dark bg-bg-light dark:bg-dark-surface transition grid lg:grid-cols-2 gap-10">
                    {/* Formik Wrapper */}
                    <div className="formik-wrapper">
                        {/* Header */}
                        <div className="form-header mb-10 max-lg:text-center">
                            <h2 className="font-semibold text-4xl mb-3 transition">Let’s work together!</h2>
                            <p className="transition">I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                        </div>
                        {/* Formik */}
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values, { setSubmitting }) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }, 400);
                            }}
                        >
                            {({
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting
                            }) => (
                                <form onSubmit={handleSubmit}>
                                    {/* Fields Wrapper */}
                                    <div className="fields-wrapper space-y-4 mb-4">
                                        {
                                            fields.map((field, index) => (<FormikField
                                                key={index}
                                                {...{
                                                    ...field,
                                                    onChange: handleChange,
                                                    onBlur: handleBlur
                                                }}
                                            />))
                                        }
                                    </div>
                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        title="Send"
                                        disabled={isSubmitting}
                                        aria-label="Send Message"
                                        className="py-2 xl:py-4 px-4 xl:px-6 rounded-full bg-primary-purple text-white"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </Formik>
                    </div>
                    {/* Contact Info */}
                    <ContactInfo />
                </div>
            </div>
        </section>
    )
}

export default Contact;