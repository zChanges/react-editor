import React from 'react';
import Editor from './Editor';
import Page from './page/page';
import ToolBar from './toolBar/ToolBar';
import G6Editor from '@antv/g6-editor';

// import 'antd/dist/antd';
import './container.less';


const Flow = G6Editor.Flow;
// 注册模型卡片基类
Flow.registerNode('model-card', {
  draw(item) {
    const group = item.getGraphicGroup();
    const model = item.getModel();
    const width = 164;
    const height = 40;
    const x = -width / 2;
    const y = -height / 2;
    const borderRadius = 4;
    const keyShape = group.addShape('rect', {
      attrs: {
        x,
        y,
        width,
        height,
        radius: borderRadius,
        fill: 'white',
        stroke: '#CED4D9'
      }
    });
    // 左侧色条
    group.addShape('path', {
      attrs: {
        path: [
          ['M', x, y + borderRadius],
          ['L', x, y + height - borderRadius],
          ['A', borderRadius, borderRadius, 0, 0, 0, x + borderRadius, y + height],
          ['L', x + borderRadius, y],
          ['A', borderRadius, borderRadius, 0, 0, 0, x, y + borderRadius]
        ],
        fill: this.color_type
      }
    });
    // 类型 logo
    group.addShape('image', {
      attrs: {
        img: this.type_icon_url,
        x: x + 16,
        y: y + 12,
        width: 20,
        height: 16
      }
    });
    // 名称文本
    const label = model.label ? model.label : this.label;
    group.addShape('text', {
      attrs: {
        text: label,
        x: x + 52,
        y: y + 13,
        textAlign: 'start',
        textBaseline: 'top',
        fill: 'rgba(0,0,0,0.65)'
      }
    });
    // // 状态 logo
    // group.addShape('image', {
    //   attrs: {
    //     img: this.state_icon_url,
    //     x: x + 158,
    //     y: y + 12,
    //     width: 16,
    //     height: 16
    //   }
    // });
    return keyShape;
  },
  // 设置锚点
  anchor: [
    [0.5, 0], // 上面边的中点
    [0.5, 1] // 下边边的中点
  ]
});

// 意图入口
Flow.registerNode('entry', {
  label: '意图入口',
  color_type: '#1890FF',
  type_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg',
  state_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/MXXetJAxlqrbisIuZxDO.svg',
  // 设置锚点
  anchor: [
    [1, 0.5, {
      type: 'output'
    }] // 下边边的中点
  ]
}, 'model-card');

// 参数收集
Flow.registerNode('params', {
  label: '参数收集',
  color_type: '#9254DE',
  type_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg',
  state_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/MXXetJAxlqrbisIuZxDO.svg',
  // 设置锚点
  anchor: [
    [1, 0.5, {
      type: 'output'
    }],
    [0, 0.5, {
      type: 'input'
    }],
    [0.5, 1, {
      type: 'output'
    }]
  ]
}, 'model-card');

// 子参数
Flow.registerNode('params-child', {
  label: '子参数',
  color_type: '#1890FF',
  type_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg',
  state_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/MXXetJAxlqrbisIuZxDO.svg',
  // 设置锚点
  anchor: [
    [0.5, 0, {
      type: 'input'
    }],
    [0.5, 1, {
      type: 'output'
    }]
  ]
}, 'model-card');

// 判断节点
Flow.registerNode('judge', {
  label: '判断',
  color_type: '#9254DE',
  type_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg',
  state_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/uZVdwjJGqDooqKLKtvGA.svg',
  // 设置锚点
  anchor: [
    [0, 0.5, {
      type: 'input'
    }],
    [1, 0.5, {
      type: 'output'
    }],
    [0.5, 1, {
      type: 'output'
    }]
  ]
}, 'model-card');

// 子判断
Flow.registerNode('judge-child', {
  label: '子判断',
  color_type: '#9254DE',
  type_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg',
  state_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/uZVdwjJGqDooqKLKtvGA.svg',
  // 设置锚点
  anchor: [
    [0.5, 0, {
      type: 'input'
    }],
    [1, 0.5, {
      type: 'output'
    }],
    [0.5, 1, {
      type: 'output'
    }]
  ]
}, 'model-card');

// 响应
Flow.registerNode('response', {
  label: '响应',
  color_type: '#FAAD14',
  type_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg',
  state_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/MXXetJAxlqrbisIuZxDO.svg',
  // 设置锚点
  anchor: [
    [0, 0.5, {
      type: 'input'
    }],
    [0.5, 0, {
      type: 'input'
    }],
    [0.5, 1, {
      type: 'output'
    }],
    [1, 0.5, {
      type: 'output'
    }]
  ]
}, 'model-card');

// 动作
Flow.registerNode('action', {
  label: '动作',
  color_type: '#FAAD14',
  type_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg',
  state_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/MXXetJAxlqrbisIuZxDO.svg',
  // 设置锚点
  anchor: [
    [0, 0.5, {
      type: 'input'
    }],
    [0.5, 0, {
      type: 'input'
    }],
    [0.5, 1, {
      type: 'output'
    }],
    [1, 0.5, {
      type: 'output'
    }]
  ]
}, 'model-card');

// 退出
Flow.registerNode('exit', {
  label: '退出',
  color_type: '#FAAD14',
  type_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/czNEJAmyDpclFaSucYWB.svg',
  state_icon_url: 'https://gw.alipayobjects.com/zos/rmsportal/MXXetJAxlqrbisIuZxDO.svg',
  // 设置锚点
  anchor: [
    [0, 0.5, {
      type: 'input'
    }],
    [0.5, 0, {
      type: 'input'
    }]
  ]
}, 'model-card');

class Container extends Editor {
  componentDidMount() {
    setTimeout(() => {
      super.componentDidMount();
      const page = this.page;
      console.log(page)
      // 输入锚点不可以连出边
      page.on('hoveranchor:beforeaddedge', ev => {
        // if (ev.anchor.type === 'input') {
        //   ev.cancel = true;
        // }
      });
      page.on('dragedge:beforeshowanchor', ev => {
        console.log(ev)
        // 只允许目标锚点是输入，源锚点是输出，才能连接
        console.log(ev.source.id  == ev.target.id)
        if ((ev.source.id  == ev.target.id)) {
          ev.cancel = true;
        }
        
        if (!(ev.targetAnchor.type === 'input' && ev.sourceAnchor.type === 'output')) {
          ev.cancel = true;
        }
        // // 如果拖动的是目标方向，则取消显示目标节点中已被连过的锚点
        // if (ev.dragEndPointType === 'target' && page.anchorHasBeenLinked(ev.target, ev.targetAnchor)) {
        //   ev.cancel = true;
        // }
        // // 如果拖动的是源方向，则取消显示源节点中已被连过的锚点
        // if (ev.dragEndPointType === 'source' && page.anchorHasBeenLinked(ev.source, ev.sourceAnchor)) {
        //   ev.cancel = true;
        // }
      });
    }, 500)
  }
  render() {
    return <div id="dialog">
      <ToolBar />
      <div id="minimap"></div>
      <div className='container'>
        <div id="itempannel">
          {/* <img draggable="false" src="https://gw.alipayobjects.com/zos/rmsportal/ZnPxbVjKYADMYxkTQXRi.svg"
            data-type="node" data-shape="flow-circle" data-size="60*60" data-color="#FA8C16" data-label="意图入口" className="getItem" />

          <img draggable="false" src="https://gw.alipayobjects.com/zos/rmsportal/wHcJakkCXDrUUlNkNzSy.svg" data-type="node"
            data-shape="flow-rect" data-size="80*48" data-color="#1890FF" data-label="参数搜集" className="getItem" />

          <img draggable="false" src="https://gw.alipayobjects.com/zos/rmsportal/SnWIktArriZRWdGCnGfK.svg" data-type="node"
            data-shape="flow-rhombus" data-size="80*72" data-color="#13C2C2" data-label="判断" className="getItem" />

          <img draggable="false" src="https://gw.alipayobjects.com/zos/rmsportal/rQMUhHHSqwYsPwjXxcfP.svg" data-type="node"
            data-shape="flow-capsule" data-size="80*48" data-color="#722ED1" data-label="响应" className="getItem" /> */}
          <ul>
            <li className="getItem" data-shape="entry" data-type="node" data-size="170*34">
              <span className="pannel-type-icon"></span>意图入口
            </li>
            <li className="getItem" data-shape="params" data-type="node" data-size="170*34">
              <span className="pannel-type-icon"></span>参数收集
            </li>
            <li className="getItem" data-shape="params-child" data-type="node" data-size="170*34">
              <span className="pannel-type-icon"></span>子参数
            </li>
            <li className="getItem" data-shape="judge" data-type="node" data-size="170*34">
              <span className="pannel-type-icon"></span>判断
            </li>
            <li className="getItem" data-shape="judge-child" data-type="node" data-size="170*34">
              <span className="pannel-type-icon"></span>子判断
            </li>
            <li className="getItem" data-shape="response" data-type="node" data-size="170*34">
              <span className="pannel-type-icon"></span>响应
            </li>
            <li className="getItem" data-shape="action" data-type="node" data-size="170*34">
              <span className="pannel-type-icon"></span>动作
            </li>
            <li className="getItem" data-shape="exit" data-type="node" data-size="170*34">
              <span className="pannel-type-icon"></span>退出
            </li>
          </ul>
        </div>
        <Page />
      </div>

    </div>
  }
}


export default Container