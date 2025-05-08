  /*Task*/
  const offset = 1;
  const limit = 1000;  
  const dumexport = { openexport:null, exportfile:null }; 

  /*Global Edi,Stage,Level, Task*/         
  var GlobalEdiTool   = Object.assign({},dumexport);
  var GlobalTaskTool  = Object.assign({},dumexport);

  /*Task Config IG*/ 
   var taskcontrol = { offset:SERVER_OFFSET,limit:SERVER_LIMIT,deleteAll:null } ;    
   const itemstask   =   { offset : "P0_OFFSET", limit : "P0_LIMIT" }; 
   let igtask = {id      : reg$_tasks.jQTrunc()
             , button1   : "taskrefresh"
             , button2   : "task_first"
             , button3   : "task_prev"
             , button4   : { id : "task_idsearch", action : 'taskidsearch' }
             , button5   : "task_next"
             , button6   : "taskexp"
             , button7   : "deleteallt"    
             }

   var TaskTool = { 
     buttons :[
        { type: 'BUTTON',title: 'Refresh ',label: 'Refresh ',icon: ' a-Icon icon-ig-refresh',id: igtask.button1,action: igtask.button1, iconBeforeLabel: true}
        ,{type: 'BUTTON',title: 'fisrt',label: '',icon: 'a-Icon icon-first',id: igtask.button2 ,action: igtask.button2} 
        ,{type: 'BUTTON',title: 'Previous',label: '',icon: 'a-Icon icon-prev',id:igtask.button3,action: igtask.button3}
        ,{type: 'STATIC',title: 'label',label: offset + "-" + limit , Value:  + "-" + limit,id:igtask.button4.id,action: igtask.button4.action}
        ,{type: 'BUTTON',title: 'Next',label: '',icon: 'a-Icon icon-next',id: igtask.button5,action: igtask.button5} 
        ,{type: 'BUTTON',title: 'Exportar ',label: 'Exportar',icon: ' a-Icon icon-ig-copy',id: igtask.button6 ,action: igtask.button6, iconBeforeLabel: true}
        ,{type: 'BUTTON',title: 'Eliminar Tareas ',label: 'Borrar ',icon: 'a-GV-icon-red fa fa-trash',id: igtask.button7,action: igtask.button7, iconBeforeLabel: true}
        ]
       , actions :[{name: igtask.button1,action: function() { resetControlItems(igtask.id,igtask.button4.id,taskcontrol,itemstask);}}
                 , {name: igtask.button2,action: function() { resetControlItems(igtask.id,igtask.button4.id,taskcontrol,itemstask);}}
                 , {name: igtask.button3,action: function() { refreshControlItems({igid:igtask.id,direction : -1,idlabel :igtask.button4.id,srvlimit:SERVER_LIMIT},itemstask,taskcontrol);}}
                 , {name: igtask.button5,action: function() {
                           if(apex.region(igtask.id).call('getViews','grid').model._data.length > 0)
                            refreshControlItems({igid:igtask.id,direction : 1,idlabel :igtask.button4.id,srvlimit:SERVER_LIMIT},itemstask,taskcontrol);
                          }
                     }
                    ,{name: igtask.button6,action: function() { $.event.trigger(GlobalTaskTool.exportfile);}} 
                    ,{name: igtask.button7,action: function() { $.event.trigger(GlobalEdiTool.deleteAll,{grid:igtask.id});}}
                 ]
            }
