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
    document.write("<div class='alert alert-block alert-danger fade in slideanim'><a class='close' data-dismiss='alert' href='#'>&times;</a>Download app to experience TV 24x7 at its best. <a href='https://play.google.com/store/apps/details?id=com.tv24x7'>Download Application</a></div>");
  } 
  else 
  {
    //document.write("Android Browser - Chrome?");
  }
};