//var vheclientframework={};

if (typeof (vheclientframework) == 'undefined')
        vheclientframework = {};
	
if (typeof (vheclientframework.formValidation) == 'undefined')
	vheclientframework.formValidation = {
		
		validateEmailId : function(event){
                var email = event;
                var sequenceArray = $(event).attr('id').split('-');
                var sequence = sequenceArray[(sequenceArray.length)-1];
               // alert($(event).attr('id'));
                var id = $(event).attr('id')+'ErrorLabel';
                var filter = /^([a-zA-Z0-9_\.\-])+\@([a-zA-Z])(([a-zA-Z0-9\-])*\.)+([a-zA-Z]{2,4})+$/;
                if (email.value.trim() != '' && !filter.test(email.value)) {
                   bootbox.alert("Please enter a valid Email Id");
				   $(event).addClass('error');
				   $(event).css('border-bottom','2px solid red');
                    return false;
                }
                else{
                   $(event).css('border-bottom','');
                    $(event).removeClass('error');
                 }
            },
			
		maxLengthCheck: function(object){
				if (object.value.length > object.maxLength){
					 object.value = object.value.slice(0, object.maxLength);
					  $(object).addClass('error');
					  $(object).css('border-bottom','2px solid red');
					bootbox.alert("Maximum allowed length of "+object.getAttribute('labelValue') +"is : "+ object.maxLength);
				}else if(object.value.length < object.maxLength){
					$(object).addClass('error');
					$(object).css('border-bottom','2px solid red');
					bootbox.alert("Please enter a "+object.getAttribute('labelValue')+" of "+object.maxLength);	
				}else{
					$(object).css('border-bottom','');
					$(object).removeClass('error');
				}
			}
    };
VHEFormValidation = vheclientframework.formValidation;


//end naveen

/* 
 *  Global parameters
 * 
 * ---------------------------------Login------------------------------------
 * $rootScope.Username
 * $rootScope.Password
 * $rootScope.UserId
 * $rootScope.OUId
 * $rootScope.TokenId
 * $rootScope.AuthServerId
 * 
 * --------------------------------Template----------------------------------
 * $rootScope.TemplateName
 * $rootScope.TemplateVersionId
 * $rootScope.TemplateId
 * $rootScope.TemplateTaskId
 * $rootScope.IndexInfo
 * $rootScope.DoctypeInfo
 * $rootScope.TaskIdentifier
 * $rootScope.CreateTransaction
 * $rootScope.RuntimeRouteSelect
 * $rootScope.BusinessApplications
 * $rootScope.isTransactionOpen
 * $rootScope.CaptureParameters
 * 
 * --------------------------------------------Capture-------------------------------------------
 * 
 * $rootScope.dataModified
 * $rootScope.TransactionName
 * $rootScope.TransactionId
 * $rootScope.isTransactionOpen
 * $rootScope.TransactionName
 * $rootScope.TransactionId
 * $rootScope.SelectedDoctypeId
 * $rootScope.SelectedDoctypeName
 * 
 * --------------------------------------------My Queue--------------------------------------------
 * 
 * $rootScope.TransactionComments
 * $rootScope.RuntimeRouteSelect
 * $rootScope.TransactionPath
 * $rootScope.DocumentInfo
 * $rootScope.TemplateTaskInfo
 * 
 * -------------------------------------------Add Notes-----------------------------------------------
 * $rootScope.dashboard
 * $rootScope.CurrentComment
 * $rootScope.SelectedDocPreviewName
 * $rootScope.Database??????????????????????????
 * -------------------------------------------Status--------------------------------------------------
 * -------------------------------------------Capture View--------------------------------------------
 * $rootScope.Attachments
 * 
 * --------------------------------------------DocumentPreview------------------------------------------
 * 
 * -------------------------------------------Index--------------------------------------------------
 * $rootScope.BusinessApplications
 * 
 * --------------------------------------------Header-----------------------------------------------
 * 
 * --------------------------------------------Start Up----------------------------------------------
 */