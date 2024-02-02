import React, { useRef, useState } from "react";
import { cars } from "../data";
import CarItem from "../components/CarItem";
import { Link, useParams } from "react-router-dom";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";

const Catalog = () => {
  const { model, marka } = useParams();
  const carsOfModel = cars.filter((car) => car.model === model);
  const carsOfMarka = cars.filter((car) => car.marka === marka);
  const targetArray = carsOfModel.length > 0 ? carsOfModel : cars;
  const markaArray = carsOfMarka.length > 0 ? carsOfMarka : targetArray;

  const catalogRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const totalPages = Math.ceil(markaArray.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      setTimeout(() => {
        scrollToTop();
      }, 0);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: catalogRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="pb-20" ref={catalogRef}>
      <div className="w-full max-w-base mx-auto px-5">
        <h1 className="text-3xl leading-7 text-111 font-bold mb-7 md:mb-10 md:text-4xl md:leading-10">
          {model ? model : "Katalog"}
        </h1>

        {model && (
          <ul className="w-full max-w-5xl grid grid-cols-2 mb-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {carsOfModel.map((modelCar) => {
              return (
                <li
                  key={modelCar.id}
                  className="w-full h-14 border-2 border-r-0 last:border-r-2 border-teal-500 transition-all duration-300 hover:bg-teal-500 hover:text-white relative md:h-16"
                >
                  <Link
                    className="w-full h-full inline-flex justify-center items-center absolute inset-0 text-lg font-medium"
                    to={`/catalog/${model}/${modelCar.marka}`}
                  >
                    {modelCar.marka}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}

        {/* filtr */}
        <Filter markaArray={markaArray} />

        <ul className="grid grid-cols-1 gap-7 md:gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {markaArray.slice(startIndex, endIndex).map((car) => (
            <CarItem key={car.id} {...car} />
          ))}
        </ul>

        {/* Pagination buttons */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Catalog;
