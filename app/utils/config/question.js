const question = {
    basic:[
        {
            id: '1',
            detail: '',
            content: '性別?',
            feedback: {
                A: 'A',
                B: 'B'
            },
            description: {
                A: '男',
                B: '女'
            },
            age_group: {
                baby:true,
                pedo:true,
                child:true,
                young:true,
                adult:true,
                old:true
            },
            gender: {
                male:true,
                female:true
            }
        },
        {
            id: '2',
            detail: '',
            content: '腰圍 (男)',
            feedback: {
                A: 'A',
                B: 'B'
            },
            description: {
                A: '> 90公分',
                B: '< 90公分'
            },
            age_group: {
                baby:true,
                pedo:true,
                child:true,
                young:true,
                adult:true,
                old:true
            },
            gender: {
                male:true,
                female:false
            }
        },
        {
            id: '3',
            detail: 'BMI = 體重(公斤) / 身高²(公尺)。 例如：一個52公斤的人，身高是155公分，則BMI為: 52(公斤)/1.55² ( 公尺 )= 21.6',
            content: 'BMI',
            feedback: {
                A: 'A',
                B: 'B',
                C: 'C'
            },
            description: {
                A: '過輕（BMI＞18.5）',
                B: '正常（18.5 ≦ BMI ＜ 23.9）',
                C: '過重或肥胖（BMI ≧ 24）'
            },
            age_group: {
                baby:true,
                pedo:true,
                child:true,
                young:true,
                adult:true,
                old:true
            },
            gender: {
                male:true,
                female:false
            }
        },
        {
            id: '4',
            detail: '',
            content: '年齡',
            feedback: {
                A: 'A',
                B: 'B',
                C: 'C',
                D: 'D',
                E: 'E',
                F: 'F'
            },
            description: {
                A: '１歲以下',
                B: '１歲以上，３歲以下',
                C: '４歲以上，１２歲以下',
                D: '１３歲以上，３０歲以下',
                E: '３１歲以上，４０歲以下',
                F: '４０歲以上'
            },
            age_group: {
                baby:true,
                pedo:true,
                child:true,
                young:true,
                adult:true,
                old:true
            },
            gender: {
                male:true,
                female:false
            }
        },
    ],
    common:[
        {
            id: '1',
            content: '常吃食品添加物或仿腐劑和抗生素的食物',
            age_group: {
                baby:true,
                pedo:true,
                child:true,
                young:true,
                adult:true,
                old:true
            },
            gender: {
                male:true,
                female:true
            }
        },
        {
            id: '2',
            content: '吃東西會不會田盤子或湯尺',
            age_group: {
                baby:true,
                pedo:true,
                child:true,
                young:true,
                adult:true,
                old:true
            },
            gender: {
                male:true,
                female:true
            }
        },
        {
            id: '3',
            content: '是否有過敏：免疫系統會比較低無法正常運作',
            age_group: {
                baby:true,
                pedo:true,
                child:true,
                young:true,
                adult:false,
                old:true
            },
            gender: {
                male:true,
                female:true
            }
        },
        {
            id: '4',
            content: '30~40歲的人有沒有常吃碳水化合物、水溶性纖維、寡糖　P.133.138',
            age_group: {
                baby:true,
                pedo:true,
                child:true,
                young:true,
                adult:false,
                old:true
            },
            gender: {
                male:true,
                female:true
            }
        },
        {
            id: '5',
            content: '是否常吃肉類食物或油炸使品，睡眠品質是否良好，最近是否感到有壓力(容易長壞菌)',
            age_group: {
                baby:true,
                pedo:true,
                child:true,
                young:true,
                adult:false,
                old:true
            },
            gender: {
                male:true,
                female:true
            }
        },
        {
            id: '6',
            content: '最近是否感到幸福感',
            age_group: {
                baby:true,
                pedo:true,
                child:true,
                young:true,
                adult:false,
                old:true
            },
            gender: {
                male:true,
                female:true
            }
        },
        {
            id: '7',
            content: '最近是否有在吃味噌、納豆、醬菜、起司、優酪乳...等發酵食品',
            age_group: {
                baby:true,
                pedo:true,
                child:true,
                young:true,
                adult:false,
                old:true
            },
            gender: {
                male:true,
                female:true
            }
        },
        {
            id: '8',
            content: '排便檢測：大雨如瀉型、土石流型、小石頭型、香蕉型、細長型、泥巴型 P202',
            age_group: {
                baby:true,
                pedo:true,
                child:true,
                young:true,
                adult:false,
                old:true
            },
            gender: {
                male:true,
                female:true
            }
        },
        {
            id: '9',
            content: '你所處的生活環境是否經常是乾淨的',
            age_group: {
                baby:true,
                pedo:true,
                child:true,
                young:true,
                adult:false,
                old:true
            },
            gender: {
                male:true,
                female:true
            }
        },
        {
            id: '10',
            content: '吃東西是否有養成是取食物時多咀嚼幾下',
            age_group: {
                baby:true,
                pedo:true,
                child:true,
                young:true,
                adult:false,
                old:true
            },
            gender: {
                male:true,
                female:true
            }
        },
        {
            id: '11',
            content: '平時是否有做適度的運動',
            age_group: {
                baby:true,
                pedo:true,
                child:true,
                young:true,
                adult:false,
                old:true
            },
            gender: {
                male:true,
                female:true
            }
        },
        {
            id: '12',
            content: '是否常常將手機放在靠近自己的地方，或是常接近有電磁波的地方',
            age_group: {
                baby:true,
                pedo:true,
                child:true,
                young:true,
                adult:false,
                old:true
            },
            gender: {
                male:true,
                female:true
            }
        }
    ]





};

exports = module.exports = { question };

