/* eslint-disable @next/next/no-img-element */
const ClientList = () => {
  const clients = [
    {
      id: 1,
      name: "Client A",
      image:
        "https://static.vecteezy.com/system/resources/previews/008/214/517/original/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg",
    },
    {
      id: 2,
      name: "Client B",
      image:
        "https://static.vecteezy.com/system/resources/previews/008/214/517/original/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg",
    },
    {
      id: 3,
      name: "Client C",
      image:
        "https://static.vecteezy.com/system/resources/previews/008/214/517/original/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg",
    },
    {
      id: 4,
      name: "Client D",
      image:
        "https://static.vecteezy.com/system/resources/previews/008/214/517/original/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg",
    },
    {
      id: 5,
      name: "Client E",
      image:
        "https://static.vecteezy.com/system/resources/previews/008/214/517/original/abstract-geometric-logo-or-infinity-line-logo-for-your-company-free-vector.jpg",
    },
  ];
  // text-gray-600 mb-4
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <p className="text-2xl font-semibold mb-8">Introducing Our Clients</p>
      <div className="flex flex-wrap justify-center items-center">
        {clients.map((client) => (
          <div
            key={client.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 flex flex-col items-center transition ease-in-out hover:scale-125 hover:bg-green-100"
          >
            <p className="text-lg font-semibold mb-2">{client.name}</p>
            <img
              src={client.image}
              alt={client.name}
              className="w-24 h-24 object-contain rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientList;
