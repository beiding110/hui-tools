module.exports = {
  type: [
    {
      value: '故障',
      icon: 'warning',
      color: '#FF976A'
    }, {
      value: '任务',
      icon: 'info',
      color: '#1989FA'
    }, {
      value: '故事',
      icon: 'smile',
      color: '#07C160'
    }
  ],
  grade: [
    {
      value: 'heighest',
      icon: 'arrow-up',
      color: '#CE0000'
    }, {
      value: 'heigh',
      icon: 'arrow-up',
      color: '#EA4444'
    }, {
      value: 'medium',
      icon: 'arrow-down',
      color: '#EA7D24'
    }, {
      value: 'low',
      icon: 'arrow-down',
      color: '#2A8735'
    }, {
      value: 'lowest',
      icon: 'arrow-down',
      color: '#55A557'
    }
  ],
  cols: [
    {
      text: '待办',
      tag: 'primary',
      dobj: 0
    }, {
      text: '处理中',
      tag: 'warning',
      dobj: 1
    }, {
      text: '完成',
      tag: 'success',
      dobj: 2
    },
  ]
}