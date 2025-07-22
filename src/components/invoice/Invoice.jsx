import React from "react";
import { TableCell, TableBody, TableRow } from "@windmill/react-ui";

const Invoice = ({ data, currency, getNumberTwo }) => {
  // console.log("data ->", data);
  return (
    <>
      <TableBody className="bg-white dark:bg-gray-800 divide-y divide-gray-100 text-serif text-sm ">
        {data?.cart?.map((item, i) => (
          <TableRow key={i} className="dark:border-gray-700 dark:text-gray-400">
            <TableCell className="px-6 py-1 whitespace-nowrap font-normal text-gray-500 text-left">
              {i + 1}{" "}
            </TableCell>
            <TableCell className="px-6 py-1 flex flex-col whitespace-nowrap font-normal text-gray-500">
              <div
                className={`text-gray-700 font-semibold  dark:text-gray-300 text-xs `}
                // ${
                //   item.title.length > 15 ? "wrap-long-title" : "" // Apply class conditionally
                // }
              >
                {item.title}
              </div>
              {item?.sku && <strong>(sku:{item?.sku})</strong>}
              <div></div>
            </TableCell>
            <TableCell className="px-6 py-1 whitespace-nowrap font-bold text-center">
              {item.quantity}{" "}
            </TableCell>
            <TableCell className="px-6 py-1 whitespace-nowrap font-bold text-center">
              {currency}
              {/* {getNumberTwo(item.price)} */}
              {getNumberTwo(
                (item.price * 100) / (100 + (item.prices.gst ?? 0))
              )}
            </TableCell>
            <TableCell className="px-6 py-1 whitespace-nowrap font-bold text-center">
              {getNumberTwo(item.prices.gst)}
              {" %"}
            </TableCell>

            <TableCell className="px-6 py-1 whitespace-nowrap text-right font-bold text-red-500 dark:text-emerald-500">
              {currency}
              {getNumberTwo(item.itemTotal)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default Invoice;
