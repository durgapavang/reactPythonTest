import * as Yup from "yup";

export const formSchema = Yup.object({
  prompt: Yup.string()
    .required("Prompt is required")
    .min(3, "Minimum 3 characters"),

  targetLanguage: Yup.string()
    .required("Select a language")
});