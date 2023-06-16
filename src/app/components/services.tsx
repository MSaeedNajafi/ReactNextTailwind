/* eslint-disable @next/next/no-img-element */
const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Service 1",
      icon: "https://www.pngitem.com/pimgs/m/391-3918613_personal-service-platform-person-icon-circle-png-transparent.png",
    },
    {
      id: 2,
      title: "Service 2",
      icon: "https://cdn-icons-png.flaticon.com/512/751/751432.png",
    },
    {
      id: 3,
      title: "Service 3",
      icon: "https://p.kindpng.com/picc/s/499-4992277_customer-service-png-icon-free-download-customer-service.png",
    },
    {
      id: 4,
      title: "Service 4",
      icon: "https://cdn-icons-png.flaticon.com/512/6500/6500210.png",
    },
    {
      id: 5,
      title: "Service 5",
      icon: "https://cdn-icons-png.flaticon.com/512/1122/1122628.png",
    },
    {
      id: 6,
      title: "Service 6",
      icon: "https://cdn-icons-png.flaticon.com/512/953/953851.png",
    },
    {
      id: 7,
      title: "Service 7",
      icon: "https://cdn-icons-png.flaticon.com/512/4245/4245291.png",
    },
    {
      id: 8,
      title: "Service 8",
      icon: "https://cdn-icons-png.flaticon.com/512/3885/3885841.png",
    },
    {
      id: 9,
      title: "Service 9",
      icon: "https://cdn-icons-png.flaticon.com/512/6526/6526571.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h2 className="text-2xl font-semibold mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="text-center p-4 border-solid border-2 border-current rounded-lg  transition ease-in-out  hover:scale-125 hover:bg-green-100 "
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-lg sm:text-base font-semibold mb-2">
              {service.title}
            </h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              auctor leo vitae vestibulum. Mauris eu lacinia metus. Donec id
              risus et tellus rutrum dignissim.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
