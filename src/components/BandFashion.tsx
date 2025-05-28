import {
  Versace,
  Zara,
  Gucci,
  Prada,
  Calvin,
} from "../assets/images/bands/index";

const BandFashion = () => {
  const bands = [
    { id: 1, name: "Versace", image: Versace },
    { id: 2, name: "Zara", image: Zara },
    { id: 3, name: "Gucci", image: Gucci },
    { id: 4, name: "Prada", image: Prada },
    { id: 5, name: "Calvin Klein", image: Calvin },
  ];
  return (
    <section className="w-full bg-black">
      {/* TODO: Implement runner animation for the band logos */}
      <div className="w-full h-28 flex items-center justify-center gap-16 lg:gap-28 p-4 md:p-8">
        {bands.map((band) => (
          <div key={band.id} className="">
            <img
              src={band.image}
              alt={band.name}
              className="w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BandFashion;
