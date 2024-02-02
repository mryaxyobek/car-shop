import React, { useState, useEffect } from "react";
import { cars } from "../data";
import { useLocation } from "react-router-dom";
import '../css/antd.css'
import { Select } from 'antd';

const Filter = ({ markaArray }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [selectedModel, setSelectedModel] = useState("");
  const [selectedMarka, setSelectedMarka] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  // const getUniqueValues = (key) => {
  //   if (!markaArray || markaArray.length === 0) {
  //     return [];
  //   }

  //   return markaArray
  //     .reduce((uniqueValues, car) => {
  //       if (!uniqueValues.includes(car[key])) {
  //         uniqueValues.push(car[key]);
  //       }
  //       return uniqueValues;
  //     }, [])
  //     .sort();
  // };

  // const renderOptions = (key) => {
  //   return (
  //     (getUniqueValues(key) || []).length > 0
  //       ? getUniqueValues(key)
  //       : Array.from(new Set(cars.map((car) => car[key])))
  //   ).map((value, index) => (
  //     <Option key={index} value={value}>
  //       {value}
  //     </Option>
  //   ));
  // };

  // useEffect(() => {
  //   setSelectedModel("");
  //   setSelectedMarka("");
  //   setSelectedYear("");
  //   setSelectedPlace("");
  //   setSelectedColor("");
  // }, [markaArray]);

  return (
    <form className="grid grid-cols-1 gap-5 pb-10 md:gap-7 sm:grid-cols-2 md:grid-cols-3">
      {/* <Select
        className={`${isHome && "bg-white"}`}
        color="red"
        label="Rangni tanlang"
        name="Mashina rangi"
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      >
        {renderOptions("color")}
      </Select> */}
      <Select
        defaultValue="Modelni tanlang"
        options={[
          { value: 'Modelni tanlang', label: 'Modelni tanlang', disabled: true },
          { value: 'Chevrolet', label: 'Chevrolet' },
          { value: 'Kia', label: 'Kia' },
          { value: 'Toyota(Supraaaaaaaaa)', label: 'Toyota(Supraaaaaaaaa)' },
          { value: 'Audi', label: 'Audi' },
          { value: 'Mersedes', label: 'Mersedes' },
        ]}
      />
      <Select
        defaultValue="Markani tanlang"
        options={[
          { value: 'Markani tanlang', label: 'Markani tanlang', disabled: true },
          { value: 'Onix', label: 'Onix' },
          { value: 'Tracker-2', label: 'Tracker-2' },
          { value: 'AMG', label: 'AMG' },
          { value: 'Crown', label: 'Crown' },
          { value: 'Q5', label: 'Q5' },
          { value: 'Q7', label: 'Q7' },
          { value: 'K5', label: 'K5' },
          { value: 'Gentra', label: 'Gentra' },
          { value: 'Ravon', label: 'Ravon' },
        ]}
      />
      <Select
        defaultValue="Yilni tanlang"
        options={[
          { value: 'Yilni tanlang', label: 'Yilni tanlang', disabled: true },
          { value: '2024', label: '2024' },
          { value: '2023', label: '2023' },
          { value: '2022', label: '2022' },
          { value: '2021', label: '2021' },
          { value: '2020', label: '2020' },
          { value: '2019', label: '2019' },
          { value: '2018', label: '2018' },
          { value: '2017', label: '2017' },
          { value: '2016', label: '2016' },
          { value: '2015', label: '2015' },
          { value: '2014', label: '2014' },
          { value: '2013', label: '2013' },
          { value: '2012', label: '2012' },
          { value: '2011', label: '2011' },
          { value: '2010', label: '2010' },
          { value: '2009', label: '2009' },
          { value: '2008', label: '2008' },
          { value: '2007', label: '2007' },
          { value: '2006', label: '2006' },
          { value: '2005', label: '2005' },
          { value: '2004', label: '2004' },
          { value: '2003', label: '2003' },
          { value: '2002', label: '2002' },
          { value: '2001', label: '2001' },
          { value: '2000', label: '2000' },
          { value: '1999', label: '1999' },
          { value: '1998', label: '1998' },
          { value: '1997', label: '1997' },
          { value: '1996', label: '1996' },
          { value: '1995', label: '1995' },
          { value: '1994', label: '1994' },
          { value: '1993', label: '1993' },
          { value: '1992', label: '1992' },
          { value: '1991', label: '1991' },
          { value: '1990', label: '1990' },
        ]}
      />
      <Select
        defaultValue="Viloyatni tanlang"
        options={[
          { value: 'Viloyatni tanlang', label: 'Viloyatni tanlang', disabled: true },
          { value: 'Andijon', label: 'Andijon' },
          { value: 'Toshkent', label: 'Toshkent' },
          { value: 'Buxoro', label: 'Buxoro' },
          { value: 'Jizzah', label: 'Jizzah' },
          { value: 'Samarqand', label: 'Samarqand' },
          { value: 'Termiz', label: 'Termiz' },
          { value: 'Qashqadaryo', label: 'Qashqadaryo' },
          { value: 'Surxandaryo', label: 'Surxandaryo' },
          { value: 'Farg\'ona', label: 'Farg\'ona' },
          { value: 'Namangan', label: 'Namangan' },
          { value: 'Nukus', label: 'Nukus' },
          { value: 'Navoiy', label: 'Navoiy' }
        ]}
      />
      <Select
        defaultValue="Rangni tanlang"
        options={[
          { value: 'Rangni tanlang', label: 'Rangni tanlang', disabled: true },
          { value: 'Oq', label: 'Oq' },
          { value: 'Qora', label: 'Qora' },
          { value: 'Qizil', label: 'Qizil' },
          { value: 'Jigarrang', label: 'Jigarrang' },
          { value: 'Oltin', label: 'Oltin' },
          { value: 'Kulrang', label: 'Kulrang' },
        ]}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          alert("Tez orada ishlaydi");
        }}
        className={`${isHome ? "bg-main" : "bg-teal-500"
          } text-white font-semibold rounded-md py-2`}
      >
        Qidirish
      </button>
    </form>
  );
};

export default Filter;
