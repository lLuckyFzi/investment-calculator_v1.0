import { Form, InputNumber } from "antd";
import React from "react";

function InputNum(props) {
  const { label, value, placeholder, onChange } = props;

  const validatePositiveNumber = (_, value) => {
    if (value <= 0) {
      return Promise.reject(new Error("Masukkan angka positif"));
    }
    return Promise.resolve();
  };

  return (
    <Form.Item
      label={label}
      rules={[{ required: true, validator: validatePositiveNumber }]}
    >
      <InputNumber
        className="w-full"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Form.Item>
  );
}

export default InputNum;
