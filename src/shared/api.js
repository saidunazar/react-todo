export const getTasks = async (data) => {
  return await fetch("data.json").then((data) => data.json());
};

export const addTask = async (data) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  await fetch("https://httpbin.org/post", requestOptions).then((response) =>
    response.json()
  );
};

export const updateTask = async (data) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  await fetch("https://httpbin.org/post", requestOptions).then((response) =>
    response.json()
  );
};
