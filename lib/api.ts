export async function testVectorAPI() {
  const response = await fetch("/api/vectorize", {
    method: "POST",
  });

  return response.json();
}