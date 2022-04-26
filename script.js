const pdfDownload = e => {
    
    e.preventDefault()
    var element = document.getElementById('pdf-view')

    var opt = {
        margin: 0,
        filename: 'file.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait'}
    }

    html2pdf().set(opt).from(element).save()
}
