import React from 'react';
import G6Editor from '@antv/g6-editor';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedModel: {}, // 当前选中项数据模型
      curZoom: 1, // 当前缩放比率
      minZoom: 0.5, // 最小缩放比率
      maxZoom: 2 // 最大缩放比率
    };
  }
  componentDidMount() {
    const editor = new G6Editor();
    const height = window.innerHeight - 38;
    const minimap = new G6Editor.Minimap({
      container: 'minimap',
      height: 120,
      width: 200
    });
    const toolbar = new G6Editor.Toolbar({
      container: 'toolbar',
    });
    const itempannel = new G6Editor.Itempannel({
      container: 'itempannel',
    });
    const page = new G6Editor.Flow({
      graph: {
        container: 'page',
        height
      },
      align: {
        grid: true
      },
      noEndEdge: false,
      edgeResizeable: false
    });
    page.on('afteritemselected', ev => {
      this.setState({
        selectedModel: ev.item.getModel()
      });
    });
    page.on('afterzoom', ev => {
      this.setState({
        curZoom: ev.updateMatrix[0]
      });
    });
    page.showGrid();
    editor.add(minimap);
    editor.add(itempannel);
    this.page = page;

    editor.add(toolbar);
    editor.add(page);
  }
  render() {
    return <div></div>
  }
}

export default Editor;

// module.exports = Editor;
