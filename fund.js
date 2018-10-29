
/* Code for DEFAULT*/
jQuery( window).on("load",function(){
jQuery(".fund-close").hide();
jQuery.when(getdefaultSum(),getdefaultSer(),getdefaultState()).
          then(function(obj1,obj2,obj3)
           {
         jQuery("#fund-info-default").html("<div class='blocksize32-top'>"+
            "<div class='fundbox'>"+"<div class='total-fund'>"+"<h5>"+ "Total Funding" + "</h5>" + "<h1>"+"$"+ amountFormatter(obj1.value) + "</h1>" +"</div>"+
            "<div class='service-fund'>"+"<h6>"+"Service Providers" +"</h6>"+ "<h2 style='margin:0px;'>" + obj2.value + "</h2>"+
            "<h6>"+"Start Date"+"</h6>"+"<p class='indi-long-form-text__p--intro' style='margin:0px;'>"+"May 2013"+"</p>"+"</div>"+
            "<div class='state-fund'>"+ "<h6>"+ "States and Territories" +"</h6>" + "<h2 style='margin:0px;'>" + obj3.value + "</h2>"+
            "<h6>"+"Carrier Types"+"</h6>"+"<p class='indi-long-form-text__p--intro' style='margin:0px;'>"+"Price Cap"+"</p>"+
            "<p class='indi-long-form-text__p--intro' style='margin:0px;'>"+"Rate-of-Return"+"</p>"+"</div>" +
           "</div>" );

          });   

})
function getdefaultSum(){
    var dfd = jQuery.Deferred();
     var obj = {};
            var dt = new Date();
            //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT%20SUM(amount_disbursed)%20WHERE%20year=%20%272017%27%20LIMIT%20999999999", function(data) {
            //var url = "https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT SUM(amount_disbursed) WHERE year= '"+dt.getFullYear()+"' LIMIT 999999999";
            jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT SUM(amount_disbursed) WHERE year= '"+dt.getFullYear()+"' LIMIT 999999999", function(data) {
                jQuery.each(data, function(key,val) {
                    obj.key = key;
                    obj.value = val.SUM_amount_disbursed;
                });
                dfd.resolve(obj);
            });
return dfd.promise();
}

function getdefaultSer(){
 var dfd = jQuery.Deferred();
            var obj = {};
             var dt = new Date();
             //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT%20DISTINCT%20study_area_code%20WHERE%20year=%20%272017%27%20AND%20amount_disbursed<>0%20LIMIT%20999999999%20|>%20SELECT%20COUNT(*)", function(data) {
              jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT DISTINCT study_area_code WHERE year= '"+dt.getFullYear()+"' AND amount_disbursed<>0 LIMIT 999999999 |> SELECT COUNT(*) ", function(data) { 
                jQuery.each(data, function(key,val) {
                    obj.value = val.COUNT;
                });
                dfd.resolve(obj);
            });
            return dfd.promise();
}
function getdefaultState(){
 var dfd = jQuery.Deferred();
            var obj = {};
             var dt = new Date();
            //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT%20DISTINCT%20state%20WHERE%20year=%20%272017%27%20AND%20amount_disbursed<>0%20AND%20state<>%27PW%27%20LIMIT%20999999999%20|>%20SELECT%20COUNT(*)", function(data) {
             jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT DISTINCT state WHERE year= '"+dt.getFullYear()+"' AND amount_disbursed<>0 AND state<>'PW' LIMIT 999999999 |> SELECT COUNT(*)", function(data) {   
                jQuery.each(data, function(key,val) {
                    obj.key = key;
                    obj.value = val.COUNT;
                });
                dfd.resolve(obj);
            });
return dfd.promise();
} 
function amountFormatter(value) {
                                var thousand = 1000;
                                var million = 1000000;
                                var billion = 1000000000;
                                var trillion = 1000000000000;
                                if (value < thousand) {
                                                return String(value);   
                                }
                               if (value >= thousand && value <= million) {
                                                return  Math.round(value/thousand*100)/100 + ' K';   
                                }
                                if (value >= million && value <= billion) {
                                                return Math.round(value/million*100)/100 + ' Million';   
                                }
                                if (value >= billion && value <= trillion) {
                                                return Math.round(value/billion*100)/100 + ' Billion';   
                                }
                                //else {
                                //                return Math.round(value/trillion*100)/100 + ' Trillion';   
                                //}
                               //activate the below code for remove NaN
                               if (value >= trillion){
                                               return Math.round(value/trillion*100)/100 + ' Trillion';   
                                }
                               // else{
                                //return 'NaN';
                                //}
                                else (isNaN(value))
                                {
                                    return 0;
                                }                       
                }

/* Code Ends for DEFAULT*/

/* Code for CACM */
jQuery("#cacm").click(function(){
        /* Setting the Fund Name Box color to orginial color*/
        jQuery('#cacm').removeClass('cacm');
        jQuery(this).addClass('active-orange');
        jQuery('#fhcs').removeClass('active-orange');
        jQuery('#fhcs').addClass('fhcs');
        jQuery('#bls').removeClass('active-orange');
        jQuery('#bls').addClass('bls');
        jQuery('#acam').removeClass('active-orange');
        jQuery('#acam').addClass('acam');
        jQuery('#hcl').removeClass('active-orange');
        jQuery('#hcl').addClass('hcl');
        jQuery('#icc').removeClass('active-orange');
        jQuery('#icc').addClass('icc');
        jQuery('#akplan').removeClass('active-orange');
        jQuery('#akplan').addClass('akplan');
        jQuery('#mobility').removeClass('active-orange');
        jQuery('#mobility').addClass('mobility');
        jQuery('#rbe').removeClass('active-orange');
        jQuery('#rbe').addClass('rbe');
        jQuery('#other').removeClass('active-orange');
        jQuery('#other').addClass('other');
            jQuery("#fund-info-default").hide();
            //jQuery("#fund-info-cacm").show();
            jQuery("#fund-info-cacm").slideDown("slow");
            //jQuery("#fund-info-cacm").fadeIn();
            jQuery("#fund-info-fhcs").hide();
            jQuery("#fund-info-bls").hide();
            jQuery("#fund-info-acam").hide();
            jQuery("#fund-info-hcl").hide();
            jQuery("#fund-info-icc").hide();
            jQuery("#fund-info-akplan").hide();
            jQuery("#fund-info-mobility").hide();
            jQuery("#fund-info-rbe").hide();
            jQuery("#fund-info-other").hide();
            jQuery(".fund-close").show();
            jQuery(".fund-close").click(function() {
                jQuery('#cacm').addClass('cacm');
                jQuery('#cacm').removeClass('active-orange');
                jQuery('#fhcs').addClass('fhcs');
                jQuery('#fhcs').removeClass('active-orange');
                jQuery('#bls').removeClass('active-orange');
                jQuery('#bls').addClass('bls');
                jQuery('#acam').removeClass('active-orange');
                jQuery('#acam').addClass('acam');
                jQuery('#hcl').removeClass('active-orange');
                jQuery('#hcl').addClass('hcl');
                jQuery('#icc').removeClass('active-orange');
                jQuery('#icc').addClass('icc');
                jQuery('#akplan').removeClass('active-orange');
                jQuery('#akplan').addClass('akplan');
                jQuery('#mobility').removeClass('active-orange');
                jQuery('#mobility').addClass('mobility');
                jQuery('#rbe').removeClass('active-orange');
                jQuery('#rbe').addClass('rbe');
                jQuery('#other').removeClass('active-orange');
                jQuery('#other').addClass('other');
                    jQuery("#fund-info-cacm").hide();
                    jQuery("#fund-info-fhcs").hide();
                    jQuery("#fund-info-bls").hide();
                    jQuery("#fund-info-acam").hide();
                    jQuery("#fund-info-hcl").hide();
                    jQuery("#fund-info-icc").hide();
                    jQuery("#fund-info-akplan").hide();
                    jQuery("#fund-info-mobility").hide();
                    jQuery("#fund-info-rbe").hide();
                    jQuery("#fund-info-other").hide();
                    //jQuery("#fund-info-default").show();
                    jQuery("#fund-info-default").slideDown("slow");
                    jQuery(".fund-close").hide();
});
jQuery.when(getcacmSum(),getcacmSer(),getcacmState()).
          then(function(obj1,obj2,obj3)
           {
          
           jQuery("#fund-info-cacm").html("<div class='fund-head'>"+"<h2 style='color:#FF7500;'>"+"Connect America Cost Model (CACM/CAFII)"+"</h2>"+"</div>"+
            "<div class='fund-desc'>"+"<p>"+"Provides support to Price Cap carriers based on forward-looking model of the cost of constructing modern networks to be used for deploying voice and broadband services in states with unserved areas."+"</p>"+"</div>"+
            "<div class='fundbox'>"+"<div class='total-fund'>"+"<h5>"+ "Total Funding" + "</h5>" + "<h1>"+"$"+amountFormatter(obj1.value) + "</h1>" +"</div>"+
            "<div class='service-fund'>"+"<h6>"+"Service Providers" +"</h6>"+ "<h2 style='margin:0px;'>" + obj2.value + "</h2>"+
            "<h6>"+"Start Date"+"</h6>"+"<p class='indi-long-form-text__p--intro' style='margin:0px;'>"+"Jun 2015"+"</p>"+"</div>"+
            "<div class='state-fund'>"+ "<h6>"+ "States and Territories" +"</h6>" + "<h2 style='margin:0px;'>" + obj3.value + "</h2>"+
            "<h6>"+"Carrier Types"+"</h6>"+"<p class='indi-long-form-text__p--intro' style='margin:0px;'>"+"Price Cap"+"</p>"+
            "</div>" +"</div>" );
            jQuery("#fund-info-cacm").hide().slideDown("slow");
          });
})
function getcacmSum(){
 var dfd = jQuery.Deferred();
            var obj = {};
            var dt = new Date();
            //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT%20SUM(amount_disbursed)%20WHERE%20year=%20%272017%27%20AND%20fund_type=%27CACM%27%20LIMIT%20999", function(data) {
             jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT SUM(amount_disbursed) WHERE year= '"+dt.getFullYear()+"' AND fund_type='CACM' LIMIT 999", function(data) {   
                jQuery.each(data, function(key,val) {
                    obj.key = key;
                    obj.value = val.SUM_amount_disbursed;
                });
                dfd.resolve(obj);
            });
return dfd.promise();
}
function getcacmSer(){
 var dfd = jQuery.Deferred();
            var obj = {};
            var dt = new Date();
            //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT%20DISTINCT%20study_area_code%20WHERE%20year=%20%272017%27%20AND%20amount_disbursed<>0%20AND%20%20%20fund_type=%27CACM%27%20LIMIT%20999999999%20|>%20SELECT%20COUNT(*)", function(data) {
            jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT DISTINCT study_area_code WHERE year= '"+dt.getFullYear()+"' AND amount_disbursed<>0 AND   fund_type='CACM' LIMIT 999999999 |> SELECT COUNT(*)", function(data) {
                jQuery.each(data, function(key,val) {
                    obj.value = val.COUNT;
                });
                dfd.resolve(obj);
            });
            return dfd.promise();
}
function getcacmState(){
 var dfd = jQuery.Deferred();
            var obj = {};
              var dt = new Date();
            //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT%20DISTINCT%20state%20WHERE%20year=%20%272017%27%20AND%20amount_disbursed%3C%3E0%20AND%20state%3C%3E%27PW%27%20AND%20fund_type=%27CACM%27%20LIMIT%20999999999%20|%3E%20SELECT%20COUNT(*)", function(data) {
            jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT DISTINCT state WHERE year= '"+dt.getFullYear()+"' AND amount_disbursed<>0 AND state<>'PW' AND fund_type='CACM' LIMIT 999999999 |> SELECT COUNT(*)", function(data) {
                jQuery.each(data, function(key,val) {
                    obj.key = key;
                    obj.value = val.COUNT;
                });
                dfd.resolve(obj);
            });
return dfd.promise();
}
/* Code End: CACM */

/* Code for FHCS */
jQuery("#fhcs").click(function(){
        jQuery('#fhcs').removeClass('fhcs');
        jQuery(this).addClass('active-orange');
        jQuery('#cacm').removeClass('active-orange');
        jQuery('#cacm').addClass('cacm');
        jQuery('#bls').removeClass('active-orange');
        jQuery('#bls').addClass('bls');
        jQuery('#acam').removeClass('active-orange');
        jQuery('#acam').addClass('acam');
        jQuery('#hcl').removeClass('active-orange');
        jQuery('#hcl').addClass('hcl');
        jQuery('#icc').removeClass('active-orange');
        jQuery('#icc').addClass('icc');
        jQuery('#akplan').removeClass('active-orange');
        jQuery('#akplan').addClass('akplan');
        jQuery('#mobility').removeClass('active-orange');
        jQuery('#mobility').addClass('mobility');
        jQuery('#rbe').removeClass('active-orange');
        jQuery('#rbe').addClass('rbe');
        jQuery('#other').removeClass('active-orange');
        jQuery('#other').addClass('other');
            jQuery("#fund-info-default").hide();
            jQuery("#fund-info-cacm").hide();
            //jQuery("#fund-info-fhcs").show();
            jQuery("#fund-info-fhcs").slideDown("slow");
            jQuery("#fund-info-bls").hide();
            jQuery("#fund-info-acam").hide();
            jQuery("#fund-info-hcl").hide();
            jQuery("#fund-info-icc").hide();
            jQuery("#fund-info-akplan").hide();
            jQuery("#fund-info-mobility").hide();
            jQuery("#fund-info-rbe").hide();
            jQuery("#fund-info-other").hide();
            jQuery(".fund-close").show();
            jQuery(".fund-close").click(function() {
                jQuery('#cacm').addClass('cacm');
                jQuery('#cacm').removeClass('active-orange');
                jQuery('#fhcs').addClass('fhcs');
                jQuery('#fhcs').removeClass('active-orange');
                jQuery('#bls').removeClass('active-orange');
                jQuery('#bls').addClass('bls');
                jQuery('#acam').removeClass('active-orange');
                jQuery('#acam').addClass('acam');
                jQuery('#hcl').removeClass('active-orange');
                jQuery('#hcl').addClass('hcl');
                jQuery('#icc').removeClass('active-orange');
                jQuery('#icc').addClass('icc');
                jQuery('#akplan').removeClass('active-orange');
                jQuery('#akplan').addClass('akplan');
                jQuery('#mobility').removeClass('active-orange');
                jQuery('#mobility').addClass('mobility');
                jQuery('#rbe').removeClass('active-orange');
                jQuery('#rbe').addClass('rbe');
                jQuery('#other').removeClass('active-orange');
                jQuery('#other').addClass('other');
                    jQuery("#fund-info-cacm").hide();
                    jQuery("#fund-info-fhcs").hide();
                    jQuery("#fund-info-bls").hide();
                    jQuery("#fund-info-acam").hide();
                    jQuery("#fund-info-hcl").hide();
                    jQuery("#fund-info-icc").hide();
                    jQuery("#fund-info-akplan").hide();
                    jQuery("#fund-info-mobility").hide();
                    jQuery("#fund-info-rbe").hide();
                    jQuery("#fund-info-other").hide();
                    //jQuery("#fund-info-default").show();
                    jQuery("#fund-info-default").slideDown("slow");
                    jQuery(".fund-close").hide();
});
jQuery.when(getfhcsSum(),getfhcsSer(),getfhcsState()).
          then(function(obj1,obj2,obj3)
           {
          
           jQuery("#fund-info-fhcs").html("<div class='fund-head'>"+"<h2 style='color:#FF7500;'>"+"Frozen High CostSupport (FHCS)"+"</h2>"+"</div>"+
            "<div class='fund-desc'>"+"<p>"+"Provides High Cost Program support frozen at December 2011 levels to help carriers transition from legacy programs focused on voice service to modernized funds that support and expand broadband availability."+"</p>"+"</div>"+
            "<div class='fundbox'>"+"<div class='total-fund'>"+"<h5>"+ "Total Funding" + "</h5>" + "<h1>"+"$"+ amountFormatter(obj1.value) + "</h1>" +"</div>"+
            "<div class='service-fund'>"+"<h6>"+"Service Providers" +"</h6>"+ "<h2 style='margin:0px;'>" + obj2.value + "</h2>"+
            "<h6>"+"Start Date"+"</h6>"+"<p class='indi-long-form-text__p--intro' style='margin:0px;'>"+"Jan 2012"+"</p>"+"</div>"+
            "<div class='state-fund'>"+ "<h6>"+ "States and Territories" +"</h6>" + "<h2 style='margin:0px;'>" + obj3.value + "</h2>"+
            "<h6>"+"Carrier Types"+"</h6>"+"<p class='indi-long-form-text__p--intro' style='margin:0px;'>"+"Price Cap"+"</p>"+
            "<p class='indi-long-form-text__p--intro' style='margin:0px;'>"+"Rate-of-Return"+"</p>"+
            "</div>" +"</div>" );
           jQuery("#fund-info-fhcs").hide().slideDown("slow");

          });
})

function getfhcsSum(){
 var dfd = jQuery.Deferred();
            var obj = {};
            var dt = new Date();
            //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT%20SUM(amount_disbursed)%20WHERE%20year=%20%272017%27%20AND%20fund_type=%27FHCS%27%20LIMIT%20999999999", function(data) {
            jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT SUM(amount_disbursed) WHERE year= '"+dt.getFullYear()+"' AND fund_type='FHCS' LIMIT 999999999", function(data) {
                jQuery.each(data, function(key,val) {
                    obj.key = key;
                    obj.value = val.SUM_amount_disbursed;
                });
                dfd.resolve(obj);
            });
return dfd.promise();
}

function getfhcsSer(){
 var dfd = jQuery.Deferred();
            var obj = {};
            var dt = new Date();
           // jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT%20DISTINCT%20study_area_code%20WHERE%20year=%20%272017%27%20AND%20amount_disbursed<>0%20AND%20%20%20fund_type=%27FHCS%27%20LIMIT%20999999999%20|>%20SELECT%20COUNT(*)", function(data) {
            jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT DISTINCT study_area_code WHERE year= '"+dt.getFullYear()+"' AND amount_disbursed<>0 AND   fund_type='FHCS' LIMIT 999999999 |> SELECT COUNT(*)", function(data) {
                jQuery.each(data, function(key,val) {
                    obj.value = val.COUNT;
                });
                dfd.resolve(obj);
            });
            return dfd.promise();
}
function getfhcsState(){
 var dfd = jQuery.Deferred();
            var obj = {};
            var dt = new Date();
            //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT%20DISTINCT%20state%20WHERE%20year=%20%272017%27%20AND%20amount_disbursed<>0%20AND%20state<>%27PW%27%20AND%20fund_type=%27FHCS%27%20LIMIT%20999999999%20|>%20SELECT%20COUNT(*)", function(data) {
            jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT DISTINCT state WHERE year= '"+dt.getFullYear()+"' AND amount_disbursed<>0 AND state<>'PW' AND fund_type='FHCS' LIMIT 999999999 |> SELECT COUNT(*)", function(data) {    
                jQuery.each(data, function(key,val) {
                    obj.key = key;
                    obj.value = val.COUNT;
                });
                dfd.resolve(obj);
            });
return dfd.promise();
}

/* Code Ends : FHCS */

/* Code for CAF BLS */
jQuery("#bls").click(function(){
        jQuery('#bls').removeClass('bls');
        jQuery(this).addClass('active-orange');
        jQuery('#cacm').removeClass('active-orange');
        jQuery('#cacm').addClass('cacm');
        jQuery('#fhcs').removeClass('active-orange');
        jQuery('#fhcs').addClass('fhcs');
        jQuery('#acam').removeClass('active-orange');
        jQuery('#acam').addClass('acam');
        jQuery('#hcl').removeClass('active-orange');
        jQuery('#hcl').addClass('hcl');
        jQuery('#icc').removeClass('active-orange');
        jQuery('#icc').addClass('icc');
        jQuery('#akplan').removeClass('active-orange');
        jQuery('#akplan').addClass('akplan');
        jQuery('#mobility').removeClass('active-orange');
        jQuery('#mobility').addClass('mobility');
        jQuery('#rbe').removeClass('active-orange');
        jQuery('#rbe').addClass('rbe');
        jQuery('#other').removeClass('active-orange');
        jQuery('#other').addClass('other');
            jQuery("#fund-info-default").hide();
            jQuery("#fund-info-cacm").hide();
            jQuery("#fund-info-fhcs").hide();
            //jQuery("#fund-info-bls").show();
            jQuery("#fund-info-bls").slideDown("slow");
            jQuery("#fund-info-acam").hide();
            jQuery("#fund-info-hcl").hide();
            jQuery("#fund-info-icc").hide();
            jQuery("#fund-info-akplan").hide();
            jQuery("#fund-info-mobility").hide();
            jQuery("#fund-info-rbe").hide();
            jQuery("#fund-info-other").hide();
            jQuery(".fund-close").show();
            jQuery(".fund-close").click(function() {
                jQuery('#cacm').addClass('cacm');
                jQuery('#cacm').removeClass('active-orange');
                jQuery('#fhcs').addClass('fhcs');
                jQuery('#fhcs').removeClass('active-orange');
                jQuery('#bls').removeClass('active-orange');
                jQuery('#bls').addClass('bls');
                jQuery('#acam').removeClass('active-orange');
                jQuery('#acam').addClass('acam');
                jQuery('#hcl').removeClass('active-orange');
                jQuery('#hcl').addClass('hcl');
                jQuery('#icc').removeClass('active-orange');
                jQuery('#icc').addClass('icc');
                jQuery('#akplan').removeClass('active-orange');
                jQuery('#akplan').addClass('akplan');
                jQuery('#mobility').removeClass('active-orange');
                jQuery('#mobility').addClass('mobility');
                jQuery('#rbe').removeClass('active-orange');
                jQuery('#rbe').addClass('rbe');
                jQuery('#other').removeClass('active-orange');
                jQuery('#other').addClass('other');    
                    jQuery("#fund-info-cacm").hide();
                    jQuery("#fund-info-fhcs").hide();
                    jQuery("#fund-info-bls").hide();
                    jQuery("#fund-info-acam").hide();
                    jQuery("#fund-info-hcl").hide();
                    jQuery("#fund-info-icc").hide();
                    jQuery("#fund-info-akplan").hide();
                    jQuery("#fund-info-mobility").hide();
                    jQuery("#fund-info-rbe").hide();
                    jQuery("#fund-info-other").hide();
                    //jQuery("#fund-info-default").show();
                    jQuery("#fund-info-default").slideDown("slow");
                    jQuery(".fund-close").hide();
});
jQuery.when(getblsSum(),getblsSer(),getblsState()).
          then(function(obj1,obj2,obj3)
           {
          
         jQuery("#fund-info-bls").html("<div class='fund-head'>"+"<h2 style='color:#FF7500;'>"+"Connect America Fund Broadband Loop Support (CAF BLS)"+"</h2>"+"</div>"+
            "<div class='fund-desc'>"+"<p>"+"Provides support for broadband-only lines, as well as voice lines and voice/broadband lines. Helps carriers recover the difference between loop costs associated with providing broadband-only service and consumer broadband-only loop revenues. "+"</p>"+"</div>"+
            "<div class='fundbox'>"+"<div class='total-fund'>"+"<h5>"+ "Total Funding" + "</h5>" + "<h1>"+"$"+ amountFormatter(obj1.value) + "</h1>" +"</div>"+
            "<div class='service-fund'>"+"<h6>"+"Service Providers" +"</h6>"+ "<h2 style='margin:0px;'>" + obj2.value + "</h2>"+
            "<h6>"+"Start Date"+"</h6>"+"<p class='indi-long-form-text__p--intro' style='margin:0px;'>"+"Jan 2017"+"</p>"+"</div>"+
            "<div class='state-fund'>"+ "<h6>"+ "States and Territories" +"</h6>" + "<h2 style='margin:0px;'>" + obj3.value + "</h2>"+
            "<h6>"+"Carrier Types"+"</h6>"+"<p class='indi-long-form-text__p--intro' style='margin:0px;'>"+"Rate-of-Return"+"</p>"+
            "</div>" +"</div>" );
         jQuery("#fund-info-bls").hide().slideDown("slow");

          });
})

function getblsSum(){
 var dfd = jQuery.Deferred();
            var obj = {};
            var dt = new Date();
            //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT%20SUM(amount_disbursed)%20WHERE%20year=%20%272017%27%20AND%20fund_type=%27BLS%27%20LIMIT%20999", function(data) {
            jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT SUM(amount_disbursed) WHERE year= '"+dt.getFullYear()+"' AND fund_type='BLS' LIMIT 999", function(data) {
                jQuery.each(data, function(key,val) {
                    obj.key = key;
                    obj.value = val.SUM_amount_disbursed;
                });
                dfd.resolve(obj);
            });
return dfd.promise();
}

function getblsSer(){
 var dfd = jQuery.Deferred();
            var obj = {};
            var dt = new Date();
            //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT%20DISTINCT%20study_area_code%20WHERE%20year=%20%272017%27%20AND%20amount_disbursed<>0%20AND%20%20%20fund_type=%27BLS%27%20LIMIT%20999999999%20|>%20SELECT%20COUNT(*)", function(data) {
            jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT DISTINCT study_area_code WHERE year= '"+dt.getFullYear()+"' AND amount_disbursed<>0 AND   fund_type='BLS' LIMIT 999999999 |> SELECT COUNT(*)", function(data) {
                jQuery.each(data, function(key,val) {
                    obj.value = val.COUNT;
                });
                dfd.resolve(obj);
            });
            return dfd.promise();
}
function getblsState(){
 var dfd = jQuery.Deferred();
            var obj = {};
            var dt = new Date();
            //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT%20DISTINCT%20state%20WHERE%20year=%20%272017%27%20AND%20amount_disbursed%3C%3E0%20AND%20state%3C%3E%27PW%27%20AND%20fund_type=%27BLS%27%20LIMIT%20999999999%20|%3E%20SELECT%20COUNT(*)", function(data) {
            jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT DISTINCT state WHERE year= '"+dt.getFullYear()+"' AND amount_disbursed<>0 AND state<>'PW' AND fund_type='BLS' LIMIT 999999999 |> SELECT COUNT(*)", function(data) {
                jQuery.each(data, function(key,val) {
                    obj.key = key;
                    obj.value = val.COUNT;
                });
                dfd.resolve(obj);
            });
return dfd.promise();
}

/* Code Ends : CAF BLS */

/* Code for ACAM */
jQuery("#acam").click(function(){
        jQuery('#acam').removeClass('acam');
        jQuery(this).addClass('active-orange');
        jQuery('#cacm').removeClass('active-orange');
        jQuery('#cacm').addClass('cacm');
        jQuery('#bls').removeClass('active-orange');
        jQuery('#bls').addClass('bls');
        jQuery('#fhcs').removeClass('active-orange');
        jQuery('#fhcs').addClass('fhcs');
        jQuery('#hcl').removeClass('active-orange');
        jQuery('#hcl').addClass('hcl');
        jQuery('#icc').removeClass('active-orange');
        jQuery('#icc').addClass('icc');
        jQuery('#akplan').removeClass('active-orange');
        jQuery('#akplan').addClass('akplan');
        jQuery('#mobility').removeClass('active-orange');
        jQuery('#mobility').addClass('mobility');
        jQuery('#rbe').removeClass('active-orange');
        jQuery('#rbe').addClass('rbe');
        jQuery('#other').removeClass('active-orange');
        jQuery('#other').addClass('other');
            jQuery("#fund-info-default").hide();
            jQuery("#fund-info-cacm").hide();
            jQuery("#fund-info-fhcs").hide();
            jQuery("#fund-info-bls").hide();
            //jQuery("#fund-info-acam").show();
            jQuery("#fund-info-acam").slideDown("slow");
            jQuery("#fund-info-hcl").hide();
            jQuery("#fund-info-icc").hide();
            jQuery("#fund-info-akplan").hide();
            jQuery("#fund-info-mobility").hide();
            jQuery("#fund-info-rbe").hide();
            jQuery("#fund-info-other").hide();
            jQuery(".fund-close").show();
            jQuery(".fund-close").click(function() {
                jQuery('#cacm').addClass('cacm');
                jQuery('#cacm').removeClass('active-orange');
                jQuery('#fhcs').addClass('fhcs');
                jQuery('#fhcs').removeClass('active-orange');
                jQuery('#bls').removeClass('active-orange');
                jQuery('#bls').addClass('bls');
                jQuery('#acam').removeClass('active-orange');
                jQuery('#acam').addClass('acam');
                jQuery('#hcl').removeClass('active-orange');
                jQuery('#hcl').addClass('hcl');
                jQuery('#icc').removeClass('active-orange');
                jQuery('#icc').addClass('icc');
                jQuery('#akplan').removeClass('active-orange');
                jQuery('#akplan').addClass('akplan');
                jQuery('#mobility').removeClass('active-orange');
                jQuery('#mobility').addClass('mobility');
                jQuery('#rbe').removeClass('active-orange');
                jQuery('#rbe').addClass('rbe');
                jQuery('#other').removeClass('active-orange');
                jQuery('#other').addClass('other');
                    jQuery("#fund-info-cacm").hide();
                    jQuery("#fund-info-fhcs").hide();
                    jQuery("#fund-info-bls").hide();
                    jQuery("#fund-info-acam").hide();
                    jQuery("#fund-info-hcl").hide();
                    jQuery("#fund-info-icc").hide();
                    jQuery("#fund-info-akplan").hide();
                    jQuery("#fund-info-mobility").hide();
                    jQuery("#fund-info-rbe").hide();
                    jQuery("#fund-info-other").hide();
                    //jQuery("#fund-info-default").show();
                     jQuery("#fund-info-default").slideDown("slow");
                    jQuery(".fund-close").hide();
});
jQuery.when(getacamSum(),getacamSer(),getacamState()).
          then(function(obj1,obj2,obj3)
           {
          
           jQuery("#fund-info-acam").html("<div class='fund-head'>"+"<h2 style='color:#FF7500;'>"+"Alternative Connect America Model (ACAM)"+"</h2>"+"</div>"+
            "<div class='fund-desc'>"+"<p>"+"Provides support to Rate-of-Return carriers that voluntarily elected to transition to a new cost model for calculating High Cost funding. ACAM models forward-looking economic costs of deploying and operating a fiber-to-the-premise (FTTP) network."+"</p>"+"</div>"+
            "<div class='fundbox'>"+"<div class='total-fund'>"+"<h5>"+ "Total Funding" + "</h5>" + "<h1>"+"$"+ amountFormatter(obj1.value)+ "</h1>" +"</div>"+
            "<div class='service-fund'>"+"<h6>"+"Service Providers" +"</h6>"+ "<h2 style='margin:0px;'>" + obj2.value + "</h2>"+
            "<h6>"+"Start Date"+"</h6>"+"<p class='indi-long-form-text__p--intro' style='margin:0px;'>"+"Jan 2017"+"</p>"+"</div>"+
            "<div class='state-fund'>"+ "<h6>"+ "States and Territories" +"</h6>" + "<h2 style='margin:0px;'>" + obj3.value + "</h2>"+
            "<h6>"+"Carrier Types"+"</h6>"+"<p class='indi-long-form-text__p--intro' style='margin:0px;'>"+"Rate-of-Return"+"</p>"+
            "</div>" +"</div>" );
           jQuery("#fund-info-acam").hide().slideDown("slow");

          });
})

function getacamSum(){
 var dfd = jQuery.Deferred();
            var obj = {};
            var dt = new Date();
            //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT%20SUM(amount_disbursed)%20WHERE%20year=%20%272017%27%20AND%20fund_type=%27ACAM%27%20LIMIT%20999", function(data) {
            jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT SUM(amount_disbursed) WHERE year= '"+dt.getFullYear()+"' AND fund_type='ACAM' LIMIT 999", function(data) {
                jQuery.each(data, function(key,val) {
                    obj.key = key;
                    obj.value = val.SUM_amount_disbursed;
                });
                dfd.resolve(obj);
            });
return dfd.promise();
}

function getacamSer(){
 var dfd = jQuery.Deferred();
            var obj = {};
            var dt = new Date();
            //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT%20DISTINCT%20study_area_code%20WHERE%20year=%20%272017%27%20AND%20amount_disbursed<>0%20AND%20%20%20fund_type=%27ACAM%27%20LIMIT%20999999999%20|>%20SELECT%20COUNT(*)", function(data) {
            jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT DISTINCT study_area_code WHERE year= '"+dt.getFullYear()+"' AND amount_disbursed<>0 AND   fund_type='ACAM' LIMIT 999999999 |> SELECT COUNT(*)", function(data) {
                jQuery.each(data, function(key,val) {
                    obj.value = val.COUNT;
                });
                dfd.resolve(obj);
            });
            return dfd.promise();
}
function getacamState(){
 var dfd = jQuery.Deferred();
            var obj = {};
            var dt = new Date();
            //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT%20DISTINCT%20state%20WHERE%20year=%20%272017%27%20AND%20amount_disbursed%3C%3E0%20AND%20state%3C%3E%27PW%27%20AND%20fund_type=%27ACAM%27%20LIMIT%20999999999%20|%3E%20SELECT%20COUNT(*)", function(data) {
            jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT DISTINCT state WHERE year= '"+dt.getFullYear()+"' AND amount_disbursed<>0 AND state<>'PW' AND fund_type='ACAM' LIMIT 999999999 |> SELECT COUNT(*)", function(data) {
                jQuery.each(data, function(key,val) {
                    obj.key = key;
                    obj.value = val.COUNT;
                });
                dfd.resolve(obj);
            });
return dfd.promise();
}

/* Code Ends : ACAM*/
/* Code for HCL */
jQuery("#hcl").click(function(){
        jQuery('#hcl').removeClass('hcl');
        jQuery(this).addClass('active-orange');
        jQuery('#cacm').removeClass('active-orange');
        jQuery('#cacm').addClass('cacm');
        jQuery('#bls').removeClass('active-orange');
        jQuery('#bls').addClass('bls');
        jQuery('#acam').removeClass('active-orange');
        jQuery('#acam').addClass('acam');
        jQuery('#fhcs').removeClass('active-orange');
        jQuery('#fhcs').addClass('fhcs');
        jQuery('#icc').removeClass('active-orange');
        jQuery('#icc').addClass('icc');
        jQuery('#akplan').removeClass('active-orange');
        jQuery('#akplan').addClass('akplan');
        jQuery('#mobility').removeClass('active-orange');
        jQuery('#mobility').addClass('mobility');
        jQuery('#rbe').removeClass('active-orange');
        jQuery('#rbe').addClass('rbe');
        jQuery('#other').removeClass('active-orange');
        jQuery('#other').addClass('other');
            jQuery("#fund-info-default").hide();
            jQuery("#fund-info-cacm").hide();
            jQuery("#fund-info-fhcs").hide();
            jQuery("#fund-info-bls").hide();
            jQuery("#fund-info-acam").hide();
            //jQuery("#fund-info-hcl").show();
            jQuery("#fund-info-hcl").slideDown("slow");
            jQuery("#fund-info-icc").hide();
            jQuery("#fund-info-akplan").hide();
            jQuery("#fund-info-mobility").hide();
            jQuery("#fund-info-rbe").hide();
            jQuery("#fund-info-other").hide();
            jQuery(".fund-close").show();
            jQuery(".fund-close").click(function() {
                jQuery('#cacm').addClass('cacm');
                jQuery('#cacm').removeClass('active-orange');
                jQuery('#fhcs').addClass('fhcs');
                jQuery('#fhcs').removeClass('active-orange');
                jQuery('#bls').removeClass('active-orange');
                jQuery('#bls').addClass('bls');
                jQuery('#acam').removeClass('active-orange');
                jQuery('#acam').addClass('acam');
                jQuery('#hcl').removeClass('active-orange');
                jQuery('#hcl').addClass('hcl');
                jQuery('#icc').removeClass('active-orange');
                jQuery('#icc').addClass('icc');
                jQuery('#akplan').removeClass('active-orange');
                jQuery('#akplan').addClass('akplan');
                jQuery('#mobility').removeClass('active-orange');
                jQuery('#mobility').addClass('mobility');
                jQuery('#rbe').removeClass('active-orange');
                jQuery('#rbe').addClass('rbe');
                jQuery('#other').removeClass('active-orange');
                jQuery('#other').addClass('other');
                    jQuery("#fund-info-cacm").hide();
                    jQuery("#fund-info-fhcs").hide();
                    jQuery("#fund-info-bls").hide();
                    jQuery("#fund-info-acam").hide();
                    jQuery("#fund-info-hcl").hide();
                    jQuery("#fund-info-icc").hide();
                    jQuery("#fund-info-akplan").hide();
                    jQuery("#fund-info-mobility").hide();
                    jQuery("#fund-info-rbe").hide();
                    jQuery("#fund-info-other").hide();
                    //jQuery("#fund-info-default").show();
                     jQuery("#fund-info-default").slideDown("slow");
                    jQuery(".fund-close").hide();
});
jQuery.when(gethclSum(),gethclSer(),gethclState()).
          then(function(obj1,obj2,obj3)
           {
          
           jQuery("#fund-info-hcl").html("<div class='fund-head'>"+"<h2 style='color:#FF7500;'>"+"High Cost Loop Support (HCL)"+"</h2>"+"</div>"+
            "<div class='fund-desc'>"+"<p>"+"Provides support for ‘‘last mile’’ connections to rural carriers in areas where the cost to provide service exceeds 115 percent of the national average cost per line."+"</p>"+"</div>"+
            "<div class='fundbox'>"+
            "<div class='total-fund'>"+"<h5>"+ "Total Funding" + "</h5>" + "<h1>"+"$"+ amountFormatter(obj1.value)+ "</h1>" +"</div>"+
            "<div class='service-fund'>"+"<h6>"+"Service Providers" +"</h6>"+ "<h2 style='margin:0px;'>" + obj2.value + "</h2>"+
            "<h6>"+"Start Date"+"</h6>"+"<p class='indi-long-form-text__p--intro' style='margin:0px;'>"+"Jan 1998"+"</p>"+"</div>"+
            "<div class='state-fund'>"+ "<h6>"+ "States and Territories" +"</h6>" + "<h2 style='margin:0px;'>" + obj3.value + "</h2>"+
            "<h6>"+"Carrier Types"+"</h6>"+"<p class='indi-long-form-text__p--intro' style='margin:0px;'>"+"Price Cap"+"</p>"+
            "<p class='indi-long-form-text__p--intro' style='margin:0px;'>"+"Rate-of-Return"+"</p>"+
            "</div>" +"</div>" );
           jQuery("#fund-info-hcl").hide().slideDown("slow");
          });
})

function gethclSum(){
 var dfd = jQuery.Deferred();
            var obj = {};
            var dt = new Date();
            //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT%20SUM(amount_disbursed)%20WHERE%20year=%20%272017%27%20AND%20fund_type%20IN%20(%27HCL%27,%27SVS%27)%20LIMIT%20999999999", function(data) {
            jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT SUM(amount_disbursed) WHERE year= '"+dt.getFullYear()+"' AND fund_type IN ('HCL','SVS') LIMIT 999999999", function(data) {
                jQuery.each(data, function(key,val) {
                    obj.key = key;
                    obj.value = val.SUM_amount_disbursed;
                });
                dfd.resolve(obj);
            });
return dfd.promise();
}

function gethclSer(){
 var dfd = jQuery.Deferred();
            var obj = {};
            var dt = new Date();
            //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT%20DISTINCT%20study_area_code%20WHERE%20year=%20%272017%27%20AND%20amount_disbursed<>0%20AND%20%20%20fund_type%20IN%20(%27HCL%27,%27SVS%27)%20LIMIT%20999999999%20|>%20SELECT%20COUNT(*)", function(data) {
            jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT DISTINCT study_area_code WHERE year= '"+dt.getFullYear()+"' AND amount_disbursed<>0 AND   fund_type IN ('HCL','SVS') LIMIT 999999999 |> SELECT COUNT(*)", function(data) {
                jQuery.each(data, function(key,val) {
                    obj.value = val.COUNT;
                });
                dfd.resolve(obj);
            });
            return dfd.promise();
}
function gethclState(){
 var dfd = jQuery.Deferred();
            var obj = {};
            var dt = new Date();
            //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT%20DISTINCT%20state%20WHERE%20year=%20%272017%27%20AND%20amount_disbursed<>0%20AND%20state<>%27PW%27%20AND%20%20%20fund_type%20IN%20(%27HCL%27,%27SVS%27)%20LIMIT%20999999999%20|>%20SELECT%20COUNT(*)", function(data) {
            jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT DISTINCT state WHERE year= '"+dt.getFullYear()+"' AND amount_disbursed<>0 AND state<>'PW' AND   fund_type IN ('HCL','SVS') LIMIT 999999999 |> SELECT COUNT(*)", function(data) {
                jQuery.each(data, function(key,val) {
                    obj.key = key;
                    obj.value = val.COUNT;
                });
                dfd.resolve(obj);
            });
return dfd.promise();
}

/* Code Ends : HCL*/

/* Code for CAF ICC */
jQuery("#icc").click(function(){
        jQuery('#icc').removeClass('icc');
        jQuery(this).addClass('active-orange');
        jQuery('#cacm').removeClass('active-orange');
        jQuery('#cacm').addClass('cacm');
        jQuery('#bls').removeClass('active-orange');
        jQuery('#bls').addClass('bls');
        jQuery('#acam').removeClass('active-orange');
        jQuery('#acam').addClass('acam');
        jQuery('#hcl').removeClass('active-orange');
        jQuery('#hcl').addClass('hcl');
        jQuery('#fhcs').removeClass('active-orange');
        jQuery('#fhcs').addClass('fhcs');
        jQuery('#akplan').removeClass('active-orange');
        jQuery('#akplan').addClass('akplan');
        jQuery('#mobility').removeClass('active-orange');
        jQuery('#mobility').addClass('mobility');
        jQuery('#rbe').removeClass('active-orange');
        jQuery('#rbe').addClass('rbe');
        jQuery('#other').removeClass('active-orange');
        jQuery('#other').addClass('other');
            jQuery("#fund-info-default").hide();
            jQuery("#fund-info-cacm").hide();
            jQuery("#fund-info-fhcs").hide();
            jQuery("#fund-info-bls").hide();
            jQuery("#fund-info-acam").hide();
            jQuery("#fund-info-hcl").hide();
            //jQuery("#fund-info-icc").show();
            jQuery("#fund-info-icc").slideDown("slow");
            jQuery("#fund-info-akplan").hide();
            jQuery("#fund-info-mobility").hide();
            jQuery("#fund-info-rbe").hide();
            jQuery("#fund-info-other").hide();
            jQuery(".fund-close").show();
            jQuery(".fund-close").click(function() {
                jQuery('#cacm').addClass('cacm');
                jQuery('#cacm').removeClass('active-orange');
                jQuery('#fhcs').addClass('fhcs');
                jQuery('#fhcs').removeClass('active-orange');
                jQuery('#bls').removeClass('active-orange');
                jQuery('#bls').addClass('bls');
                jQuery('#acam').removeClass('active-orange');
                jQuery('#acam').addClass('acam');
                jQuery('#hcl').removeClass('active-orange');
                jQuery('#hcl').addClass('hcl');
                jQuery('#icc').removeClass('active-orange');
                jQuery('#icc').addClass('icc');
                jQuery('#akplan').removeClass('active-orange');
                jQuery('#akplan').addClass('akplan');
                jQuery('#mobility').removeClass('active-orange');
                jQuery('#mobility').addClass('mobility');
                jQuery('#rbe').removeClass('active-orange');
                jQuery('#rbe').addClass('rbe');
                jQuery('#other').removeClass('active-orange');
                jQuery('#other').addClass('other');
                    jQuery("#fund-info-cacm").hide();
                    jQuery("#fund-info-fhcs").hide();
                    jQuery("#fund-info-bls").hide();
                    jQuery("#fund-info-acam").hide();
                    jQuery("#fund-info-hcl").hide();
                    jQuery("#fund-info-icc").hide();
                    jQuery("#fund-info-akplan").hide();
                    jQuery("#fund-info-mobility").hide();
                    jQuery("#fund-info-rbe").hide();
                    jQuery("#fund-info-other").hide();
                    //jQuery("#fund-info-default").show();
                     jQuery("#fund-info-default").slideDown("slow");
                    jQuery(".fund-close").hide();
});
jQuery.when(geticcSum(),geticcSer(),geticcState()).
          then(function(obj1,obj2,obj3)
           {
          
          jQuery("#fund-info-icc").html("<div class='fund-head'>"+"<h2 style='color:#FF7500;'>"+"Connect America Fund Inter-carrier Compensation (CAF ICC)"+"</h2>"+"</div>"+
            "<div class='fund-desc'>"+"<p>"+"Reforms the Inter-carrier Compensation (ICC) system and allows incumbent local exchange carriers (ILECs) to charge residential customers an Access Recovery Charge (ARC) on a limited basis. Also allows ILECs to recover charges from certain multiline business customers. If eligible, ILECs may receive additional recovery funds, provided they meet certain broadband service obligations. "+"</p>"+"</div>"+
            "<div class='fundbox'>"+
            "<div class='total-fund'>"+"<h5>"+ "Total Funding" + "</h5>" + "<h1>"+"$"+ amountFormatter(obj1.value) + "</h1>" +"</div>"+
            "<div class='service-fund'>"+"<h6>"+"Service Providers" +"</h6>"+ "<h2 style='margin:0px;'>" + obj2.value + "</h2>"+
           "<h6>"+"Start Date"+"</h6>"+"<p class='indi-long-form-text__p--intro' style='margin:0px;'>"+"Jul 2012"+"</p>"+"</div>"+
            "<div class='state-fund'>"+ "<h6>"+ "States and Territories" +"</h6>" + "<h2 style='margin:0px;'>" + obj3.value + "</h2>"+
            "<h6>"+"Carrier Types"+"</h6>"+"<p class='indi-long-form-text__p--intro' style='margin:0px;'>"+"Price Cap"+"</p>"+
            "<p class='indi-long-form-text__p--intro' style='margin:0px;'>"+"Rate-of-Return"+"</p>"+
            "</div>" +"</div>" );
          jQuery("#fund-info-icc").hide().slideDown("slow");
          });
})

function geticcSum(){
 var dfd = jQuery.Deferred();
            var obj = {};
            var dt = new Date();
            //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT%20SUM(amount_disbursed)%20WHERE%20year=%20%272017%27%20AND%20fund_type=%27ICC%27%20LIMIT%20999999999", function(data) {
            jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT SUM(amount_disbursed) WHERE year= '"+dt.getFullYear()+"' AND fund_type='ICC' LIMIT 999999999", function(data) {
                jQuery.each(data, function(key,val) {
                    obj.key = key;
                    obj.value = val.SUM_amount_disbursed;
                });
                dfd.resolve(obj);
            });
return dfd.promise();
}

function geticcSer(){
 var dfd = jQuery.Deferred();
            var obj = {};
            var dt = new Date();
            //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT%20DISTINCT%20study_area_code%20WHERE%20year=%20%272017%27%20AND%20amount_disbursed<>0%20AND%20%20%20fund_type=%27ICC%27%20LIMIT%20999999999%20|>%20SELECT%20COUNT(*)", function(data) {
            jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT DISTINCT study_area_code WHERE year= '"+dt.getFullYear()+"' AND amount_disbursed<>0 AND   fund_type='ICC' LIMIT 999999999 |> SELECT COUNT(*)", function(data) {
                jQuery.each(data, function(key,val) {
                    obj.value = val.COUNT;
                });
                dfd.resolve(obj);
            });
            return dfd.promise();
}
function geticcState(){
 var dfd = jQuery.Deferred();
            var obj = {};
            var dt = new Date();
            //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT%20DISTINCT%20state%20WHERE%20year=%20%272017%27%20AND%20amount_disbursed<>0%20AND%20state<>%27PW%27%20AND%20fund_type=%27ICC%27%20LIMIT%20999999999%20|>%20SELECT%20COUNT(*)", function(data) {
            jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT DISTINCT state WHERE year= '"+dt.getFullYear()+"' AND amount_disbursed<>0 AND state<>'PW' AND fund_type='ICC' LIMIT 999999999 |> SELECT COUNT(*)", function(data) {    
                jQuery.each(data, function(key,val) {
                    obj.key = key;
                    obj.value = val.COUNT;
                });
                dfd.resolve(obj);
            });
return dfd.promise();
}

/* Code Ends : CAF ICC*/
/* Code for AK PLAN */
jQuery("#akplan").click(function(){
        jQuery('#akplan').removeClass('akplan');
        jQuery(this).addClass('active-orange');
        jQuery('#cacm').removeClass('active-orange');
        jQuery('#cacm').addClass('cacm');
        jQuery('#bls').removeClass('active-orange');
        jQuery('#bls').addClass('bls');
        jQuery('#acam').removeClass('active-orange');
        jQuery('#acam').addClass('acam');
        jQuery('#hcl').removeClass('active-orange');
        jQuery('#hcl').addClass('hcl');
        jQuery('#icc').removeClass('active-orange');
        jQuery('#icc').addClass('icc');
        jQuery('#fhcs').removeClass('active-orange');
        jQuery('#fhcs').addClass('fhcs');
        jQuery('#mobility').removeClass('active-orange');
        jQuery('#mobility').addClass('mobility');
        jQuery('#rbe').removeClass('active-orange');
        jQuery('#rbe').addClass('rbe');
        jQuery('#other').removeClass('active-orange');
        jQuery('#other').addClass('other');
            jQuery("#fund-info-default").hide();
            jQuery("#fund-info-cacm").hide();
            jQuery("#fund-info-fhcs").hide();
            jQuery("#fund-info-bls").hide();
            jQuery("#fund-info-acam").hide();
            jQuery("#fund-info-hcl").hide();
            jQuery("#fund-info-icc").hide();
            //jQuery("#fund-info-akplan").show();
            jQuery("#fund-info-akplan").slideDown("slow");
            jQuery("#fund-info-mobility").hide();
            jQuery("#fund-info-rbe").hide();
            jQuery("#fund-info-other").hide();
            jQuery(".fund-close").show();
            jQuery(".fund-close").click(function() {
                jQuery('#cacm').addClass('cacm');
                jQuery('#cacm').removeClass('active-orange');
                jQuery('#fhcs').addClass('fhcs');
                jQuery('#fhcs').removeClass('active-orange');
                jQuery('#bls').removeClass('active-orange');
                jQuery('#bls').addClass('bls');
                jQuery('#acam').removeClass('active-orange');
                jQuery('#acam').addClass('acam');
                jQuery('#hcl').removeClass('active-orange');
                jQuery('#hcl').addClass('hcl');
                jQuery('#icc').removeClass('active-orange');
                jQuery('#icc').addClass('icc');
                jQuery('#akplan').removeClass('active-orange');
                jQuery('#akplan').addClass('akplan');
                jQuery('#mobility').removeClass('active-orange');
                jQuery('#mobility').addClass('mobility');
                jQuery('#rbe').removeClass('active-orange');
                jQuery('#rbe').addClass('rbe');
                jQuery('#other').removeClass('active-orange');
                jQuery('#other').addClass('other');
                    jQuery("#fund-info-cacm").hide();
                    jQuery("#fund-info-fhcs").hide();
                    jQuery("#fund-info-bls").hide();
                    jQuery("#fund-info-acam").hide();
                    jQuery("#fund-info-hcl").hide();
                    jQuery("#fund-info-icc").hide();
                    jQuery("#fund-info-akplan").hide();
                    jQuery("#fund-info-mobility").hide();
                    jQuery("#fund-info-rbe").hide();
                    jQuery("#fund-info-other").hide();
                    //jQuery("#fund-info-default").show();
                     jQuery("#fund-info-default").slideDown("slow");
                    jQuery(".fund-close").hide();
});
jQuery.when(getakplanSum(),getakplanSer(),getakplanState()).
          then(function(obj1,obj2,obj3)
           {
          
           jQuery("#fund-info-akplan").html("<div class='fund-head'>"+"<h2 style='color:#FF7500;'>"+"Alaska Plan Support (AK Plan)"+"</h2>"+"</div>"+
            "<div class='fund-desc'>"+"<p>"+"Provides support to Rate-of-Return carriers in Alaska, and their wireless affiliates, to maintain, extend and upgrade broadband service across the state. Gives carriers the option to receive fixed amount of support over 10 years for both fixed and mobile voice and broadband service in High Cost areas."+"</p>"+"</div>"+
            "<div class='fundbox'>"+
            "<div class='total-fund'>"+"<h5>"+ "Total Funding" + "</h5>" + "<h1>"+"$"+ amountFormatter(obj1.value) + "</h1>" +"</div>"+
            "<div class='service-fund'>"+"<h6>"+"Service Providers" +"</h6>"+ "<h2 style='margin:0px;'>" + obj2.value + "</h2>"+
            "<h6>"+"Start Date"+"</h6>"+"<p class='indi-long-form-text__p--intro' style='margin:0px;'>"+"Jan 2017"+"</p>"+"</div>"+
            "<div class='state-fund'>"+ "<h6>"+ "States and Territories" +"</h6>" + "<h2 style='margin:0px;'>" + obj3.value + "</h2>"+
            "<h6>"+"Carrier Types"+"</h6>"+"<p class='indi-long-form-text__p--intro' style='margin:0px;'>"+"Rate-of-Return"+"</p>"+
            "<p class='indi-long-form-text__p--intro' style='margin:0px;'>"+"Wireless"+"</p>"+
            "</div>" +"</div>" );
           jQuery("#fund-info-akplan").hide().slideDown("slow");
          });
})

function getakplanSum(){
 var dfd = jQuery.Deferred();
            var obj = {};
            var dt = new Date();
            //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT%20SUM(amount_disbursed)%20WHERE%20year=%20%272017%27%20AND%20fund_type=%27AK%20PLAN%27%20LIMIT%20999999999", function(data) {
            jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT SUM(amount_disbursed) WHERE year= '"+dt.getFullYear()+"' AND fund_type='AK PLAN' LIMIT 999999999", function(data) {
                jQuery.each(data, function(key,val) {
                    obj.key = key;
                    obj.value = val.SUM_amount_disbursed;
                });
                dfd.resolve(obj);
            });
return dfd.promise();
}

function getakplanSer(){
 var dfd = jQuery.Deferred();
            var obj = {};
            var dt = new Date();
            //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=%20SELECT%20DISTINCT%20study_area_code%20WHERE%20year=%20%272017%27%20AND%20amount_disbursed<>0%20AND%20fund_type=%27AK%20PLAN%27%20LIMIT%20999999999%20|>%20SELECT%20COUNT(*)", function(data) {
            jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query= SELECT DISTINCT study_area_code WHERE year= '"+dt.getFullYear()+"' AND amount_disbursed<>0 AND fund_type='AK PLAN' LIMIT 999999999 |> SELECT COUNT(*)", function(data) {
                jQuery.each(data, function(key,val) {
                    obj.value = val.COUNT;
                });
                dfd.resolve(obj);
            });
            return dfd.promise();
}
function getakplanState(){
 var dfd = jQuery.Deferred();
            var obj = {};
            var dt = new Date();
            //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT%20DISTINCT%20state%20WHERE%20year=%20%272017%27%20AND%20amount_disbursed<>0%20AND%20state<>%27PW%27%20AND%20fund_type=%27AK%20PLAN%27%20LIMIT%20999999999%20|>%20SELECT%20COUNT(*)", function(data) {
            jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT DISTINCT state WHERE year= '"+dt.getFullYear()+"' AND amount_disbursed<>0 AND state<>'PW' AND fund_type='AK PLAN' LIMIT 999999999 |> SELECT COUNT(*)", function(data) {
                jQuery.each(data, function(key,val) {
                    obj.key = key;
                    obj.value = val.COUNT;
                });
                dfd.resolve(obj);
            });
return dfd.promise();
}

/* Code Ends : AK PLAN*/
/* Code for MOBILITY I */
jQuery("#mobility").click(function(){
        jQuery('#mobility').removeClass('mobility');
        jQuery(this).addClass('active-orange');
        jQuery('#cacm').removeClass('active-orange');
        jQuery('#cacm').addClass('cacm');
        jQuery('#bls').removeClass('active-orange');
        jQuery('#bls').addClass('bls');
        jQuery('#acam').removeClass('active-orange');
        jQuery('#acam').addClass('acam');
        jQuery('#hcl').removeClass('active-orange');
        jQuery('#hcl').addClass('hcl');
        jQuery('#icc').removeClass('active-orange');
        jQuery('#icc').addClass('icc');
        jQuery('#akplan').removeClass('active-orange');
        jQuery('#akplan').addClass('akplan');
        jQuery('#fhcs').removeClass('active-orange');
        jQuery('#fhcs').addClass('fhcs');
        jQuery('#rbe').removeClass('active-orange');
        jQuery('#rbe').addClass('rbe');
        jQuery('#other').removeClass('active-orange');
        jQuery('#other').addClass('other');
            jQuery("#fund-info-default").hide();
            jQuery("#fund-info-cacm").hide();
            jQuery("#fund-info-fhcs").hide();
            jQuery("#fund-info-bls").hide();
            jQuery("#fund-info-acam").hide();
            jQuery("#fund-info-hcl").hide();
            jQuery("#fund-info-icc").hide();
            jQuery("#fund-info-akplan").hide();
            //jQuery("#fund-info-mobility").show();
            jQuery("#fund-info-mobility").slideDown("slow");
            jQuery("#fund-info-rbe").hide();
            jQuery("#fund-info-other").hide();
            jQuery(".fund-close").show();
            jQuery(".fund-close").click(function() {
                jQuery('#cacm').addClass('cacm');
                jQuery('#cacm').removeClass('active-orange');
                jQuery('#fhcs').addClass('fhcs');
                jQuery('#fhcs').removeClass('active-orange');
                jQuery('#bls').removeClass('active-orange');
                jQuery('#bls').addClass('bls');
                jQuery('#acam').removeClass('active-orange');
                jQuery('#acam').addClass('acam');
                jQuery('#hcl').removeClass('active-orange');
                jQuery('#hcl').addClass('hcl');
                jQuery('#icc').removeClass('active-orange');
                jQuery('#icc').addClass('icc');
                jQuery('#akplan').removeClass('active-orange');
                jQuery('#akplan').addClass('akplan');
                jQuery('#mobility').removeClass('active-orange');
                jQuery('#mobility').addClass('mobility');
                jQuery('#rbe').removeClass('active-orange');
                jQuery('#rbe').addClass('rbe');
                jQuery('#other').removeClass('active-orange');
                jQuery('#other').addClass('other');
                    jQuery("#fund-info-cacm").hide();
                    jQuery("#fund-info-fhcs").hide();
                    jQuery("#fund-info-bls").hide();
                    jQuery("#fund-info-acam").hide();
                    jQuery("#fund-info-hcl").hide();
                    jQuery("#fund-info-icc").hide();
                    jQuery("#fund-info-akplan").hide();
                    jQuery("#fund-info-mobility").hide();
                    jQuery("#fund-info-rbe").hide();
                    jQuery("#fund-info-other").hide();
                    //jQuery("#fund-info-default").show();
                    jQuery("#fund-info-default").slideDown("slow");
                    jQuery(".fund-close").hide();
});
jQuery.when(getMobSum(),getMobSer(),getMobState()).
          then(function(obj1,obj2,obj3)
           {
          
          jQuery("#fund-info-mobility").html("<div class='fund-head'>"+"<h2 style='color:#FF7500;'>"+"Mobility Fund Phase I (MFI)"+"</h2>"+"</div>"+
            "<div class='fund-desc'>"+"<p>"+"Provides one-time support in three payments to accelerate deployment of networks for mobile voice and broadband services in unserved areas. "+"</p>"+"</div>"+
            "<div class='fundbox'>"+
            "<div class='total-fund'>"+"<h5>"+ "Total Funding" + "</h5>" + "<h1>"+"$"+ amountFormatter(obj1.value) + "</h1>" +"</div>"+
            "<div class='service-fund'>"+"<h6>"+"Service Providers" +"</h6>"+ "<h2 style='margin:0px;'>" + obj2.value + "</h2>"+
            "<h6>"+"Start Date"+"</h6>"+"<p class='indi-long-form-text__p--intro' style='margin:0px;'>"+"May 2013"+"</p>"+"</div>"+
            "<div class='state-fund'>"+ "<h6>"+ "States and Territories" +"</h6>" + "<h2 style='margin:0px;'>" + obj3.value + "</h2>"+
             "<h6>"+"Carrier Types"+"</h6>"+"<p class='indi-long-form-text__p--intro' style='margin:0px;'>"+"Wireless"+"</p>"+
            "</div>" +"</div>" );
            jQuery("#fund-info-mobility").hide().slideDown("slow");
          });
})

function getMobSum(){
 var dfd = jQuery.Deferred();
            var obj = {};
            var dt = new Date();
            //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT%20SUM(amount_disbursed)%20WHERE%20year=%20%272017%27%20AND%20fund_type=%27Mobility%20I%27%20LIMIT%20999", function(data) {
            jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT SUM(amount_disbursed) WHERE year= '"+dt.getFullYear()+"' AND fund_type='Mobility I' LIMIT 999", function(data) {

                jQuery.each(data, function(key,val) {
                    obj.key = key;
                    obj.value = val.SUM_amount_disbursed;
                });
                dfd.resolve(obj);
            });
return dfd.promise();
}

function getMobSer(){
 var dfd = jQuery.Deferred();
            var obj = {};
            var dt = new Date();
            //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=%20SELECT%20DISTINCT%20study_area_code%20WHERE%20year=%20%272017%27%20AND%20amount_disbursed<>0%20AND%20fund_type=%27Mobility%20I%27%20LIMIT%20999999999%20|>%20SELECT%20COUNT(*)", function(data) {
            jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query= SELECT DISTINCT study_area_code WHERE year= '"+dt.getFullYear()+"' AND amount_disbursed<>0 AND fund_type='Mobility I' LIMIT 999999999 |> SELECT COUNT(*)", function(data) {
                jQuery.each(data, function(key,val) {
                    obj.value = val.COUNT;
                });
                dfd.resolve(obj);
            });
            return dfd.promise();
}
function getMobState(){
 var dfd = jQuery.Deferred();
            var obj = {};
            var dt = new Date();
            //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT%20DISTINCT%20state%20WHERE%20year=%20%272017%27%20AND%20amount_disbursed%3C%3E0%20AND%20state%3C%3E%27PW%27%20AND%20fund_type=%27Mobility%20I%27%20LIMIT%20999999999%20|%3E%20SELECT%20COUNT(*)", function(data) {
            jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT DISTINCT state WHERE year= '"+dt.getFullYear()+"' AND amount_disbursed<>0 AND state<>'PW' AND fund_type='Mobility I' LIMIT 999999999 |> SELECT COUNT(*)", function(data) {
                jQuery.each(data, function(key,val) {
                    obj.key = key;
                    obj.value = val.COUNT;
                });
                dfd.resolve(obj);
            });
return dfd.promise();
}
/* Code Ends : MOBILITY I*/

/* Code for RBE */
jQuery("#rbe").click(function(){
        jQuery('#rbe').removeClass('rbe');
        jQuery(this).addClass('active-orange');
        jQuery('#cacm').removeClass('active-orange');
        jQuery('#cacm').addClass('cacm');
        jQuery('#bls').removeClass('active-orange');
        jQuery('#bls').addClass('bls');
        jQuery('#acam').removeClass('active-orange');
        jQuery('#acam').addClass('acam');
        jQuery('#hcl').removeClass('active-orange');
        jQuery('#hcl').addClass('hcl');
        jQuery('#icc').removeClass('active-orange');
        jQuery('#icc').addClass('icc');
        jQuery('#akplan').removeClass('active-orange');
        jQuery('#akplan').addClass('akplan');
        jQuery('#mobility').removeClass('active-orange');
        jQuery('#mobility').addClass('mobility');
        jQuery('#fhcs').removeClass('active-orange');
        jQuery('#fhcs').addClass('fhcs');
        jQuery('#other').removeClass('active-orange');
        jQuery('#other').addClass('other');
            jQuery("#fund-info-default").hide();
            jQuery("#fund-info-cacm").hide();
            jQuery("#fund-info-fhcs").hide();
            jQuery("#fund-info-bls").hide();
            jQuery("#fund-info-acam").hide();
            jQuery("#fund-info-hcl").hide();
            jQuery("#fund-info-icc").hide();
            jQuery("#fund-info-akplan").hide();
            jQuery("#fund-info-mobility").hide();
            //jQuery("#fund-info-rbe").show();
            jQuery("#fund-info-rbe").slideDown("slow");
            jQuery("#fund-info-other").hide();
            jQuery(".fund-close").show();
            jQuery(".fund-close").click(function() {
                jQuery('#cacm').addClass('cacm');
                jQuery('#cacm').removeClass('active-orange');
                jQuery('#fhcs').addClass('fhcs');
                jQuery('#fhcs').removeClass('active-orange');
                jQuery('#bls').removeClass('active-orange');
                jQuery('#bls').addClass('bls');
                jQuery('#acam').removeClass('active-orange');
                jQuery('#acam').addClass('acam');
                jQuery('#hcl').removeClass('active-orange');
                jQuery('#hcl').addClass('hcl');
                jQuery('#icc').removeClass('active-orange');
                jQuery('#icc').addClass('icc');
                jQuery('#akplan').removeClass('active-orange');
                jQuery('#akplan').addClass('akplan');
                jQuery('#mobility').removeClass('active-orange');
                jQuery('#mobility').addClass('mobility');
                jQuery('#rbe').removeClass('active-orange');
                jQuery('#rbe').addClass('rbe');
                jQuery('#other').removeClass('active-orange');
                jQuery('#other').addClass('other');
                    jQuery("#fund-info-cacm").hide();
                    jQuery("#fund-info-fhcs").hide();
                    jQuery("#fund-info-bls").hide();
                    jQuery("#fund-info-acam").hide();
                    jQuery("#fund-info-hcl").hide();
                    jQuery("#fund-info-icc").hide();
                    jQuery("#fund-info-akplan").hide();
                    jQuery("#fund-info-mobility").hide();
                    jQuery("#fund-info-rbe").hide();
                    jQuery("#fund-info-other").hide();
                    //jQuery("#fund-info-default").show();
                    jQuery("#fund-info-default").slideDown("slow");
                    jQuery(".fund-close").hide();
});
jQuery.when(getrbeSum(),getrbeSer(),getrbeState()).
          then(function(obj1,obj2,obj3)
           {
           jQuery("#fund-info-rbe").html("<div class='fund-head'>"+"<h2 style='color:#FF7500;'>"+"Rural Broadband Experiment (RBE)"+"</h2>"+"</div>"+
            "<div class='fund-desc'>"+"<p>"+"Provides funding for experiments in Price Cap areas to bring robust, scalable broadband networks to residential and small business locations in rural communities."+"</p>"+"</div>"+
            "<div class='fundbox'>"+
            "<div class='total-fund'>"+"<h5>"+ "Total Funding" + "</h5>" + "<h1>"+"$"+ amountFormatter(obj1.value) + "</h1>" +"</div>"+
            "<div class='service-fund'>"+"<h6>"+"Service Providers" +"</h6>"+ "<h2 style='margin:0px;'>" + obj2.value + "</h2>"+
            "<h6>"+"Start Date"+"</h6>"+"<p class='indi-long-form-text__p--intro' style='margin:0px;'>"+"Jul 2015"+"</p>"+"</div>"+
            "<div class='state-fund'>"+ "<h6>"+ "States and Territories" +"</h6>" + "<h2 style='margin:0px;'>" + obj3.value + "</h2>"+
             "<h6>"+"Carrier Types"+"</h6>"+"<p class='indi-long-form-text__p--intro' style='margin:0px;'>"+"Price Cap"+"</p>"+
            "</div>"+"</div>" );
           jQuery("#fund-info-rbe").hide().slideDown("slow");
          });
          
})

function getrbeSum(){
 var dfd = jQuery.Deferred();
            var obj = {};
            var dt = new Date();
            //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT%20SUM(amount_disbursed)%20WHERE%20year=%20%272017%27%20AND%20fund_type=%27RBE%27%20LIMIT%20999999999", function(data) {
            jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT SUM(amount_disbursed) WHERE year= '"+dt.getFullYear()+"' AND fund_type='RBE' LIMIT 999999999", function(data) {
                jQuery.each(data, function(key,val) {
                    obj.key = key;
                    obj.value = val.SUM_amount_disbursed;
                });
                dfd.resolve(obj);
            });
return dfd.promise();
}

function getrbeSer(){
 var dfd = jQuery.Deferred();
            var obj = {};
            var dt = new Date();
            //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT%20DISTINCT%20study_area_code%20WHERE%20year=%20%272017%27%20AND%20amount_disbursed<>0%20AND%20%20%20fund_type=%27RBE%27%20LIMIT%20999999999%20|>%20SELECT%20COUNT(*)", function(data) {
            jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT DISTINCT study_area_code WHERE year= '"+dt.getFullYear()+"' AND amount_disbursed<>0 AND   fund_type='RBE' LIMIT 999999999 |> SELECT COUNT(*)", function(data) {
                jQuery.each(data, function(key,val) {
                    obj.value = val.COUNT;
                });
                dfd.resolve(obj);
            });
            return dfd.promise();
}
function getrbeState(){
 var dfd = jQuery.Deferred();
            var obj = {};
            var dt = new Date();
            //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT%20DISTINCT%20state%20WHERE%20year=%20%272017%27%20AND%20amount_disbursed<>0%20AND%20state<>%27PW%27%20AND%20fund_type=%27RBE%27%20LIMIT%20999999999%20|>%20SELECT%20COUNT(*)", function(data) {
            jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT DISTINCT state WHERE year= '"+dt.getFullYear()+"' AND amount_disbursed<>0 AND state<>'PW' AND fund_type='RBE' LIMIT 999999999 |> SELECT COUNT(*)", function(data) {
                jQuery.each(data, function(key,val) {
                    obj.key = key;
                    obj.value = val.COUNT;
                });
                dfd.resolve(obj);
            });
return dfd.promise();
}

/* Code Ends : RBE*/
/* Code for OTHER */
jQuery("#other").click(function(){
        jQuery('#other').removeClass('other');
        jQuery(this).addClass('active-orange');
        jQuery('#cacm').removeClass('active-orange');
        jQuery('#cacm').addClass('cacm');
        jQuery('#bls').removeClass('active-orange');
        jQuery('#bls').addClass('bls');
        jQuery('#acam').removeClass('active-orange');
        jQuery('#acam').addClass('acam');
        jQuery('#hcl').removeClass('active-orange');
        jQuery('#hcl').addClass('hcl');
        jQuery('#icc').removeClass('active-orange');
        jQuery('#icc').addClass('icc');
        jQuery('#akplan').removeClass('active-orange');
        jQuery('#akplan').addClass('akplan');
        jQuery('#mobility').removeClass('active-orange');
        jQuery('#mobility').addClass('mobility');
        jQuery('#rbe').removeClass('active-orange');
        jQuery('#rbe').addClass('rbe');
        jQuery('#fhcs').removeClass('active-orange');
        jQuery('#fhcs').addClass('fhcs');
            jQuery("#fund-info-default").hide();
            jQuery("#fund-info-cacm").hide();
            jQuery("#fund-info-fhcs").hide();
            jQuery("#fund-info-bls").hide();
            jQuery("#fund-info-acam").hide();
            jQuery("#fund-info-hcl").hide();
            jQuery("#fund-info-icc").hide();
            jQuery("#fund-info-akplan").hide();
            jQuery("#fund-info-mobility").hide();
            jQuery("#fund-info-rbe").hide();
            //jQuery("#fund-info-other").show();
            jQuery("#fund-info-other").slideDown("slow");
            jQuery(".fund-close").show();
            jQuery(".fund-close").click(function() {
                jQuery('#cacm').addClass('cacm');
                jQuery('#cacm').removeClass('active-orange');
                jQuery('#fhcs').addClass('fhcs');
                jQuery('#fhcs').removeClass('active-orange');
                jQuery('#bls').removeClass('active-orange');
                jQuery('#bls').addClass('bls');
                jQuery('#acam').removeClass('active-orange');
                jQuery('#acam').addClass('acam');
                jQuery('#hcl').removeClass('active-orange');
                jQuery('#hcl').addClass('hcl');
                jQuery('#icc').removeClass('active-orange');
                jQuery('#icc').addClass('icc');
                jQuery('#akplan').removeClass('active-orange');
                jQuery('#akplan').addClass('akplan');
                jQuery('#mobility').removeClass('active-orange');
                jQuery('#mobility').addClass('mobility');
                jQuery('#rbe').removeClass('active-orange');
                jQuery('#rbe').addClass('rbe');
                jQuery('#other').removeClass('active-orange');
                jQuery('#other').addClass('other');
                    jQuery("#fund-info-cacm").hide();
                    jQuery("#fund-info-fhcs").hide();
                    jQuery("#fund-info-bls").hide();
                    jQuery("#fund-info-acam").hide();
                    jQuery("#fund-info-hcl").hide();
                    jQuery("#fund-info-icc").hide();
                    jQuery("#fund-info-akplan").hide();
                    jQuery("#fund-info-mobility").hide();
                    jQuery("#fund-info-rbe").hide();
                    jQuery("#fund-info-other").hide();
                    //jQuery("#fund-info-default").show();
                    jQuery("#fund-info-default").slideDown("slow");
                    jQuery(".fund-close").hide();
});
jQuery.when(getotherSum()).
          then(function(obj1)
           {
          
           jQuery("#fund-info-other").html("<div class='fund-head'>"+"<h2 style='color:#FF7500;'>"+"Inactive Funds"+"</h2>"+"</div>"+
            "<div class='fund-desc'>"+"<p>"+"There are six inactive funds that continue to impact the Connect America Program’s funding totals through prior period adjustments."+"</p>"+"</div>"+
            "<div class='fundbox'>"+
            "<div class='total-fund'>"+"<h5>"+ "Total Funding" + "</h5>" + "<h1>"+"$"+ amountFormatter(obj1.value)+ "</h1>"+"</div>"+
            "<div class='other-table'>"+"<table class='other-fund-table'>"+"<tbody>"+
            "<tr>"+"<th class='other-fund-h'>"+"<h6>"+"Fund Name"+"</h6>"+"</th>"+"<th class='other-fund-h'>"+"<h6>"+"Start Date"+"</h6>"+"</th>"+"<th class ='other-fund-h'>"+"<h6>"+"End Date"+"</h6>"+"</th>"+"</tr>"+
                "<tr>"+"<td class='other-fund-d'>"+"<p class='margin0top'>"+"High Cost Model"+"</P>"+"</td>"+"<td class='other-fund-d'>"+"<p class='margin0top'>"+"Jan 1999"+"</p>"+"</td>"+
                "<td class='other-fund-d'>"+"<p class='margin0top'>"+"Dec 2011"+"</p>"+"</td>"+"</tr>"+
                "<tr>"+"<td class='other-fund-d'>"+"<p class='margin0top'>"+"Interstate Access Support"+"</p>"+"</td>"+"<td class='other-fund-d'>"+"<p class='margin0top'>"+"Jul 2000"+"</p>"+"</td>"+
                "<td class='other-fund-d'>"+"<p class='margin0top'>"+"Dec 2011"+"</p>"+"</td>"+"</tr>"+
                "<tr>"+"<td class='other-fund-d'>"+"<p class='margin0top'>"+"Interstate Common Line Support"+"</p>"+"</td>"+"<td class='other-fund-d'>"+"<p class='margin0top'>"+"Jul 2002"+"</p>"+"</td>"+
                "<td class='other-fund-d'>"+"<p class='margin0top'>"+"Dec 2016"+"</p>"+"</td>"+"</tr>"+
                "<tr>"+"<td class='other-fund-d'>"+"<p class='margin0top'>"+"Incremental Support"+"</p>"+"</td>"+"<td class='other-fund-d'>"+"<p class='margin0top'>"+"Jul 2012"+"</p>"+"</td>"+
                "<td class='other-fund-d'>"+"<p class='margin0top'>"+"Feb 2014"+"</p>"+"</td>"+"</tr>"+
                "<tr>"+"<td class='other-fund-d'>"+"<p class='margin0top'>"+"Local Switching Support"+"</p>"+"</td>"+"<td class='other-fund-d'>"+"<p class='margin0top'>"+"Jan 1998"+"</p>"+"</td>"+
                "<td class='other-fund-d'>"+"<p class='margin0top'>"+"Jun 2012"+"</p>"+"</td>"+"</tr>"+
                "<tr>"+"<td class='other-fund-d'>"+"<p class='margin0top'>"+"Safety Net Additive"+"</p>"+"</td>"+"<td class='other-fund-d'>"+"<p class='margin0top'>"+"Jan 1998"+"</p>"+"</td>"+
                "<td class='other-fund-d'>"+"<p class='margin0top'>"+"Jul 2004"+"</p>"+"</td>"+"</tr>"+
                "</tbody>"+"</table>"+"</div>" );
           jQuery("#fund-info-other").hide().slideDown("slow");
          });
})


function getotherSum(){
 var dfd = jQuery.Deferred();
            var obj = {};
            var dt = new Date();
            //jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT%20SUM(amount_disbursed)%20WHERE%20year=%20%272017%27%20AND%20fund_type%20IN%20(%27ICLS%27,%27HCM%27,%27IAS%27,%27LSS%27,%27SNA%27,%27IS%27)%20LIMIT%20999999999", function(data) {
            jQuery.getJSON("https://opendata.usac.org/resource/htrz-a8mz.json?&$query=SELECT SUM(amount_disbursed) WHERE year= '"+dt.getFullYear()+"' AND fund_type IN ('ICLS','HCM','IAS','LSS','SNA','IS') LIMIT 999999999", function(data) {
                jQuery.each(data, function(key,val) {
                    obj.key = key;
                    obj.value = val.SUM_amount_disbursed;
                });
                dfd.resolve(obj);
            });
return dfd.promise();
}


/* Code Ends : OTHER*/
