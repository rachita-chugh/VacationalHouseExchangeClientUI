//var vheclientframework={};

if (typeof (vheclientframework) == 'undefined')
        vheclientframework = {};
	
if (typeof (vheclientframework.commonUtilities) == 'undefined')
	vheclientframework.commonUtilities = {
		
		encryptData : function(value){
               var encryptedText = CryptoJS.SHA256(value).toString(CryptoJS.enc.Hex);
			   return encryptedText;
            },
    };
NGCommonUtilities = vheclientframework.commonUtilities;


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