var standalone = window.navigator.standalone,
userAgent = window.navigator.userAgent.toLowerCase(),
safari = /safari/.test(userAgent),
ios = /iphone|ipod|ipad/.test(userAgent);

if (ios) 
{
  if (!standalone && safari) 
  {
    //document.write("iOS Broswe - Safari?");
  } 
  else if (!standalone && !safari) 
  {
    //document.write("iOS Webview");
  };
} 

else 
{
  if (userAgent.includes('wv')) 
  {
    //
  } 
  else 
  {
    document.write("<div class='alert alert-block alert-danger fade in slideanim'><a class='close' data-dismiss='alert' href='#'>&times;</a><a href='https://play.google.com/store/apps/details?id=com.tv24x7'><font color='#000000'><b>TV 24x7 is best experienced in Android Application. Download application from Play Store.</b></font></a></div>");
  }
};