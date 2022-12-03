
(function ($) {
    "use strict";

    // Worldwide Sales Chart
    var ctx1 = $("#worldwide-sales").get(0).getContext("2d");
    var myChart1 = new Chart(ctx1, {
        type: "bar",
        data: {
            labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
            datasets: [{
                    label: "Çiçek",
                    data: [15, 30, 55, 65, 60, 80, 95],
                    backgroundColor: "rgba(95, 158, 160,.5)"
                },
                {
                    label: "Meyve-Sebze",
                    data: [8, 35, 40, 60, 70, 55, 75],
                    backgroundColor: "rgba(170, 255, 0, .5)"
                },
                {
                    label: "Ağaç",
                    data: [12, 25, 45, 55, 65, 70, 60],
                    backgroundColor: "rgba(80, 200, 120,.5)"
                }
            ]
            },
        options: {
            responsive: true
        }
    });


    // Salse & Revenue Chart
    var ctx2 = $("#salse-revenue").get(0).getContext("2d");
    var myChart2 = new Chart(ctx2, {
        type: "bar",
        data: {
            labels: ["2017", "2018", "2019", "2020", "2021", "2022"],
            datasets: [{
                    label: "Tohumlar",
                    data: [15, 30, 55, 65, 60, 80, 95],
                    backgroundColor: "rgba(170, 255, 0, .5)"
                },
                {
                    label: "Bitkiler",
                    data: [8, 35, 40, 60, 70, 55, 75],
                    backgroundColor: "rgba(228, 208, 10,.8)"
                },
                {
                    label: "Toprak-Gübre",
                    data: [12, 25, 45, 55, 65, 70, 60],
                    backgroundColor: "rgba(53, 94, 59,.5)"
                }
                
            ]
            },
        options: {
            responsive: true
        }
    });
    


    // Single Line Chart
    var ctx3 = $("#line-chart").get(0).getContext("2d");
    var myChart3 = new Chart(ctx3, {
        type: "doughnut",
        data: {
            labels: ["Tohumlar", "Bitkiler", "Toprak-Gübre", "Bahçe Malzemeleri"],
            datasets: [{
                backgroundColor: [
                    "rgba(170, 255, 0, .5)",
                    "rgba(228, 208, 10,.8)",
                    "rgba(53, 94, 59,.5)",
                    "rgba(193, 225, 193,.5)",
                ],
                data: [55, 49, 44, 24]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Single Bar Chart
    var ctx4 = $("#bar-chart").get(0).getContext("2d");
    var myChart4 = new Chart(ctx4, {
        type: "doughnut",
        data: {
            labels: ["Çiçek", "Meyve", "Sebze", "Ağaç"],
            datasets: [{
                backgroundColor: [
                    "rgba(95, 158, 160,.5)",
                    "rgba(170, 255, 0, .5)",
                    "rgba(80, 200, 120,.5)",
                    "rgba(228, 208, 10,.8)",
                ],
                data: [55, 49, 44, 24]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Pie Chart
    var ctx5 = $("#pie-chart").get(0).getContext("2d");
    var myChart5 = new Chart(ctx5, {
        type: "doughnut",
        data: {
            labels: ["Kaktüs-Sukulent", "Egzotik Bitkiler", "Süs Bitkileri"],
            datasets: [{
                backgroundColor: [
                    "rgba(228, 208, 10,.8)",
                    "rgba(223, 255, 0,.5)",
                    "rgba(95, 158, 160,.5)",
                ],
                data: [55, 49, 44]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Doughnut Chart
    var ctx6 = $("#doughnut-chart").get(0).getContext("2d");
    var myChart6 = new Chart(ctx6, {
        type: "bar",
        data: {
            labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
            datasets: [{
                    label: "Kaktüs-Sukulent",
                    data: [15, 30, 55, 65, 60, 80, 95],
                    backgroundColor: "rgba(228, 208, 10,.8)"
                },
                {
                    label: "Egzotik Bitkiler",
                    data: [8, 35, 40, 60, 70, 55, 75],
                    backgroundColor: "rgba(223, 255, 0,.5)"
                },
                {
                    label: "Süs Bitkileri",
                    data: [12, 25, 45, 55, 65, 70, 60],
                    backgroundColor: "rgba(95, 158, 160,.5)"
                }
            ]
            },
        options: {
            responsive: true
        }
    });

    var ctx7 = $("#pie-char").get(0).getContext("2d");
    var myChart5 = new Chart(ctx7, {
        type: "doughnut",
        data: {
            labels: ["Saksılar", "Dekoratif Ürünler"],
            datasets: [{
                backgroundColor: [
                    "rgba(170, 255, 0, .5)",
                    "rgba(95, 158, 160,.5)",
                    
                ],
                data: [55, 49]
            }]
        },
        options: {
            responsive: true
        }
    });


    // Doughnut Chart
    var ctx8 = $("#doughnut-char").get(0).getContext("2d");
    var myChart6 = new Chart(ctx8, {
        type: "bar",
        data: {
            labels: ["2016", "2017", "2018", "2019", "2020", "2021", "2022"],
            datasets: [{
                    label: "Saksılar",
                    data: [15, 30, 55, 65, 60, 80, 95],
                    backgroundColor: "rgba(170, 255, 0, .5)"
                },
                {
                    label: "Dekoratif Ürünler",
                    data: [8, 35, 40, 60, 70, 55, 75],
                    backgroundColor: "rgba(95, 158, 160,.5)"
                },
            ]
            },
        options: {
            responsive: true
        }
    });

    
})(jQuery);

