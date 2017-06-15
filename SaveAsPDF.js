// 1 Dec 2016 Thillai
// JAVASCRIPT to convert word document to pdf
// Developed for HQT team
//  ActiveXObject - in script with no visual components: equalent to ActiveXtag
var fso = new ActiveXObject("Scripting.FileSystemObject");
// FileSystemObject used to return a textstream (read from or written to)
var docPath = WScript.Arguments(0);
// WScript.Argument stored in a variable
docPath = fso.GetAbsolutePathName(docPath);
// GetAbsolutepathname - a method to return path name
var pdfPath = docPath.replace(/\.docx[^.]*$/, ".pdf");
var objWord = null;

try
{
    WScript.Echo("Saving '" + docPath + "' as '" + pdfPath + "'...");

    objWord = new ActiveXObject("Word.Application");
    objWord.Visible = false;

    var objDoc = objWord.Documents.Open(docPath);

    var wdFormatPdf = 17;
    objDoc.SaveAs(pdfPath, wdFormatPdf);
    objDoc.Close();

    WScript.Echo("Done.");
}
finally
{
    if (objWord != null)
    {
        objWord.Quit();
    }
}
