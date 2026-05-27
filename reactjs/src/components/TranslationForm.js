import React, { useContext } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { formSchema } from "../validation/schema";
import { AppContext } from "../context/AppContext";

const TranslationForm = () => {
  const { addRecord } = useContext(AppContext);

  const formik = useFormik({
    initialValues: {
      prompt: "",
      targetLanguage: ""
    },

    validationSchema: formSchema,

    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/prompt",
          values
        );
        console.log(response.data)

        addRecord({
          request: values,
          response: response.data
        });

        resetForm();

      } catch (error) {
        console.error(error);
      }
    }
  });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow">

            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">Translation Form</h3>
            </div>

            <div className="card-body">

              <form onSubmit={formik.handleSubmit}>

                {/* Prompt */}

                <div className="mb-3">
                  <label className="form-label">
                    Prompt
                  </label>

                  <input
                    type="text"
                    name="prompt"
                    className={`form-control ${
                      formik.touched.prompt &&
                      formik.errors.prompt
                        ? "is-invalid"
                        : ""
                    }`}
                    value={formik.values.prompt}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Prompt is required..."
                  />

                  {formik.touched.prompt &&
                    formik.errors.prompt && (
                      <div className="invalid-feedback">
                        {formik.errors.prompt}
                      </div>
                  )}
                </div>

                {/* Language Dropdown */}

                <div className="mb-3">
                  <label className="form-label">
                    Target Language
                  </label>

                  <select
                    name="targetLanguage"
                    className={`form-select ${
                      formik.touched.targetLanguage &&
                      formik.errors.targetLanguage
                        ? "is-invalid"
                        : ""
                    }`}
                    value={formik.values.targetLanguage}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="">
                      Select Language
                    </option>
                    <option value="en">
                      English
                    </option>
                    <option value="es">
                      Spanish
                    </option>
                    <option value="fr">
                      French
                    </option>
                  </select>

                  {formik.touched.targetLanguage &&
                    formik.errors.targetLanguage && (
                      <div className="invalid-feedback">
                        {formik.errors.targetLanguage}
                      </div>
                  )}
                </div>

                {/* Submit Button */}

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={
                    !formik.isValid ||
                    !formik.dirty
                  }
                >
                  Submit
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default TranslationForm;