const datetimePicker = document.querySelector("#datetimepicker-dashboard");
const chartjsline = document.querySelector("#chartjs-dashboard-line");
const chartjsline1 = document.querySelector('#chartjs-line');
const chartjspie = document.querySelector("#chartjs-dashboard-pie");
const chartjspie1 = document.querySelector('#chartjs-pie');
const chartjsbar = document.querySelector("#chartjs-dashboard-bar");
const chartjsbar1 = document.querySelector('#chartjs-bar');
const map = document.querySelector('#world_map');
const chartjspolar = document.querySelector('#chartjs-polar-area');
const chartjsdoughnut = document.querySelector('#chartjs-doughnut');

if(chartjsline) {
    document.addEventListener("DOMContentLoaded", function () {
        let ctx = chartjsline.getContext("2d");
        let gradient = ctx.createLinearGradient(0, 0, 0, 225);
        gradient.addColorStop(0, "rgba(215, 227, 244, 1)");
        gradient.addColorStop(1, "rgba(215, 227, 244, 0)");
        // Line chart
        new Chart(chartjsline, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    label: "Sales ($)",
                    fill: true,
                    backgroundColor: gradient,
                    borderColor: window.theme.primary,
                    data: [
                        2115,
                        1562,
                        1584,
                        1892,
                        1587,
                        1923,
                        2566,
                        2448,
                        2805,
                        3438,
                        2917,
                        3327
                    ]
                }]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                tooltips: {
                    intersect: false
                },
                hover: {
                    intersect: true
                },
                plugins: {
                    filler: {
                        propagate: false
                    }
                },
                scales: {
                    xAxes: [{
                        reverse: true,
                        gridLines: {
                            color: "rgba(0,0,0,0.0)"
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            stepSize: 1000
                        },
                        display: true,
                        borderDash: [3, 3],
                        gridLines: {
                            color: "rgba(0,0,0,0.0)"
                        }
                    }]
                }
            }
        });
    });
}

if(chartjspie) {
    document.addEventListener("DOMContentLoaded", function () {
        // Pie chart
        new Chart(chartjspie, {
            type: "pie",
            data: {
                labels: ["Chrome", "Firefox", "IE"],
                datasets: [{
                    data: [4306, 3801, 1689],
                    backgroundColor: [
                        window.theme.primary,
                        window.theme.warning,
                        window.theme.danger
                    ],
                    borderWidth: 5
                }]
            },
            options: {
                responsive: !window.MSInputMethodContext,
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                cutoutPercentage: 75
            }
        });
    });
}

if(chartjsbar) {
    document.addEventListener("DOMContentLoaded", function () {
        // Bar chart
        new Chart(chartjsbar, {
            type: "bar",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    label: "This year",
                    backgroundColor: window.theme.primary,
                    borderColor: window.theme.primary,
                    hoverBackgroundColor: window.theme.primary,
                    hoverBorderColor: window.theme.primary,
                    data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
                    barPercentage: .75,
                    categoryPercentage: .5
                }]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            display: false
                        },
                        stacked: false,
                        ticks: {
                            stepSize: 20
                        }
                    }],
                    xAxes: [{
                        stacked: false,
                        gridLines: {
                            color: "transparent"
                        }
                    }]
                }
            }
        });
    });
}

if(map) {
    document.addEventListener("DOMContentLoaded", function () {
        let markers = [{
            coords: [31.230391, 121.473701],
            name: "Shanghai"
        },
            {
                coords: [28.704060, 77.102493],
                name: "Delhi"
            },
            {
                coords: [6.524379, 3.379206],
                name: "Lagos"
            },
            {
                coords: [35.689487, 139.691711],
                name: "Tokyo"
            },
            {
                coords: [23.129110, 113.264381],
                name: "Guangzhou"
            },
            {
                coords: [40.7127837, -74.0059413],
                name: "New York"
            },
            {
                coords: [34.052235, -118.243683],
                name: "Los Angeles"
            },
            {
                coords: [41.878113, -87.629799],
                name: "Chicago"
            },
            {
                coords: [51.507351, -0.127758],
                name: "London"
            },
            {
                coords: [40.416775, -3.703790],
                name: "Madrid "
            }
        ];
        let map = new jsVectorMap({
            map: "world",
            selector: "#world_map",
            zoomButtons: true,
            markers: markers,
            markerStyle: {
                initial: {
                    r: 9,
                    strokeWidth: 7,
                    stokeOpacity: .4,
                    fill: window.theme.primary
                },
                hover: {
                    fill: window.theme.primary,
                    stroke: window.theme.primary
                }
            },
            zoomOnScroll: false
        });
        window.addEventListener("resize", () => {
            map.updateSize();
        });
    });
}

if(datetimePicker) {
    document.addEventListener("DOMContentLoaded", function () {
        let date = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000);
        let defaultDate = date.getUTCFullYear() + "-" + (date.getUTCMonth() + 1) + "-" + date.getUTCDate();
        datetimePicker.flatpickr({
            inline: true,
            prevArrow: "<span title=\"Previous month\">&laquo;</span>",
            nextArrow: "<span title=\"Next month\">&raquo;</span>",
            defaultDate: defaultDate
        });
    });
}

if(chartjspolar) {
    document.addEventListener("DOMContentLoaded", function () {
        // Polar Area chart
        new Chart(chartjspolar, {
            type: "polarArea",
            data: {
                labels: ["Speed", "Reliability", "Comfort", "Safety", "Efficiency"],
                datasets: [{
                    label: "Model S",
                    data: [35, 38, 65, 70, 24],
                    backgroundColor: [
                        window.theme.primary,
                        window.theme.success,
                        window.theme.danger,
                        window.theme.warning,
                        window.theme.info
                    ]
                }]
            },
            options: {
                maintainAspectRatio: false
            }
        });
    });
}

if(chartjspie1) {
    document.addEventListener("DOMContentLoaded", function () {
        // Pie chart
        new Chart(chartjspie1, {
            type: "pie",
            data: {
                labels: ["Social", "Search Engines", "Direct", "Other"],
                datasets: [{
                    data: [260, 125, 54, 146],
                    backgroundColor: [
                        window.theme.primary,
                        window.theme.warning,
                        window.theme.danger,
                        "#dee2e6"
                    ],
                    borderColor: "transparent"
                }]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false
                }
            }
        });
    });
}

if(chartjsbar1) {
    document.addEventListener("DOMContentLoaded", function () {
        // Bar chart
        new Chart(chartjsbar1, {
            type: "bar",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    label: "Last year",
                    backgroundColor: window.theme.primary,
                    borderColor: window.theme.primary,
                    hoverBackgroundColor: window.theme.primary,
                    hoverBorderColor: window.theme.primary,
                    data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
                    barPercentage: .75,
                    categoryPercentage: .5
                }, {
                    label: "This year",
                    backgroundColor: "#dee2e6",
                    borderColor: "#dee2e6",
                    hoverBackgroundColor: "#dee2e6",
                    hoverBorderColor: "#dee2e6",
                    data: [69, 66, 24, 48, 52, 51, 44, 53, 62, 79, 51, 68],
                    barPercentage: .75,
                    categoryPercentage: .5
                }]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            display: false
                        },
                        stacked: false,
                        ticks: {
                            stepSize: 20
                        }
                    }],
                    xAxes: [{
                        stacked: false,
                        gridLines: {
                            color: "transparent"
                        }
                    }]
                }
            }
        });
    });
}

if(chartjsdoughnut) {
    document.addEventListener("DOMContentLoaded", function () {
        // Doughnut chart
        new Chart(chartjsdoughnut, {
            type: "doughnut",
            data: {
                labels: ["Social", "Search Engines", "Direct", "Other"],
                datasets: [{
                    data: [260, 125, 54, 146],
                    backgroundColor: [
                        window.theme.primary,
                        window.theme.success,
                        window.theme.warning,
                        "#dee2e6"
                    ],
                    borderColor: "transparent"
                }]
            },
            options: {
                maintainAspectRatio: false,
                cutoutPercentage: 65,
                legend: {
                    display: false
                }
            }
        });
    });
}

if(chartjsline1) {
    document.addEventListener("DOMContentLoaded", function() {
        // Line chart
        new Chart(chartjsline1, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    label: "Sales ($)",
                    fill: true,
                    backgroundColor: "transparent",
                    borderColor: window.theme.primary,
                    data: [2115, 1562, 1584, 1892, 1487, 2223, 2966, 2448, 2905, 3838, 2917, 3327]
                }, {
                    label: "Orders",
                    fill: true,
                    backgroundColor: "transparent",
                    borderColor: "#adb5bd",
                    borderDash: [4, 4],
                    data: [958, 724, 629, 883, 915, 1214, 1476, 1212, 1554, 2128, 1466, 1827]
                }]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                tooltips: {
                    intersect: false
                },
                hover: {
                    intersect: true
                },
                plugins: {
                    filler: {
                        propagate: false
                    }
                },
                scales: {
                    xAxes: [{
                        reverse: true,
                        gridLines: {
                            color: "rgba(0,0,0,0.05)"
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            stepSize: 500
                        },
                        display: true,
                        borderDash: [5, 5],
                        gridLines: {
                            color: "rgba(0,0,0,0)",
                            fontColor: "#fff"
                        }
                    }]
                }
            }
        });
    });
}

const theme = localStorage.getItem('adminkit_config_theme');
let checkbox = document.querySelector('.theme').value = theme;

if(checkbox === 'dark') {
    document.querySelector('.theme').checked = true;
}

document.querySelector('.theme').addEventListener('change', () => {
    const version = new Date().getTime();

    if(checkbox === 'dark') {
        localStorage.setItem('adminkit_config_theme', 'default');
        document.getElementById('js-stylesheet').setAttribute('href', `css/light.css?v=${version}`);
        checkbox = 'default';
    } else {
        localStorage.setItem('adminkit_config_theme', 'dark');
        checkbox = 'dark';
        document.getElementById('js-stylesheet').setAttribute('href', `css/dark.css?v=${version}`);
    }
});
