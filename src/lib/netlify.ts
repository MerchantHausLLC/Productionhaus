export const formDataToQueryString = (formData: FormData) => {
  const params = new URLSearchParams();

  formData.forEach((value, key) => {
    params.append(key, typeof value === "string" ? value : value.toString());
  });

  return params.toString();
};
