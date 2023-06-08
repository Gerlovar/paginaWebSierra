import { React, useState, useEffect, useRef } from "react";
import "./_pdfViewer.scss";

import { Document, Page, Outline, pdfjs } from "react-pdf";

import pdfFile from "../../Assets/docs/Catalogo.pdf";//Catalogo.pdf
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function PdfViewer({ prop }) {

    const [numPages, setNumPages] = useState(null);
    const [bookmark, setBookmark] = useState();
    const [pageNumber, setPageNumber] = useState();
    const [catPage, setCatPage] = useState([]);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };
    //Colocar en width del componente Page como el porcentaje del que lo contiene
    useEffect(() => {
        setPageNumber(bookmark);

        for (let i = 0; i < 50/*numPages*/; i++) {
            catPage.push(<div className="pag"/>);
        }

    },[bookmark]);

    /*------------------------------------------*/
    return (
        <>
            <Document className={"rctPdf"} file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                <Outline className={"hide-outline"} onLoadSuccess={ (outline) => {
                        const outlines = outline.filter(item => item.title === prop);
                        outlines.map((item) => setBookmark(item.dest[0]+1));
                    }}
                />

                {bookmark && <div className='pagesContainer'
                    /*style={ bookmark < 5 ? { left: '0%' } : {left: '-200%'}}*/>
                    {
                        catPage.map((paginas, index) => (
                            <div className='d-flex' key={index}>
                                {paginas}
                            </div>
                        ))
                    }
                </div>}

                {<button /*onClick={previousPage}*/ className="prevPdf">
                    <i className="bi bi-arrow-left-circle-fill"></i>
                </button>}

                {
                <button /*onClick={nextPage}*/ className="nextPdf">
                    <i className="bi bi-arrow-right-circle-fill"></i>
                </button>}

            </Document>
        </>
  )
}
