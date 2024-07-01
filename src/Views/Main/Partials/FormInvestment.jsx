import { Col, Form, InputNumber, Row } from "antd";
import React, { useState } from "react";
import Text from "../../../Components/Text";
import InputNum from "../../../Components/Inputs";

function FormInvestment(props) {
  const { onChange, userInput } = props;

  return (
    <div className="flex">
      <Form layout="vertical" className="block">
        <div className="bg-white p-5 rounded-md">
          <Text className="text-3xl font-bold">Investment Calculator</Text>
          <div>
            <Row className="mt-5" gutter={20}>
              <Col span={12}>
                <InputNum
                  label="Initial Investment"
                  value={userInput.initialInvestment}
                  placeholder="Input your Initial Investment"
                  onChange={(e) => onChange("initialInvestment", e)}
                />
              </Col>
              <Col span={12}>
                <InputNum
                  label="Annual Investment"
                  value={userInput.annualInvestment}
                  placeholder="Input your Annual Investment"
                  onChange={(e) => onChange("annualInvestment", e)}
                />
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <InputNum
                  label="Expected Return"
                  value={userInput.expectedReturn}
                  placeholder="Input your Expected Return"
                  onChange={(e) => onChange("expectedReturn", e)}
                />
              </Col>
              <Col span={12}>
                <InputNum
                  label="Duration"
                  value={userInput.duration}
                  placeholder="Input your Duration"
                  onChange={(e) => onChange("duration", e)}
                />
              </Col>
            </Row>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default FormInvestment;
