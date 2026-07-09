export async function vectorize(file: File) {
  const formData = new FormData();

  formData.append("file", file);

  const response = await fetch("/api/vectorize", {
    method: "POST",
    body: formData,
  });

  const result = await response.json();

  return result;
}