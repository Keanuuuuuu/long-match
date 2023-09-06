<template>
  <div class="memsBox">
      <div v-for="(item) in members" :key="item.id" class="member">
      <div class="mem1">
              <div class="photo"><img src="" alt=""></div>
              <div class="intro">
              <div class="memName">{{item.name}}</div>
              <div class="memIntro">{{item.intro}}</div>
              <div class="triangle"></div>
              </div>
          </div>
      <div class="mem2"></div>
  </div>    
  </div>
  </template>
  
  <script>
  export default {
      data(){
        return{
              members:[
              {id:1,
               name:'成员',
         intro:'文字文字文字文字文字文字文字文字文字文字文'},
              {id:2,
                name:'成员',
         intro:'文字文字文字文字文字文字文字文字文字文字文'},
              {id:3,
              name:'成员3',
         intro:'文字文字文字文字文字文字文字文字文字文字文'},
               {id:4,
              name:'成员4',
         intro:'文字文字文字文字文字文字文字文字文字文字文'},
               {id:5,
              name:'成员5',
         intro:'文字文字文字文字文字文字文字文字文字文字文'},
               {id:6,
              name:'成员6',
         intro:'文字文字文字文字文字文字文字文字文字文字文'},
              ]                
              }
  
      }
    }
  
  </script>
  
  <style>
  
  .memsBox{
      width: 1400px;
      height: inherit;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 90px;
  }
  
  .member{
      width: 590px;
      height: 158px;
      list-style: none;
      margin-bottom: 20px;
  }
  
  .mem1{
      width: 571px;
      height: 140px;
      border: #BF2A12 3px solid;
      background-color: rgba(252,247,247,0.8);
      position: absolute;
      display: flex
  }
  
  .mem1::after{
      width: 4px;
      height: 4px;
      position: absolute;
      content: '';
      top: 117px;
      left: 550px;
      border: 11px solid white;
      border-top-color: transparent;
      border-left-color: transparent;
  }
  
  .mem2{
      width: 571px;
      height: 140px;
      border: #BF2A12 3px solid;
      margin-top:14px;
      margin-left: 19px;
  }
  
  .intro{
      width: 453px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
  }
  
  .photo{
      width: 115px;
      height: 140px;
      background-color: #BF2A12;
  }
  
  .photo>img{
      width: 82px;
      height: 112px;
      background-color: #fff;
      margin-top: 14px;
  }
  
  .memName{
      font-size: 20px;
      font-family: Microsoft YaHei-Bold, Microsoft YaHei;
      font-weight: bold;
      color: #3D3D3D;
      margin-left: 34px;
  }
  
  .memIntro{
      font-size: 20px;
      font-family: Microsoft YaHei-Regular, Microsoft YaHei;
      font-weight: 400;
      color: #3D3D3D;
      margin-left: 34px;
      margin-top: 10px;
  }
  
  .triangle{
      position: absolute;
    bottom: 0;
    right: 0;
    z-index: 3;
    overflow: hidden;
    background: linear-gradient(
      -45deg,
      transparent 50%,
      #BF2A12 50%,
      #BF2A12 100%
    );
    width: 20px;
    height: 20px;
    filter: drop-shadow(-2px -2px 8px rgba(0, 0, 0, 0.08));
  }
  
  </style>