import React from 'react';
import { Form, Input, Button } from 'antd';

const FormComponent = ({ fields, onSubmit, initialValues, textBotton: textButton }) => {
    const [form] = Form.useForm();

    return (
        <Form form={form} layout="vertical" onFinish={onSubmit} initialValues={initialValues}>
            {fields.map((field) => (
                <Form.Item key={field.name} name={field.name} label={field.label} rules={field.rules}>
                    <Input type={field.type || 'text'} />
                </Form.Item>
            ))}
            <Form.Item>
                <Button type="primary" htmlType="submit">{textButton}</Button>
            </Form.Item>
        </Form>
    );
};

export default FormComponent;
