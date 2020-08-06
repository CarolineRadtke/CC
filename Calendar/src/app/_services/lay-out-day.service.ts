import { Injectable } from '@angular/core';
import { DataService } from '../_services/data.service';
import { IData } from '../_interfaces/IData';


export const layOutDayService  = (test: string) => {

    const service  = DataService;


    const ret = 'true ' + test;
    console.log(ret);
    // service.getData().subscribe((data: IData) => {
    //   console.log('200', `color: green`);
    //   console.log(data);
    // });

    return ret;
  };

