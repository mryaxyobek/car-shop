import React from "react";
import { Link } from "react-router-dom";
import { cars } from "../data";

const Catalog = () => {
  const modelCounts = {};
  cars.forEach((car) => {
    const model = car.model;
    modelCounts[model] = (modelCounts[model] || 0) + 1;
  });
  return (
    <section className="py-7">
      <div className="w-full max-w-base mx-auto px-5">
        <h2 className="text-2xl leading-7 text-111 font-bold mb-8 sm:text-3xl md:leading-9">
          Mavjud avtomashina markalari
        </h2>

        <ul className="grid grid-cols-1 gap-x-7 gap-y-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Object.keys(modelCounts).map((model) => (
            <li
              key={model}
              className="p-5 rounded-[10px] border border-[#e0e1e7]"
            >
              <Link
                to={`/catalog/${model}`}
                className="flex justify-between items-center text-base font-medium leading-6"
              >
                <div className="flex items-center space-x-2">
                  <img
                    src={cars.find((car) => car.model === model)?.logo}
                    alt={`${model} logo`}
                    className="w-12 h-12 object-cover mr-2"
                  />
                  <h3 className="text-111">{model}</h3>
                </div>
                <span className="text-[#919395]">{modelCounts[model]}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Catalog;
