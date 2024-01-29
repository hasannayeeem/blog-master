import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

const TestModal = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Donor Name"
      name="donor-name"
      rules={[{ required: true, message: 'Enter donor name' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Amount"
      name="amount"
      rules={[{ required: true, message: 'Enter amount' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="City"
      name="city"
      rules={[{ required: true, message: 'Enter donor city' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Image"
      name="image"
      rules={[{ required: true, message: 'Chose a picture' }]}
    >
      <Input />
    </Form.Item>
    
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default TestModal;









{/* <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <form>
          <label htmlFor="donor_name" className='block font-semibold text-3xl mt-2 mb-1'>Donor Name </label>
          <input style={{background: "#ededed"}} type='text' id='donor_name' className='outline-none border-none w-full text-2xl p-4 rounded-[5px] bg-[#ededed]'></input><br />
          <label htmlFor="donor_city" className='block font-semibold text-3xl mt-2 mb-1'>City </label>
          <input style={{background: "#ededed"}} type='text' id='donor_city' className='outline-none border-none w-full text-2xl p-4 rounded-[5px] bg-[#ededed]'></input><br />
          <label htmlFor="amount" className='block font-semibold text-3xl mt-2 mb-1'>Amount </label>
          <input style={{background: "#ededed"}} type='text' id='amount' className='outline-none border-none w-full text-2xl p-4 rounded-[5px] bg-[#ededed]'></input>
          <label htmlFor="image" className='block font-semibold text-3xl mt-2 mb-1'>Image </label>
          <input style={{background: "#ededed"}} type='file' id='image' className='outline-none border-none w-full text-2xl p-3 rounded-[5px] bg-[#ededed]'></input>
        </form>
      </Modal>
    </> */}