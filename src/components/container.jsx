import React from 'react';
import Editor from './Editor';
import Page from './page/page';
import ToolBar from './toolBar/ToolBar';
// import 'antd/dist/antd';
import './container.less';

class Container extends Editor { 
  componentDidMount() { 
    setTimeout(() => { 
      super.componentDidMount();
    },500)
  }
  render() { 
    return <div id="dialog">
      <ToolBar />
      <div id="minimap"></div>
      <div className='container'>
        <div id="itempannel">
            <img draggable="false" src="https://gw.alipayobjects.com/zos/rmsportal/ZnPxbVjKYADMYxkTQXRi.svg"
              data-type="node" data-shape="flow-circle" data-size="52*52" data-color="#FA8C16" data-label="意图入口" className="getItem" />
            <img draggable="false" src="https://gw.alipayobjects.com/zos/rmsportal/wHcJakkCXDrUUlNkNzSy.svg" data-type="node" data-shape="flow-rect" data-size="80*48" data-color="#1890FF" data-label="常规节点" className="getItem" />
            <img draggable="false" src="https://gw.alipayobjects.com/zos/rmsportal/SnWIktArriZRWdGCnGfK.svg" data-type="node" data-shape="flow-rhombus" data-size="80*72" data-color="#13C2C2" data-label="分叉节点" className="getItem" />
            <img draggable="false" src="https://gw.alipayobjects.com/zos/rmsportal/rQMUhHHSqwYsPwjXxcfP.svg" data-type="node" data-shape="flow-capsule" data-size="80*48" data-color="#722ED1" data-label="模型节点" className="getItem" />
        </div>
        <Page />
      </div>

    </div>
  }
}


export default Container