const getOptionChart1 = () => {
    return {
        tooltip: {
            trigger: 'item'
        },
        visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
                colorLightness: [0, 1]
            }
        },
        series: [
            {
                name: 'NIVEL 0/500',
                type: 'pie',
                radius: '60%',
                center: ['50%', '50%'],
                data: [
                    { value: 300, name: 'Comunicacion' },
                    { value: 200, name: 'Trabajo en equipo' },
                    { value: 250, name: 'Liderazgo' },
                    { value: 400, name: 'Resolucion de problemas' },
                    { value: 350, name: 'Inteligencia Emocional' },
                    { value: 450, name: 'Pensamiento critico' },
                ].sort(function (a, b) {
                    return a.value - b.value;
                }),
                roseType: 'radius',
                label: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                labelLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                },
                itemStyle: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                },
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
            }
        ]
    };
};

const getOptionChart2 = () => {
    return {
        dataset: {
            source: [
                ['score', 'amount', 'product'],
                [600, 600, 'SQL'],
                [850, 850, 'Python'],
                [600, 600, 'JavaScript'],
                [400, 400, 'C++'],
                [900, 900, 'HTML'], 
                [300, 300, 'Java'],
                [800, 800, 'CSS'],
            ]

        },
        grid: { containLabel: true },
        xAxis: { name: 'NIVEL' },
        yAxis: { type: 'category', name:'LENGUAJE' },
        visualMap: {
            orient: 'horizontal',
            left: 'center',
            min: 0,
            max: 1000,
            text: ['High Score', 'Low Score'],
            // Map the score column to color
            dimension: 0,
            inRange: {
                color: ['#000000ff', '#970000ff', '#ff0000ff']
            }
        },
        series: [
            {
                type: 'bar',
                encode: {
                    // Map the "amount" column to X axis.
                    x: 'amount',
                    // Map the "product" column to Y axis
                    y: 'product'
                }
            }
        ]
    };
}

const initCharts = () => {
    const el1 = document.getElementById("chart1");
    const el2 = document.getElementById("chart2");

    if (!el1 && !el2) {
        console.warn("No elements with ids 'chart1' or 'chart2' found.");
        return;
    }

    let chart1 = null;
    let chart2 = null;

    if (el1) {
        chart1 = echarts.init(el1);
        chart1.setOption(getOptionChart1());
    }

    if (el2) {
        chart2 = echarts.init(el2);
        chart2.setOption(getOptionChart2());
    }

    window.addEventListener("resize", () => {
        if (chart1) chart1.resize();
        if (chart2) chart2.resize();
    });
};

window.addEventListener("load", () => {
    initCharts();
});
