import { Component, OnInit } from '@angular/core';
import axios from 'axios';

// https://www.fusioncharts.com/dev/themes/introduction-to-themes
// https://jsfiddle.net/fusioncharts/0dtjw8a5/
// https://www.fusioncharts.com/dev/themes/theme-manager
// http://angular-material.fusetheme.com/apps/calendar	///example of dashboard

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})

export class StatisticsComponent implements OnInit {

	lastPostsCreated: null;

	dataSource: Object;
	dataSource2: Object;
	dataSource3: Object;
	dataSource4: Object;	//pie2d - support de navigation
	dataSource5: Object;	//pie2d - langue par visiteur
	dataSource6: Object;	//mscombi2d - blog cree les 7 derniers jours
	dataSource7: Object;	//bar2d - articles les plus populaires

	dataSource8: Object;	//candelstick simple
	dataSource9: Object;	//angulargauge
	dataSource10: Object;	//cylinder
	dataSource11: Object;	//candelstick with custom trends
	dataSource12: Object;	//
	dataSource13: Object;	//

  async getStats(){

	  /* articles - derniers publications */
	  await axios.get('http://charts.mayan-payments.com/api/wmb/getData?type=9')
		.then(response => {
		  this.lastPostsCreated = response.data.data.multiData.dataSet;
		})	  

	  /* articles les plus populaires */
	  await axios.get('http://charts.mayan-payments.com/api/wmb/getData?type=8')
		.then(response => {

		  this.dataSource12 = {
			"chart": response.data.data.chartHeader,
			"data": response.data.data.multiData.dataSet
		  };

		})	  

	  /* articles les plus populaires */
	  
	  await axios.get('http://charts.mayan-payments.com/api/wmb/getData?type=7')
		.then(response => {

		  response.data.data.chartHeader.subCaption = ''
		  response.data.data.chartHeader.yAxisName = 'Vues'
		  this.dataSource7 = {
			chart: response.data.data.chartHeader,
			data:response.data.data.chartData, 
		  };

		})	  

	  /* 7 derniesr jours */
	  
	  await axios.get('http://charts.mayan-payments.com/api/wmb/getData?type=6')
		.then(response => {
			
			  console.log(response.data.data.chartHeader)
			  
			  this.dataSource6 = {
				  "chart": response.data.data.chartHeader,
				  "categories": [{							//	period de temps
					 "category": response.data.data.multiData.period
				  }],
				  "dataset": [
				  {
					 "seriesName": "Articles",	
					 "renderAs": "line",
					 "data": response.data.data.multiData.dataSet
				  },
				  {
					 "seriesName": "Groupes",
					 "renderAs": "area",
					 "data": response.data.data.multiData.dataSet2
				  }, 
				  ]
			  };
		})

	  await axios.get('http://charts.mayan-payments.com/api/wmb/getData?type=5')
		.then(response => {

		  this.dataSource5 = {
			chart: response.data.data.chartHeader,
			data:response.data.data.chartData, 
		  };

		})	  
	  
	  await axios.get('http://charts.mayan-payments.com/api/wmb/getData?type=4')
		.then(response => {
			
		  this.dataSource4 = {
			chart: response.data.data.chartHeader,
			data:response.data.data.chartData, 
		  };

		})	  
	  
	  await axios.get('http://charts.mayan-payments.com/api/wmb/getData?type=3')
		.then(response => {

		  this.dataSource3 = {
			chart: response.data.data.chartHeader,
			data:response.data.data.chartData, 
		  };

		})	  
	  
	  await axios.get('http://charts.mayan-payments.com/api/wmb/getData?type=1')
		.then(response => {
			
			  this.dataSource = {
				  "chart": response.data.data.chartHeader,
				  "categories": [{							//	period de temps
					 "category": response.data.data.multiData.period
				  }],
				  "dataset": [
				  {								//	inscription sponsorise
					 "seriesName": "Données",	
					 "data": response.data.data.multiData.dataSet
				  },
				  // {
					 // "seriesName": "Inscriptions",		//	inscriptions
					 // "renderAs": "line",
					 // "data": response.data.multiData.dataSet2
				  // }, 
				  // {
					 // "seriesName": "Inscr. parrainées",	// brulage de coupons 5chf
					 // "renderAs": "area",
					 // "showAnchors": "0",
					 // "data": response.data.multiData.dataSet3
				  // },
				  ]
			  };
		})

	  await axios.get('http://charts.mayan-payments.com/api/wmb/getData?type=2')
		.then(response => {
			
			  /* datasource */
			  this.dataSource2 = {
				  "chart": response.data.data.chartHeader,
				  "categories": [{							//	period de temps
					 "category": response.data.data.multiData.period
				  }],
				  "dataset": [
				  {								//	inscription sponsorise
					 "seriesName": "Données",	
					 "data": response.data.data.multiData.dataSet
				  },
				  // {
					 // "seriesName": "Inscriptions",		//	inscriptions
					 // "renderAs": "line",
					 // "data": response.data.multiData.dataSet2
				  // }, 
				  // {
					 // "seriesName": "Inscr. parrainées",	// brulage de coupons 5chf
					 // "renderAs": "area",
					 // "showAnchors": "0",
					 // "data": response.data.multiData.dataSet3
				  // },
				  ]
			  };

		})










	  this.dataSource11 = {
		  
  "chart": {
    "caption": "Bitcoin Price",
    "subcaption": "Q4-2017",
    "numberprefix": "$",
    "pyaxisname": "Price (USD)",
    "theme": "candy",
    "showvolumechart": "1",
    "vnumberprefix": "$",
    "vyaxisname": "Volume traded"
  },
  "categories": [
    {
      "category": [
        {
          "label": "Oct",
          "x": "1"
        },
        {
          "label": "Nov",
          "x": "32"
        },
        {
          "label": "Dec",
          "x": "62"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "tooltext": "<b>Oct 01, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 4341.05,
          "high": 4403.74,
          "low": 4269.81,
          "close": 4403.74,
          "volume": 1208210000,
          "x": 1
        },
        {
          "tooltext": "<b>Oct 02, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 4395.81,
          "high": 4470.23,
          "low": 4377.46,
          "close": 4409.32,
          "volume": 1431730000,
          "x": 2
        },
        {
          "tooltext": "<b>Oct 03, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 4408.46,
          "high": 4432.47,
          "low": 4258.89,
          "close": 4317.48,
          "volume": 1288020000,
          "x": 3
        },
        {
          "tooltext": "<b>Oct 04, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 4319.37,
          "high": 4352.31,
          "low": 4210.42,
          "close": 4229.36,
          "volume": 1116770000,
          "x": 4
        },
        {
          "tooltext": "<b>Oct 05, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 4229.88,
          "high": 4362.64,
          "low": 4164.05,
          "close": 4328.41,
          "volume": 1161770000,
          "x": 5
        },
        {
          "tooltext": "<b>Oct 06, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 4324.46,
          "high": 4413.27,
          "low": 4320.53,
          "close": 4370.81,
          "volume": 1069940000,
          "x": 6
        },
        {
          "tooltext": "<b>Oct 07, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 4369.35,
          "high": 4443.88,
          "low": 4321.05,
          "close": 4426.89,
          "volume": 906928000,
          "x": 7
        },
        {
          "tooltext": "<b>Oct 08, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 4429.67,
          "high": 4624.14,
          "low": 4405.64,
          "close": 4610.48,
          "volume": 1313870000,
          "x": 8
        },
        {
          "tooltext": "<b>Oct 09, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 4614.52,
          "high": 4878.71,
          "low": 4564.25,
          "close": 4772.02,
          "volume": 1968740000,
          "x": 9
        },
        {
          "tooltext": "<b>Oct 10, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 4776.21,
          "high": 4922.17,
          "low": 4765.1,
          "close": 4781.99,
          "volume": 1597140000,
          "x": 10
        },
        {
          "tooltext": "<b>Oct 11, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 4789.25,
          "high": 4873.73,
          "low": 4751.63,
          "close": 4826.48,
          "volume": 1222280000,
          "x": 11
        },
        {
          "tooltext": "<b>Oct 12, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 4829.58,
          "high": 5446.91,
          "low": 4822,
          "close": 5446.91,
          "volume": 2791610000,
          "x": 12
        },
        {
          "tooltext": "<b>Oct 13, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5464.16,
          "high": 5840.3,
          "low": 5436.85,
          "close": 5647.21,
          "volume": 3615480000,
          "x": 13
        },
        {
          "tooltext": "<b>Oct 14, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5643.53,
          "high": 5837.7,
          "low": 5591.64,
          "close": 5831.79,
          "volume": 1669030000,
          "x": 14
        },
        {
          "tooltext": "<b>Oct 15, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5835.96,
          "high": 5852.48,
          "low": 5478.61,
          "close": 5678.19,
          "volume": 1976040000,
          "x": 15
        },
        {
          "tooltext": "<b>Oct 16, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5687.57,
          "high": 5776.23,
          "low": 5544.21,
          "close": 5725.59,
          "volume": 2008070000,
          "x": 16
        },
        {
          "tooltext": "<b>Oct 17, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5741.58,
          "high": 5800.35,
          "low": 5472.72,
          "close": 5605.51,
          "volume": 1821570000,
          "x": 17
        },
        {
          "tooltext": "<b>Oct 18, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5603.82,
          "high": 5603.82,
          "low": 5151.44,
          "close": 5590.69,
          "volume": 2399270000,
          "x": 18
        },
        {
          "tooltext": "<b>Oct 19, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5583.74,
          "high": 5744.35,
          "low": 5531.06,
          "close": 5708.52,
          "volume": 1780540000,
          "x": 19
        },
        {
          "tooltext": "<b>Oct 20, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5708.11,
          "high": 6060.11,
          "low": 5627.23,
          "close": 6011.45,
          "volume": 2354430000,
          "x": 20
        },
        {
          "tooltext": "<b>Oct 21, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5996.79,
          "high": 6194.88,
          "low": 5965.07,
          "close": 6031.6,
          "volume": 2207100000,
          "x": 21
        },
        {
          "tooltext": "<b>Oct 22, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 6036.66,
          "high": 6076.26,
          "low": 5792.34,
          "close": 6008.42,
          "volume": 2034630000,
          "x": 22
        },
        {
          "tooltext": "<b>Oct 23, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 6006,
          "high": 6075.59,
          "low": 5732.47,
          "close": 5930.32,
          "volume": 2401840000,
          "x": 23
        },
        {
          "tooltext": "<b>Oct 24, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5935.52,
          "high": 5935.52,
          "low": 5504.18,
          "close": 5526.64,
          "volume": 2735700000,
          "x": 24
        },
        {
          "tooltext": "<b>Oct 25, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5524.6,
          "high": 5754.33,
          "low": 5397.88,
          "close": 5750.8,
          "volume": 1966990000,
          "x": 25
        },
        {
          "tooltext": "<b>Oct 26, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5747.95,
          "high": 5976.8,
          "low": 5721.22,
          "close": 5904.83,
          "volume": 1905040000,
          "x": 26
        },
        {
          "tooltext": "<b>Oct 27, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5899.74,
          "high": 5988.39,
          "low": 5728.82,
          "close": 5780.9,
          "volume": 1710130000,
          "x": 27
        },
        {
          "tooltext": "<b>Oct 28, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5787.82,
          "high": 5876.72,
          "low": 5689.19,
          "close": 5753.09,
          "volume": 1403920000,
          "x": 28
        },
        {
          "tooltext": "<b>Oct 29, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5754.44,
          "high": 6255.71,
          "low": 5724.58,
          "close": 6153.85,
          "volume": 2859040000,
          "x": 29
        },
        {
          "tooltext": "<b>Oct 30, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 6114.85,
          "high": 6214.99,
          "low": 6040.85,
          "close": 6130.53,
          "volume": 1772150000,
          "x": 30
        },
        {
          "tooltext": "<b>Oct 31, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 6132.02,
          "high": 6470.43,
          "low": 6103.33,
          "close": 6468.4,
          "volume": 2311380000,
          "x": 31
        },
        {
          "tooltext": "<b>Nov 01, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 6440.97,
          "high": 6767.31,
          "low": 6377.88,
          "close": 6767.31,
          "volume": 2870320000,
          "x": 32
        },
        {
          "tooltext": "<b>Nov 02, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 6777.77,
          "high": 7367.33,
          "low": 6758.72,
          "close": 7078.5,
          "volume": 4653770000,
          "x": 33
        },
        {
          "tooltext": "<b>Nov 03, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 7087.53,
          "high": 7461.29,
          "low": 7002.94,
          "close": 7207.76,
          "volume": 3369860000,
          "x": 34
        },
        {
          "tooltext": "<b>Nov 04, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 7164.48,
          "high": 7492.86,
          "low": 7031.28,
          "close": 7379.95,
          "volume": 2483800000,
          "x": 35
        },
        {
          "tooltext": "<b>Nov 05, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 7404.52,
          "high": 7617.48,
          "low": 7333.19,
          "close": 7407.41,
          "volume": 2380410000,
          "x": 36
        },
        {
          "tooltext": "<b>Nov 06, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 7403.22,
          "high": 7445.77,
          "low": 7007.31,
          "close": 7022.76,
          "volume": 3111900000,
          "x": 37
        },
        {
          "tooltext": "<b>Nov 07, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 7023.1,
          "high": 7253.32,
          "low": 7023.1,
          "close": 7144.38,
          "volume": 2326340000,
          "x": 38
        },
        {
          "tooltext": "<b>Nov 08, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 7141.38,
          "high": 7776.42,
          "low": 7114.02,
          "close": 7459.69,
          "volume": 4602200000,
          "x": 39
        },
        {
          "tooltext": "<b>Nov 09, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 7446.83,
          "high": 7446.83,
          "low": 7101.52,
          "close": 7143.58,
          "volume": 3226250000,
          "x": 40
        },
        {
          "tooltext": "<b>Nov 10, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 7173.73,
          "high": 7312,
          "low": 6436.87,
          "close": 6618.14,
          "volume": 5208250000,
          "x": 41
        },
        {
          "tooltext": "<b>Nov 11, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 6618.61,
          "high": 6873.15,
          "low": 6204.22,
          "close": 6357.6,
          "volume": 4908680000,
          "x": 42
        },
        {
          "tooltext": "<b>Nov 12, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 6295.45,
          "high": 6625.05,
          "low": 5519.01,
          "close": 5950.07,
          "volume": 8957350000,
          "x": 43
        },
        {
          "tooltext": "<b>Nov 13, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5938.25,
          "high": 6811.19,
          "low": 5844.29,
          "close": 6559.49,
          "volume": 6263250000,
          "x": 44
        },
        {
          "tooltext": "<b>Nov 14, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 6561.48,
          "high": 6764.98,
          "low": 6461.75,
          "close": 6635.75,
          "volume": 3197110000,
          "x": 45
        },
        {
          "tooltext": "<b>Nov 15, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 6634.76,
          "high": 7342.25,
          "low": 6634.76,
          "close": 7315.54,
          "volume": 4200880000,
          "x": 46
        },
        {
          "tooltext": "<b>Nov 16, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 7323.24,
          "high": 7967.38,
          "low": 7176.58,
          "close": 7871.69,
          "volume": 5123810000,
          "x": 47
        },
        {
          "tooltext": "<b>Nov 17, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 7853.57,
          "high": 8004.59,
          "low": 7561.09,
          "close": 7708.99,
          "volume": 4651670000,
          "x": 48
        },
        {
          "tooltext": "<b>Nov 18, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 7697.21,
          "high": 7884.99,
          "low": 7463.44,
          "close": 7790.15,
          "volume": 3667190000,
          "x": 49
        },
        {
          "tooltext": "<b>Nov 19, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 7766.03,
          "high": 8101.91,
          "low": 7694.1,
          "close": 8036.49,
          "volume": 3149320000,
          "x": 50
        },
        {
          "tooltext": "<b>Nov 20, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 8039.07,
          "high": 8336.86,
          "low": 7949.36,
          "close": 8200.64,
          "volume": 3488450000,
          "x": 51
        },
        {
          "tooltext": "<b>Nov 21, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 8205.74,
          "high": 8348.66,
          "low": 7762.71,
          "close": 8071.26,
          "volume": 4277610000,
          "x": 52
        },
        {
          "tooltext": "<b>Nov 22, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 8077.95,
          "high": 8302.26,
          "low": 8075.47,
          "close": 8253.55,
          "volume": 3633530000,
          "x": 53
        },
        {
          "tooltext": "<b>Nov 23, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 8232.38,
          "high": 8267.4,
          "low": 8038.77,
          "close": 8038.77,
          "volume": 4225180000,
          "x": 54
        },
        {
          "tooltext": "<b>Nov 24, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 8074.02,
          "high": 8374.16,
          "low": 7940.93,
          "close": 8253.69,
          "volume": 5058610000,
          "x": 55
        },
        {
          "tooltext": "<b>Nov 25, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 8241.71,
          "high": 8790.92,
          "low": 8191.15,
          "close": 8790.92,
          "volume": 4342060000,
          "x": 56
        },
        {
          "tooltext": "<b>Nov 26, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 8789.04,
          "high": 9522.93,
          "low": 8775.59,
          "close": 9330.55,
          "volume": 5475580000,
          "x": 57
        },
        {
          "tooltext": "<b>Nov 27, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 9352.72,
          "high": 9818.35,
          "low": 9352.72,
          "close": 9818.35,
          "volume": 5653320000,
          "x": 58
        },
        {
          "tooltext": "<b>Nov 28, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 9823.43,
          "high": 10125.7,
          "low": 9736.3,
          "close": 10058.8,
          "volume": 6348820000,
          "x": 59
        },
        {
          "tooltext": "<b>Nov 29, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 10077.4,
          "high": 11517.4,
          "low": 9601.03,
          "close": 9888.61,
          "volume": 11568800000,
          "x": 60
        },
        {
          "tooltext": "<b>Nov 30, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 9906.79,
          "high": 10801,
          "low": 9202.05,
          "close": 10233.6,
          "volume": 8310690000,
          "x": 61
        },
        {
          "tooltext": "<b>Dec 01, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 10198.6,
          "high": 11046.7,
          "low": 9694.65,
          "close": 10975.6,
          "volume": 6783120000,
          "x": 62
        },
        {
          "tooltext": "<b>Dec 02, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 10978.3,
          "high": 11320.2,
          "low": 10905.1,
          "close": 11074.6,
          "volume": 5138500000,
          "x": 63
        },
        {
          "tooltext": "<b>Dec 03, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 11082.7,
          "high": 11858.7,
          "low": 10862,
          "close": 11323.2,
          "volume": 6608310000,
          "x": 64
        },
        {
          "tooltext": "<b>Dec 04, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 11315.4,
          "high": 11657.2,
          "low": 11081.8,
          "close": 11657.2,
          "volume": 6132410000,
          "x": 65
        },
        {
          "tooltext": "<b>Dec 05, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 11685.7,
          "high": 12032,
          "low": 11604.6,
          "close": 11916.7,
          "volume": 6895260000,
          "x": 66
        },
        {
          "tooltext": "<b>Dec 06, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 11923.4,
          "high": 14369.1,
          "low": 11923.4,
          "close": 14291.5,
          "volume": 12656300000,
          "x": 67
        },
        {
          "tooltext": "<b>Dec 07, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 14266.1,
          "high": 17899.7,
          "low": 14057.3,
          "close": 17899.7,
          "volume": 17950700000,
          "x": 68
        },
        {
          "tooltext": "<b>Dec 08, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 17802.9,
          "high": 18353.4,
          "low": 14336.9,
          "close": 16569.4,
          "volume": 21136000000,
          "x": 69
        },
        {
          "tooltext": "<b>Dec 09, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 16523.3,
          "high": 16783,
          "low": 13674.9,
          "close": 15178.2,
          "volume": 13911300000,
          "x": 70
        },
        {
          "tooltext": "<b>Dec 10, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 15168.4,
          "high": 15850.6,
          "low": 13226.6,
          "close": 15455.4,
          "volume": 13433300000,
          "x": 71
        },
        {
          "tooltext": "<b>Dec 11, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 15427.4,
          "high": 17513.9,
          "low": 15404.8,
          "close": 16936.8,
          "volume": 12153900000,
          "x": 72
        },
        {
          "tooltext": "<b>Dec 12, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 16919.8,
          "high": 17781.8,
          "low": 16571.6,
          "close": 17415.4,
          "volume": 14603800000,
          "x": 73
        },
        {
          "tooltext": "<b>Dec 13, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 17500,
          "high": 17653.1,
          "low": 16039.7,
          "close": 16408.2,
          "volume": 12976900000,
          "x": 74
        },
        {
          "tooltext": "<b>Dec 14, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 16384.6,
          "high": 17085.8,
          "low": 16185.9,
          "close": 16564,
          "volume": 13777400000,
          "x": 75
        },
        {
          "tooltext": "<b>Dec 15, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 16601.3,
          "high": 18154.1,
          "low": 16601.3,
          "close": 17706.9,
          "volume": 14310000000,
          "x": 76
        },
        {
          "tooltext": "<b>Dec 16, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 17760.3,
          "high": 19716.7,
          "low": 17515.3,
          "close": 19497.4,
          "volume": 12740600000,
          "x": 77
        },
        {
          "tooltext": "<b>Dec 17, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "high": 20089,
          "low": 18974.1,
          "close": 19140.8,
          "volume": 13314600000,
          "x": 78
        },
        {
          "tooltext": "<b>Dec 18, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 19106.4,
          "high": 19371,
          "low": 18355.9,
          "close": 19114.2,
          "volume": 14839500000,
          "x": 79
        },
        {
          "tooltext": "<b>Dec 19, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 19118.3,
          "high": 19177.8,
          "low": 17275.4,
          "close": 17776.7,
          "volume": 16894500000,
          "x": 80
        },
        {
          "tooltext": "<b>Dec 20, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 17760.3,
          "high": 17934.7,
          "low": 16077.7,
          "close": 16624.6,
          "volume": 22149700000,
          "x": 81
        },
        {
          "tooltext": "<b>Dec 21, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 16642.4,
          "high": 17567.7,
          "low": 15342.7,
          "close": 15802.9,
          "volume": 16516600000,
          "x": 82
        },
        {
          "tooltext": "<b>Dec 22, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 15898,
          "high": 15943.4,
          "low": 11833,
          "close": 13831.8,
          "volume": 22198000000,
          "x": 83
        },
        {
          "tooltext": "<b>Dec 23, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 13948.7,
          "high": 15603.2,
          "low": 13828.8,
          "close": 14699.2,
          "volume": 13086000000,
          "x": 84
        },
        {
          "tooltext": "<b>Dec 24, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 14608.2,
          "high": 14626,
          "low": 12747.7,
          "close": 13925.8,
          "volume": 11572300000,
          "x": 85
        },
        {
          "tooltext": "<b>Dec 25, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 13995.9,
          "high": 14593,
          "low": 13448.9,
          "close": 14026.6,
          "volume": 10664700000,
          "x": 86
        },
        {
          "tooltext": "<b>Dec 26, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 14036.6,
          "high": 16461.2,
          "low": 14028.9,
          "close": 16099.8,
          "volume": 13454300000,
          "x": 87
        },
        {
          "tooltext": "<b>Dec 27, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 16163.5,
          "high": 16930.9,
          "low": 15114.3,
          "close": 15838.5,
          "volume": 12487600000,
          "x": 88
        },
        {
          "tooltext": "<b>Dec 28, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 15864.1,
          "high": 15888.4,
          "low": 13937.3,
          "close": 14606.5,
          "volume": 12336500000,
          "x": 89
        },
        {
          "tooltext": "<b>Dec 29, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 14695.8,
          "high": 15279,
          "low": 14307,
          "close": 14656.2,
          "volume": 13025500000,
          "x": 90
        },
        {
          "tooltext": "<b>Dec 30, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 14681.9,
          "high": 14681.9,
          "low": 12350.1,
          "close": 12952.2,
          "volume": 14452600000,
          "x": 91
        },
        {
          "tooltext": "<b>Dec 31, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 12897.7,
          "high": 14377.4,
          "low": 12755.6,
          "close": 14156.4,
          "volume": 12136300000,
          "x": 92
        }
      ]
    }
  ],
  "trendlines": [
    {
      "line": [
        {
          "startvalue": "9507.37",
          "thickness": "1",
          "color": "#5D62B5",
          "displayvalue": "Quarterly<br>Average"
        }
      ]
    }
  ]
		  
	  }

	  this.dataSource10 = {
  "chart": {
    "caption": "LPG Level Indicator",
    "lowerlimit": "0",
    "upperlimit": "25",
    "lowerlimitdisplay": "Empty",
    "upperlimitdisplay": "Full",
    "numbersuffix": " ltrs",
    "cylfillcolor": "#5D62B5",
    "plottooltext": "LPG Consumption: <b>20 ltrs</b>",
    "cylfillhoveralpha": "85",
    "theme": "fusion"
  },
  "value": "20"
	  }

	  this.dataSource9 = {

  "chart": {
    "caption": "Nordstorm's Customer Satisfaction Score for 2017",
    "lowerlimit": "0",
    "upperlimit": "100",
    "showvalue": "1",
    "numbersuffix": "%",
    "theme": "fusion",
    "showtooltip": "0"
  },
  "colorrange": {
    "color": [
      {
        "minvalue": "0",
        "maxvalue": "50",
        "code": "#F2726F"
      },
      {
        "minvalue": "50",
        "maxvalue": "75",
        "code": "#FFC533"
      },
      {
        "minvalue": "75",
        "maxvalue": "100",
        "code": "#62B58F"
      }
    ]
  },
  "dials": {
    "dial": [
      {
        "value": "81"
      }
    ]
  }
		  
	  }

	  this.dataSource8 = {

  "chart": {
    "caption": "Bitcoin Price",
    "subcaption": "Q4-2017",
    "numberprefix": "$",
    "pyaxisname": "Price (USD)",
    "vyaxisname": "Volume traded",
    "theme": "fusion",
    "showvolumechart": "1",
    "vnumberprefix": "$"
  },
  "categories": [
    {
      "category": [
        {
          "label": "Oct",
          "x": "1"
        },
        {
          "label": "Nov",
          "x": "32"
        },
        {
          "label": "Dec",
          "x": "62"
        }
      ]
    }
  ],
  "dataset": [
    {
      "data": [
        {
          "tooltext": "<b>Oct 01, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 4341.05,
          "high": 4403.74,
          "low": 4269.81,
          "close": 4403.74,
          "volume": 1208210000,
          "x": 1
        },
        {
          "tooltext": "<b>Oct 02, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 4395.81,
          "high": 4470.23,
          "low": 4377.46,
          "close": 4409.32,
          "volume": 1431730000,
          "x": 2
        },
        {
          "tooltext": "<b>Oct 03, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 4408.46,
          "high": 4432.47,
          "low": 4258.89,
          "close": 4317.48,
          "volume": 1288020000,
          "x": 3
        },
        {
          "tooltext": "<b>Oct 04, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 4319.37,
          "high": 4352.31,
          "low": 4210.42,
          "close": 4229.36,
          "volume": 1116770000,
          "x": 4
        },
        {
          "tooltext": "<b>Oct 05, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 4229.88,
          "high": 4362.64,
          "low": 4164.05,
          "close": 4328.41,
          "volume": 1161770000,
          "x": 5
        },
        {
          "tooltext": "<b>Oct 06, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 4324.46,
          "high": 4413.27,
          "low": 4320.53,
          "close": 4370.81,
          "volume": 1069940000,
          "x": 6
        },
        {
          "tooltext": "<b>Oct 07, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 4369.35,
          "high": 4443.88,
          "low": 4321.05,
          "close": 4426.89,
          "volume": 906928000,
          "x": 7
        },
        {
          "tooltext": "<b>Oct 08, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 4429.67,
          "high": 4624.14,
          "low": 4405.64,
          "close": 4610.48,
          "volume": 1313870000,
          "x": 8
        },
        {
          "tooltext": "<b>Oct 09, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 4614.52,
          "high": 4878.71,
          "low": 4564.25,
          "close": 4772.02,
          "volume": 1968740000,
          "x": 9
        },
        {
          "tooltext": "<b>Oct 10, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 4776.21,
          "high": 4922.17,
          "low": 4765.1,
          "close": 4781.99,
          "volume": 1597140000,
          "x": 10
        },
        {
          "tooltext": "<b>Oct 11, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 4789.25,
          "high": 4873.73,
          "low": 4751.63,
          "close": 4826.48,
          "volume": 1222280000,
          "x": 11
        },
        {
          "tooltext": "<b>Oct 12, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 4829.58,
          "high": 5446.91,
          "low": 4822,
          "close": 5446.91,
          "volume": 2791610000,
          "x": 12
        },
        {
          "tooltext": "<b>Oct 13, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5464.16,
          "high": 5840.3,
          "low": 5436.85,
          "close": 5647.21,
          "volume": 3615480000,
          "x": 13
        },
        {
          "tooltext": "<b>Oct 14, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5643.53,
          "high": 5837.7,
          "low": 5591.64,
          "close": 5831.79,
          "volume": 1669030000,
          "x": 14
        },
        {
          "tooltext": "<b>Oct 15, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5835.96,
          "high": 5852.48,
          "low": 5478.61,
          "close": 5678.19,
          "volume": 1976040000,
          "x": 15
        },
        {
          "tooltext": "<b>Oct 16, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5687.57,
          "high": 5776.23,
          "low": 5544.21,
          "close": 5725.59,
          "volume": 2008070000,
          "x": 16
        },
        {
          "tooltext": "<b>Oct 17, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5741.58,
          "high": 5800.35,
          "low": 5472.72,
          "close": 5605.51,
          "volume": 1821570000,
          "x": 17
        },
        {
          "tooltext": "<b>Oct 18, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5603.82,
          "high": 5603.82,
          "low": 5151.44,
          "close": 5590.69,
          "volume": 2399270000,
          "x": 18
        },
        {
          "tooltext": "<b>Oct 19, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5583.74,
          "high": 5744.35,
          "low": 5531.06,
          "close": 5708.52,
          "volume": 1780540000,
          "x": 19
        },
        {
          "tooltext": "<b>Oct 20, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5708.11,
          "high": 6060.11,
          "low": 5627.23,
          "close": 6011.45,
          "volume": 2354430000,
          "x": 20
        },
        {
          "tooltext": "<b>Oct 21, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5996.79,
          "high": 6194.88,
          "low": 5965.07,
          "close": 6031.6,
          "volume": 2207100000,
          "x": 21
        },
        {
          "tooltext": "<b>Oct 22, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 6036.66,
          "high": 6076.26,
          "low": 5792.34,
          "close": 6008.42,
          "volume": 2034630000,
          "x": 22
        },
        {
          "tooltext": "<b>Oct 23, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 6006,
          "high": 6075.59,
          "low": 5732.47,
          "close": 5930.32,
          "volume": 2401840000,
          "x": 23
        },
        {
          "tooltext": "<b>Oct 24, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5935.52,
          "high": 5935.52,
          "low": 5504.18,
          "close": 5526.64,
          "volume": 2735700000,
          "x": 24
        },
        {
          "tooltext": "<b>Oct 25, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5524.6,
          "high": 5754.33,
          "low": 5397.88,
          "close": 5750.8,
          "volume": 1966990000,
          "x": 25
        },
        {
          "tooltext": "<b>Oct 26, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5747.95,
          "high": 5976.8,
          "low": 5721.22,
          "close": 5904.83,
          "volume": 1905040000,
          "x": 26
        },
        {
          "tooltext": "<b>Oct 27, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5899.74,
          "high": 5988.39,
          "low": 5728.82,
          "close": 5780.9,
          "volume": 1710130000,
          "x": 27
        },
        {
          "tooltext": "<b>Oct 28, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5787.82,
          "high": 5876.72,
          "low": 5689.19,
          "close": 5753.09,
          "volume": 1403920000,
          "x": 28
        },
        {
          "tooltext": "<b>Oct 29, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5754.44,
          "high": 6255.71,
          "low": 5724.58,
          "close": 6153.85,
          "volume": 2859040000,
          "x": 29
        },
        {
          "tooltext": "<b>Oct 30, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 6114.85,
          "high": 6214.99,
          "low": 6040.85,
          "close": 6130.53,
          "volume": 1772150000,
          "x": 30
        },
        {
          "tooltext": "<b>Oct 31, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 6132.02,
          "high": 6470.43,
          "low": 6103.33,
          "close": 6468.4,
          "volume": 2311380000,
          "x": 31
        },
        {
          "tooltext": "<b>Nov 01, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 6440.97,
          "high": 6767.31,
          "low": 6377.88,
          "close": 6767.31,
          "volume": 2870320000,
          "x": 32
        },
        {
          "tooltext": "<b>Nov 02, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 6777.77,
          "high": 7367.33,
          "low": 6758.72,
          "close": 7078.5,
          "volume": 4653770000,
          "x": 33
        },
        {
          "tooltext": "<b>Nov 03, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 7087.53,
          "high": 7461.29,
          "low": 7002.94,
          "close": 7207.76,
          "volume": 3369860000,
          "x": 34
        },
        {
          "tooltext": "<b>Nov 04, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 7164.48,
          "high": 7492.86,
          "low": 7031.28,
          "close": 7379.95,
          "volume": 2483800000,
          "x": 35
        },
        {
          "tooltext": "<b>Nov 05, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 7404.52,
          "high": 7617.48,
          "low": 7333.19,
          "close": 7407.41,
          "volume": 2380410000,
          "x": 36
        },
        {
          "tooltext": "<b>Nov 06, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 7403.22,
          "high": 7445.77,
          "low": 7007.31,
          "close": 7022.76,
          "volume": 3111900000,
          "x": 37
        },
        {
          "tooltext": "<b>Nov 07, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 7023.1,
          "high": 7253.32,
          "low": 7023.1,
          "close": 7144.38,
          "volume": 2326340000,
          "x": 38
        },
        {
          "tooltext": "<b>Nov 08, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 7141.38,
          "high": 7776.42,
          "low": 7114.02,
          "close": 7459.69,
          "volume": 4602200000,
          "x": 39
        },
        {
          "tooltext": "<b>Nov 09, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 7446.83,
          "high": 7446.83,
          "low": 7101.52,
          "close": 7143.58,
          "volume": 3226250000,
          "x": 40
        },
        {
          "tooltext": "<b>Nov 10, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 7173.73,
          "high": 7312,
          "low": 6436.87,
          "close": 6618.14,
          "volume": 5208250000,
          "x": 41
        },
        {
          "tooltext": "<b>Nov 11, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 6618.61,
          "high": 6873.15,
          "low": 6204.22,
          "close": 6357.6,
          "volume": 4908680000,
          "x": 42
        },
        {
          "tooltext": "<b>Nov 12, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 6295.45,
          "high": 6625.05,
          "low": 5519.01,
          "close": 5950.07,
          "volume": 8957350000,
          "x": 43
        },
        {
          "tooltext": "<b>Nov 13, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 5938.25,
          "high": 6811.19,
          "low": 5844.29,
          "close": 6559.49,
          "volume": 6263250000,
          "x": 44
        },
        {
          "tooltext": "<b>Nov 14, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 6561.48,
          "high": 6764.98,
          "low": 6461.75,
          "close": 6635.75,
          "volume": 3197110000,
          "x": 45
        },
        {
          "tooltext": "<b>Nov 15, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 6634.76,
          "high": 7342.25,
          "low": 6634.76,
          "close": 7315.54,
          "volume": 4200880000,
          "x": 46
        },
        {
          "tooltext": "<b>Nov 16, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 7323.24,
          "high": 7967.38,
          "low": 7176.58,
          "close": 7871.69,
          "volume": 5123810000,
          "x": 47
        },
        {
          "tooltext": "<b>Nov 17, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 7853.57,
          "high": 8004.59,
          "low": 7561.09,
          "close": 7708.99,
          "volume": 4651670000,
          "x": 48
        },
        {
          "tooltext": "<b>Nov 18, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 7697.21,
          "high": 7884.99,
          "low": 7463.44,
          "close": 7790.15,
          "volume": 3667190000,
          "x": 49
        },
        {
          "tooltext": "<b>Nov 19, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 7766.03,
          "high": 8101.91,
          "low": 7694.1,
          "close": 8036.49,
          "volume": 3149320000,
          "x": 50
        },
        {
          "tooltext": "<b>Nov 20, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 8039.07,
          "high": 8336.86,
          "low": 7949.36,
          "close": 8200.64,
          "volume": 3488450000,
          "x": 51
        },
        {
          "tooltext": "<b>Nov 21, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 8205.74,
          "high": 8348.66,
          "low": 7762.71,
          "close": 8071.26,
          "volume": 4277610000,
          "x": 52
        },
        {
          "tooltext": "<b>Nov 22, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 8077.95,
          "high": 8302.26,
          "low": 8075.47,
          "close": 8253.55,
          "volume": 3633530000,
          "x": 53
        },
        {
          "tooltext": "<b>Nov 23, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 8232.38,
          "high": 8267.4,
          "low": 8038.77,
          "close": 8038.77,
          "volume": 4225180000,
          "x": 54
        },
        {
          "tooltext": "<b>Nov 24, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 8074.02,
          "high": 8374.16,
          "low": 7940.93,
          "close": 8253.69,
          "volume": 5058610000,
          "x": 55
        },
        {
          "tooltext": "<b>Nov 25, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 8241.71,
          "high": 8790.92,
          "low": 8191.15,
          "close": 8790.92,
          "volume": 4342060000,
          "x": 56
        },
        {
          "tooltext": "<b>Nov 26, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 8789.04,
          "high": 9522.93,
          "low": 8775.59,
          "close": 9330.55,
          "volume": 5475580000,
          "x": 57
        },
        {
          "tooltext": "<b>Nov 27, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 9352.72,
          "high": 9818.35,
          "low": 9352.72,
          "close": 9818.35,
          "volume": 5653320000,
          "x": 58
        },
        {
          "tooltext": "<b>Nov 28, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 9823.43,
          "high": 10125.7,
          "low": 9736.3,
          "close": 10058.8,
          "volume": 6348820000,
          "x": 59
        },
        {
          "tooltext": "<b>Nov 29, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 10077.4,
          "high": 11517.4,
          "low": 9601.03,
          "close": 9888.61,
          "volume": 11568800000,
          "x": 60
        },
        {
          "tooltext": "<b>Nov 30, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 9906.79,
          "high": 10801,
          "low": 9202.05,
          "close": 10233.6,
          "volume": 8310690000,
          "x": 61
        },
        {
          "tooltext": "<b>Dec 01, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 10198.6,
          "high": 11046.7,
          "low": 9694.65,
          "close": 10975.6,
          "volume": 6783120000,
          "x": 62
        },
        {
          "tooltext": "<b>Dec 02, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 10978.3,
          "high": 11320.2,
          "low": 10905.1,
          "close": 11074.6,
          "volume": 5138500000,
          "x": 63
        },
        {
          "tooltext": "<b>Dec 03, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 11082.7,
          "high": 11858.7,
          "low": 10862,
          "close": 11323.2,
          "volume": 6608310000,
          "x": 64
        },
        {
          "tooltext": "<b>Dec 04, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 11315.4,
          "high": 11657.2,
          "low": 11081.8,
          "close": 11657.2,
          "volume": 6132410000,
          "x": 65
        },
        {
          "tooltext": "<b>Dec 05, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 11685.7,
          "high": 12032,
          "low": 11604.6,
          "close": 11916.7,
          "volume": 6895260000,
          "x": 66
        },
        {
          "tooltext": "<b>Dec 06, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 11923.4,
          "high": 14369.1,
          "low": 11923.4,
          "close": 14291.5,
          "volume": 12656300000,
          "x": 67
        },
        {
          "tooltext": "<b>Dec 07, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 14266.1,
          "high": 17899.7,
          "low": 14057.3,
          "close": 17899.7,
          "volume": 17950700000,
          "x": 68
        },
        {
          "tooltext": "<b>Dec 08, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 17802.9,
          "high": 18353.4,
          "low": 14336.9,
          "close": 16569.4,
          "volume": 21136000000,
          "x": 69
        },
        {
          "tooltext": "<b>Dec 09, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 16523.3,
          "high": 16783,
          "low": 13674.9,
          "close": 15178.2,
          "volume": 13911300000,
          "x": 70
        },
        {
          "tooltext": "<b>Dec 10, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 15168.4,
          "high": 15850.6,
          "low": 13226.6,
          "close": 15455.4,
          "volume": 13433300000,
          "x": 71
        },
        {
          "tooltext": "<b>Dec 11, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 15427.4,
          "high": 17513.9,
          "low": 15404.8,
          "close": 16936.8,
          "volume": 12153900000,
          "x": 72
        },
        {
          "tooltext": "<b>Dec 12, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 16919.8,
          "high": 17781.8,
          "low": 16571.6,
          "close": 17415.4,
          "volume": 14603800000,
          "x": 73
        },
        {
          "tooltext": "<b>Dec 13, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 17500,
          "high": 17653.1,
          "low": 16039.7,
          "close": 16408.2,
          "volume": 12976900000,
          "x": 74
        },
        {
          "tooltext": "<b>Dec 14, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 16384.6,
          "high": 17085.8,
          "low": 16185.9,
          "close": 16564,
          "volume": 13777400000,
          "x": 75
        },
        {
          "tooltext": "<b>Dec 15, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 16601.3,
          "high": 18154.1,
          "low": 16601.3,
          "close": 17706.9,
          "volume": 14310000000,
          "x": 76
        },
        {
          "tooltext": "<b>Dec 16, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 17760.3,
          "high": 19716.7,
          "low": 17515.3,
          "close": 19497.4,
          "volume": 12740600000,
          "x": 77
        },
        {
          "tooltext": "<b>Dec 17, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 19475.8,
          "high": 20089,
          "low": 18974.1,
          "close": 19140.8,
          "volume": 13314600000,
          "x": 78
        },
        {
          "tooltext": "<b>Dec 18, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 19106.4,
          "high": 19371,
          "low": 18355.9,
          "close": 19114.2,
          "volume": 14839500000,
          "x": 79
        },
        {
          "tooltext": "<b>Dec 19, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 19118.3,
          "high": 19177.8,
          "low": 17275.4,
          "close": 17776.7,
          "volume": 16894500000,
          "x": 80
        },
        {
          "tooltext": "<b>Dec 20, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 17760.3,
          "high": 17934.7,
          "low": 16077.7,
          "close": 16624.6,
          "volume": 22149700000,
          "x": 81
        },
        {
          "tooltext": "<b>Dec 21, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 16642.4,
          "high": 17567.7,
          "low": 15342.7,
          "close": 15802.9,
          "volume": 16516600000,
          "x": 82
        },
        {
          "tooltext": "<b>Dec 22, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 15898,
          "high": 15943.4,
          "low": 11833,
          "close": 13831.8,
          "volume": 22198000000,
          "x": 83
        },
        {
          "tooltext": "<b>Dec 23, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 13948.7,
          "high": 15603.2,
          "low": 13828.8,
          "close": 14699.2,
          "volume": 13086000000,
          "x": 84
        },
        {
          "tooltext": "<b>Dec 24, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 14608.2,
          "high": 14626,
          "low": 12747.7,
          "close": 13925.8,
          "volume": 11572300000,
          "x": 85
        },
        {
          "tooltext": "<b>Dec 25, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 13995.9,
          "high": 14593,
          "low": 13448.9,
          "close": 14026.6,
          "volume": 10664700000,
          "x": 86
        },
        {
          "tooltext": "<b>Dec 26, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 14036.6,
          "high": 16461.2,
          "low": 14028.9,
          "close": 16099.8,
          "volume": 13454300000,
          "x": 87
        },
        {
          "tooltext": "<b>Dec 27, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 16163.5,
          "high": 16930.9,
          "low": 15114.3,
          "close": 15838.5,
          "volume": 12487600000,
          "x": 88
        },
        {
          "tooltext": "<b>Dec 28, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 15864.1,
          "high": 15888.4,
          "low": 13937.3,
          "close": 14606.5,
          "volume": 12336500000,
          "x": 89
        },
        {
          "tooltext": "<b>Dec 29, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 14695.8,
          "high": 15279,
          "low": 14307,
          "close": 14656.2,
          "volume": 13025500000,
          "x": 90
        },
        {
          "tooltext": "<b>Dec 30, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 14681.9,
          "high": 14681.9,
          "low": 12350.1,
          "close": 12952.2,
          "volume": 14452600000,
          "x": 91
        },
        {
          "tooltext": "<b>Dec 31, 2017</b><br>Open: <b>$openDataValue</b><br>Close: <b>$closeDataValue</b><br>High: <b>$highDataValue</b><br>Low: <b>$lowDataValue</b><br>Volume: <b>$volumeDataValue</b>",
          "open": 12897.7,
          "high": 14377.4,
          "low": 12755.6,
          "close": 14156.4,
          "volume": 12136300000,
          "x": 92
        }
      ]
    }
  ]
		  
	  }





  }

  constructor() {

	this.getStats();
	console.log('constructor called');
  
  }

  ngOnInit() {
  }

}
