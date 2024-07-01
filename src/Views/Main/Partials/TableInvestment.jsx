import React from "react";
import {
  calculateInvestmentResults,
  formatter,
} from "../../../util/investment";
import { Table } from "antd";

function TableInvestment(props) {
  const { input } = props;
  const resultsData = calculateInvestmentResults(input);

  const formaterValueHandler = (v) => {
    const formatValue = formatter.format(v);
    return formatValue;
  };

  const totalInterestValue = (v) => {
    const initialInvestment =
      resultsData[0].valueEndOfYear -
      resultsData[0].interest -
      resultsData[0].annualInvestment;
    const totalInterest =
      v.valueEndOfYear - v.annualInvestment * v.year - initialInvestment;

    return totalInterest;
  };

  const investmentColumns = [
    {
      title: "Year",
      dataIndex: "year",
    },
    {
      title: "Investment Value",
      dataIndex: "valueEndOfYear",
      render: formaterValueHandler,
    },
    {
      title: "Interest (Year)",
      dataIndex: "interest",
      render: formaterValueHandler,
    },
    {
      title: "Total Interest",
      dataIndex: "totalInterest",
      render: (_, v) => {
        const totalInterest = totalInterestValue(v);
        return formaterValueHandler(totalInterest);
      },
    },
    {
      title: "Invested Capital",
      dataIndex: "investedCapital",
      render: (_, v) => {
        const totalInterest = totalInterestValue(v);
        const totalAmountInvested = v.valueEndOfYear - totalInterest;

        return formaterValueHandler(totalAmountInvested);
      },
    },
  ];

  return (
    <div className="bg-white p-5 rounded-md">
      <Table
        rowKey="year"
        dataSource={resultsData}
        columns={investmentColumns}
      />
    </div>
  );
}

export default TableInvestment;
