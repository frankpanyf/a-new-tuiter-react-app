function House() {
  const house = {
    bedrooms: 4,
    bathrooms: 2.5,
    squareFeet: 2000,
    address: {
      street: "Via Roma",
      city: "Roma",
      state: "RM",
      zip: "00100",
      country: "Italy",
    },
    owners: ["Alice", "Bob"],
  };
  return (
      <div>
        <h2>House</h2>
        <h3>Bedrooms</h3>
        <p>{house.bedrooms}</p>
        <h3>Bathrooms</h3>
        <p>{house.bathrooms}</p>
        <h3>Square Feet</h3>
        <p>{house.squareFeet}</p>
        <h3>Address</h3>
        <p>{house.address.street}, {house.address.city}, {house.address.state}, {house.address.zip}, {house.address.country}</p>
        <h3>Owners</h3>
        <p>{house.owners.join(', ')}</p>
        <h3>Data</h3>
        <pre>{JSON.stringify(house, null, 2)}</pre>
      </div>
  );
}

export default House;
