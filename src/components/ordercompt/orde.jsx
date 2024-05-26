import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import React, { useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { GiCancel } from "react-icons/gi";

const TableRow = ({ data, onViewMore }) => {
  return (
    <tr>
      <td className="border-2 border-black px-4 py-2">{data.orderNumber}</td>
      <td className="border-2 border-black px-4 py-2">{data.clientName}</td>
      <td className="border-2 border-black px-4 py-2">{data.phoneNumber}</td>
      <td
        className={`border-2 border-black px-4 py-2 ${
          data.status === "Processing"
            ? "text-[#E68C3A]"
            : data.status === "Dispatched"
            ? "text-[#1158E3]"
            : "text-[#3DBC09]"
        }`}
      >
        {data.status}
      </td>
      <td className="border-2 border-black px-4 py-2">
        <button onClick={() => onViewMore(data)}>View More</button>
      </td>
    </tr>
  );
};

export default function Order() {
  const [selectedRow, setSelectedRow] = useState(null);
  const rows = [
    {
      orderNumber: "SJN435LSEN",
      clientName: "Clara Jesen",
      phoneNumber: "+234704567888391",
      status: "Processing",
    },
    {
      orderNumber: "ABC123XYZ",
      clientName: "John Doe",
      phoneNumber: "+123456789",
      status: "Dispatched",
    },
    {
      orderNumber: "DEF456UVW",
      clientName: "Jane Smith",
      phoneNumber: "+987654321",
      status: "Completed",
    },
    {
      orderNumber: "GHI789RST",
      clientName: "Michael Johnson",
      phoneNumber: "+111222333",
      status: "Processing",
    },
    {
      orderNumber: "JKL012UVW",
      clientName: "Emily Brown",
      phoneNumber: "+444555666",
      status: "Dispatched",
    },
    {
      orderNumber: "MNO345RST",
      clientName: "David Wilson",
      phoneNumber: "+777888999",
      status: "Completed",
    },
    {
      orderNumber: "PQR678UVW",
      clientName: "Sarah Lee",
      phoneNumber: "+333222111",
      status: "Processing",
    },
    {
      orderNumber: "STU901RST",
      clientName: "Robert Garcia",
      phoneNumber: "+666777888",
      status: "Dispatched",
    },
    {
      orderNumber: "VWX234UVW",
      clientName: "Lisa Johnson",
      phoneNumber: "+999888777",
      status: "Completed",
    },
    {
      orderNumber: "YZA567RST",
      clientName: "Jessica Miller",
      phoneNumber: "+222333444",
      status: "Processing",
    },
    {
      orderNumber: "SJN435LSEN",
      clientName: "Clara Jesen",
      phoneNumber: "+234704567888391",
      status: "Processing",
    },
    {
      orderNumber: "ABC123XYZ",
      clientName: "John Doe",
      phoneNumber: "+123456789",
      status: "Dispatched",
    },
    {
      orderNumber: "DEF456UVW",
      clientName: "Jane Smith",
      phoneNumber: "+987654321",
      status: "Completed",
    },
    {
      orderNumber: "GHI789RST",
      clientName: "Michael Johnson",
      phoneNumber: "+111222333",
      status: "Processing",
    },
    {
      orderNumber: "JKL012UVW",
      clientName: "Emily Brown",
      phoneNumber: "+444555666",
      status: "Dispatched",
    },
    {
      orderNumber: "MNO345RST",
      clientName: "David Wilson",
      phoneNumber: "+777888999",
      status: "Completed",
    },
    {
      orderNumber: "PQR678UVW",
      clientName: "Sarah Lee",
      phoneNumber: "+333222111",
      status: "Processing",
    },
    {
      orderNumber: "STU901RST",
      clientName: "Robert Garcia",
      phoneNumber: "+666777888",
      status: "Dispatched",
    },
    {
      orderNumber: "VWX234UVW",
      clientName: "Lisa Johnson",
      phoneNumber: "+999888777",
      status: "Completed",
    },
    {
      orderNumber: "YZA567RST",
      clientName: "Jessica Miller",
      phoneNumber: "+222333444",
      status: "Processing",
    },
  ];

  const onViewMore = (rowData) => {
    setSelectedRow(rowData);
  };

  const onCloseDetailBox = () => {
    setSelectedRow(null);
  };

  return (
    <div className="border-[1px] h-[100%] w-[100%] pl-[360px] bg-[#E1E1E1] pr-[1px]">
      <div className="flex flex-row justify-center gap-[31rem] items-center pt-[45px]">
        <div className="w-[386px] h-[50px] rounded-[5px] bg border-1px border-red-900 bg-white flex flex-row gap-2 items-center">
          <CiSearch className="w-[20px] h-[20px] ml-[10px]" />
          <input
            type="text"
            placeholder="Search"
            className="w-[100%] h-[50px] rounded-[5px] outline-none text-18px font-normal text-[#5F5F5F]"
          />
        </div>

        <div className="flex flex-row gap-7">
          <IoIosNotifications className="w-[24px] h-[24px] cursor-pointer " />
          <FaRegUserCircle className="w-[24px] h-[24px] cursor-pointer" />
        </div>
      </div>

      <div className="border-[1px] border-white bg-white w-[823px] h-[68px] rounded-[5px] flex flex-row items-center justify-evenly mt-10 ml-[15px]">
        <p className="text-[18px] font-normal">
          Complete your user verification and onboarding and setup your food
          site now
        </p>

        <IoIosArrowDropright className="w-[30px] h-[30px] " />
      </div>

      <div>
        {selectedRow && (
          <div className="w-[923px] h-[100%] border-[2px] border-[black] mt-10 ml-[15px] rounded-[15px]">
            <GiCancel onClick={onCloseDetailBox} className="pl-4 w-[40px] h-[40px] cursor-pointer"/>
            <p className="text-center mt-5 mb-5">
              <strong>Order Number:</strong> {selectedRow.orderNumber}
            </p>

            <div className="grid grid-cols-2 pl-10">
              <div className="border-[1px] border-white bg-white w-[376px] h-[100%] rounded-[15px] pl-4 pt-4 pb-4">
                <h3 className="text-lg font-semibold">Client Details</h3>
                <br />
                <p>
                  <strong>Name:</strong> {selectedRow.clientName}
                </p>
                <br />
                <p>
                  <strong>Phone Number:</strong> {selectedRow.phoneNumber}
                </p>
                <br />
                <p>
                  <strong>Address:</strong> Angel Drive, Agbado, Lagos.
                </p>
              </div>

              <div className="border-[1px] border-white bg-white w-[349px] h-[100%] rounded-[15px] pl-4 pt-4 pb-4">
                <p>
                  <strong>Date:</strong> 17/03/2024
                </p>
                <br />
                <p>
                  <strong>Time:</strong> 10:00 am
                </p>
                <br />
                <p>
                  <strong>Created by:</strong> clarajenz@gmail.com
                </p>
              </div>

              <div className="border-[1px] border-white bg-white w-[804px] h-[100%] rounded-[15px] pl-4 pt-4 pb-4 mt-5">
                <h3 className="text-lg font-semibold">Order:</h3>
                <br />
                <div className=" flex flex-row gap-[300px]">
                  <div>
                    <p>
                      <strong>Jollof Rice</strong> X1
                    </p>
                    <br />
                    <p>
                      <strong>Chivita</strong> X2
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Delivery type:</strong> Pick Up
                    </p>
                    <br />
                    <p>
                      <strong>Payment status:</strong> Pending
                    </p>
                    <br />
                    <p>
                      <strong>Balance::</strong> 50% (2500)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center mt-10 mb-10">
              <strong>Status:</strong> {selectedRow.status}
            </p>
          </div>
        )}
      </div>

      <div className="w-[923px] h-[100%] border-[1px] border-[white] bg-white rounded-[15px] flex flex-col gap-8 pl-24 ml-4 mt-10">
        <h2 className="text-[28px] font-bold mt-3">Order Summary</h2>
        <div className="">
          <table className="table-auto mb-4">
            <thead>
              <tr>
                <th className="border-2 border-black px-4 py-2">
                  Order Number
                </th>
                <th className="border-2 border-black px-4 py-2">
                  Client's Name
                </th>
                <th className="border-2 border-black px-4 py-2">
                  Phone Number
                </th>
                <th className="border-2 border-black px-4 py-2">
                  Order Status
                </th>
                <th className="border-2 border-black px-4 py-2">More</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <TableRow key={index} data={row} onViewMore={onViewMore} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
