import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { FaHouse } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

const Header = ({ onSearch }) => {
  return (
    <div className="app-container flex items-center justify-between w-1/2 h-25 bg-white fixed top-0 left-0 right-0 z-40">
      <div className="w-62.5">
        <img
          src="https://the-mealdb-mimo.netlify.app/static/media/logo-mealDB.fa8d1d09f74f7c7f2a8b07b85e928f02.svg"
          alt=""
        />
      </div>

      <div className="flex gap-10">
        <Search
          placeholder="Find Your Meal"
          allowClear
          onSearch={onSearch} // App компоненттен келген функция
          style={{
            width: 200,
          }}
        />
        <div className="flex gap-5 mt-2.5">
          <FaHouse className="text-gray-900" />
          <FaUser className="text-gray-900" />
        </div>
      </div>
    </div>
  );
};

export default Header;