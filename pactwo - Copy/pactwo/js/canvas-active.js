 

(function ($) {
	"use strict";
    
    window.onload = function () {
        var chart1 = new CanvasJS.Chart("chartContainer",
        {
            backgroundColor: "#F5F7F9",
            animationEnabled: true,   
            axisY:{
            gridThickness: 0,
            },            
            data: [{   
                fillOpacity: .85,   
                type: "splineArea",
                color: "#083561",
                labelFontSize:0,
                markerSize: 7,
                markerColor: "#083561",
                markerBorderColor: "#083561", //change color here
                markerBorderThickness: 1,
                showInLegend: false,
                risingColor: "#083561",
                dataPoints: [
                {y: 0},     
                {y: 0},     
                {y: 10},     
                {y: 40},     
                {y: 75},     
                {y: 20},     
                {y: 0},     
                {y: 9},     
                {y: 58},     
                {y: 11},     
                {y: 0},     
                {y: 0}             
                ]
            },
            {   
                fillOpacity: .85,      
                type: "splineArea",
                color: "#A9A9AA",
                labelFontSize:0,
                markerSize: 7,
                markerColor: "#A9A9AA",
                markerBorderColor: "#A9A9AA", //change color here
                markerBorderThickness: 1,
                showInLegend: false,
                dataPoints: [
                {y: 0},     
                {y: 6},     
                {y: 52},     
                {y: 10},     
                {y: 0},      
                {y: 4},     
                {y: 45},      
                {y: 0},     
                {y: 0},     
                {y: 4},    
                {y: 36},    
                {y: 0}             
                ]
            }]
        });
        chart1.render();
    };
 
})(jQuery);  