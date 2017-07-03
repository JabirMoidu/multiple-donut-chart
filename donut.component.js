(function(myApp) {
  

  var donutComOpt = {
      template: '<div id="container-{{$id}}" class="main-container__chart-com"></div>',
      binding : {
        data : '<',
        title : '<'
      },
      controller: function($scope, $element,$attrs){
        
      console.log(angular.element($element));
        var data = JSON.parse($attrs.data),
            title = $attrs.title,
            renderToEle = "container-"+$scope.$id;
           console.log(renderToEle);
        
        this.$onInit = function(){

            setTimeout(function() {
                 Highcharts.chart({
          chart: {
              type: 'pie',
              options3d: {
                  enabled: true,
                  alpha: 45
              },
              renderTo : renderToEle
              

          },
          title: {
              text: title
          },
          subtitle: {
              text: ''
          },
          plotOptions: {
              pie: {
                  innerSize: 100,
                  depth: 45
              }
          },
          series: [{
            name: 'Total:',
            data : data
              
          }]
      });   
            }, 0);
          
      
   
  }; 
      }
  }
  
  myApp.donutModule.component('donutCom', donutComOpt);
 
})(myApp || {});