module.exports = [
  {
    name: '投资估算',
    base: [
      {
        name: '投资估算造价',
        standard: [
          {
            from: 0,
            to: 200,
            rate: 0.0008
          }, {
            from: 200,
            to: 500,
            rate: 0.0007
          }, {
            from: 500,
            to: 2000,
            rate: 0.0006
          }, {
            from: 2000,
            to: 10000,
            rate: 0.0005
          }, {
            from: 10000,
            to: 'infinity',
            rate: 0.0003
          }
        ]
      }
    ]
  }, {
    name: '经济评价',
    base: [
      {
        name: '投资估算造价',
        standard: [
          {
            from: 0,
            to: 200,
            rate: 0.0008
          }, {
            from: 200,
            to: 500,
            rate: 0.0007
          }, {
            from: 500,
            to: 2000,
            rate: 0.0006
          }, {
            from: 2000,
            to: 10000,
            rate: 0.0005
          }, {
            from: 10000,
            to: 'infinity',
            rate: 0.0003
          }
        ]
      }
    ]
  }, {
    name: '概算编制',
    base: [
      {
        name: '这级概算造价',
        standard: [
          {
            from: 0,
            to: 200,
            rate: 0.003
          }, {
            from: 200,
            to: 500,
            rate: 0.0025
          }, {
            from: 500,
            to: 2000,
            rate: 0.002
          }, {
            from: 2000,
            to: 10000,
            rate: 0.0018
          }, {
            from: 10000,
            to: 'infinity',
            rate: 0.0016
          }
        ]
      }
    ]
  }, {
    name: '概算审核',
    base: [
      {
        name: '投资概算造价',
        standard: [
          {
            from: 0,
            to: 200,
            rate: 0.002
          }, {
            from: 200,
            to: 500,
            rate: 0.0018
          }, {
            from: 500,
            to: 2000,
            rate: 0.0015
          }, {
            from: 2000,
            to: 10000,
            rate: 0.0012
          }, {
            from: 10000,
            to: 'infinity',
            rate: 0.001
          }
        ]
      }
    ]
  }, {
    name: '预算编制',
    base: [
      {
        name: '建筑安装工程造价',
        standard: [
          {
            from: 0,
            to: 200,
            rate: 0.004
          }, {
            from: 200,
            to: 500,
            rate: 0.0035
          }, {
            from: 500,
            to: 2000,
            rate: 0.003
          }, {
            from: 2000,
            to: 10000,
            rate: 0.0025
          }, {
            from: 10000,
            to: 'infinity',
            rate: 0.002
          }
        ]
      }
    ]
  }, {
    name: '预算审核',
    base: [
      {
        name: '建筑安装工程造价',
        standard: [
          {
            from: 0,
            to: 200,
            rate: 0.0032
          }, {
            from: 200,
            to: 500,
            rate: 0.0028
          }, {
            from: 500,
            to: 2000,
            rate: 0.0024
          }, {
            from: 2000,
            to: 10000,
            rate: 0.002
          }, {
            from: 10000,
            to: 'infinity',
            rate: 0.0016
          }
        ]
      }
    ]
  }, {
    name: '工程清单编制(或审核)',
    base: [
      {
        name: '建筑安装工程造价',
        standard: [
          {
            from: 0,
            to: 200,
            rate: 0.005
          }, {
            from: 200,
            to: 500,
            rate: 0.004
          }, {
            from: 500,
            to: 2000,
            rate: 0.003
          }, {
            from: 2000,
            to: 10000,
            rate: 0.0022
          }, {
            from: 10000,
            to: 'infinity',
            rate: 0.0018
          }
        ]
      }
    ]
  }, {
    name: '招标控制价(最高投标限价)编制(或审核)',
    base: [
      {
        name: '建筑安装工程造价',
        standard: [
          {
            from: 0,
            to: 200,
            rate: 0.002
          }, {
            from: 200,
            to: 500,
            rate: 0.0018
          }, {
            from: 500,
            to: 2000,
            rate: 0.0014
          }, {
            from: 2000,
            to: 10000,
            rate: 0.0016
          }, {
            from: 10000,
            to: 'infinity',
            rate: 0.0012
          }
        ]
      }
    ]
  }, {
    name: '投标报价分析(清标)',
    base: [
      {
        name: '最高投标限价',
        standard: [
          {
            from: 0,
            to: 200,
            rate: 0.0006
          }, {
            from: 200,
            to: 500,
            rate: 0.0005
          }, {
            from: 500,
            to: 2000,
            rate: 0.0004
          }, {
            from: 2000,
            to: 10000,
            rate: 0.0003
          }, {
            from: 10000,
            to: 'infinity',
            rate: 0.0002
          }
        ]
      }
    ]
  }, {
    name: '施工阶段造价咨询',
    base: [
      {
        name: '基本收费/建筑安装工程造价',
        standard: [
          {
            from: 0,
            to: 200,
            rate: 0
          }, {
            from: 200,
            to: 500,
            rate: 0
          }, {
            from: 500,
            to: 2000,
            rate: 0.008
          }, {
            from: 2000,
            to: 10000,
            rate: 0.006
          }, {
            from: 10000,
            to: 'infinity',
            rate: 0.004
          }
        ]
      }, {
        name: '效益收费/审减额+审增额',
        standard: [
          {
            from: 0,
            to: 200,
            rate: 0.005
          }, {
            from: 200,
            to: 500,
            rate: 0.005
          }, {
            from: 500,
            to: 2000,
            rate: 0.005
          }, {
            from: 2000,
            to: 10000,
            rate: 0.005
          }, {
            from: 10000,
            to: 'infinity',
            rate: 0.005
          }
        ]
      }
    ]
  }, {
    name: '结算编制',
    base: [
      {
        name: '建筑安装工程造价',
        standard: [
          {
            from: 0,
            to: 200,
            rate: 0.005
          }, {
            from: 200,
            to: 500,
            rate: 0.0045
          }, {
            from: 500,
            to: 2000,
            rate: 0.004
          }, {
            from: 2000,
            to: 10000,
            rate: 0.0035
          }, {
            from: 10000,
            to: 'infinity',
            rate: 0.003
          }
        ]
      }
    ]
  }, {
    name: '结算审核',
    base: [
      {
        name: '基本收费/建筑安装工程送审造价',
        standard: [
          {
            from: 0,
            to: 200,
            rate: 0.0045
          }, {
            from: 200,
            to: 500,
            rate: 0.004
          }, {
            from: 500,
            to: 2000,
            rate: 0.0035
          }, {
            from: 2000,
            to: 10000,
            rate: 0.003
          }, {
            from: 10000,
            to: 'infinity',
            rate: 0.0025
          }
        ]
      }, {
        name: '效益收费/审减额+审增额',
        standard: [
          {
            from: 0,
            to: 200,
            rate: 0.008
          }, {
            from: 200,
            to: 500,
            rate: 0.008
          }, {
            from: 500,
            to: 2000,
            rate: 0.008
          }, {
            from: 2000,
            to: 10000,
            rate: 0.008
          }, {
            from: 10000,
            to: 'infinity',
            rate: 0.008
          }
        ]
      }
    ]
  }, {
    name: '竣工决算编制',
    base: [
      {
        name: '建设项目总投资',
        standard: [
          {
            from: 0,
            to: 200,
            rate: 0.002
          }, {
            from: 200,
            to: 500,
            rate: 0.0015
          }, {
            from: 500,
            to: 2000,
            rate: 0.0012
          }, {
            from: 2000,
            to: 10000,
            rate: 0.001
          }, {
            from: 10000,
            to: 'infinity',
            rate: 0.0008
          }
        ]
      }
    ]
  }, {
    name: '全过程造价咨询',
    base: [
      {
        name: '基本收费/建筑安装工程送审造价',
        standard: [
          {
            from: 0,
            to: 200,
            rate: 0
          }, {
            from: 200,
            to: 500,
            rate: 0
          }, {
            from: 500,
            to: 2000,
            rate: 0.013
          }, {
            from: 2000,
            to: 10000,
            rate: 0.010
          }, {
            from: 10000,
            to: 'infinity',
            rate: 0.008
          }
        ]
      }, {
        name: '效益收费/审减额+审增额',
        standard: [
          {
            from: 0,
            to: 200,
            rate: 0.005
          }, {
            from: 200,
            to: 500,
            rate: 0.005
          }, {
            from: 500,
            to: 2000,
            rate: 0.005
          }, {
            from: 2000,
            to: 10000,
            rate: 0.005
          }, {
            from: 10000,
            to: 'infinity',
            rate: 0.005
          }
        ]
      }
    ]
  }, {
    name: '工程造价鉴定',
    base: [
      {
        name: '鉴定标的额',
        standard: [
          {
            from: 0,
            to: 200,
            rate: 0.012
          }, {
            from: 200,
            to: 500,
            rate: 0.010
          }, {
            from: 500,
            to: 2000,
            rate: 0.008
          }, {
            from: 2000,
            to: 10000,
            rate: 0.006
          }, {
            from: 10000,
            to: 'infinity',
            rate: 0.005
          }
        ]
      }
    ]
  }
]