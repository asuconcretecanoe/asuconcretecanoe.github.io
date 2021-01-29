document.addEventListener("DOMContentLoaded", function(){
    reportPDF = document.getElementById("reportPDF");
    reportTitle = document.getElementById("reportTitle");
    year = sessionStorage.getItem("new_year");
    reportTitle.innerHTML = year + " Final Report";

    filePath = "canoe_reports/" + year + "_report.pdf";
    console.log(filePath);

    reportPDF.innerHTML = "<object data=" + filePath + " type=\"application/pdf\" width=\"100%\" height=\"800px\">" +
                            "<p>It appears you don't have a PDF plugin for this browser. You can <a href=" +
                            filePath + "click here to download the PDF file.</a></p></object>";
});
