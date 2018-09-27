import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


/* start: composants routage */

import { RouterModule, Routes } from '@angular/router';

/* end: composants routage */

/* start: composants graphiques */

import { FusionChartsModule } from 'angular-fusioncharts';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d';

import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';
import GammelTheme from 'fusioncharts/themes/es/fusioncharts.theme.gammel';
import CarbonTheme from 'fusioncharts/themes/es/fusioncharts.theme.carbon';
import ZuneTheme from 'fusioncharts/themes/es/fusioncharts.theme.zune';
import OceanTheme from 'fusioncharts/themes/es/fusioncharts.theme.ocean';
import CandyTheme from 'fusioncharts/themes/es/fusioncharts.theme.candy';

import MSCombi2D from 'fusioncharts/viz/mscombi2d';
import Pie2D from 'fusioncharts/viz/pie2d'; 
import Pie3D from 'fusioncharts/viz/pie3d';
import Bar2D from 'fusioncharts/viz/bar2d';
import Candlestick from 'fusioncharts/viz/candlestick';
import Angulargauge from 'fusioncharts/viz/angulargauge';
import Cylinder from 'fusioncharts/viz/cylinder';
import Spline from 'fusioncharts/viz/spline';
import Splinearea from 'fusioncharts/viz/splinearea';

import { StatisticsComponent } from './statistics/statistics.component';
import { HomeComponent } from './home/home.component';

FusionChartsModule.fcRoot(FusionCharts, Column2D, MSCombi2D, Pie2D, Pie3D, Bar2D, Candlestick, Angulargauge, Cylinder, Spline, Splinearea, FusionTheme, GammelTheme, CarbonTheme, ZuneTheme, OceanTheme, CandyTheme);

/* end: composants graphiques */

/* routage */

const appRoutes:Routes = [
	{
		path:'statistics',
		component:StatisticsComponent
	},
	{
		path:'home',
		component:HomeComponent
	},
	{
		path:'', 
		redirectTo:'statistics',
		pathMatch: 'full'
	},

]

/* fin routage */


@NgModule({
  declarations: [
    AppComponent,
    StatisticsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule

	,RouterModule.forRoot(
		appRoutes
	)

	,FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
