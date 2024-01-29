import { Button, Form, Input } from "antd";
import React from "react";

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

function CreateDonor() {
  const handleNewBlog = () => { };
  const onFieldChange = () => { };
  return (
    <Form
      name="basic"
      // labelCol={{ span: 8 }}
      // wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        name="donor-name"
        rules={[{ required: true, message: 'Enter donor name' }]}
        label="Donor Name"
      >
        <Input id="donor-name" className="outline-none border-none w-full text-2xl p-4 rounded-[5px] bg-[#ededed]" />
      </Form.Item>
      <Form.Item
        name="city"
        rules={[{ required: true, message: 'Enter donor city' }]}
        label="City"
      >
        <Input id="city" className="outline-none border-none w-full text-2xl p-4 rounded-[5px] bg-[#ededed]" />
      </Form.Item>
      <Form.Item
        name="amount"
        rules={[{ required: true, message: 'Enter amount' }]}
        label="Amount"
      >
        <Input id="amount" className="outline-none border-none w-full text-2xl p-4 rounded-[5px] bg-[#ededed]" />
      </Form.Item>
      <Form.Item
        name="image"
        rules={[{ required: true, message: 'Chose a image' }]}
        label="Image"
      >
        <Input id="image" className="outline-none border-none w-full text-2xl p-4 rounded-[5px] bg-[#ededed]" />
      </Form.Item>
    </Form>
  );
}

export default CreateDonor;
