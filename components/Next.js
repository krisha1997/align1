import React, { useState } from 'react';
import { Modal, Button, Typography, Space} from 'antd';
import { Radio, Input, Checkbox,Form } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import style from './style.module.css';

const { Title, Link, Text } = Typography;
const { TextArea } = Input;

const Next = ({isFirstPage, setIsFirstPage, option}) => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [state, setstate] = useState(0);
    
    const showModal = () => {
    setIsModalVisible(true);
    setIsFirstPage(false);
    setstate(option);
    console.log(option);
    };
  
   const onBack = () => {
    setIsModalVisible(false);
    setIsFirstPage(true);
   }
   const onChange =(e) => {
    console.log(`checked = ${e.target.checked}`);
  }
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  
  const onFinish = () => {
    console.log('Success:');
  };

    return (
        <div>
            <Button type="primary" onClick={showModal} className={style.but} >
        Next 
      </Button>
       
     {state ===1 ? <Modal title="Report Unoriginal Content" visible={isModalVisible} footer={null} onCancel={handleCancel} bodyStyle={{height:"fit-content"}}> 
        <Text >Choose the content you would like to report</Text><br/>
        <Radio.Group >
          <Radio value={1}>Audio</Radio>
          <Radio value={2}>Description</Radio>
          <Radio value={3}>Image</Radio>
          <Radio value={4}>Video</Radio>
      </Radio.Group>
      <br />
      <br />
      <Text>Reference URL to the original content</Text><br/>
      <Input/>
      <br />
      <br />
      <Text>Additional information(optional)</Text>
      <TextArea rows={3} /><br/><br/>
      <Space size={12}>
      <Button type="primary"  onClick={onBack} className={style.backbut}>
        Back
      </Button>
      <Button type="primary"  onClick={onBack} className={style.but}>
        Submit
      </Button>
      </Space>
      </Modal>: null}

      {state ===2 ? <Modal title="Report Inappropriate service" visible={isModalVisible} footer={null} onCancel={handleCancel}  > 
        <Text>Describe the violation/reason for reporting the service*</Text>
        <Form  initialValues={{ remember: true }}
     onFinish={onFinish}>
    <Form.Item
       name="validation"
       initialValues={{ remember: true }}
       rules={[{ required: true, message: 'Please describe the violation/reason.' }]}
    >
       <TextArea rows={4} /> 
    </Form.Item>
      
      
      <br />
      <Text>Reference URL(if applicable)</Text>
      <Input />
      <br /><br/>
      <Text >*Services associated with non permitted usage as detailed in the User conduct section under our<Link href="https://ant.design" target="_blank">
      Terms of service
    </Link></Text>
    <br/><br/>
    
    <Form.Item>
    <Space size={14}>
    <Button type="primary"  onClick={onBack} className={style.backbut}>
        Back
      </Button>
      
      <Button type="primary" className={style.but} htmlType="submit">
        Submit
      </Button>
      </Space>
      </Form.Item>
      
      </Form>
      </Modal>: null}
      
      {state ===3 ? <Modal title="Reporting Unauthorized trademark Use" visible={isModalVisible} footer={null} onCancel={handleCancel} bodyStyle={{height: 400, overflowY: "scroll"}} > 
        <Text>Describe the Trademark Infringement</Text>
        <TextArea rows={4} /> 
      <br />
      <br />
      <Text>Trademark being infringed</Text>
      <Input />
      <br />
      <br />
      <Text>Trademark Registration no.</Text>
      <Input />
      <br />
      <br />
      <Text>Class and Jurisdication</Text>
      <Input />
      <br />
      <br/>
      <Checkbox onChange={onChange}>I hereby state, under penalty of perjury, that the information provided herein is accurate and that I am the copyright owner or the owner of an exclusive right that is being infringed, or am authorized to make the complaint on behalf of the owner. I have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law. I acknowledge that under Section 512(f) any person who knowingly materially misrepresents that material or activity is infringing may be subject to liability for damages.<br/></Checkbox>
      <br />
      <br/>
      <Space size={14}>
      <Button type="primary"  onClick={onBack} className={style.backbut}>
        Back
      </Button>
      <Button type="primary"  onClick={onBack} className={style.but}>
        Submit
      </Button>
      </Space>
      <br/>
      </Modal>: null}

      {state === 4 ? <Modal title="Reporting Copyrights Violation(DMCA)" visible={isModalVisible} footer={null} onCancel={handleCancel} bodyStyle={{height: 400, overflowY: "scroll"}} > 
        <Text>URL to original content</Text>
        <Input />
      <br />
      <br />
      <Text>Proof of your copyrights ownership, such as registration<br/>number of certificate</Text>
      <TextArea rows={4} />
      
      <br />
      <br />
      <Text>Description of alleged Infringement</Text>
      <TextArea rows={4} />
      <br />
      <br />
      <Space size={14}>
      <Button  onClick={onBack} className={style.backbut}>
        Back
      </Button>
      <Button type="primary"  onClick={onBack} className={style.but}>
        Submit
      </Button>
      </Space>
      <br/>
      </Modal>: null}
      </div>
    );
}

export default Next;