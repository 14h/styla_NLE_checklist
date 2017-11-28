
$(()=> {


   //Development JSON file
   let liveChecker = 'https://jenkins.magalog.net/job/tests-e2e/job/tests-e2e_prod_min/lastCompletedBuild/testReport/api/json';

   //Production JSON file
   let dev_json_file = "//updown.io/api/checks?api-key=ro-pz3x1zy4ae63yhygraqe"

   //geting JSON file from the endpoint
   $.getJSON(dev_json_file, data => {
       $.each(data, function(i, f) {

          let tblRow = "service" + "status" + "uptime"
          //Filter   out   any   result   that   says   “hacked”   in   the   alias


          $(tblRow).appendTo("#updown_table tbody");

     });
   });

   // checking every thirty seconds for changes in the JSON file, if change is detected, refresh the page
   let previous = null;
   let current = null;
   setInterval(function() {
        $.getJSON(dev_json_file, function(json) {
            current = JSON.stringify(json);
            console.log(current)
            if (previous && current && previous !== current) {
                console.log('Refreshing page due to changes in the JSON file');
                location.reload();
            }
            previous = current;
        });
    }, 30000);
});
