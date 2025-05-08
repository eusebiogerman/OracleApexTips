function(config) {   
    var $ = apex.jQuery,
        toolbarData = $.apex.interactiveGrid.copyDefaultToolbar(),               // Make a copy of the default toolbar
        reportsGroupControls = toolbarData.toolbarFind( "reports" ).controls;    // Locate the reports group

     //initialize control  
     TaskTool.buttons.forEach((button)=> {   
        reportsGroupControls.push(button);
     });

    //set the action of every control
    config.initActions = function(actions){
       TaskTool.actions.forEach((dynamic_action)=> {   
       actions.add(dynamic_action);
     });
    }


  config.toolbarData = toolbarData;
  config.defaultGridViewOptions = {
        pagination: {                                         
            showRange: true,
            showPageSelector: true,
            showPageLinks: false,
         }
    };
    config.defaultIconViewOptions = {
        collectionClasses: "t-Cards t-Cards--compact t-Cards--displayIcons u-colors t-Cards--desc-2ln"
    };

   
    return config; // don't forget to return this!
}
