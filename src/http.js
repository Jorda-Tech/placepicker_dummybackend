export const fetchAvailablePlaces = async () => {
  const response = await fetch("http://localhost:3000/places");
  const responseData = await response.json();
  if (!response.ok) {
    throw new Error("Error Occured");
  }
  return responseData.places;
};

export const fetchUserPlaces = async () => {
  const response = await fetch("http://localhost:3000/user-places");
  const responseData = await response.json();
  if (!response.ok) {
    throw new Error("Error Occured while fetching user places");
  }
  return responseData.places;
};

export const updateUserPlaces = async (places) => {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const responseData = await response.json();

  if (!response.ok) {
    throw new Error("Error occured while updating user places");
  }

  return responseData.message;
};
