import React, { useState } from 'react';
import { Modal, Button, Typography } from 'antd';
import { Radio, Input, Space } from 'antd';
import Next from './Next';


const { Title, Text} = Typography;

const Firstpage = () => {

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [val,setVal] = useState(0);
    React.useEffect(()=>{ },[val])
    
    const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleclick = (e) => {
    console.log(e.target.value);
    setVal(e.target.value);
    console.log(val);
  };

    return (
        <div>
            <Button type="primary" onClick={showModal}>
        Report 
      </Button>
      <Modal title="Report This Service" visible={isModalVisible} footer={null} onCancel={handleCancel}>

        <Text strong>Why would you like to report this service?</Text><br/>
        <Text type="secondary">Your report will be kept anonymous</Text><br/><br/>
        <Radio.Group onChange={handleclick}>
       <Space direction="vertical"> 
          <Radio value={1} >No original content</Radio>
          <Radio value={2} >Inappropriate service</Radio>
          <Radio value={3} >Trademark violatons</Radio>
          <Radio value={4} >Copyright violatons</Radio>
         </Space> 
      </Radio.Group>
      <br />
      <br />
      <Next isFirstPage={isModalVisible} setIsFirstPage={setIsModalVisible} option={val}  /> 
      </Modal>
        </div>
    );
}

export default Firstpage

